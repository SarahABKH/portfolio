# Quick Setup Guide

## Prerequisites
- **Node.js 18.17+** (required for Next.js 14)
- **npm 9+** or **yarn 3+**

Verify your Node version:
```bash
node --version   # Should be v18.17 or higher
npm --version    # Should be 9.0 or higher
```

## Installation (5 minutes)

```bash
# 1. Navigate to project directory
cd /path/to/sarah-portfolio

# 2. Install dependencies
npm install

# This will install:
# - next@14.2.5
# - react@18
# - framer-motion@11.3.0
# - next-themes@0.3.0
# - lucide-react@0.408.0
# - tailwindcss@3.4.6
# And all other required packages
```

## Development

```bash
# Start development server
npm run dev

# Server runs on http://localhost:3000
# Hot-reload enabled — changes appear instantly
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
# Build optimized production bundle
npm run build

# Start production server (requires build first)
npm start
```

## Key Features (Out of the Box)

✅ **Dark/Light Theme**
- Click the sun/moon icon in the navbar
- System preference detection
- Smooth transitions

✅ **Custom Cursor**
- Follows your mouse with smooth spring animation
- Changes on interactive elements
- Hidden on touch devices

✅ **Smooth Scrolling**
- Section scroll with navbar highlighting
- Progress bar at top of page
- Parallax hero section

✅ **Responsive Design**
- Mobile-first approach
- Hamburger menu on smaller screens
- Touch-friendly tap targets

✅ **Focus Mode**
- Bottom-right button dims navbar/footer
- Press ESC to exit
- Helps reduce distractions

✅ **Easter Egg**
- Type "dear" anywhere on the page
- See a hidden message! 🌸

## Customization

### Change Content
Edit `src/data/portfolio.ts`:
```typescript
export const personal = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... update all fields
};
```

### Change Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --color-accent: #7d9a8b;  /* Change primary accent color */
  --color-base: #0f1115;     /* Change background */
}
```

### Change Fonts
Edit in `src/app/layout.tsx`:
```typescript
const cormorant = Cormorant_Garamond({
  // Change serif font
});

const inter = Inter({
  // Change sans-serif font
});
```

### Adjust Animation Speed
Edit in component files (e.g., `src/components/sections/Hero.tsx`):
```typescript
transition={{
  duration: 0.8,  // Increase for slower animations
  delay: 0.4,     // Increase for more stagger
}}
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# (Follow prompts, it will auto-detect Next.js)
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Upload the .next folder to Netlify
```

**GitHub Pages / Standard Hosting:**
```bash
npm run build
npm start
# Runs on http://localhost:3000
```

## File Structure Quick Reference

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Global layout, theme setup
│   ├── page.tsx      # Home page (imports sections)
│   └── globals.css   # Design tokens, CSS variables
│
├── components/
│   ├── ui/           # Custom cursor, theme toggle, etc.
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Projects, etc.
│   └── providers/    # Theme provider, Easter egg
│
├── hooks/            # useMousePosition, useScrollProgress, etc.
├── lib/              # Utility functions
└── data/             # portfolio.ts — All content
```

## Troubleshooting

### Port 3000 Already In Use
```bash
npm run dev -- -p 3001  # Use different port
```

### Module Not Found Error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Fails
```bash
# Check TypeScript errors
npx tsc --noEmit

# Clear Next.js cache
rm -rf .next
npm run build
```

### Theme Not Persisting
Ensure `next-themes` is properly set up in `layout.tsx` (it should be).

## Performance Tips

- Images are optimized automatically by Next.js
- CSS is tree-shaken by Tailwind
- Animations use GPU acceleration (transforms only)
- No unnecessary re-renders (React.memo, useMemo where needed)

## Browser Compatibility

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React**: https://react.dev

## Production Checklist

Before deploying:
- [ ] Update all content in `src/data/portfolio.ts`
- [ ] Test all links and external URLs
- [ ] Test dark/light mode switching
- [ ] Test on mobile devices
- [ ] Run `npm run build` — ensure no errors
- [ ] Test focus mode (press ESC)
- [ ] Check lighthouse scores: `npm run dev` then DevTools > Lighthouse

---

**You're all set! Happy building.** 🚀
