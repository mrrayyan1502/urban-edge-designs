import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE_URL = "https://urban-edge-designs.com";

/** Sets document title + meta description + canonical + robots per page (client-side routing). */
export function usePageMeta(title: string, description: string, noindex = false) {
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

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", noindex ? "noindex, follow" : "index, follow");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`);
  }, [title, description, noindex, pathname]);
}

