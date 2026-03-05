# The Leadership Tattva - Website

## Project Overview
Website for **Gowtham Balaji**, a leadership integration coach who helps senior leaders (CXOs, VPs, Directors) stop fragmenting under pressure. His methodology blends Eastern wisdom (Advaita Vedanta, Yoga Sutras, somatic work, energy healing) with modern leadership coaching across Five Layers: Body, Energy, Mind, Judgment/Values, and Identity/Spiritual.

**Business Goal**: Position Gowtham as a premium, credible executive coach and convert senior leader visitors into discovery call bookings.

## Tech Stack
- **React 19** + **Vite 7** (module-based, JSX)
- **React Router v7** (client-side routing, 8 public pages + admin panel)
- **Tailwind CSS v4** (with `@tailwindcss/vite` plugin, custom theme in `src/index.css`)
- **Framer Motion** (scroll-reveal animations, mobile menu transitions)
- **Lucide React** (icon library)
- **Supabase** (Postgres/JSONB for content, Auth for admin login, Storage for images)
- **Deployment**: Netlify (SPA redirect in `netlify.toml`)

## Design System
- **Colors**: Navy-950 `#070B1A` (backgrounds), Navy-900 `#0E1A3A` (cards), Gold-400 `#D4A853` (accent/CTAs), Slate-300 `#B8C0D0` (body text on dark)
- **Typography**: Playfair Display (headings/display), Inter (body/nav/CTAs)
- **Principles**: Dark-dominant, luxury minimalism, gold as spotlight, subtle motion, mobile-first
- **Theme defined in**: `src/index.css` using `@theme` directive (Tailwind v4 syntax)

## GitHub Repo
https://github.com/dhananjay1208/TLT.git (branch: `main`)

## File Structure
```
src/
  supabase/
    config.js         Supabase client initialization
  contexts/
    ContentContext.jsx Batch-loads all Supabase content, provides to app
    AuthContext.jsx    Supabase Auth state management
  hooks/
    useContent.js     useContent(pageName) - page content with fallback
    useCollection.js  useCollection(name) - shared collection data
    useAdmin.js       Write operations (save doc, upload image)
  components/
    layout/           Navbar.jsx, Footer.jsx, Layout.jsx
    ui/               Button, SectionHeading, ProgramCard, TestimonialCard,
                      FAQAccordion, CTASection, StatBar, ScrollReveal, ScrollToTop
    icons/            LayerIcons.jsx (5 custom SVG icons for Five Layers)
  pages/              8 public pages (all use useContent/useCollection hooks)
  data/               Hardcoded fallback data (services, testimonials, faq, layers, credentials)
  admin/              CMS admin panel (lazy-loaded, code-split)
    AdminLayout.jsx   Auth guard + sidebar layout
    AdminLogin.jsx    Email/password login
    AdminDashboard.jsx Overview with quick links
    editors/
      PageEditor.jsx        Schema-driven page content editor
      CollectionEditor.jsx  Services, testimonials, FAQs, layers, credentials
    fields/                 Reusable field components (Text, TextArea, Array, ObjectArray, Table, Image)
    schemas/                Field definitions for each page + collections
    components/             AdminSidebar, SaveButton, SectionCard, Toast
  App.jsx             Router with providers + admin routes
  main.jsx            Entry point
  index.css           Tailwind directives + custom theme + global styles
scripts/
  seed-supabase.js    Populate Supabase with current content (run once)
.env.example          Firebase config template
```

## Three Programs
1. **FIT Leadership Cohort** (`/services/fit-cohort`) - Group, 10 weeks, ₹1-1.5L + GST, 5-8 leaders
2. **One-on-One Coaching** (`/services/one-on-one`) - Premium, 16 sessions over 4 months, ₹8L + GST, limited to 6 clients
3. **Life Coaching** (`/services/life-coaching`) - Whole-life alignment, custom 4 months, ₹4-8L + GST

## Key Patterns
- All pages use dark navy backgrounds with gold accents
- `ScrollReveal` component wraps most content blocks for fade-in-up on scroll
- `SectionHeading` provides consistent section titles with gold accent line
- `CTASection` reusable full-width call-to-action at bottom of every page
- `FAQAccordion` uses Framer Motion for animated expand/collapse
- Navbar is fixed, transparent on hero, solid on scroll, with mobile hamburger menu
- Contact form is a pre-qualification application (name, role, company, experience, program interest, message)
- Photos use `object-cover object-top` for proper face framing

## Commands
- `npm run dev` - Start dev server (localhost:5173)
- `npm run build` - Production build to `dist/`
- `npm run preview` - Preview production build

## Content Sources
Original HTML prototypes are in project root (not committed to git):
- `1 TLT-HOME-PAGE-V5-PREMIUM.html` through `8 TLT-SERVICES-HUB-V3.html`
- `TLT_Website_Content_v2.docx`, `8-Jan GB.docx`

## CMS Admin Panel
- **URL**: `/admin` (redirects to `/admin/login` if not authenticated)
- **Auth**: Single admin account via Firebase Auth (email/password)
- **Architecture**: Schema-driven - each page has a schema defining editable fields, rendered by a generic PageEditor
- **Content flow**: Supabase tables -> ContentContext -> useContent() hook -> pages (with hardcoded fallbacks)
- **Tables**: `content` (9 rows, one per page + global) and `collections` (5 rows for shared data), both with `id TEXT PK` + `data JSONB`
- **Fallback**: All pages keep hardcoded defaults - site works even if Supabase is unreachable
- **Code-split**: Admin routes are lazy-loaded, zero impact on public bundle
- **Seed script**: `node scripts/seed-supabase.js` populates Supabase with current content (requires .env with Supabase keys)

## Supabase Setup (Required)
1. Create Supabase project at supabase.com
2. Run SQL to create tables: `CREATE TABLE content (id TEXT PRIMARY KEY, data JSONB NOT NULL);` and same for `collections`
3. Enable RLS with policies: public SELECT, authenticated ALL
4. Create admin user in Authentication > Users
5. Create `media` storage bucket (public)
6. Copy project URL + anon key to `.env` (see `.env.example`)
7. Run seed script once: `node scripts/seed-supabase.js` (use service role key for seeding)

## Notes
- All testimonials are placeholder (realistic titles, anonymized). Replace with real ones when available.
- Blog articles on Resources page are placeholders - link to external content or build blog later.
- Assessment CTAs on Resources page link to `#` - connect to external forms (Typeform/Google Forms) later.
- Calendar embed placeholder on Contact page - add Calendly/Acuity when ready.
- Coach's photo (`Gowtham1.jpg` / `public/gowtham.jpg`) is a circular-framed headshot with colorful background.
