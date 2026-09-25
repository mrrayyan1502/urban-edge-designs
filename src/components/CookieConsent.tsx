import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("ued_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ued_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("ued_cookie_consent", "rejected");
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "ued_cookie_consent",
      analyticsAllowed ? "accepted" : "essential_only"
    );
    setVisible(false);
    setShowPreferences(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-slideUp font-sans">
      <div className="bg-[#171611] text-[#f8f5ee] border border-[#3a342a] rounded-2xl p-5 shadow-2xl">
        <div className="flex items-start gap-3">
          <Cookie className="text-[#c8ad7f] shrink-0 mt-0.5" size={22} />
          <div className="flex-1">
            <h4 className="font-serif text-base font-semibold">Privacy & Cookies</h4>
            <p className="text-xs text-[#f8f5ee]/70 mt-1 leading-relaxed">
              We use essential cookies and anonymous analytics to improve your small space browsing experience and credit affiliate partners. Read our{" "}
              <Link to="/cookie-policy" className="underline text-[#c8ad7f]">
                Cookie Policy
              </Link>.
            </p>
          </div>
          <button
            onClick={handleReject}
            className="text-[#f8f5ee]/50 hover:text-[#f8f5ee] p-1"
            aria-label="Close cookie banner"
          >
            <X size={18} />
          </button>
        </div>

        {showPreferences && (
          <div className="mt-4 pt-3 border-t border-[#2c2923] space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span>Essential Functional Cookies</span>
              <span className="text-[10px] text-[#c8ad7f] uppercase font-bold">Always Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Analytics & Affiliate Attribution</span>
              <input
                type="checkbox"
                checked={analyticsAllowed}
                onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                className="accent-[#8b6f47]"
              />
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-end gap-2 text-xs">
          {showPreferences ? (
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 rounded-full bg-[#8b6f47] font-semibold text-[#f8f5ee] hover:bg-[#a18358]"
            >
              Save Preferences
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-3 py-1.5 rounded-full border border-[#3a342a] text-[#f8f5ee]/70 hover:text-[#f8f5ee]"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleReject}
                className="px-3 py-1.5 rounded-full border border-[#3a342a] text-[#f8f5ee]/70 hover:text-[#f8f5ee]"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 rounded-full bg-[#8b6f47] font-semibold text-[#f8f5ee] hover:bg-[#a18358]"
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
