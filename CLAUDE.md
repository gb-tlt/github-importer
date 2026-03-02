# The Leadership Tattva - Website

## Project Overview
Website for **Gowtham Balaji**, a leadership integration coach who helps senior leaders (CXOs, VPs, Directors) stop fragmenting under pressure. His methodology blends Eastern wisdom (Advaita Vedanta, Yoga Sutras, somatic work, energy healing) with modern leadership coaching across Five Layers: Body, Energy, Mind, Judgment/Values, and Identity/Spiritual.

**Business Goal**: Position Gowtham as a premium, credible executive coach and convert senior leader visitors into discovery call bookings.

## Tech Stack
- **React 19** + **Vite 7** (module-based, JSX)
- **React Router v7** (client-side routing, 8 pages)
- **Tailwind CSS v4** (with `@tailwindcss/vite` plugin, custom theme in `src/index.css`)
- **Framer Motion** (scroll-reveal animations, mobile menu transitions)
- **Lucide React** (icon library)
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
  components/
    layout/       Navbar.jsx, Footer.jsx, Layout.jsx
    ui/           Button, SectionHeading, ProgramCard, TestimonialCard,
                  FAQAccordion, CTASection, StatBar, ScrollReveal, ScrollToTop
    icons/        LayerIcons.jsx (5 custom SVG icons for Five Layers)
  pages/
    Home.jsx          /
    About.jsx         /about
    Services.jsx      /services
    FitCohort.jsx     /services/fit-cohort
    OneOnOne.jsx      /services/one-on-one
    LifeCoaching.jsx  /services/life-coaching
    Resources.jsx     /resources
    Contact.jsx       /contact
  data/
    services.js       Program details, pricing, features
    testimonials.js   Placeholder testimonials (6 total, tagged by program)
    faq.js            FAQ data for each program + contact page
    layers.js         Five Layers framework data
    credentials.js    Certifications and credentials
  App.jsx             Router setup with Layout wrapper
  main.jsx            Entry point
  index.css           Tailwind directives + custom theme + global styles
public/
  gowtham.jpg         Coach's photo (used on Home hero + About page)
  favicon.svg         Gold "T" on navy background
index.html            Entry HTML with Google Fonts preconnect
vite.config.js        Vite + React + Tailwind plugins
netlify.toml          SPA redirect config
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

## Notes
- All testimonials are placeholder (realistic titles, anonymized). Replace with real ones when available.
- Blog articles on Resources page are placeholders - link to external content or build blog later.
- Assessment CTAs on Resources page link to `#` - connect to external forms (Typeform/Google Forms) later.
- Calendar embed placeholder on Contact page - add Calendly/Acuity when ready.
- Coach's photo (`Gowtham1.jpg` / `public/gowtham.jpg`) is a circular-framed headshot with colorful background.
