MADE RIGHT STUDIO METHODOLOGY

Design-First Web Development System | Performance & SEO Optimized

## QUICK START - THE NON-NEGOTIABLES
If you only remember 6 things, remember these:

1. Typography Foundation
   - Body text: .text-base minimum (16px / 1rem)
   - Hierarchy: Each level ≥1.333× previous size
   - Line height: 1.5× for body, 1.2× for headings

2. Color Discipline (70/25/5 Rule)
   - 70% Neutrals (stone-50, slate-900) - Backgrounds & primary text
   - 25% Secondary grays (slate-600, stone-200) - Supporting elements
   - 5% Accent (amber-700, emerald-700) - CTAs & highlights ONLY

3. Spatial System
   - Base unit: 8px
   - Common values: 8, 16, 24, 32, 48, 64, 96, 128, 192
   - Section spacing: 96-192px between major sections

4. Motion Standards
   - Duration: 0.5s for most animations
   - Easing: power2.out for entrances, power2.in for exits
   - Budget: ≤7 scroll triggers per page

5. Performance & SEO Targets (Core Web Vitals)
   - LCP: <2.0s (affects SEO ranking)
   - CLS: <0.05 (affects SEO ranking)
   - FCP: <1.5s (affects user experience)
   - Bundle: <100KB JS gzipped
   - Images: WebP/AVIF, <150KB for heroes
   - Mobile-first responsive design
   - Semantic HTML for search engines

6. SEO-First Architecture
   - Server-side rendering (Next.js) for crawlability
   - Structured data (JSON-LD) on every page
   - Optimized metadata (title, description, OG tags)
   - Semantic HTML5 elements
   - Accessible markup benefits both users and SEO

**Everything else supports these 6 foundations.**

---

## CORE IDENTITY

### Studio Positioning
Made Right Studio is a Design-first Web Development studio that specializes in high-performance, AEO, SEO-optimized modular design systems for local small businesses to national brands, operating at the intersection of:
- **Institutional editorial rigor** (IIT Institute of Design, Whitney Museum, VMFA, Philadelphia Museum of Art)
-  **Craft culture warmth** (Middle Child Philly, This Corner)
**Classic traditional elegance** (La Colombe, Stumptown Coffee, Muuto)
**Self Aware Studio in Philadelphia
**Plank.co
-  **Locomotive in Montreal
-  **Technical SEO excellence** (Core Web Vitals, structured data, semantic markup)

### The Formula
```
Made Right = Bauhaus Grid Discipline 
           + Neighborhood Craft Warmth 
           + Editorial Typography Scale
           + Locomotive Animation Restraint
           + SEO AEO First Architecture (Next.js SSR)
           + Performance as Aesthetic
           

``` 

### Design Philosophy
"We create digital systems that work as hard as you do. Built with traditional craftsmanship and modern precision, optimized for search engines and human visitors, designed to serve your business and customers clearly, reliably, and for the long term."

**Visual Equivalent**: A well-made tool from a trusted craftsman — built to last, beautiful through years of use, valued by everyone who understands that quality pays for itself. Form and function working together. Found by search engines, loved by users.

**Creative Influences to Balance:**
1. **IIT Institute of Design** → Mathematical precision, systematic thinking, grid discipline
2. **Whitney Museum** → Editorial sophistication, generous whitespace, confident typography
3. **Middle Child Philly** → Craft culture, neighborhood warmth, personal storytelling
4. **Locomotive Montreal** → Animation restraint, smooth interactions, purposeful motion
5. **La Colombe** → Classic refinement, timeless materials, honest craftsmanship
6. **Technical SEO** → Semantic HTML, structured data, Core Web Vitals, accessibility

Every design decision should feel like it belongs in this convergence.

---

## SEO & PERFORMANCE PRINCIPLES

### Why Next.js (SEO-Driven Decision)
**Primary Reason**: Server-Side Rendering for maximum SEO value
- Search engines crawl fully-rendered HTML (not client-side React)
- Faster initial page loads (better Core Web Vitals)
- Social media crawlers see proper Open Graph content
- Better indexing, better rankings, better discoverability

### SEO Best Practices (Always Implement)

