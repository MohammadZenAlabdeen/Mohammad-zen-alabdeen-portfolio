# Cyberpunk Portfolio - Next.js 15

A fully modular, professional cyberpunk-themed portfolio built with Next.js 15, TypeScript, and Tailwind CSS featuring 3D interactions, smooth animations, and Arabic/English bilingual support.

## 🚀 Features

### Next.js 15 Best Practices
- **App Router** with React Server Components
- **TypeScript** for type safety
- **Modular Architecture** - Each section is a reusable component
- **Performance Optimizations** - Image optimization, code splitting, lazy loading
- **SEO Optimized** - Meta tags, Open Graph, proper semantic HTML
- **Caching Strategy** - Optimal headers for static assets

### Design Features
- 🎨 **Cyberpunk Space Theme** - Cyan, purple, and crimson neon aesthetic
- 🌐 **Bilingual Support** - Full English and Arabic (RTL) support
- 📱 **Fully Responsive** - Mobile-first design with sidebar navigation
- ⚡ **Smooth Animations** - Framer Motion integration
- 🎭 **3D Interactive Elements** - Cards and phone mockup with tilt effects
- 📜 **Scroll Reveal** - Elements fade in as you scroll
- ⌨️ **Typewriter Effect** - Animated job titles
- 🎬 **Loading Screen** - Professional initialization animation

## 📁 Project Structure

```
cyberpunk-portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── BackgroundEffects.tsx # Grid and particles
│   ├── Card3D.tsx            # Reusable 3D card component
│   ├── ContactSection.tsx    # Contact footer
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── HeroSection.tsx       # Hero with profile image
│   ├── LoadingScreen.tsx     # Initial loading animation
│   ├── Navigation.tsx        # Navbar with mobile sidebar
│   ├── ProjectsSection.tsx   # Projects with 3D phone
│   ├── ScrollReveal.tsx      # Scroll-triggered animations
│   ├── SkillsSection.tsx     # Skills cards
│   └── Typewriter.tsx        # Animated text component
├── lib/
│   ├── data.ts               # Portfolio content data
│   └── utils.ts              # Utility functions
├── types/
│   └── index.ts              # TypeScript interfaces
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🛠️ Technologies

- **Framework:** Next.js 15.1.0
- **Language:** TypeScript 5.7.2
- **UI Library:** React 19.0.0
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion 11.15.0
- **Utilities:** clsx 2.1.1

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
```
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### 1. Add Your Photo

Replace the placeholder in `components/HeroSection.tsx` (line ~22):

```tsx
<div className="absolute inset-3 rounded-full ... overflow-hidden">
  <Image 
    src="/your-photo.jpg" 
    alt="Mohammad Zen Al Abdeen"
    fill
    className="object-cover"
    priority
  />
</div>
```

Add your image to the `public` folder.

### 2. Update Content

Edit `lib/data.ts` to modify:
- Job titles
- Work experiences
- Projects
- Skills
- Contact information

### 3. Change Colors

Modify the color scheme in `app/globals.css`:
- Cyan: `#00ffff`
- Purple: `#a855f7`
- Crimson: `#dc2626`

### 4. Add New Sections

Create a new component in `components/`:

```tsx
'use client';

import { Language } from '@/types';
import ScrollReveal from './ScrollReveal';

interface NewSectionProps {
  language: Language;
}

export default function NewSection({ language }: NewSectionProps) {
  return (
    <ScrollReveal>
      <section className="py-20">
        {/* Your content */}
      </section>
    </ScrollReveal>
  );
}
```

Then import and add to `app/page.tsx`.

## 🎯 Component Usage

### Card3D
```tsx
import Card3D from '@/components/Card3D';

<Card3D>
  <div className="p-6 bg-cyan-500/10 rounded-lg">
    Your content
  </div>
</Card3D>
```

### ScrollReveal
```tsx
import ScrollReveal from '@/components/ScrollReveal';

<ScrollReveal delay={1}>
  <div>Animated content</div>
</ScrollReveal>
```

### Typewriter
```tsx
import Typewriter from '@/components/Typewriter';

<Typewriter language="en" />
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## ⚡ Performance Optimizations

- **Image Optimization:** Next.js Image component with AVIF/WebP
- **Code Splitting:** Automatic route-based splitting
- **Lazy Loading:** Components load on-demand
- **CSS Optimization:** Tailwind JIT compilation
- **Caching:** Optimized cache headers
- **Tree Shaking:** Unused code elimination

## 🔧 Environment Variables

Create `.env.local` for any secrets:
```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as a template for your own!

## 📄 License

MIT License - feel free to use for your own portfolio

## 👤 Contact

- **Email:** mohamadze768@gmail.com
- **LinkedIn:** [Mohammad Zen Al Abdeen](https://linkedin.com/in/mohammad-zen-al-abdeen-4a47b2308)
- **GitHub:** [MohammadZenAlabdeen](https://github.com/MohammadZenAlabdeen)

---

Built with ❤️ using Next.js 15
