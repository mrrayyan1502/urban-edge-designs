import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import CookieConsent from "@/components/CookieConsent";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import ArticlePage from "@/pages/ArticlePage";
import ShopTheLookPage from "@/pages/ShopTheLookPage";
import TrustPage from "@/pages/TrustPage";
import NotFound from "@/components/NotFound";
import { trackPageView } from "@/lib/analytics";

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => trackPageView(pathname, document.title), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f5ee] font-sans text-[#171611]">
      <ScrollManager />
      <Header onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/ideas/:slug" element={<ArticlePage />} />
          <Route path="/shop-the-look" element={<ShopTheLookPage />} />
          <Route path="/shop-the-look/:slug" element={<ShopTheLookPage />} />
          
          {/* Trust & Policy Pages */}
          <Route path="/:docSlug" element={<TrustPage />} />
          
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Modals & Notifications */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CookieConsent />
    </div>
  );
}