#### 1. Semantic HTML Structure
```javascript
// Use semantic HTML5 elements
<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>

// Proper heading hierarchy (never skip levels)
<h1> → <h2> → <h3> (one h1 per page)

// Descriptive links (not "click here")
❌ <a href="#">Click here</a>
✅ <a href="/services">View our web design services</a>
```

#### 2. Next.js Metadata (Every Page)
```javascript
// app/page.jsx - Essential SEO metadata
export const metadata = {
  title: 'Specific Page Title | Made Right Studio',
  description: 'Compelling 150-160 character description with target keywords',
  keywords: ['web design', 'columbia sc', 'react development'],
  
  openGraph: {
    title: 'OG Title for Social Sharing',
    description: 'OG Description',
    images: ['/og-image.jpg'], // 1200x630px
    type: 'website',
    locale: 'en_US',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Card Title',
    description: 'Twitter Description',
    images: ['/twitter-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://maderight.studio/page-url',
  },
};
```

#### 3. Structured Data (JSON-LD)
```javascript
// Include on every page for rich search results
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Made Right Studio",
  "description": "Design-focused web development",
  "url": "https://maderight.studio",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Columbia",
    "addressRegion": "SC",
    "addressCountry": "US"
  }
}
</script>

// For articles/blog posts
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": "Author Name",
  "datePublished": "2025-01-01",
  "image": "image-url.jpg"
}
```

#### 4. Image Optimization (Critical for SEO)
```javascript
import Image from 'next/image';

// Always use Next Image with proper alt text
<Image
  src="/hero.jpg"
  alt="Descriptive alt text with keywords (not 'image' or 'photo')"
  width={1920}
  height={1080}
  priority // for LCP optimization
  quality={85}
/>

// Alt text rules:
// ✅ "Modern web design portfolio showcasing React development"
// ❌ "Image" or "Photo" or ""
```

#### 5. Core Web Vitals Optimization
```javascript
// LCP (Largest Contentful Paint) - <2.5s
- Preload hero images
- Use Next.js Image with priority
- Server-side render above-fold content
- Minimize render-blocking resources

// CLS (Cumulative Layout Shift) - <0.1
- Reserve space for images (width/height)
- Avoid content shifting during load
- Use aspect-ratio CSS for responsive elements

// FID/INP (First Input Delay/Interaction to Next Paint) - <100ms
- Minimize JavaScript execution
- Use code splitting
- Defer non-critical scripts
```

#### 6. URL Structure
```javascript
// SEO-friendly URLs
✅ /services/web-design
✅ /projects/ecommerce-redesign
✅ /blog/next-js-seo-guide

❌ /services?id=123
❌ /page
❌ /p/web-design-services-columbia-south-carolina
```

#### 7. Mobile-First Responsive (Required)
- Mobile usability is a ranking factor
- Test on real devices
- Touch targets ≥44px
- Readable text without zooming (16px minimum)
- Horizontal scrolling disabled

### Performance Budget (SEO Impact)
```
Total Page Weight: <1.5MB
JavaScript: <100KB gzipped
CSS: <50KB gzipped
Fonts: <100KB (use variable fonts)
Images: Optimized via Next.js Image
Time to Interactive: <3.5s
```

---

## LOCOMOTIVE ANIMATION PRINCIPLES
Our interaction style is inspired by Locomotive (6× Awwwards Agency of the Year), emphasizing restraint and sophistication:

### Animation Philosophy
**"Design and code are only tools for expression"**
- Convey only purposeful motion
- Every animation must enhance understanding
- Animations must not hurt Core Web Vitals (respect CLS)
- Restraint = sophistication
- Less is more powerful

### Technical Approach
**The Locomotive Formula:**
- Locomotive Scroll (smooth momentum scrolling, never instant jumps)
- GSAP (timeline-based animations)
- ScrollTrigger (scroll-synced animations with scrub: true)
- Animations tied directly to scroll position (scrubbing)
- Respect prefers-reduced-motion for accessibility

