# Urban Edge Design — Master Automation & Editorial Calendar

This file maintains the persistent schedule for content updates, Pinterest scheduling, and Search Console milestones for `https://urban-edge-designs.com`.

---

## 1. Weekly Editorial Schedule (Every Monday at 10:00 AM)
- **Task:** Publish 2 new high-intent, long-tail small-space interior design guides.
- **Standards:**
  - 650–800+ words per guide.
  - AEO / AI quick answer box.
  - Clearance & dimension specs (e.g. 75cm walkway).
  - Comparison tables & FAQs.
  - Amazon affiliate links with tag `urbanedge0c-20` and `rel="nofollow sponsored noopener noreferrer"`.
  - Update `public/sitemap.xml` and `public/rss.xml`.
  - Run build verification (`npm run build`) and git push to `origin main`.

### Upcoming Monday Schedule:
- **Monday, 19 October 2026:**
  1. *Narrow Living Room Layout Ideas with TV and Dining*
  2. *Floating Nightstand Ideas for Small Bedrooms*
- **Monday, 26 October 2026:**
  1. *Under-Bed Storage Solutions for Compact Bedrooms*
  2. *Rental-Friendly Removable Kitchen Backsplash & Storage*
- **Monday, 2 November 2026:**
  1. *Small Corner Desk Ideas for Home Office in Bedrooms*
  2. *Vertical Wall Storage Solutions for Small Apartments*
- **Monday, 9 November 2026:**
  1. *Small Bathroom Vanity Storage Organization*
  2. *Studio Apartment Murphy Bed & Daybed Styling Ideas*

---

## 2. Pinterest 30-Day Bulk Schedule Engine
- **Daily Times:**
  - Pin 1: 18:00 (6:00 PM UK time)
  - Pin 2: 20:05 (8:05 PM UK time)
- **Active Cycle:** 13 October 2026 to 12 November 2026 (60 Unique Pins scheduled in cloud).
- **Next Batch Due Date:** **9 November 2026** (Day 28 of cycle).
  - Generate next month's `pinterest_schedule_30days.csv` (13 Nov to 12 Dec 2026).
  - Drop file into Pinterest Bulk Upload.

---

## 3. SEO & Technical Health Maintenance
- **Canonical & Host Redirects:** Permanent 308 on `www` and legacy routes in `vercel.json`.
- **Search Console:**
  - Validation re-check for 7 legacy URLs.
  - Track Impression growth and Average Position (currently 17.4 climbing to Page 1).
- **RSS Auto-Publisher:** Always live at `https://urban-edge-designs.com/rss.xml` for continuous background syndication.
