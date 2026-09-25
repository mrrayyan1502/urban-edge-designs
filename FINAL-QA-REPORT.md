# Urban Edge Design — Final QA Report
Date: 2026-09-25

## What was improved in this final pass
- Fixed GA4 initialization: `initAnalytics()` now runs at application startup.
- Added consent-gated SPA page-view tracking so React route changes can be measured after analytics consent.
- Kept one consistent cookie key: `ued_cookie_consent`.
- Added a persistent Footer “Cookie Settings” control so users can reopen preferences.
- Added newsletter and contact form analytics events without sending personal data to GA4.
- Added per-page Open Graph image and Twitter image metadata.
- Added WebSite and Organization JSON-LD to the homepage.
- Added BreadcrumbList JSON-LD to article pages.
- Added 13 new focused editorial articles, bringing the total to 20.
- Added the previously missing `/ideas/small-bedroom-ideas` article.
- Removed inflated numeric headline claims where the article did not contain that many distinct items.
- Limited homepage “Trending” to the six most recently updated guides instead of rendering every article.
- Removed an unused legacy QuoteForm component from the old agency code path.
- Expanded sitemap to all current public indexable routes.

## Automated/static checks performed
- Article slugs: 20 total, 20 unique.
- Article IDs: 20 total, 20 unique.
- Related-article targets: 0 missing.
- Literal internal route audit: 0 unresolved routes.
- Sitemap XML: valid.
- Sitemap coverage: 42 expected public URLs, 42 present, 0 missing, 0 extra.
- Core category hubs: 7.
- Shop-the-Look detail pages: 3.
- Trust/policy pages: 10.

## Important build note
A clean `npm install` could not be completed inside this execution environment because dependency installation timed out and left a partial `node_modules` directory. The partial directory has been excluded from the final ZIP.

Before production deployment run locally or in CI:

```bash
npm install
npm run build
npm run lint
```

Then perform a mobile/desktop smoke test.

## Owner configuration still required
1. Set the real GA4 measurement ID in the deployment environment:
   `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
2. Verify GA4 Real-Time after accepting analytics consent.
3. Keep Search Console sitemap submitted at:
   `https://urban-edge-designs.com/sitemap.xml`
4. Configure a real newsletter provider when ready; the current UI deliberately uses a transparent email fallback.
5. Configure a real contact endpoint when ready; current contact flow opens a pre-filled email draft.
6. Replace style-reference retailer links with approved affiliate/deep links only after acceptance into the relevant programme.
7. Review and self-host/licence editorial imagery for long-term production use.
8. Add AdSense only after content quality, indexing and initial traffic are established.
