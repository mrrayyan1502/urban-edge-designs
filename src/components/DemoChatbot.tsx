import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import type { BotConfig } from "@/data/demos";
import { trackEvent } from "@/lib/analytics";
import {
  EMPTY_ENQUIRY,
  normalize,
  isGreeting,
  isCancel,
  isRestart,
  isPlausibleTime,
  isClearlyInvalidTime,
  isValidContact,
  detectCorrection,
  servicesList,
  menuText,
  todayHours,
  type Enquiry,
  type Stage,
} from "./chatEngine";

interface Msg {
  from: "bot" | "user";
  text: string;
}

export default function DemoChatbot({
  bot,
  business,
  dark,
}: {
  bot: BotConfig;
  phone?: string;
  business: string;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [stage, setStage] = useState<Stage>("idle");
  const [data, setData] = useState<Enquiry>(EMPTY_ENQUIRY);
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
      }, 850);
    }
  }, [open, msgs.length, bot.greeting, business]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, stage]);

  const push = (text: string, from: "bot" | "user", delay = 800, after?: () => void) => {
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

  const reset = () => {
    setData(EMPTY_ENQUIRY);
    setStage("idle");
  };

  /* ---------- summary / review ---------- */

  const serviceName = (d: Enquiry) =>
    d.serviceIdx !== null ? bot.services[d.serviceIdx].name : "—";
  const optionLabel = (d: Enquiry) =>
    d.serviceIdx !== null && d.optionIdx !== null
      ? bot.services[d.serviceIdx].options[d.optionIdx].label
      : "—";

  const reviewText = (d: Enquiry) =>
    `Here's a summary of your demonstration ${bot.enquiryType} — please review before confirming:\n\n` +
    `· Name: ${d.name ?? "—"}\n` +
    `· ${bot.byGuests ? "Table type" : "Service"}: ${serviceName(d)}\n` +
    `· ${bot.byGuests ? "Guests / session" : "Option"}: ${optionLabel(d)}\n` +
    `· Preferred date & time: ${d.datetime ?? "—"}\n` +
    `· Fictional contact: ${d.contact ?? "—"}\n\n` +
    `Choose an option below.`;

  const finalText = () =>
    `Your demonstration ${bot.enquiryType} is complete. No real booking, appointment, reservation, call-out or message has been sent or saved.\n\n(This whole site is a fictional demonstration by Urban Edge Designs.)`;

  /* ---------- booking flow entry ---------- */

  const startBooking = () => {
    push(
      bot.byGuests
        ? `Lovely! What kind of table would you like a demonstration ${bot.enquiryType} for? Tap below or tell me.`
        : `Wonderful! Which one would you like a demonstration ${bot.enquiryType} for? Tap below or type its name.`,
      "bot",
      800,
      () => setStage("service")
    );
  };

  const pickService = (idx: number) => {
    const s = bot.services[idx];
    push(s.name, "user");
    trackEvent("chatbot_message", { demo: business });
    setData((d) => ({ ...d, serviceIdx: idx }));
    setStage("idle");
    push(
      bot.byGuests ? `Great — ${s.name}. How many guests, and which session?` : `Great choice — ${s.name}. Which option would you like?`,
      "bot",
      750,
      () => setStage("option")
    );
  };

  const pickOption = (sIdx: number, oIdx: number) => {
    const o = bot.services[sIdx].options[oIdx];
    push(o.label, "user");
    setData((d) => ({ ...d, serviceIdx: sIdx, optionIdx: oIdx }));
    setStage("idle");
    push("Perfect. May I take your first name?", "bot", 750, () => {
      setStage("name");
      inputRef.current?.focus();
    });
  };

  /* ---------- core message handler ---------- */

  const answer = (raw: string): { text: string; booking?: boolean } => {
    const q = normalize(raw);

    // "what time are you open today"
    if (/\b(today|now)\b/.test(q) && /(open|close|hour|time)/.test(q)) {
      const t = todayHours(bot);
      if (t) return { text: t };
    }

    // menu questions (restaurant) — must beat table-size matching
    if (bot.byGuests && /(menu|food|eat|dish|lunch|dinner|starter|dessert|drink|special|serve|today.*menu|menu.*today)/.test(q)) {
      if (/(vegetarian|vegan|veggie|\(v\)|plant)/.test(q)) {
        const veg = bot.menu?.find((s) => /vegetarian/i.test(s.title));
        return { text: `${veg ? `${veg.title}:\n${veg.items}\n\n` : ""}Say "book" to submit a demonstration ${bot.enquiryType}.` };
      }
      return { text: menuText(bot) };
    }

    // dietary / allergy (restaurant)
    if (bot.byGuests && /allerg/.test(q)) {
      return {
        text: "Please discuss allergies directly with the restaurant team before ordering. This fictional demonstration cannot guarantee allergen safety.",
      };
    }

    // direct services/treatments questions
    if (
      /(what|which|list|tell me about|show me).*(service|treatment|offer|do you do|price)|^(your )?services$|^treatments$|^prices?$|^price list$/.test(q) ||
      /what do you do|what.*(you )?offer/.test(q)
    ) {
      return { text: servicesList(bot) };
    }

    // human contact — never encourage calling fictional numbers
    if (/(speak|talk).*(person|human|someone|staff|manager|team|owner)|human|real person|call you|phone you|speak to someone|manager|owner|reception/.test(q)) {
      return {
        text: "This is a fictional demonstration, so the displayed business and contact details do not connect you to a real team. To discuss an Urban Edge Designs project, please use the enquiry options on the main Urban Edge Designs website.",
      };
    }

    // dental safety — never diagnose, prescribe or guarantee outcomes
    if (bot.isDental && /prescrib|antibiotic|medication|medicine|painkill|diagnos/.test(q)) {
      return {
        text: "I'm not able to diagnose, prescribe or give medical advice — in this fictional demonstration or anywhere else. A real dentist would always assess you in person first. If your symptoms are severe, in the UK contact NHS 111 for urgent advice, or call 999 in a life-threatening emergency. I can explain the fictional treatments and example prices, or help you submit a demonstration appointment enquiry.",
      };
    }
    if (bot.isDental && /guarantee|guaranteed|promise.*(work|result)|will it (work|hurt)|100%/.test(q)) {
      return {
        text: "No dental treatment outcome can ever be guaranteed — a real dentist would explain the likely results, risks and alternatives after examining you. In this fictional demonstration I can share example prices and how treatments usually work, or help you submit a demonstration appointment enquiry.",
      };
    }

    // intents from knowledge base
    for (const intent of bot.intents) {
      if (intent.keywords.some((k) => q.includes(k))) {
        return { text: intent.response, booking: intent.startsBooking };
      }
    }

    // named-service match
    const svcIdx = bot.services.findIndex((s) => {
      const n = s.name.toLowerCase();
      const words = n.split(/[\s&]+/).filter((w) => w.length > 3);
      return q.includes(n) || words.some((w) => q.includes(w));
    });
    if (svcIdx >= 0) {
      const svc = bot.services[svcIdx];
      const opts = svc.options.map((o) => o.label).join("  ·  ");
      return {
        text: `${svc.name}: ${opts}.\n\nSay "book" to submit a demonstration ${bot.enquiryType} for this.`,
      };
    }

    // honest, business-specific fallback — never invent
    return { text: bot.unknown };
  };

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    setInput("");
    push(text, "user");
    trackEvent("chatbot_message", { demo: business });

    const q = normalize(text);

    // 1) restart — clears temporary enquiry info
    if (isRestart(q)) {
      reset();
      push("No problem — I've cleared this demonstration enquiry and we'll start again. Nothing was sent or saved. What would you like to do?", "bot", 800);
      return;
    }

    // 2) cancel — clears + confirms nothing sent
    if (isCancel(q)) {
      reset();
      push("Cancelled. I've cleared all the temporary details — nothing was sent or saved. Is there anything else I can help with?", "bot", 800);
      return;
    }

    // 3) corrections — even mid-flow, update the right field.
    //    A correction only applies when its field is in play (already collected or
    //    currently being asked), so e.g. "I mean Friday" at the contact step is
    //    treated as a contact answer, not a time change.
    const corr = detectCorrection(q, text);
    const corrApplies =
      corr !== null &&
      data.serviceIdx !== null &&
      ((corr.field === "datetime" && (stage === "datetime" || (data.datetime !== null && stage !== "contact"))) ||
        (corr.field === "contact" && (stage === "contact" || data.contact !== null)) ||
        (corr.field === "name" && (stage === "name" || data.name !== null)) ||
        corr.field === "service");
    if (corr && corrApplies) {
      if (corr.field === "datetime" && corr.value) {
        const nd = { ...data, datetime: corr.value };
        setData(nd);
        if (stage === "datetime") {
          push(
            `Thanks — I've noted ${corr.value} as your preferred time.\n\nFor privacy, please use fictional contact details while testing this demonstration.\n\nWhat's the best fictional phone number or email to note?`,
            "bot",
            800,
            () => setStage("contact")
          );
        } else if (stage === "review") {
          push(`Thanks — I've updated your preferred time to ${corr.value}.\n\n${reviewText(nd)}`, "bot", 800, () => setStage("review"));
        } else {
          push(`Thanks — I've updated your preferred time to ${corr.value}.`, "bot", 800);
        }
        return;
      }
      if (corr.field === "name" && corr.value) {
        const nd = { ...data, name: corr.value };
        setData(nd);
        if (stage === "review") {
          push(`Got it — I've updated the name to ${corr.value}.\n\n${reviewText(nd)}`, "bot", 800, () => setStage("review"));
        } else {
          push(`Got it — I've updated the name to ${corr.value}.`, "bot", 800);
        }
        return;
      }
      if (corr.field === "contact") {
        if (corr.value && isValidContact(corr.value)) {
          const nd = { ...data, contact: corr.value };
          setData(nd);
          if (stage === "contact" || stage === "review") {
            push(`Thanks — I've updated the contact details.\n\n${reviewText(nd)}`, "bot", 800, () => setStage("review"));
          } else {
            push(`Thanks — I've updated the contact details.`, "bot", 800);
          }
        } else {
          push("Understood — what phone number or email would you like to use instead? (Fictional details, please.)", "bot", 800, () => setStage("contact"));
        }
        return;
      }
      // service correction → re-choose
      if (corr.field === "service") {
        push("Sure — which service would you like instead? Tap below.", "bot", 800, () => setStage("service"));
        return;
      }
    }

    // 4) stage-specific handling
    if (stage === "name") {
      setData((d) => ({ ...d, name: text }));
      setStage("idle");
      push(`Lovely to meet you, ${text}! What's your preferred date and time? (e.g. "Saturday at 2pm" or "tomorrow morning")`, "bot", 800, () => setStage("datetime"));
      return;
    }

    if (stage === "datetime") {
      if (isClearlyInvalidTime(q) || !isPlausibleTime(q)) {
        push("That time looks unclear. Please enter a valid preferred time, for example 'tomorrow at 9:00 am'.", "bot", 800, () => setStage("datetime"));
        return;
      }
      const nd = { ...data, datetime: text };
      setData(nd);
      setStage("idle");
      if (data.contact) {
        // came from "Change date/time" at review — return to the summary
        push(`Thanks — I've updated your preferred time to ${text}.\n\n${reviewText(nd)}`, "bot", 800, () => setStage("review"));
      } else {
        push("For privacy, please use fictional contact details while testing this demonstration.\n\nWhat's the best fictional phone number or email to note?", "bot", 800, () => setStage("contact"));
      }
      return;
    }

    if (stage === "contact") {
      if (!isValidContact(text)) {
        push("That doesn't look like a valid phone number or email address. Please enter fictional contact details for this demonstration enquiry.", "bot", 800, () => setStage("contact"));
        return;
      }
      const nd = { ...data, contact: text };
      setData(nd);
      setStage("idle");
      push(reviewText(nd), "bot", 900, () => setStage("review"));
      return;
    }

    if (stage === "review") {
      if (/^confirm|confirm demonstration|yes confirm|looks good|that's fine|go ahead/.test(q)) {
        push(finalText(), "bot", 900, () => reset());
        return;
      }
      if (/change (service|treatment|table)/.test(q)) {
        push("Sure — which one would you like instead?", "bot", 800, () => setStage("service"));
        return;
      }
      if (/change (date|time)/.test(q)) {
        push("What date and time would you prefer?", "bot", 800, () => setStage("datetime"));
        return;
      }
      if (/change contact/.test(q)) {
        push("What fictional contact details would you like to use?", "bot", 800, () => setStage("contact"));
        return;
      }
      // fall through: re-show review
      push("Please choose one of the options below to continue.", "bot", 750);
      return;
    }

    // 5) greeting — friendly, not a fallback
    if (isGreeting(q)) {
      push(
        `Hello! Great to hear from you. I can help with ${bot.byGuests ? "the menu, dietary info, opening hours or a table-booking enquiry" : "services, prices, opening hours, location or an enquiry"}. What would you like?`,
        "bot",
        800
      );
      return;
    }

    // 6) urgent dental/medical words → answer (with NHS guidance) + booking,
    //    before generic booking so the safety message is shown first
    const urgent = bot.isDental && /pain|toothache|swelling|swollen|bleed|abscess|broken|chipped|hurt|ache|killing|agony|excruciating|unbearable|severe|knocked out|infection/.test(q);

    // 7) booking intent keywords
    if (!urgent && /\bbook|booking|appointment|reserve|reservation|schedule|call.?out|quote|visit|table for|arrange/.test(q)) {
      startBooking();
      return;
    }

    // 8) general Q&A
    const res = answer(text);
    push(res.text, "bot", 900, () => {
      if (res.booking) setStage("service");
    });
  };

  /* ---------- UI ---------- */

  const panelBg = dark ? "#0f2a21" : "#fffdf8";
  const panelBorder = dark ? "rgba(201,165,92,0.35)" : "rgba(28,26,21,0.15)";
  const textMain = dark ? "#f5efe4" : "#1c1a15";
  const inFlow = stage !== "idle";

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-5 z-50 rounded-full p-4 shadow-2xl ${open ? "hidden" : "flex"} items-center gap-2 min-h-[52px]`}
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
            <div className="px-5 py-4 flex items-center justify-between" style={{ background: bot.accent, color: bot.accentText }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.25)" }}>
                  <Sparkles size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display text-lg leading-tight">{bot.botName}</div>
                  <div className="text-[10px] tracking-widest uppercase opacity-90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full" aria-hidden="true" /> Demo AI · Replies instantly
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="opacity-70 hover:opacity-100 transition-opacity p-1" aria-label="Close chat">
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div ref={scrollRef} className="chat-scroll flex-1 overflow-y-auto px-4 py-4 space-y-3" role="log" aria-live="polite" aria-label="Chat messages">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed whitespace-pre-line"
                    style={
                      m.from === "user"
                        ? { background: bot.accent, color: bot.accentText, borderBottomRightRadius: 6 }
                        : { background: dark ? "rgba(255,255,255,0.07)" : "rgba(28,26,21,0.05)", border: `1px solid ${panelBorder}`, borderBottomLeftRadius: 6 }
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start" aria-label="Assistant is typing">
                  <div className="rounded-2xl px-4 py-3 flex gap-1.5" style={{ background: dark ? "rgba(255,255,255,0.07)" : "rgba(28,26,21,0.05)", border: `1px solid ${panelBorder}`, borderBottomLeftRadius: 6 }}>
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: bot.accent }} />
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: bot.accent }} />
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: bot.accent }} />
                  </div>
                </div>
              )}

              {stage === "service" && !typing && (
                <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Choose a service">
                  {bot.services.map((s, idx) => (
                    <button key={s.name} onClick={() => pickService(idx)} className="text-xs px-3 py-2.5 rounded-full transition-all hover:opacity-80 min-h-[40px]" style={{ border: `1px solid ${bot.accent}`, color: dark ? bot.accent : textMain }}>
                      {s.name}
                    </button>
                  ))}
                </div>
              )}

              {stage === "option" && data.serviceIdx !== null && !typing && (
                <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Choose an option">
                  {bot.services[data.serviceIdx].options.map((o, idx) => (
                    <button key={o.label} onClick={() => pickOption(data.serviceIdx!, idx)} className="text-xs px-3 py-2.5 rounded-full transition-all hover:opacity-80 min-h-[40px]" style={{ border: `1px solid ${bot.accent}`, color: dark ? bot.accent : textMain }}>
                      {o.label}
                    </button>
                  ))}
                </div>
              )}

              {(stage === "name" || stage === "datetime" || stage === "contact") && !typing && (
                <p className="text-xs italic opacity-60">
                  {stage === "name" && "Type your first name below and press send…"}
                  {stage === "datetime" && "Type your preferred date & time below…"}
                  {stage === "contact" && "Type a fictional phone or email below…"}
                </p>
              )}

              {stage === "review" && !typing && (
                <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Review enquiry">
                  <button onClick={() => send("confirm demonstration enquiry")} className="text-xs px-3 py-2.5 rounded-full font-medium min-h-[40px]" style={{ background: bot.accent, color: bot.accentText }}>
                    Confirm demonstration enquiry
                  </button>
                  <button onClick={() => send("change service")} className="text-xs px-3 py-2.5 rounded-full min-h-[40px]" style={{ border: `1px solid ${bot.accent}`, color: dark ? bot.accent : textMain }}>
                    Change {bot.byGuests ? "table" : "service"}
                  </button>
                  <button onClick={() => send("change time")} className="text-xs px-3 py-2.5 rounded-full min-h-[40px]" style={{ border: `1px solid ${bot.accent}`, color: dark ? bot.accent : textMain }}>
                    Change date/time
                  </button>
                  <button onClick={() => send("change contact")} className="text-xs px-3 py-2.5 rounded-full min-h-[40px]" style={{ border: `1px solid ${bot.accent}`, color: dark ? bot.accent : textMain }}>
                    Change contact
                  </button>
                  <button onClick={() => send("start again")} className="text-xs px-3 py-2.5 rounded-full min-h-[40px]" style={{ border: `1px solid ${panelBorder}`, color: textMain }}>
                    Start again
                  </button>
                  <button onClick={() => send("cancel")} className="text-xs px-3 py-2.5 rounded-full min-h-[40px]" style={{ border: `1px solid ${panelBorder}`, color: textMain }}>
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {!inFlow && msgs.length <= 1 && !typing && (
              <div className="px-4 pb-2 flex flex-wrap gap-2" role="group" aria-label="Suggested questions">
                {bot.quickReplies.map((q) => (
                  <button key={q} onClick={() => send(q)} className="text-[11px] px-3 py-2 rounded-full transition-all hover:opacity-80 min-h-[36px]" style={{ border: `1px solid ${panelBorder}`, color: bot.accent }}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form className="px-4 py-3 flex items-center gap-2" style={{ borderTop: `1px solid ${panelBorder}` }} onSubmit={(e) => { e.preventDefault(); send(); }}>
              <label htmlFor={`chat-input-${business}`} className="sr-only">Type your message</label>
              <input
                id={`chat-input-${business}`}
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={{ background: dark ? "rgba(255,255,255,0.06)" : "rgba(28,26,21,0.05)", border: `1px solid ${panelBorder}`, color: textMain }}
              />
              <button type="submit" className="rounded-full p-2.5 shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center" style={{ background: bot.accent, color: bot.accentText }} aria-label="Send message">
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
