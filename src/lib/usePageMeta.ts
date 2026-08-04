import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE_URL = "https://urban-edge-designs.com";

/** Sets document title + meta description + canonical per page (client-side routing). */
export function usePageMeta(title: string, description: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${pathname === "/" ? "/" : pathname}`);
  }, [title, description, pathname]);
}
