import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Phone } from "lucide-react";
import type { BotConfig } from "@/data/demos";
import { trackEvent } from "@/lib/analytics";

interface Msg {
  from: "bot" | "user";
  text: string;
}

type BookingStep =
  | { stage: "service" }
  | { stage: "option"; serviceIdx: number }
  | { stage: "name"; serviceIdx: number; optionIdx: number }
  | { stage: "datetime"; serviceIdx: number; optionIdx: number; name: string }
  | { stage: "contact"; serviceIdx: number; optionIdx: number; name: string; datetime: string }
  | {
      stage: "done";
      serviceIdx: number;
      optionIdx: number;
      name: string;
      datetime: string;
      contact: string;
    }
  | null;

/** Generate a direct services+prices list from the bot's own knowledge base. */
function servicesList(bot: BotConfig): string {
  const lines = bot.services.map(
    (s) => `· ${s.name} — ${s.options.map((o) => o.label).join(", ")}`
  );
  return `Here's what we offer:\n\n${lines.join("\n")}\n\nAsk me about any of these for more detail, or say "book" to make a booking enquiry.`;
}

export default function DemoChatbot({
  bot,
  phone,
  business,
  dark,
}: {
  bot: BotConfig;
  phone: string;
  business: string;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [booking, setBooking] = useState<BookingStep>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  useEffect(() => {
    if (open && msgs.length === 0) {
      trackEvent("chatbot_open", { demo: business });
      setTyping(true);
      setTimeout(() => {
        setMsgs([{ from: "bot", text: bot.greeting }]);
        setTyping(false);
      }, 900);
    }
  }, [open, msgs.length, bot.greeting, business]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, booking]);

  const push = (text: string, from: "bot" | "user", delay = 850, after?: () => void) => {
    if (from === "bot") {
      setTyping(true);
      setTimeout(() => {
        setMsgs((m) => [...m, { from, text }]);
        setTyping(false);
        after?.();
      }, delay);
    } else {
      setMsgs((m) => [...m, { from, text }]);
    }
  };

  const answer = (raw: string): { text: string; booking?: boolean } => {
    const q = raw.toLowerCase();

    // Direct "what do you offer" questions → answer from the knowledge base list
    if (
      /(what|which|list|tell me about).*(service|treatment|offer|do you do|menu)|^services$|^treatments$|^menu$/.test(q)
    ) {
      return { text: servicesList(bot) };
    }

    // Human contact request
    if (/(speak|talk).*(person|human|someone|staff)|human|real person|call you|phone you/.test(q)) {
      return {
        text: `Of course — you can reach the team directly on ${phone}. (This is a demonstration website, so the number shown is fictional.)\n\nIs there anything else I can help with in the meantime?`,
      };
    }

    // Intents from this bot's knowledge base
    for (const intent of bot.intents) {
      if (intent.keywords.some((k) => q.includes(k))) {
        return { text: intent.response, booking: intent.startsBooking };
      }
    }

    // Named-service match → describe + offer booking
    const svc = bot.services.find((s) => {
      const n = s.name.toLowerCase();
      const words = n.split(/[\s&]+/).filter((w) => w.length > 3);
      return q.includes(n) || words.some((w) => q.includes(w));
    });
    if (svc) {
      const opts = svc.options.map((o) => o.label).join("  ·  ");
      return {
        text: `${svc.name}: ${opts}.\n\nShall I start a booking enquiry for this? Just say "book".`,
      };
    }

    // Honest fallback — never invent information
    return {
      text: `I don't have that in my knowledge base for this demo, so I won't guess. I can reliably help with:\n\n· Services & prices\n· Opening hours\n· Location & contact\n· Booking enquiries\n\nWhat would you like to know?`,
    };
  };

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setInput("");
    push(text, "user");
    trackEvent("chatbot_message", { demo: business });

    // Mid-flow text steps (name / date-time / contact)
    if (booking?.stage === "name") {
      setBooking(null);
      push(`Lovely to meet you, ${text}! What date and time would suit you best? (e.g. "Saturday morning" or "14th June, 2pm")`, "bot", 800, () =>
        setBooking({ ...booking, stage: "datetime", name: text })
      );
      return;
    }
    if (booking?.stage === "datetime") {
      setBooking(null);
      push("Almost done! What's the best phone number or email to reach you on?", "bot", 800, () =>
        setBooking({ ...booking, stage: "contact", datetime: text })
      );
      return;
    }
    if (booking?.stage === "contact") {
      const { serviceIdx, optionIdx, name, datetime } = booking;
      setBooking(null);
      const s = bot.services[serviceIdx];
      const o = s.options[optionIdx];
      push(
        `Thank you, ${name}! Here's your booking enquiry summary:\n\n· Service: ${s.name}\n· Option: ${o.label}\n· Preferred time: ${datetime}\n· Contact: ${text}\n\nPlease note: this is a booking enquiry, not a confirmed booking — the team confirms every appointment personally. (And because this is a demonstration website, no real booking has been sent or saved.)`,
        "bot",
        1000,
        () => setBooking({ stage: "done", serviceIdx, optionIdx, name, datetime, contact: text })
      );
      return;
    }

    const res = answer(text);
    push(res.text, "bot", 900, () => {
      if (res.booking) setBooking({ stage: "service" });
    });
  };

  const pickService = (idx: number) => {
    const s = bot.services[idx];
    push(s.name, "user");
    trackEvent("chatbot_message", { demo: business });
    setBooking(null);
    push(`Great choice — ${s.name}. Which option would you like?`, "bot", 750, () =>
      setBooking({ stage: "option", serviceIdx: idx })
    );
  };

  const pickOption = (sIdx: number, oIdx: number) => {
    const o = bot.services[sIdx].options[oIdx];
    push(o.label, "user");
    setBooking(null);
    push("Perfect. May I take your first name?", "bot", 750, () => {
      setBooking({ stage: "name", serviceIdx: sIdx, optionIdx: oIdx });
      inputRef.current?.focus();
    });
  };

  const panelBg = dark ? "#0f2a21" : "#fffdf8";
  const panelBorder = dark ? "rgba(201,165,92,0.35)" : "rgba(28,26,21,0.15)";
  const textMain = dark ? "#f5efe4" : "#1c1a15";

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-5 z-50 rounded-full p-4 shadow-2xl ${
          open ? "hidden" : "flex"
        } items-center gap-2 min-h-[52px]`}
        style={{ background: bot.accent, color: bot.accentText }}
        aria-label={`Open ${business} chat assistant`}
        aria-expanded={open}
      >
        <MessageCircle size={24} aria-hidden="true" />
        <span className="hidden sm:inline font-medium text-sm pr-1">Chat with us</span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" aria-hidden="true" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-label={`${business} chat assistant`}
            className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-[400px] h-[560px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ background: panelBg, border: `1px solid ${panelBorder}`, color: textMain }}
          >
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ background: bot.accent, color: bot.accentText }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                >
                  <Sparkles size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display text-lg leading-tight">{bot.botName}</div>
                  <div className="text-[10px] tracking-widest uppercase opacity-90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full" aria-hidden="true" /> Demo AI · Replies instantly
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="opacity-70 hover:opacity-100 transition-opacity p-1"
                aria-label="Close chat"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="chat-scroll flex-1 overflow-y-auto px-4 py-4 space-y-3"
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed whitespace-pre-line"
                    style={
                      m.from === "user"
                        ? { background: bot.accent, color: bot.accentText, borderBottomRightRadius: 6 }
                        : {
                            background: dark ? "rgba(255,255,255,0.07)" : "rgba(28,26,21,0.05)",
                            border: `1px solid ${panelBorder}`,
                            borderBottomLeftRadius: 6,
                          }
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start" aria-label="Assistant is typing">
                  <div
                    className="rounded-2xl px-4 py-3 flex gap-1.5"
                    style={{
                      background: dark ? "rgba(255,255,255,0.07)" : "rgba(28,26,21,0.05)",
                      border: `1px solid ${panelBorder}`,
                      borderBottomLeftRadius: 6,
                    }}
                  >
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: bot.accent }} />
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: bot.accent }} />
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: bot.accent }} />
                  </div>
                </div>
              )}

              {booking?.stage === "service" && !typing && (
                <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Choose a service">
                  {bot.services.map((s, idx) => (
                    <button
                      key={s.name}
                      onClick={() => pickService(idx)}
                      className="text-xs px-3 py-2.5 rounded-full transition-all hover:opacity-80 min-h-[40px]"
                      style={{ border: `1px solid ${bot.accent}`, color: dark ? bot.accent : textMain }}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              )}

              {booking?.stage === "option" && !typing && (
                <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Choose an option">
                  {bot.services[booking.serviceIdx].options.map((o, idx) => (
                    <button
                      key={o.label}
                      onClick={() => pickOption(booking.serviceIdx, idx)}
                      className="text-xs px-3 py-2.5 rounded-full transition-all hover:opacity-80 min-h-[40px]"
                      style={{ border: `1px solid ${bot.accent}`, color: dark ? bot.accent : textMain }}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              )}

              {(booking?.stage === "name" || booking?.stage === "datetime" || booking?.stage === "contact") &&
                !typing && (
                  <p className="text-xs italic opacity-60">
                    {booking.stage === "name" && "Type your name below and press send…"}
                    {booking.stage === "datetime" && "Type your preferred date/time below…"}
                    {booking.stage === "contact" && "Type your phone or email below…"}
                  </p>
                )}

              {booking?.stage === "done" && !typing && (
                <div className="space-y-2">
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium mt-1 min-h-[48px]"
                    style={{ background: bot.accent, color: bot.accentText }}
                  >
                    <Phone size={15} aria-hidden="true" /> Speak to the team · {phone}
                  </a>
                  <p className="text-[11px] text-center italic opacity-55">
                    Demonstration only — no real booking has been sent or confirmed.
                  </p>
                </div>
              )}
            </div>

            {!booking && msgs.length <= 1 && !typing && (
              <div className="px-4 pb-2 flex flex-wrap gap-2" role="group" aria-label="Suggested questions">
                {bot.quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-[11px] px-3 py-2 rounded-full transition-all hover:opacity-80 min-h-[36px]"
                    style={{ border: `1px solid ${panelBorder}`, color: bot.accent }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              className="px-4 py-3 flex items-center gap-2"
              style={{ borderTop: `1px solid ${panelBorder}` }}
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <label htmlFor={`chat-input-${business}`} className="sr-only">
                Type your message
              </label>
              <input
                id={`chat-input-${business}`}
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{
                  background: dark ? "rgba(255,255,255,0.06)" : "rgba(28,26,21,0.05)",
                  border: `1px solid ${panelBorder}`,
                  color: textMain,
                }}
              />
              <button
                type="submit"
                className="rounded-full p-2.5 shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                style={{ background: bot.accent, color: bot.accentText }}
                aria-label="Send message"
              >
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
