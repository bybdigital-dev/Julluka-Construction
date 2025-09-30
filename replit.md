# Julluca Construction Website

## Overview

This is a single-page marketing website for Julluca Construction, a local contractor in Pretoria specializing in paving, tiling, pool paving, small construction projects, painting, plastering, and gardening services. The site is built with React, TypeScript, and Express, featuring a modern component-based architecture with Tailwind CSS for styling and shadcn/ui for the component library.

The application is designed to be fast, responsive, and conversion-focused, with prominent WhatsApp call-to-action buttons throughout to drive customer inquiries. It showcases services, before/after project galleries, recent work, and includes a contact form for quote requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server. The application follows a component-based architecture with functional components and React hooks.

**Routing**: Uses Wouter for lightweight client-side routing. The application is primarily a single-page site with a home route and a 404 fallback.

**State Management**: React Query (@tanstack/react-query) for server state management and data fetching. Local component state managed with React hooks (useState, useEffect, useRef).

**UI Components**: Built with shadcn/ui component library (Radix UI primitives) providing accessible, customizable components. All UI components follow the "new-york" style variant with a neutral color scheme.

**Styling**: Tailwind CSS with custom configuration for the brand's color palette (Charcoal, Sand, Brick, Leaf). Typography uses Google Fonts (Montserrat for headings, Inter for body text). Custom CSS variables enable light/dark theme support.

**Design System**: 
- Color palette defined in CSS variables with HSL values
- 8px base grid system for consistent spacing
- Component styling follows WCAG AA accessibility standards
- Custom hover and active states using elevation classes
- Responsive design with mobile-first approach

**Form Handling**: React Hook Form with Zod validation schemas via @hookform/resolvers for type-safe form validation.

**Asset Management**: Images stored in `attached_assets/generated_images/` directory and imported as ES modules. Vite handles asset optimization and bundling.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js. The server uses ESM (ES Modules) format.

**Development Setup**: 
- Vite middleware integration for hot module replacement in development
- Custom logging middleware for API request tracking
- Error handling middleware for standardized error responses

**API Structure**: Minimal backend with `/api` prefix for all application routes. Currently uses in-memory storage with an interface designed for future database integration.

**Static File Serving**: In production, Express serves the Vite-built static files from the `dist/public` directory. In development, Vite dev server middleware handles all client requests.

**Storage Interface**: Abstracted storage layer (`IStorage`) with in-memory implementation (`MemStorage`). Ready to be swapped with database implementations without changing business logic.

### Data Storage

**Current Implementation**: In-memory storage using JavaScript Maps for rapid prototyping and development. User data (username, password, id) stored transiently.

**Planned Database**: 
- PostgreSQL as the production database (Neon serverless)
- Drizzle ORM configured with schema definitions in `shared/schema.ts`
- Migration files tracked in `/migrations` directory
- Connection configured via `DATABASE_URL` environment variable

**Schema**: Currently defines a `users` table with id (UUID), username (unique), and password fields. Uses drizzle-zod for automatic Zod schema generation from database schema.

### External Dependencies

**Third-Party Services**:
- **FormSubmit.co**: Contact form submissions sent to info@jullucaconstruction.co.za via AJAX POST requests
- **WhatsApp Business API**: Direct links to WhatsApp using wa.me URLs for instant customer communication (phone: +27 66 438 2352)
- **Google Fonts**: Montserrat and Inter font families loaded from Google Fonts CDN

**Database Services**:
- **Neon Database**: Serverless PostgreSQL configured via `@neondatabase/serverless` package
- Connection pooling with `connect-pg-simple` for session management

**UI Libraries**:
- **Radix UI**: Comprehensive collection of accessible UI primitives (@radix-ui/react-*)
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel for project galleries
- **cmdk**: Command palette component (currently installed but not actively used)

**Development Tools**:
- **Replit Plugins**: Development banner, cartographer (visual navigation), and runtime error overlay for enhanced development experience
- **TypeScript**: Strict type checking with path aliases for clean imports
- **ESBuild**: Production bundling for server-side code

**Build & Deployment**:
- Vite for frontend bundling with React plugin
- PostCSS with Tailwind CSS and Autoprefixer
- Production builds output to `dist/` directory with separate public and server bundles