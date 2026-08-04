import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { getConsent, setConsent, type ConsentChoice } from "@/lib/analytics";

export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(() => getConsent());
  const [showSettings, setShowSettings] = useState(false);

  if (choice !== null) return null;

  const decide = (c: Exclude<ConsentChoice, null>) => {
    setConsent(c);
    setChoice(c);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        role="dialog"
        aria-label="Cookie consent"
        className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[60] rounded-2xl bg-[#122e24] text-[#f6f1e7] shadow-2xl border border-[#f6f1e7]/15 p-5"
      >
        <div className="flex items-start gap-3">
          <Cookie size={22} className="text-[#d9734a] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-light leading-relaxed">
              We use essential cookies to make this site work, and optional analytics
              cookies to understand how visitors use it. Analytics only load with your
              consent. See our{" "}
              <Link to="/cookie-policy" className="underline underline-offset-2 text-[#d9734a] hover:opacity-80">
                Cookie Policy
              </Link>
              .
            </p>

            {showSettings && (
              <p className="mt-3 text-xs text-[#f6f1e7]/60 font-light leading-relaxed">
                <strong className="text-[#f6f1e7]">Essential cookies</strong> — always on;
                required for the site to function (including remembering this choice).
                <br />
                <strong className="text-[#f6f1e7]">Analytics cookies</strong> — optional;
                help us improve the site. No personal details are tracked.
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => decide("accepted")}
                className="btn-terra px-4 py-2 rounded-full text-xs font-medium tracking-wide"
              >
                Accept Analytics
              </button>
              <button
                onClick={() => decide("rejected")}
                className="px-4 py-2 rounded-full text-xs font-medium tracking-wide border border-[#f6f1e7]/30 hover:bg-[#f6f1e7]/10 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowSettings((s) => !s)}
                className="px-4 py-2 rounded-full text-xs tracking-wide text-[#f6f1e7]/70 hover:text-[#f6f1e7] underline underline-offset-2"
                aria-expanded={showSettings}
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
