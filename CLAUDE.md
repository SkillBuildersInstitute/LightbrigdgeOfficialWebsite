# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing website development project for Lightbridge Consulting, a software development consultancy business. The project includes comprehensive design specifications, brand guidelines, and detailed page layouts for a professional services website.

## Key Business Context

**Company**: Lightbridge Consulting
**Services**:
- Collaborative Software Development (primary service)
- Express Development (fast-track option)
- Business Butler Services (ongoing business consulting)
- Business Boot Camp (intensive startup formation program)

**Target Audience**: Local small business owners, entrepreneurs, organizations needing custom software

**Brand Identity**: Professional lighthouse/bridge metaphor with 30+ years engineering experience emphasis

## Architecture & File Structure

### Documentation Files
- `websiteoutline.md` - Complete technical design specification with detailed CSS, HTML, and content requirements
- `generalwebsiteoutline.md` - Shorter version with essential brand and design information
- `BrandGuide-LightBridgeConsulting.pdf` - Official brand guidelines document
- `Lightbridgelogo-prod (1).png` - Logo asset

### Website Structure (from specifications)
The website design includes:
- Homepage with hero, services, credentials, process, testimonials, CTA sections
- Individual service pages (Collaborative Development, Express Development, Business Butler, Business Boot Camp)
- About page with timeline and credentials
- Contact page with form and multiple contact methods

## Brand Guidelines

### Color Palette
- **Primary Orange**: #FFA500 (beam-orange) - CTA buttons, highlights, active states
- **Primary Blue**: #1F78B4 (wave-blue) - Links, secondary CTAs, trust elements
- **Deep Blue**: #0B3D91 - Premium sections, emphasis areas
- **Bridge Gray**: #A9A9A9 - Borders, subtle elements
- **Black**: #000000 - Headings, primary text

### Typography
- **Headings**: Montserrat (700 weight)
- **Body**: Helvetica Neue (400 weight)
- **Design System**: Complete spacing, sizing, and component specifications in websiteoutline.md

## Development Guidelines

### CSS Architecture
The design system uses CSS custom properties extensively:
- Consistent spacing scale (--space-xs through --space-3xl)
- Typography scale (--fs-hero through --fs-caption)
- Color variables for all brand colors
- Component-based approach with reusable styles

### Key Components
- Navigation with logo, main menu, CTA button
- Hero sections with gradients and lighthouse beam effects
- Service cards with featured/recommended styling
- Pricing cards with three-tier layouts
- Testimonial cards with glass-morphism effects
- Timeline components for about page
- Comprehensive form styling

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Grid layouts that collapse appropriately
- Typography and spacing adjustments per breakpoint

## Content Strategy

### Tone & Voice
- Professional yet approachable
- Educational (emphasizes teaching background)
- Collaborative and partnership-oriented
- Avoids technical jargon, explains concepts clearly

### Key Messaging
- 30 years engineering experience
- 15 years teaching database programming
- Collaborative "vibe coding" approach
- Business-minded technology decisions

## Implementation Notes

This is currently a specification/planning phase project. When implementing:

1. **Start with**: Complete design system (CSS custom properties, base styles)
2. **Build order**: Homepage first, then service pages, about, contact
3. **CMS**: Specifications mention CMS-driven content for case studies and blog
4. **Forms**: Contact form needs backend integration
5. **Assets**: Logo files and images referenced throughout specifications

## Future Development Commands

*Note: No build system is currently configured. When implementing, typical commands might include:*
- Static site generator setup (suggested: Eleventy, Next.js, or similar)
- CSS preprocessing if needed (specifications are written in vanilla CSS)
- Image optimization pipeline for assets
- Form handling backend integration