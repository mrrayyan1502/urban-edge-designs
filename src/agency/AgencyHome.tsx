import AgencyNav from "./AgencyNav";
import AgencyHero from "./AgencyHero";
import DemoGallery from "./DemoGallery";
import AgencyServices from "./AgencyServices";
import AgencyPricing from "./AgencyPricing";
import AgencyProcess from "./AgencyProcess";
import AgencyFaq from "./AgencyFaq";
import AgencyFooter from "./AgencyFooter";
import QuoteForm from "@/components/QuoteForm";
import { usePageMeta } from "@/lib/usePageMeta";

export default function AgencyHome() {
  usePageMeta(
    "Web Design & AI Chatbots for Small Businesses | Urban Edge Designs",
    "Professional websites and AI chatbots for UK small businesses. Explore live industry demos, transparent packages and request a free personalised demo."
  );

  return (
    <div className="min-h-screen bg-[#f6f1e7]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[70] focus:top-2 focus:left-2 focus:bg-[#c05a2e] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <AgencyNav />
      <main>
        <AgencyHero />
        <DemoGallery />
        <AgencyServices />
        <AgencyPricing />
        <AgencyProcess />
        <AgencyFaq />
        <QuoteForm />
      </main>
      <AgencyFooter />
    </div>
  );
}
