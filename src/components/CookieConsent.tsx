import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Cookie, X } from "lucide-react";
import { CONSENT_KEY, setConsent } from "@/lib/analytics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setConsent("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    setConsent("rejected");
    setVisible(false);
  };

  const handleSavePreferences = () => {
    setConsent(analyticsAllowed ? "accepted" : "essential_only");
    setVisible(false);
    setShowPreferences(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-slideUp font-sans">
      <div className="bg-[#1c1a15] text-[#faf7f2] border border-[#3b372d] rounded-2xl p-5 shadow-2xl">
        <div className="flex items-start gap-3">
          <Cookie className="text-[#a8b8aa] shrink-0 mt-0.5" size={22} />
          <div className="flex-1">
            <h4 className="font-serif text-base font-semibold">Privacy & Cookies</h4>
            <p className="text-xs text-[#faf7f2]/70 mt-1 leading-relaxed">
              We use essential cookies and optional analytics to improve your small space browsing experience and credit affiliate partners. Read our{" "}
              <Link to="/cookie-policy" className="underline text-[#a8b8aa]">
                Cookie Policy
              </Link>.
            </p>
          </div>
          <button
            onClick={handleReject}
            className="text-[#faf7f2]/50 hover:text-[#faf7f2] p-1"
            aria-label="Close cookie banner"
          >
            <X size={18} />
          </button>
        </div>

        {showPreferences && (
          <div className="mt-4 pt-3 border-t border-[#2d2a23] space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span>Essential Functional Cookies</span>
              <span className="text-[10px] text-[#a8b8aa] uppercase font-bold">Always Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Analytics & Affiliate Attribution</span>
              <input
                type="checkbox"
                checked={analyticsAllowed}
                onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                className="accent-[#4a5d4e]"
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-end gap-2 text-xs">
          {showPreferences ? (
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 rounded-full bg-[#4a5d4e] font-semibold text-[#faf7f2] hover:bg-[#5b7260]"
            >
              Save Preferences
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-3 py-1.5 rounded-full border border-[#3b372d] text-[#faf7f2]/70 hover:text-[#faf7f2]"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleReject}
                className="px-3 py-1.5 rounded-full border border-[#3b372d] text-[#faf7f2]/70 hover:text-[#faf7f2]"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-full bg-[#4a5d4e] font-semibold text-[#faf7f2] hover:bg-[#5b7260]"
              >
                Accept All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