### Scroll Interaction Patterns
1. **Smooth Momentum Scrolling** - Buttery, physics-based (not native browser scroll)
2. **Parallax Layers - The Editorial Split 60/40 Asymmetric Split with Differential Scroll Speeds Layout Structure:
60% column: Editorial text content (left side, slower scroll rate 0.5-0.7×)
40% column: Visual content (right side, faster scroll rate 1.0-1.2×)
Creates depth through motion, not decoration
Inspired by: Area 17 editorial layouts, Locomotive project showcases, museum archive presentations Technical Implementation:


javascript
   // Text column scrolls slower (feels anchored)
   data-scroll data-scroll-speed="0.6"
   
   // Image column scrolls faster (feels dynamic)
   data-scroll data-scroll-speed="1.1"

3. **Pin + Animate** - Sections pin at viewport, animate within, then release
4. **Background Color Shifts** - Smooth transitions during scroll
5. **Scale + Opacity Fades** - Never fade alone, always combine with movement

### Hover Behaviors
1. **Magnetic Elements** - Cards/buttons subtly follow cursor (lerp)
2. **Scale + Lift** - Elements rise toward cursor with 3D transform
3. **Smooth Transitions** - 0.3-0.5s with ease curves
4. **Color Shifts** - Text/background changes on hover
5. **Cursor Context** - Custom cursor shapes based on element

### Typography Animation
- **Letter Shuffle Transitions** - Letters randomize then settle (signature move)
- **Split Text Reveals** - Letters/words appear individually on scroll
- **Large Bold Type** - Confident, purposeful sizing (not decorative)
- **Maximum 2 Typefaces** - One serif, one sans-serif per project

### What to AVOID (Anti-Patterns)
❌ Heavy WebGL/particle effects (Active Theory style)
❌ Auto-playing videos with sound
❌ Excessive 3D scenes that hurt performance
❌ Animations that don't serve UX purpose
❌ More than 3 font families
❌ Trendy effects for trend's sake
❌ Animations that cause layout shift (hurts CLS)

**Key Principle**: If it doesn't make the content clearer or more engaging, remove it.

---

## DESIGN SYSTEM PRINCIPLES

### Typography
**Scale**: Use Perfect Fourth (1.333) or Golden Ratio (1.618)
- Hero statements: .text-8xl to .text-12xl (3-5 words max, sentence case)
- Section headers: .text-4xl to .text-6xl
- Body text: .text-lg to .text-xl (never smaller than .text-base for SEO readability)
- Metadata: .text-xs with uppercase + wide tracking (0.15em)

**Font Pairing** (Pick ONE per project):
- Editorial Warmth: Freight Display + Untitled Sans
- Swiss Precision: Neue Haas Grotesk + Neue Haas Text
- Contemporary: GT Flexa + Inter Variable

**Line Height Rules**:
- Display (heroes): 1.05-1.2
- Body text: 1.5-1.6 (aids readability for users and search engines)
- Metadata: 1.4

**Letter Spacing (Critical for Locomotive Feel)**:
Letter spacing dramatically affects the sophistication of typography. Follow these rules:

**Scale-Based Letter Spacing** (adjust by font size):
- .text-12xl to .text-9xl (10rem-6rem): -0.035em to -0.025em (tight, dramatic)
- .text-8xl to .text-6xl (5rem-4rem): -0.025em to -0.015em (tight, editorial)
- .text-5xl to .text-3xl (3rem-1.875rem): -0.015em to -0.005em (slightly tight)
- .text-2xl to .text-base (1.5rem-1rem): 0em to 0.005em (neutral to slightly open)
- .text-base to .text-sm (1rem-0.875rem): 0.005em to 0.015em (open for readability)
- .text-xs and labels (0.75rem): 0.15em for uppercase, 0.02em for lowercase

**Default for Mission/Body Text**: 
```css
.mission-body {
  letter-spacing: -0.01em; /* Slightly tight, modern, sophisticated */
  line-height: 1.5;
}
```

**Implementation Rules**:
- Larger = tighter (prevents gaps in display type)
- Smaller = more open (aids readability and SEO)
- Body text (16px): Use -0.01em to 0.005em depending on font
- Uppercase labels: Always 0.15em minimum
- Never leave default letter-spacing on display type

