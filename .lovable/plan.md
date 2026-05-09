## Goal
Capture every click on the "Take a 4-min Leadership Presence Assessment" CTA (the Typeform link) into Supabase so conversions can be measured.

## Approach
Since the app already uses Supabase (`src/supabase/config.js`) with the anon key in the browser, log clicks directly from the client into a new `cta_clicks` table. No third-party analytics needed.

## Steps

1. **Create Supabase table `cta_clicks`** (via SQL migration)
   - `id uuid pk default gen_random_uuid()`
   - `cta_id text not null` (e.g. `'leadership_assessment'`)
   - `page_path text` (where the click happened)
   - `referrer text`
   - `user_agent text`
   - `created_at timestamptz default now()`
   - RLS: enable, with a policy allowing anonymous `INSERT` only (no SELECT for public). Admin role keeps full access.

2. **Add a tracking helper** `src/lib/trackClick.js`
   - Exports `trackCtaClick(ctaId, extra)` → fires-and-forgets an insert into `cta_clicks` with `window.location.pathname`, `document.referrer`, `navigator.userAgent`. Wrapped in try/catch so failures never block navigation.

3. **Extend `Button` component** (`src/components/ui/Button.jsx`)
   - Add optional `trackId` prop. When set, the rendered `<a>`/`<Link>`/`<button>` calls `trackCtaClick(trackId)` in its `onClick` (alongside any user-supplied onClick). Navigation proceeds normally — the insert is non-blocking.

4. **Wire `trackId="leadership_assessment"` on every assessment CTA**
   - `src/components/ui/CTASection.jsx` — pass `trackId` through when the button links to the Typeform URL.
   - `src/pages/Home.jsx` hero CTA (already updated to the Typeform href).
   - Audit other pages (`About`, `TheWork`, `Services`, `FitCohort`, `OneOnOne`, `LifeCoaching`, `Resources`, `Contact`, `Resources` assessment links) — add `trackId` to any Button/anchor whose `href` points to the Typeform URL `https://form.typeform.com/to/geD9nbKV`.

5. **Verify**
   - Click the hero button in preview, then run `select count(*), page_path from cta_clicks group by page_path;` to confirm rows land.

## How you'll measure conversions
Query examples:
```sql
-- Total clicks per day
select date_trunc('day', created_at) d, count(*) from cta_clicks
where cta_id = 'leadership_assessment' group by 1 order by 1 desc;

-- Clicks per source page
select page_path, count(*) from cta_clicks
where cta_id = 'leadership_assessment' group by 1 order by 2 desc;
```
You can view/export this from the Lovable Cloud → Database tab.

## Notes / trade-offs
- Anonymous insert means a bot could spam the table. Acceptable for a low-traffic marketing site; can add a Cloudflare/edge rate limit later if needed.
- No user identity captured (no auth on the marketing site). If you later want UTM tracking, we can extend the helper to read `URLSearchParams` and store `utm_source/medium/campaign`.
