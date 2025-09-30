# Design Guidelines for Julluca Construction Website

## Design Approach
**Industry-Specific Reference Approach**: Drawing from successful contractor/home services websites with emphasis on trust-building, project showcasing, and easy contact methods. The design should convey sturdiness, reliability, and outdoor/earthy professionalism.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Charcoal: #2B2B2B (main backgrounds, text)
- Sand: #E9E1D1 (light backgrounds, alternating sections)
- Brick: #B45F38 (accent color for CTAs, highlights)
- Leaf: #2E7D32 (secondary accent for trust/growth elements)

**Application:**
- Use Sand for alternating section backgrounds to create visual rhythm
- Brick for all CTA buttons and interactive elements
- Leaf for trust badges, success indicators
- Maintain WCAG AA contrast ratios throughout

### B. Typography
**Heading Font:** Montserrat (Google Fonts)
- H1: Bold, large impact text for hero
- H2: Section headings, consistent sizing

**Body Font:** Inter (Google Fonts)
- Clean, highly legible for service descriptions and body text
- Regular and Medium weights

### C. Layout System
**Spacing:** Use consistent spacing units (8px base grid)
- Section padding: 80-100px vertical on desktop, 48px on mobile
- Component spacing: 32px between cards/elements
- Tight spacing: 16px for related content

**Container:** Max-width 1200px, centered with padding

### D. Component Library

**Header (Sticky):**
- Logo/brand name left-aligned
- Navigation links center (scroll to sections)
- WhatsApp CTA button right-aligned
- Height: 70px, backdrop blur when scrolling

**Hero Section:**
- Bold H1 with strong visual hierarchy
- Subtext: 1-2 lines about services and value proposition
- Primary WhatsApp CTA button (large, prominent)
- Background: Earthy outdoor image with dark overlay for text contrast

**Service Cards (Grid):**
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card: SVG icon (or emoji fallback), title, 2-3 line description, "Get a Quote" link
- Subtle card elevation, hover state with slight lift

**Before/After Slider:**
- Vanilla JS drag slider with labeled sides
- Clear "Before" and "After" text overlays
- Drag handle in middle with visual indicator
- 3-6 comparison sets in grid layout

**Project Gallery:**
- Masonry or equal-height grid
- 8-12 images with captions (service + location)
- Lazy-loaded images with blur-up placeholder
- Lightbox on click (full-screen overlay with navigation)

**Why Us Cards:**
- 6 benefit cards in 3-column grid
- Icon + heading + short description
- Include trust indicators (star ratings, years, guarantee badge)

**Contact Section:**
- Two large CTA buttons side-by-side (WhatsApp, Phone)
- Service areas and hours clearly displayed
- Optional contact form (Name, Phone, Suburb, Service, Message)
- Form via FormSubmit for no-backend solution

**Back to Top Button:**
- Appears after 200px scroll
- Fixed bottom-right position
- Smooth scroll animation

### E. Interaction Design
- Smooth scroll for all anchor links with header offset
- Reduced-motion media query respect
- Focus states with visible outlines (accessibility)
- Subtle hover states on cards and buttons
- No heavy animations or transitions

## Images
**Hero Image:**
- Large, high-quality outdoor/construction scene
- Suggests professionalism and finished quality work
- Dark overlay (40-50% opacity) for text legibility

**Before/After Images:**
- Real project photos showing transformation
- Consistent aspect ratio across all comparisons
- High resolution but optimized for web

**Project Gallery Images:**
- Mix of completed paving, tiling, and construction projects
- Showcase variety of services
- Include contextual captions with location

## Accessibility Requirements
- Semantic HTML5 structure
- WCAG AA color contrast maintained
- All images with descriptive alt text
- Keyboard navigation support
- Focus indicators on all interactive elements
- Aria labels for slider controls and navigation

## SEO Considerations
- Single H1 in hero section
- Logical H2 hierarchy for sections
- Title tag: "Julluca Construction | Paving, Tiling & Outdoor Projects in Pretoria"
- Meta description highlighting services and location
- Structured data for local business
- Descriptive alt text format: "After — charcoal pavers installed on driveway, [Suburb]"

## Technical Requirements
- No frameworks or external dependencies (vanilla JS)
- Lightweight and fast-loading
- Responsive images with srcset
- Lazy-loading for below-fold images
- Mobile-first responsive design
- Clean, commented code structure