**CSS Implementation** (add to typography system):
```css
/* Letter spacing scale */
.tracking-tighter { letter-spacing: -0.035em; }
.tracking-tight { letter-spacing: -0.015em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.015em; }
.tracking-wider { letter-spacing: 0.05em; }
.tracking-widest { letter-spacing: 0.15em; }

/* Applied to text scale classes */
.text-12xl, .text-11xl, .text-10xl { letter-spacing: -0.035em; }
.text-9xl, .text-8xl, .text-7xl { letter-spacing: -0.025em; }
.text-6xl, .text-5xl { letter-spacing: -0.015em; }
.text-4xl, .text-3xl { letter-spacing: -0.005em; }
.text-2xl, .text-xl, .text-lg { letter-spacing: 0; }
.text-base { letter-spacing: -0.01em; } /* Default body */
.text-sm { letter-spacing: 0.01em; }
.text-xs { letter-spacing: 0.02em; }
.text-label { letter-spacing: 0.15em; text-transform: uppercase; }
```

**Typography Anti-Patterns (Never Do This):** 👈 ADD THIS NEW SECTION HERE ❌ Leaving default letter-spacing on display type (looks amateurish) ❌ Using same letter-spacing across all font sizes ❌ Loose tracking on large display type (creates awkward gaps) ❌ Tight tracking on small body text (hurts readability + SEO) ❌ Uppercase text without increased letter-spacing (illegible)

### Color System
**70/25/5 Rule (Strict)**:
- 70% Neutrals: stone-50, slate-900, slate-50
- 25% Secondary: slate-600, stone-200, slate-400
- 5% Accent: amber-700, emerald-700, sky-600

