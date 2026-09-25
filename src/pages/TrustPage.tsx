import { useState } from "react";
import { useParams, Link } from "react-router";
import { ShieldCheck, Send, CheckCircle2, ChevronRight } from "lucide-react";
import { TRUST_DOCS } from "@/data/trustData";
import { usePageMeta } from "@/lib/usePageMeta";
import NotFound from "@/components/NotFound";
import { trackEvent } from "@/lib/analytics";

export default function TrustPage() {
  const { docSlug } = useParams<{ docSlug: string }>();
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "General", message: "" });

  const doc = docSlug ? TRUST_DOCS[docSlug] : TRUST_DOCS["about-us"];

  usePageMeta(
    doc ? `${doc.title} | Urban Edge Design` : "Page Not Found | Urban Edge Design",
    doc ? doc.summary : "The requested page could not be found.",
    !doc
  );

  if (!doc) return <NotFound />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.topic}] Urban Edge Design enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    trackEvent("contact_form_submit", { method: "email_fallback", topic: formData.topic });
    window.location.href = `mailto:contact@urban-edge-designs.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <div className="bg-[#f8f5ee] font-sans text-[#171611] min-h-screen pb-24">
      {/* Breadcrumb Header */}
      <div className="bg-[#ebe3d5]/50 border-b border-[#ebe3d5] py-3 text-xs text-[#171611]/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#8b6f47]">Home</Link>
          <ChevronRight size={12} />
          <span className="text-[#171611] font-semibold">{doc.title}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl p-8 sm:p-12 shadow-sm">
          {/* Header */}
          <div className="border-b border-[#ebe3d5] pb-8 mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8b6f47] font-semibold flex items-center gap-1 mb-2">
              <ShieldCheck size={16} /> Trust & Transparency
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#171611]">
              {doc.title}
            </h1>
            <p className="mt-3 text-sm text-[#171611]/75 font-light leading-relaxed">
              {doc.summary}
            </p>
            <p className="text-[11px] text-[#171611]/40 mt-4">
              Last Updated: {doc.lastUpdated}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-sm text-[#171611]/85 leading-relaxed font-light">
            {doc.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#171611]">
                  {sec.heading}
                </h3>
                <p>{sec.text}</p>
              </div>
            ))}
          </div>

          {/* Contact Interactive Form (Only shown on Contact page) */}
          {doc.slug === "contact" && (
            <div className="mt-12 pt-8 border-t border-[#ebe3d5]">
              <h3 className="font-serif text-2xl font-bold text-[#171611] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#171611]/70 mb-6 font-light">
                Have a press release, product review sample, or content correction? Drop us a note.
              </p>

              {formSent ? (
                <div className="bg-[#8b6f47]/10 border border-[#8b6f47] rounded-xl p-6 text-center text-xs">
                  <CheckCircle2 size={24} className="text-[#8b6f47] mx-auto mb-2" />
                  <p className="font-serif text-base font-bold text-[#171611]">Email draft opened</p>
                  <p className="text-[#171611]/70 mt-1">Your email app should open with the message pre-filled. Send it from there to contact Urban Edge Design.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171611]/80 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-[#ebe3d5]/30 border border-[#ded4c2] text-xs text-[#171611] focus:outline-none focus:border-[#8b6f47]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#171611]/80 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#ebe3d5]/30 border border-[#ded4c2] text-xs text-[#171611] focus:outline-none focus:border-[#8b6f47]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#171611]/80 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#ebe3d5]/30 border border-[#ded4c2] text-xs text-[#171611] focus:outline-none focus:border-[#8b6f47]"
                    >
                      <option value="General">General Editorial Inquiry</option>
                      <option value="Affiliate">Brand / Affiliate Partnership</option>
                      <option value="Correction">Content Correction Request</option>
                      <option value="Press">Press & PR Release</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#171611]/80 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message details..."
                      className="w-full px-4 py-3 rounded-xl bg-[#ebe3d5]/30 border border-[#ded4c2] text-xs text-[#171611] focus:outline-none focus:border-[#8b6f47]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-full bg-[#171611] text-[#f8f5ee] text-xs font-semibold hover:bg-[#8b6f47] transition-colors flex items-center gap-2"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
