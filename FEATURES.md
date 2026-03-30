# Feature Complete Portfolio Website

## Core Features

### 1. Hero Section
- **Parallax scrolling** with fade-out effect
- **Animated entrance** with staggered elements
- **Dual CTA buttons** — "See my work" and "View résumé"
- **Scroll indicator** with gentle bounce animation
- **Responsive typography** (5xl on mobile → 8xl on desktop)

### 2. About Section
- **Four statement cards** with left border accent
- **Staggered reveal** on scroll
- **Quick facts grid** showing:
  - Current role (SDE-1)
  - Years in production (2+)
  - Components migrated (40+)
  - Personal projects (1)

### 3. Projects Section (Featured)
**dear.di** — AI scrapbooking app
- Private project status indicator
- Problem → Approach → Result breakdown
- Tech stack: React, TypeScript, AI/LLM APIs, Node.js

**Ransomware Detection**
- ML meets cybersecurity interface
- GitHub link with hover reveal
- Tech: Python, Flask, scikit-learn

**Language Translator App**
- Android native app
- GitHub stars mentioned (3!)
- Tech: Java, Android Studio, Firebase

**Sansar — HackToFuture** (Bonus)
- Urban waste disposal platform
- Built in 48 hours
- Tech: JavaScript, PHP, MySQL

**Interactive Mechanics:**
- Click any card to expand and see full details
- Tech stack badges for each project
- External GitHub links on hover
- Smooth expand/collapse animation

### 4. Skills Section
**Three Expandable Categories:**

**Thinking**
- System design
- Performance debugging
- Component architecture
- Accessibility audits
- API contract design

**Building**
- React / Next.js
- TypeScript
- Redux / Zustand
- REST & GraphQL APIs
- Node.js, Java, Spring Boot, PostgreSQL

**Quality**
- Jest + React Testing Library
- Code review culture
- CI/CD pipelines
- Bundle optimization
- Lighthouse audits

**Interactive:** Click category headers to expand/collapse items within

### 5. Experience Section
**Capillary Technologies** (Current)
- **Role:** Software Engineer (SDE-1)
- **Period:** 2024 — Present
- **Location:** Bengaluru, India

**Four Key Impact Areas:**
1. **Performance** — 50% FCP reduction through optimization
2. **Scale** — Led 40+ component migration to design system
3. **Innovation** — AI-powered developer tooling adopted org-wide
4. **Ownership** — Production features for enterprise retail clients

**Vertical Timeline** with:
- Left border accent line
- Timeline dots for each entry
- Categorized impact points
- Responsive two-column layout

### 6. How I Think Section
**Eight Principle Cards** in responsive masonry grid:

1. "Good UI is invisible until it's broken." — Design
2. "State management is a design problem, not just a code problem." — Architecture
3. "The best performance optimization is not rendering what doesn't need to render." — Performance
4. "If I have to explain why the code is structured this way, it probably needs to be restructured." — Code quality
5. "Accessibility is empathy at scale." — Craft
6. "A component that does one thing really well is worth ten that do many things okay." — Architecture
7. "The user never sees your clever abstraction. They see the result." — Product
8. "Technical debt is future you paying interest on past you's shortcuts." — Engineering

**Interactive Features:**
- Shuffle button (top right) randomizes card order with spring animation
- Hover lift effect (translateY -4px)
- Card numbering (01, 02, etc.)
- Category labels and subtle background tint
- Staggered animation on scroll

### 7. Contact Section
**Three Contact Methods:**

1. **Email** (Copy to clipboard)
   - `sarahabkh@gmail.com`
   - Click to copy → "copied!" toast feedback
   - Clickable arrow on hover

2. **LinkedIn**
   - Direct link to profile
   - Opens in new tab

3. **GitHub**
   - Direct link to GitHub profile
   - Opens in new tab

**Call to Action:**
- Large heading: "Let's build something worth building."
- Friendly message about collaboration
- All links with arrow indicators

### 8. Navigation

**Navbar Features:**
- **Logo** — "SAK" monogram (serif, links home)
- **Desktop Menu** — About, Work, Thinking, Contact
- **Active Section Highlighting** — Uses IntersectionObserver
- **Theme Toggle** — Sun/Moon icon with rotation animation
- **Mobile Menu** — Full-screen overlay hamburger menu
- **Backdrop Blur** — Enabled after scrolling 50px
- **Scroll-aware Styling** — Transparent → solid on scroll