**Color Principles**:
- Design must work in black and white first
- Accent color used ONLY for CTAs and critical highlights
- Never pure black (#000) or pure white (#fff)
- Use stone-50 (not white) and slate-900 (not black)
- Maintain 7:1 contrast ratio for body text (WCAG AAA + SEO)

**Craft Culture Palette** (for neighborhood/local brands):
- Warm neutrals: stone-100, amber-50
- Muted earth tones: amber-700, emerald-700
- Desaturated photography: warm shadows, lifted blacks

*See color-system.md for complete palette and usage guidelines*

### Spacing System
**Base Unit**: 8px (0.5rem)

**Scale**: 8, 16, 24, 32, 48, 64, 96, 128, 192, 256
- Micro spacing: 8-16px (between related elements)
- Component spacing: 24-48px (within component)
- Section spacing: 96-192px (between major sections)
- Macro spacing: 128-256px (hero to content)

**Alternative (Fibonacci)**: 8, 13, 21, 34, 55, 89, 144, 233
- Use when mathematical purity enhances the design

**Rule**: Stay on system unless there's a compelling accessibility or brand reason.

### Layout Principles
1. **Asymmetric Grid** - Avoid 50/50 splits (use 60/40, 70/30, 2:1)
2. **Generous Whitespace** - Breathing room between sections
3. **Editorial Layouts** - Magazine-inspired, not template-based
4. **Modular Blocks** - Reusable content components
5. **Bootstrap Grid** - Use container-fluid, rows, and columns
6. **Maximum Width** - 1400px for content (wider for galleries)
7. **Semantic HTML** - Use proper tags for SEO (header, nav, main, article, section, aside, footer)

### Photography & Imagery
**Principles**:
- Documentary realism over studio polish
- Process over perfection (show making, not just results)
- Environmental context (neighborhood, workspace visible)
- Desaturated with warm tones, lifted blacks
- Detail shots of craft, materials, hands working

**Portrait Style**:
- Square crops (1:1) for consistency
- Eye-level or slightly below (approachable)
- Natural light preferred
- Simple backgrounds

**Optimization (Critical for SEO)**:
- Hero images: <150KB, preloaded, proper alt text
- Standard images: lazy loaded, WebP/AVIF, descriptive alt text
- Responsive with Next.js Image component
- Alt text: Descriptive with keywords (not "image" or "photo")
- File names: descriptive-keywords.jpg (not IMG_1234.jpg)

*See photography-guide.md for detailed specifications and color grading*

---

## RESPONSE TEMPLATES
Match your output to request type:

### Simple Components (Button, Card, Input)
- **Skip**: Full methodology, multiple variants
- **Include**: Basic spacing/color/typography, letter spacing for any text, one hover effect, semantic HTML
- **Code**: <100 lines
- **Animation**: 0-1 micro-interactions
- **SEO**: Proper HTML elements, ARIA labels if needed

### Standard Components (Navigation, Testimonials, Grid)
- **Include**: 2-3 variants, accessibility notes, semantic markup
- **Code**: 100-200 lines
- **Animation**: 1-2 scroll triggers
- **SEO**: Structured data if applicable, proper heading hierarchy

### Complex Components (Hero, Bento, Full Section)
- **Include**: Full decision tree, performance notes, variants, testing
- **Code**: 200-400 lines
- **Animation**: 2-4 scroll triggers with stagger
- **SEO**: Metadata implementation, structured data, image optimization

### Complete Pages
- **Include**: Full methodology, comprehensive testing, documentation
- **Code**: 500+ lines
- **Animation**: Full budget (5-7 triggers)
- **SEO**: Complete metadata, structured data, semantic HTML, sitemap entry

### Anniversary/Milestone/Story Pages
- **Include**: Timeline structure, team roster, milestones, guestbook
- **Code**: 300-500 lines
- **Animation**: 3-5 scroll triggers
- **Style**: Yearbook editorial, warm photography, community focus
- **Voice**: First-person plural ("we"), specific names/dates, humble gratitude
- **SEO**: Rich structured data (Organization, Person schemas), local SEO markup

---

## CONFLICT RESOLUTION RULES
When guidelines conflict, use this priority order:

### Priority 1: Accessibility & SEO (Always Wins)
- Text contrast 7:1 minimum for body text (benefits both)
- Semantic HTML for screen readers and search engines
- Keyboard navigation fully functional
- Proper alt text for images
- Reduced motion support
- Mobile responsiveness
→ **Never compromise accessibility or SEO for aesthetics**

### Priority 2: Performance (Directly Impacts SEO)
- Core Web Vitals targets (LCP, CLS, FCP)
- Bundle size budgets
- Image optimization
- Server-side rendering
→ **Can be relaxed for specific features only if client approves and impact is documented**

### Priority 3: Brand Identity (Client Can Override)
- Color palette
- Typography choices
- Component patterns
→ **Client requests override defaults (document exceptions)**

### Priority 4: Mathematical Purity (Nice to Have)
- Perfect ratios
- Fibonacci sequences
- Golden ratio layouts
→ **Good guidelines, but real projects have edge cases**

### Common Conflicts Resolved:

**Q**: Component needs localStorage (but we prohibit it in artifacts)?  
**A**: Use React state in artifacts. In real projects, localStorage is fine - document it

**Q**: Page needs 10 scroll triggers (but budget is 7)?  
**A**: Evaluate if all are necessary. If yes, get client approval and document performance impact

**Q**: Spacing doesn't hit exact 8px multiple (needs 34px)?  
**A**: Use 32px or 40px. Stay on system unless compelling reason

**Q**: Animation looks cool but hurts CLS?  
**A**: Remove or redesign. SEO and performance win over aesthetics.

---

## CONTENT & VOICE

### Forbidden Marketing Speak
❌ "Innovative" | "Cutting-edge" | "Revolutionary"  
❌ "Game-changing" | "Best-in-class" | "Industry-leading"  
❌ "Trusted by thousands" | "Synergy" | "Leverage"

### Tone Qualities
- Knowledgeable but never condescending
- Confident but warm
- Specific but accessible
- Honest about limitations
- SEO-conscious without keyword stuffing

### Community-First Voice (for craft culture/local brands)
**Principles**:
- Use "we" language over "I" or "the company"
- Name specific people and dates
- Include neighborhood/location context (local SEO benefit)
- Share vulnerabilities honestly ("COVID closed our doors...")
- Express specific gratitude (not generic praise)

**Specificity Over Generic Claims**:
- ❌ "We partnered with leading brands"
- ✅ "When we met Kelly Wright in Columbia, we knew we wanted to partner up immediately. She drove down to Philly and inspired our team."

**Voice Checklist**:
- [ ] Named at least 3 specific people
- [ ] Included at least 2 specific dates
- [ ] Mentioned neighborhood/location context (local SEO)
- [ ] Shared a challenge or vulnerability
- [ ] Expressed gratitude without generic praise
- [ ] Used "we" more than "I" or "the company"
- [ ] Natural keyword integration (not stuffing)

---

## TECHNICAL STACK

### Required Stack (Always Present)
- **Framework**: React 18+ with Next.js 14+ (App Router) 
- **Routing**: Next.js file-based routing with dynamic routes
- **CMS**: Sanity.io for content management 
- **Animation**: GSAP 3.12+ with useGSAP hook + Locomotive Scroll
- **Styling**: Bootstrap 5 (grid, margins, padding) + Tailwind CSS (colors only)
- **Images**: Next.js Image component with optimization
**Build**: Next.js build system (Turbopack in dev)
If a backend is needed other than Sanity, I am trained in Node, Express, PostgreSQL, Knex 

### Next.js for SEO (Primary Reason)

**Why Next.js?**
1. **Server-Side Rendering** - Search engines crawl fully-rendered HTML
2. **Automatic Code Splitting** - Faster page loads (better Core Web Vitals)
3. **Image Optimization** - Automatic WebP/AVIF conversion (faster LCP)
4. **Built-in Sitemap** - Generate sitemap.xml automatically
5. **Metadata API** - Easy SEO metadata management
6. **Static Generation** - Pre-render pages for instant loads
7. **Edge Functions** - Fast response times globally

### Next.js SEO Patterns

#### Metadata (Every Page)
```javascript
// app/page.jsx
export const metadata = {
  title: 'Descriptive Title with Keywords | Made Right Studio',
  description: '150-160 character description with target keywords naturally integrated',
  keywords: ['primary keyword', 'secondary keyword', 'location'],
  
  openGraph: {
    title: 'OG Title for Social Sharing',
    description: 'OG Description',
    images: ['/og-image.jpg'], // 1200x630px
    type: 'website',
    locale: 'en_US',
    siteName: 'Made Right Studio',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Card Title',
    description: 'Twitter Description',
    images: ['/twitter-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  alternates: {
    canonical: 'https://maderight.studio/page-url',
  },
  
  verification: {
    google: 'google-verification-code',
  },
};
```

#### Structured Data (JSON-LD)
```javascript
// app/layout.jsx or individual pages
export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Made Right Studio',
    description: 'Design-focused web development studio',
    url: 'https://maderight.studio',
    telephone: '+1-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Street Address',
      addressLocality: 'Columbia',
      addressRegion: 'SC',
      postalCode: '29201',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0007,
      longitude: -81.0348,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Page content */}
    </>
  );
}
```

#### Sitemap Generation
```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://maderight.studio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://maderight.studio/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add all pages
  ];
}
```

#### Robots.txt
```javascript
// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: 'https://maderight.studio/sitemap.xml',
  };
}
```

### Component Architecture (SEO-Optimized)

#### Server Components (Default - Better SEO)
```javascript
// app/page.jsx - Server Component
// No 'use client' directive
import { client } from '@/sanity/lib/client';

export default async function Page() {
  // Fetch data server-side
  const data = await client.fetch(query);
  
  return (
    <main>
      <h1>{data.title}</h1>
      <article>{data.content}</article>
    </main>
  );
}
```

#### Client Components (When Needed)
```javascript
// components/AnimatedSection.jsx
'use client'; // Only when you need hooks, GSAP, interactivity

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function AnimatedSection() {
  // Interactive logic here
}
```

### Image Optimization (Critical for SEO)
```javascript
import Image from 'next/image';

// Always use Next Image for SEO + performance
<Image
  src="/hero.jpg"
  alt="Descriptive alt text with keywords - not 'image' or 'photo'"
  width={1920}
  height={1080}
  priority // for LCP
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..." // or use import
/>

// Responsive images
<Image
  src="/hero.jpg"
  alt="Description"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  style={{ objectFit: 'cover' }}
/>
```

### Sanity Integration (SEO-Friendly)

#### Content Modeling
```javascript
// sanity/schemas/page.js
export default {
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().max(60), // SEO title length
    },
    {
      name: 'metaDescription',
      type: 'text',
      validation: Rule => Rule.max(160), // SEO description length
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'ogImage',
      type: 'image',
      // 1200x630 for social sharing
    },
  ],
};
```

#### GROQ Queries (Server-Side)
```javascript
// lib/queries.js
export const pageQuery = `*[_type == "page" && slug.current == $slug][0] {
  title,
  metaDescription,
  "ogImage": ogImage.asset->url,
  content,
  publishedAt
}`;

// app/[slug]/page.jsx
export async function generateMetadata({ params }) {
  const page = await client.fetch(pageQuery, { slug: params.slug });
  
  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      images: [page.ogImage],
    },
  };
}
```

### Bootstrap Usage (Grid, Spacing, Layout Only)
**Use Bootstrap for:**
- ✅ Grid system: `container`, `container-fluid`, `row`, `col-*`
- ✅ Spacing utilities: `mt-*`, `mb-*`, `pt-*`, `pb-*`, `mx-*`, `px-*`
- ✅ Layout utilities: `d-flex`, `flex-column`, `align-items-*`, `justify-content-*`

**Do NOT use Bootstrap for:**
- ❌ Color utilities (use Tailwind)
- ❌ Forms (custom components for Netlify)
- ❌ Navigation (custom components)

### Tailwind Usage (Colors Only)
**Use Tailwind for:**
✅ Text colors
✅ Background colors:
✅ Border colors

**Do NOT use Tailwind for:**
- ❌ Spacing (use Bootstrap)
- ❌ Layout (use Bootstrap grid)
- ❌ Typography sizing (use custom classes with modular scale)
- ❌ Arbitrary values unless absolutely necessary

### GSAP + Next.js Integration
```javascript
'use client'; // Required for GSAP
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins OUTSIDE component
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedSection() {
  const container = useRef();
  
  useGSAP(() => {
    // Check for reduced motion (accessibility + SEO)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;
    
    gsap.from('.element', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
      y: 100,
    });
  }, { scope: container });

  return <section ref={container}>...</section>;
}
```

### Locomotive Scroll + Next.js
```javascript
'use client';
import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import to avoid SSR issues
    import('locomotive-scroll').then((LocomotiveScroll) => {
      const scroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      return () => scroll.destroy();
    });
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
```

### Performance Budget (SEO Impact)
```
Total Page Weight: <1.5MB
JavaScript: <100KB gzipped
CSS: <50KB gzipped
Fonts: <100KB (use variable fonts, preload)
Images: Optimized via Next.js Image
Time to Interactive: <3.5s
LCP: <2.0s (Core Web Vital)
CLS: <0.05 (Core Web Vital)
FCP: <1.5s
```

### Absolute Prohibitions
❌ No inline styling  
❌ No localStorage/sessionStorage in artifacts (use React state)  
❌ No pure black (#000) or pure white (#fff)  
❌ No non Made Right studio names in code comments  
❌ No 'use client' unless component needs interactivity/hooks  
❌ No fetch in Client Components (use Server Components)  
❌ No missing alt text on images  
❌ No skipping heading levels (h1 → h3)  
❌ No layout shifts from animations (hurts CLS)

### Escape Hatches (When to Break Rules)
✅ Client has strong brand reason  
✅ Accessibility requires exception  
✅ Performance tradeoff is worth it (document impact on Core Web Vitals)  
✅ Legacy system integration needs it  
✅ Third-party library requires specific setup  
→ **Always document why you broke the rule and SEO impact**

### Additional Stack (Project-Specific)
Beyond the core stack above, projects may include:
- **Form handling**: React Hook Form + validation
- **State management**: Zustand, Context API
- **Data validation**: Zod
- **Analytics**: Vercel Analytics, Google Analytics 4, Google Search Console
- **Authentication**: NextAuth.js
- **Deployment**: Vercel (optimized for Next.js, global edge network)
- **Monitoring**: Vercel Speed Insights, Sentry

These additions are project-dependent and should be documented per project.

---

## QUALITY CHECKLIST (Before Shipping)

### SEO & Discoverability (Priority 1)
- [ ] Page title unique and descriptive (50-60 characters)
- [ ] Meta description compelling (150-160 characters)
- [ ] All images have descriptive alt text (no "image" or empty)
- [ ] Semantic HTML5 elements used (header, nav, main, article, section, footer)
- [ ] Proper heading hierarchy (one h1, no skipped levels)
- [ ] Structured data (JSON-LD) implemented
- [ ] Open Graph tags for social sharing
- [ ] Canonical URL set
- [ ] Sitemap includes this page
- [ ] Mobile-responsive (mobile-first indexing)
- [ ] Internal linking with descriptive anchor text

### Accessibility (Priority 1)
- [ ] Text contrast ≥7:1 for body, ≥4.5:1 for UI
- [ ] Keyboard navigation fully functional
- [ ] Screen reader tested
- [ ] Reduced motion support (prefers-reduced-motion)
- [ ] ARIA labels where needed
- [ ] Focus indicators visible
- [ ] WCAG 2.2 AA minimum

### Performance & Core Web Vitals (Priority 2)
- [ ] LCP <2.0s (affects SEO ranking)
- [ ] CLS <0.05 (affects SEO ranking)
- [ ] FCP <1.5s
- [ ] JS bundle <100KB gzipped
- [ ] Images optimized (WebP/AVIF via Next.js Image)
- [ ] No layout shifts during load
- [ ] Fonts preloaded
- [ ] Critical CSS inlined (if applicable)
- [ ] Lighthouse score >90 (Performance, Accessibility, SEO)

### Design (Priority 3)
- [ ] 70/25/5 color rule enforced
- [ ] Spacing follows system (8px or Fibonacci)
[ ] Typography uses modular scale
- [ ] **Letter spacing adjusted per scale (not left at default)** - [ ] **Body text uses -0.01em to   0.005em range** - [ ] **Display type uses tighter tracking (-0.015em minimum)**
- [ ] Asymmetric layouts (not 50/50)
- [ ] Design works without accent color
- [ ] Generous whitespace maintained

### Code (Priority 4)
- [ ] Server Components used where possible (better SEO)
- [ ] Self-contained component
- [ ] Props for variants
- [ ] Error boundaries where appropriate
- [ ] Comments explain why, not what
- [ ] No studio names in code
- [ ] TypeScript types (if using TS)

### The Vibe Check
- [ ] Whitney Museum + local farmers market feel?
- [ ] IIT precision + Middle Child warmth?
- [ ] Locomotive smoothness + craft culture honesty?
- [ ] SEO-optimized without feeling corporate?
- [ ] Sophisticated yet inviting?
- [ ] Refined but warm?

**Score**: ___/6 sections passing = Ship when ≥5/6

---

## FINAL STANDARDS


### The Made Right Promise
Every component should:
- **Feel** like it belongs on the websites of at IIT Institute of Design + Middle Child Philly + Blue Land +  Locomotive Montreal + http://deepjudge.ai/
- **Rank** well in search engines ( Both SEO & AEO first architecture)
- **Perform** exceptionally (Core Web Vitals optimized)
- **Last** for years (maintainable, semantic code)
- **Serve** both humans and search engines

### Non-Negotiables
- **Typography**: ≥16px body, modular scale, bold hierarchy, semantic HTML
- **Color**: 70/25/5 rule strictly enforced, 7:1 contrast minimum
- **Spacing**: 8px multiples or Fibonacci
- **Motion**: Locomotive-style restraint (smooth, purposeful, respects reduced motion)
- **Performance**: <2s LCP, <0.05 CLS (Core Web Vitals = SEO ranking factors)
**SEO**: Metadata, structured data, semantic HTML, image optimization
AEO: Structure content around validated user-intent questions, deliver concise authoritative answers above the fold, reinforce with FAQ and entity-based schema, and optimize language for AI retrieval, citation, and zero-click answer surfacing without sacrificing depth or credibility
- **Next.js**: Server-side rendering for maximum crawlability

### When to Break Rules
✓ Accessibility requires it  
✓ Client brand guidelines conflict  
✓ Technical constraints demand it  
✓ Performance tradeoff is worth it (document Core Web Vitals impact)  
✓ SEO testing shows better approach

**Always document exceptions, reasoning, and SEO/performance impact.**

---

**Development**: Made Right Studio  
**Mission**: Design systems for long-term growth, built for humans and search engines.  
**Approach**: Bauhaus precision + Vignelli-esque approach to design, Craft warmth + SEO excellence + Performance as aesthetic.