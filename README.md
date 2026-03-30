# Sarah Abdul Khader — Portfolio Website

A production-ready, fully-featured portfolio website for Sarah Abdul Khader, a frontend-focused software engineer. Built with Next.js 14, Tailwind CSS, Framer Motion, and a thoughtful design system.

## Overview

This is a complete, working portfolio showcasing:
- **Performance-first design** with lazy loading and optimized animations
- **Accessibility-conscious UI** with semantic HTML and proper color contrast
- **Dark/light theme support** with system preference detection
- **Smooth animations** using Framer Motion with intention and purpose
- **Responsive design** from mobile to large displays
- **Custom cursor interaction** with pointer detection
- **Interactive components** like expandable project cards and skill categories

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **React 18** with hooks
- **Tailwind CSS** with custom color variables
- **Framer Motion** for animations
- **next-themes** for dark/light mode
- **lucide-react** for icons
- **Google Fonts** (Cormorant Garamond, Inter)

## Getting Started

### Prerequisites
- Node.js 18+ (for Next.js 14)
- npm or yarn

### Installation

```bash
# Clone the repository
cd /path/to/sarah-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sarah-portfolio/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── layout.tsx               # Root layout with theme provider
│   │   ├── page.tsx                 # Home page composition
│   │   └── globals.css              # Global styles & design tokens
│   │
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── CustomCursor.tsx    # Custom cursor with spring animation
│   │   │   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   │   │   ├── ScrollProgress.tsx  # Top scroll progress bar
│   │   │   └── FocusMode.tsx       # Focus mode button
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.tsx          # Navigation with mobile menu
│   │   │   └── Footer.tsx          # Footer with contact links
│   │   │
│   │   ├── sections/                # Page sections
│   │   │   ├── Hero.tsx            # Hero section with parallax
│   │   │   ├── About.tsx           # About section with statements
│   │   │   ├── Projects.tsx        # Projects with expandable cards
│   │   │   ├── Skills.tsx          # Expandable skills categories
│   │   │   ├── Experience.tsx      # Timeline experience section
│   │   │   ├── HowIThink.tsx       # Thoughts/principles cards
│   │   │   └── Contact.tsx         # Contact section with CTA
│   │   │
│   │   └── providers/               # Context & providers
│   │       ├── TimeOfDayProvider.tsx
│   │       └── DearDiEasterEgg.tsx # Easter egg (type "dear")
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useMousePosition.ts     # Track cursor position
│   │   ├── useScrollProgress.ts    # Track page scroll
│   │   └── useTimeOfDay.ts         # Get current time period
│   │
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn)
│   │
│   └── data/
│       └── portfolio.ts            # All static content & data
│
├── public/                          # Static assets
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts              # Tailwind config with custom colors
├── postcss.config.mjs              # PostCSS plugins
├── next.config.ts                  # Next.js config
├── vercel.json                     # Vercel deployment config
└── .gitignore                      # Git ignore rules
```

## Design System

### Color Palette

**Dark Mode (Default)**
- **Base**: `#0f1115` — Main background
- **Surface**: `#16191f` — Cards, sections
- **Elevated**: `#1e2229` — Raised elements
- **Primary**: `#f5f3ef` — Text (warm ivory)
- **Secondary**: `#a09d97` — Secondary text
- **Muted**: `#5a5854` — Muted text
- **Accent**: `#7d9a8b` — Sage green (primary CTA)
- **Accent Warm**: `#c4a882` — Gold micro-accents
- **Border**: `#2a2d33` — Subtle borders

**Light Mode**
- **Base**: `#f5f3ef` — Main background
- **Surface**: `#edeae4` — Cards, sections
- **Elevated**: `#e8e4dc` — Raised elements
- **Primary**: `#0f1115` — Text (dark)
- **Secondary**: `#4a4845` — Secondary text
- **Muted**: `#9a9692` — Muted text
- **Accent**: `#5a7a6a` — Sage green
- **Accent Warm**: `#a68650` — Gold
- **Border**: `#d4d0c8` — Subtle borders

### Typography

- **Headings**: Cormorant Garamond (serif, elegant, weights: 300-600)
- **Body/UI**: Inter (sans-serif, clean, weights: 300-500)

### Animation Philosophy

- Slow, intentional transitions: `0.6s–1.2s`
- Use easeInOut for smooth, calm feel
- Stagger children by `0.08–0.12s`
- No "snappy" or startup-y feel

## Key Features

### 1. Custom Cursor
- Precise dot + smooth lagging ring
- Expands on hover over clickable elements
- Becomes vertical line over text
- Hidden on touch devices

### 2. Dark/Light Mode
- System preference detection
- Smooth theme transition
- Persistent theme selection (localStorage)

### 3. Scroll-Aware Navbar
- Transparent by default
- Backdrop blur + border on scroll
- Active section highlighting
- Mobile hamburger menu

### 4. Expandable Components
- **Projects**: Click cards to reveal problem/approach/result
- **Skills**: Expandable categories with tech stack
- **Thoughts**: Cards shuffle on click

### 5. Interactive Elements
- Parallax hero section
- Staggered animations on scroll
- Spring physics for smooth interactions
- Focus mode (ESC to exit)

### 6. Easter Egg
- Type "dear" anywhere to see message: "Still building it. 🌸"

### 7. Time-of-Day Warmth
- Evening/night apply subtle warmth filter
- Creates "alive" feel based on time

## Content Management

All content lives in `src/data/portfolio.ts`:

```typescript
export const personal = {
  name: "Sarah Abdul Khader",
  email: "sarahabkh@gmail.com",
  // ... other personal info
};

export const projects = [ /* array of projects */ ];
export const skills = [ /* array of skill categories */ ];
export const experience = [ /* array of roles */ ];
export const thoughts = [ /* array of principles */ ];
```

To update content, simply edit this file and the site will reflect changes.

## Customization

### Colors
Edit CSS variables in `src/app/globals.css` within the `:root` and `.dark` selectors.

### Typography
Adjust font sizes and weights in Tailwind classes throughout components.

### Animation Speed
Modify `transition`, `duration`, and `delay` props in Framer Motion `animate` objects.

### Content
Update `src/data/portfolio.ts` with new projects, skills, experience, etc.

## Performance

- **Code splitting** via Next.js dynamic imports
- **Lazy loaded images** (if added)
- **CSS variables** for efficient theming
- **Optimized animations** using GPU acceleration
- **Minimal JavaScript** — framework + essential interactivity

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on buttons
- Color contrast meets WCAG AA
- Keyboard navigation support
- Respects `prefers-reduced-motion`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static export:
```bash
npm run build
npm start
```

The project is configured for Vercel with `vercel.json`.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Future Enhancements

- Blog section with MDX
- Project filtering/search
- Contact form integration
- Analytics dashboard
- Video/media gallery

## License

Personal portfolio — all rights reserved to Sarah Abdul Khader.

---

**Built with attention to detail and intention.** 🌿