**Smooth Navigation:**
- Click any nav item to scroll smoothly to section
- Mobile menu auto-closes on selection
- ESC support for mobile menu

### 9. Footer
**Minimal Design:**
- Centered layout
- "Built with intention." tagline
- Three social links (GitHub, LinkedIn, Email)
- Copyright text
- Light border divider

## UI Components

### Custom Cursor
- **Two-part design:**
  1. Small precise dot (4px, instant follow)
  2. Larger soft ring (32px, spring-animated lag)
- **Interactive states:**
  - Normal: 32px ring
  - Pointer: 48px expanded ring
  - Text: Thin vertical line (2px wide, 28px tall)
- **Auto-detection** via `data-cursor` attributes
- **Touch device support** — automatically disabled on mobile
- **First-move detection** — avoids flash on load

### Theme Toggle
- **Icons:** Sun (light mode) / Moon (dark mode)
- **Animation:** RotateY 180° on theme switch
- **Hydration-safe** — uses `mounted` state pattern
- **Persistent** — uses next-themes localStorage

### Scroll Progress
- **Ultra-thin** (1px height) progress line
- **Top of viewport** placement
- **Accent green color** — subtle but satisfying
- **Smooth animation** with short duration

### Focus Mode
- **Bottom-right corner button** with icon
- **Active state** shows "Focus" text + icon change
- **Functionality:**
  - Dims navbar to 10% opacity
  - Dims footer to 10% opacity
  - Pointer-events disabled on dimmed elements
- **Exit:** ESC key or click button again
- **Visual feedback:** Hover states with subtle lift

## Design System

### Color Variables (CSS)
All colors defined in `:root` and `.dark` selectors, used throughout:
```
--color-base
--color-surface
--color-elevated
--color-primary
--color-secondary
--color-muted
--color-accent
--color-accent-warm
--color-border
```

### Typography
- **Serif:** Cormorant Garamond (headings, 300-600 weights)
- **Sans:** Inter (body, UI, 300-500 weights)
- **Intentional mixing** — serif for elegance, sans for clarity

### Spacing System
- 8px base unit (Tailwind default)
- Responsive padding/margins
- Consistent gap patterns

### Animation Philosophy
- **Duration:** 0.6s–1.2s (calm, not rushed)
- **Easing:** `[0.25, 0.1, 0.25, 1]` for smooth exits
- **Spring Physics:** Custom damping for cursor
- **Stagger:** 0.08–0.12s between child elements

## Hidden Features

### Easter Egg — "dear.di"
- Type "dear" anywhere on the page
- Toast notification appears: "Still building it. 🌸"
- Tracks last 4 keystrokes
- Fades in/out with motion
- 3-second display duration

### Time-of-Day Warmth
- **Evening** (17:00–21:00) — Sepia 8%, brightness 98%
- **Night** (21:00–05:00) — Sepia 15%, brightness 95%
- Subtle warmth makes site feel "alive"
- Applied via `useTimeOfDay` hook

## Accessibility Features

- **Semantic HTML** — `<section>`, `<nav>`, `<main>`, `<footer>`
- **ARIA Labels** — Buttons and interactive elements
- **Heading Hierarchy** — H1, H2, H3 properly nested
- **Color Contrast** — All text meets WCAG AA minimum
- **Keyboard Navigation** — Full support
- **Focus Indicators** — Visible on interactive elements
- **Reduced Motion** — Respects `prefers-reduced-motion` media query
- **Touch Support** — Larger tap targets, cursor disabled

## Performance Features

- **Next.js 14 Optimizations** — App Router, Server Components
- **CSS Variables** — No runtime color calculations
- **Tailwind Purging** — Only used styles in output
- **GPU Acceleration** — Transforms only (no layout thrashing)
- **Code Splitting** — Each section loads independently
- **Image Optimization** — Next.js Image (when used)
- **TypeScript** — Compile-time error checking

## Browser Compatibility

**Tested & Supported:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile
- ✅ Samsung Internet

## Data-Driven Content

All content lives in single source-of-truth: `src/data/portfolio.ts`
- Personal info
- About statements
- Skills & expertise
- Experience & impact
- Projects & descriptions
- Principles & thoughts

**Update the file, content updates everywhere** — no hardcoding in components.

---

**This is a complete, production-ready portfolio.** All components are fully implemented, animated, and interactive. Zero stubs, zero TODOs. 🚀
