import { useState } from "react";
import { useParams, Link } from "react-router";
import { ShieldCheck, Mail, Send, CheckCircle2, ChevronRight } from "lucide-react";
import { TRUST_DOCS } from "@/data/trustData";
import { usePageMeta } from "@/lib/usePageMeta";

export default function TrustPage() {
  const { docSlug } = useParams<{ docSlug: string }>();
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "General", message: "" });

  const doc = docSlug ? TRUST_DOCS[docSlug] || TRUST_DOCS["about-us"] : TRUST_DOCS["about-us"];

  usePageMeta(
    `${doc.title} | Urban Edge Design`,
    doc.summary
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="bg-[#faf7f2] font-sans text-[#1c1a15] min-h-screen pb-24">
      {/* Breadcrumb Header */}
      <div className="bg-[#eee8dc]/50 border-b border-[#eee8dc] py-3 text-xs text-[#1c1a15]/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#4a5d4e]">Home</Link>
          <ChevronRight size={12} />
          <span className="text-[#1c1a15] font-semibold">{doc.title}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#faf7f2] border border-[#e5dfd3] rounded-2xl p-8 sm:p-12 shadow-sm">
          {/* Header */}
          <div className="border-b border-[#eee8dc] pb-8 mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#4a5d4e] font-semibold flex items-center gap-1 mb-2">
              <ShieldCheck size={16} /> Trust & Transparency
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1a15]">
              {doc.title}
            </h1>
            <p className="mt-3 text-sm text-[#1c1a15]/75 font-light leading-relaxed">
              {doc.summary}
            </p>
            <p className="text-[11px] text-[#1c1a15]/40 mt-4">
              Last Updated: {doc.lastUpdated}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 text-sm text-[#1c1a15]/85 leading-relaxed font-light">
            {doc.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#1c1a15]">
                  {sec.heading}
                </h3>
                <p>{sec.text}</p>
              </div>
            ))}
          </div>

          {/* Contact Interactive Form (Only shown on Contact page) */}
          {doc.slug === "contact" && (
            <div className="mt-12 pt-8 border-t border-[#eee8dc]">
              <h3 className="font-serif text-2xl font-bold text-[#1c1a15] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#1c1a15]/70 mb-6 font-light">
                Have a press release, product review sample, or content correction? Drop us a note.
              </p>

              {formSent ? (
                <div className="bg-[#4a5d4e]/10 border border-[#4a5d4e] rounded-xl p-6 text-center text-xs">
                  <CheckCircle2 size={24} className="text-[#4a5d4e] mx-auto mb-2" />
                  <p className="font-serif text-base font-bold text-[#1c1a15]">Message Sent!</p>
                  <p className="text-[#1c1a15]/70 mt-1">Thank you for contacting Urban Edge Design. Our editorial team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1c1a15]/80 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Rostova"
                        className="w-full px-4 py-3 rounded-xl bg-[#eee8dc]/30 border border-[#e5dfd3] text-xs text-[#1c1a15] focus:outline-none focus:border-[#4a5d4e]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1c1a15]/80 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#eee8dc]/30 border border-[#e5dfd3] text-xs text-[#1c1a15] focus:outline-none focus:border-[#4a5d4e]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1c1a15]/80 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#eee8dc]/30 border border-[#e5dfd3] text-xs text-[#1c1a15] focus:outline-none focus:border-[#4a5d4e]"
                    >
                      <option value="General">General Editorial Inquiry</option>
                      <option value="Affiliate">Brand / Affiliate Partnership</option>
                      <option value="Correction">Content Correction Request</option>
                      <option value="Press">Press & PR Release</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1c1a15]/80 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message details..."
                      className="w-full px-4 py-3 rounded-xl bg-[#eee8dc]/30 border border-[#e5dfd3] text-xs text-[#1c1a15] focus:outline-none focus:border-[#4a5d4e]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-full bg-[#1c1a15] text-[#faf7f2] text-xs font-semibold hover:bg-[#4a5d4e] transition-colors flex items-center gap-2"
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
