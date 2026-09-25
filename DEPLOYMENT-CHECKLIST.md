# Urban Edge Design — Deployment Checklist

## Completed in this revision
- Luxury editorial colour system: ivory, charcoal and champagne/brass accents.
- Consistent Urban Edge Design branding across the active experience.
- Correct 404 behaviour for invalid category, article, Shop the Look and trust-policy URLs.
- Working category topic filters, including header topic links using query parameters.
- Search modal accessibility improvements: Escape key, backdrop close, focus handling and body scroll lock.
- Cookie Policy added and linked correctly.
- Public ad placeholders hidden unless `VITE_SHOW_AD_PLACEHOLDERS=true`.
- Dynamic title, description, canonical, robots, Open Graph and Twitter metadata updates.
- Sitemap coverage for all active categories, articles, Shop the Look pages and trust pages.
- Removed unsupported fictional individual author credentials; editorial content now uses transparent team bylines.
- Replaced misleading exact product/retailer claims with style-reference browsing links where live affiliate data is not configured.
- Affiliate outbound links use `sponsored nofollow` plus safe new-tab attributes.
- Contact and newsletter controls no longer pretend to submit data to a backend; they open a pre-filled email draft instead.
- Starter articles added for previously empty Bathroom, Storage and Decor categories.
- Final content expansion: 20 total editorial articles across focused Living Room, Bedroom, Kitchen, Small Apartments, Bathroom, Storage and Decor clusters.
- GA4 startup initialization and consent-gated SPA page-view tracking added.
- Footer Cookie Settings control added so consent preferences can be reopened.
- Article social metadata now uses each article hero image; article breadcrumb schema and homepage WebSite/Organization schema added.

## Configure before monetisation
1. Create and verify real inboxes for `contact@urban-edge-designs.com` (or replace with your preferred address).
2. Replace Amazon search URLs with your approved affiliate/deep links after joining the relevant programme.
3. Add a real newsletter provider (for example MailerLite, Brevo or ConvertKit) and replace the email-draft fallback with its form/API integration.
4. Add Google Analytics / Search Console only after configuring consent behaviour appropriate to your market.
5. Add AdSense only after sufficient original content exists. Ad placeholders remain hidden by default.
6. Review every third-party image and product image for publication rights and long-term availability. For best performance, self-host approved editorial images.
7. Replace `/og-image.png` with a final 1200×630 brand social image if desired.

## Suggested content threshold before pushing hard on SEO/AdSense
The site now contains 20 editorial articles and a useful starter cluster in every core category. Continue expanding only from real search demand and Search Console evidence; avoid mass-producing thin pages. The next milestone should be 30–40 genuinely useful articles, with especially strong clusters around Living Room, Bedroom, Kitchen and Small Apartments.

## Technical QA performed
- TypeScript/TSX syntax transpilation diagnostics: passed across `src`.
- Internal literal route audit: passed for active UI.
- Dynamic related-article and related-Shop-the-Look slug audit: no missing targets.
- Sitemap audit: all active content routes represented.
- Interactive `<button>` audit: no active buttons without an `onClick` or submit action.

## Important limitation
A full browser-level production build was not executed in this environment because the project dependencies were not installed locally and `npm install` could not complete within the available execution window. Before deployment, run:

```bash
npm install
npm run build
npm run lint
npm run dev
```

Then manually click-test at desktop and mobile widths before publishing.
