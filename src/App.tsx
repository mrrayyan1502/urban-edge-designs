import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { DEMOS, DEMO_ROUTES } from "@/data/demos";
import AgencyHome from "@/agency/AgencyHome";
import DemoSite from "@/components/DemoSite";
import LegalPage from "@/legal/LegalPage";
import NotFound from "@/components/NotFound";
import { LEGAL_DOCS } from "@/legal/legalContent";
import CookieConsent from "@/components/CookieConsent";
import { initAnalytics } from "@/lib/analytics";

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    initAnalytics();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<AgencyHome />} />
        {DEMOS.map((d) => (
          <Route key={d.slug} path={DEMO_ROUTES[d.slug]} element={<DemoSite demo={d} />} />
        ))}
        {LEGAL_DOCS.map((doc) => (
          <Route key={doc.slug} path={`/${doc.slug}`} element={<LegalPage doc={doc} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
    </>
  );
}
