# BLUEPRINT — Construction Equipment Rental Marketplace Spain
# Project: Maqon — alquiler de maquinaria de construcción
# Workflow: Antigravity (plan + orchestration) + Claude Code (implementation)

---

## WHAT WE ARE BUILDING

A mobile-first SEO-optimized marketplace website for construction 
equipment rental in Spain. Launch city: Málaga.

The platform is an AGGREGATOR model — suppliers are hidden behind 
the brand. Customers never see which company owns the equipment. 
The platform controls the full request experience.

Use the Stitch design template "Directorio alquiler maquinaria" as 
the visual base. Adapt all colors, typography and components to 
match the design system defined in this blueprint.

---

## TECH STACK

- Framework: Next.js 15 with App Router
- Styling: Tailwind CSS v3 with custom design tokens
- Font: Inter — loaded via next/font/google
- Icons: Lucide React
- Forms: React Hook Form + Zod validation
- Animations: Framer Motion (subtle only)
- Images: next/image with WebP optimization
- SEO: next/metadata API + JSON-LD structured data
- Deployment ready: Vercel configuration included
- No external UI libraries (no Shadcn, no MUI, no Chakra)
- All components custom-built with Tailwind

---

## DESIGN SYSTEM

### Colors (add to tailwind.config.js as custom tokens)

primary: {
  DEFAULT: '#E8621A',    /* Main orange — CTAs only */
  hover: '#C94E0F',      /* Darker orange for hover states */
  light: '#FFF7F3',      /* Light orange tint — bg accent */
  muted: '#FDEEE6',      /* Very light orange — form focus ring bg */
}
dark: {
  DEFAULT: '#1E2832',    /* Charcoal — nav, footer, dark sections */
  light: '#2D3B4A',      /* Slightly lighter charcoal */
}
neutral: {
  50: '#F7F6F4',         /* Off-white — page background */
  100: '#EEEDE9',        /* Light gray — alternate sections */
  200: '#E5E4DF',        /* Borders, dividers */
  400: '#9CA3AF',        /* Placeholder text */
  600: '#6B7280',        /* Secondary text, captions */
  900: '#1F2937',        /* Body text, headings */
}
success: '#16A34A'       /* Available badge, confirmations */
error: '#DC2626'         /* Unavailable, errors */

### Typography scale (add to tailwind.config.js)

fontFamily: { sans: ['Inter', 'sans-serif'] }

Type scale:
- text-display: 52px / Bold 700 / tracking-tight / leading-[1.1]
  → Used only for hero H1
- text-h1: 40px / Bold 700 / tracking-tight / leading-[1.15]  
  → Used for page H1 on product pages
- text-h2: 32px / SemiBold 600 / leading-[1.25]
  → Section headings
- text-h3: 22px / SemiBold 600 / leading-[1.35]
  → Card headings, subsection titles
- text-h4: 18px / SemiBold 600 / leading-[1.4]
  → Minor headings, FAQ questions
- text-body: 16px / Regular 400 / leading-[1.7]
  → Main body text
- text-sm: 14px / Regular 400 / leading-[1.6]
  → Secondary text, metadata
- text-xs: 12px / Regular 400 / leading-[1.5]
  → Captions, labels, badges

### Spacing — 8px base grid
All spacing values must be multiples of 8px.
Section padding vertical: py-20 (80px) desktop, py-12 (48px) mobile.
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

### Border radius
- Cards: rounded-xl (12px)
- Buttons: rounded-lg (8px)
- Badges/pills: rounded (4px)
- Inputs: rounded-lg (8px)
- Avatar circles: rounded-full

### Shadows
- Card default: shadow-sm (0 1px 2px rgba(0,0,0,0.05))
- Card hover: shadow-md (0 4px 6px rgba(0,0,0,0.07))
- CTA sticky bar mobile: shadow-[0_-4px_12px_rgba(0,0,0,0.1)]
- Search bar: shadow-lg

### Transitions
All interactive elements: transition-all duration-200 ease-in-out

---

## PROJECT FILE STRUCTURE

/
├── app/
│   ├── layout.tsx                    # Root layout, fonts, metadata
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Global styles, custom utilities
│   ├── alquiler/
│   │   └── [maquinaria]/
│   │       └── [ciudad]/
│   │           └── page.tsx          # Product/category+city page (SEO core)
│   ├── ciudades/
│   │   └── [ciudad]/
│   │       └── page.tsx              # City hub page
│   ├── precios/
│   │   └── [maquinaria]/
│   │       └── page.tsx              # Price page (consolidates into product)
│   ├── proveedores/
│   │   └── page.tsx                  # Supplier landing page
│   └── blog/
│       └── page.tsx                  # Blog index
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky navigation with mega menu
│   │   ├── Footer.tsx                # Full footer
│   │   └── MobileCTABar.tsx          # Fixed bottom bar for mobile
│   ├── home/
│   │   ├── HeroSection.tsx           # Hero with search bar
│   │   ├── CategoryGrid.tsx          # Equipment category cards
│   │   ├── HowItWorks.tsx            # 3-step process
│   │   ├── FeaturedListings.tsx      # Equipment cards grid
│   │   ├── TrustMetrics.tsx          # Stats + testimonials
│   │   ├── CitySection.tsx           # Coverage pills
│   │   └── SupplierCTA.tsx           # For suppliers section
│   ├── product/
│   │   ├── Breadcrumb.tsx            # SEO breadcrumb
│   │   ├── PageHero.tsx              # H1 + badges + rating
│   │   ├── EquipmentTypeSelector.tsx # Tonnage/type cards
│   │   ├── PriceTable.tsx            # Pricing by duration
│   │   ├── UseCaseSections.tsx       # H3 use case content
│   │   ├── ZoneCoverage.tsx          # Province coverage cards
│   │   ├── FAQAccordion.tsx          # FAQ with schema
│   │   ├── RelatedEquipment.tsx      # Internal links
│   │   ├── CityLinks.tsx             # Other cities links
│   │   └── RequestForm.tsx           # Sticky sidebar form
│   ├── ui/
│   │   ├── Badge.tsx                 # Availability badges
│   │   ├── Button.tsx                # Primary/secondary/ghost
│   │   ├── EquipmentCard.tsx         # Listing card
│   │   ├── SearchBar.tsx             # Main search component
│   │   ├── StarRating.tsx            # Rating display
│   │   └── TrustBar.tsx              # Trust indicators strip
│   └── seo/
│       ├── JsonLd.tsx                # JSON-LD structured data
│       └── MetaTags.tsx              # Dynamic meta generation
├── lib/
│   ├── data/
│   │   ├── equipment.ts              # Equipment categories + data
│   │   ├── cities.ts                 # Cities + coverage data
│   │   └── content.ts                # Page content, FAQs, texts
│   ├── seo/
│   │   ├── metadata.ts               # generateMetadata functions
│   │   └── schema.ts                 # JSON-LD schema generators
│   └── utils.ts                      # Utility functions
├── public/
│   └── images/                       # Optimized equipment images
├── tailwind.config.js                # Custom design tokens
├── next.config.js                    # Next.js config + image domains
└── CLAUDE.md                         # Claude Code context file
