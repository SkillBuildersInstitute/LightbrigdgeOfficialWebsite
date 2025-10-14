# LIGHTBRIDGE CONSULTING

## Complete Website Development & Marketing Brief

### For Development Team & Marketing Implementation

**Document Version:** 1.0  
**Last Updated:** October 2025  
**Project Type:** Professional Services Website with CMS  
**Target Launch:** Q1 2026

-----

# EXECUTIVE SUMMARY

## Project Overview

Lightbridge Consulting requires a comprehensive website that showcases four distinct service offerings while maintaining a cohesive brand identity. The site must support content management, lead generation, and client education.

## Core Service Offerings

1. **Collaborative Software Development** - Partner-based coding with client involvement
1. **Express Development** - Fast-track software solutions for time-sensitive needs
1. **Business Butler Services** - Comprehensive business consulting and guidance
1. **Business Boot Camp** - Intensive program for new business formation

## Target Audiences

- Local small business owners
- Entrepreneurs starting new ventures
- Organizations needing custom software
- Businesses requiring strategic consulting
- Startups needing comprehensive guidance

## Key Business Differentiators

- 30 years software engineering experience
- 15 years college professor (database programming & app development)
- 7 years consulting experience
- Entrepreneur since 1998
- Unique combination of technical depth, teaching ability, and business acumen

-----

# BRAND IDENTITY SYSTEM

## Logo System

### Primary Logo Components

- **Bridge Element**: Gray (#A9A9A9) suspension bridge symbolizing connection
- **Lighthouse Element**: Black (#000000) lighthouse representing guidance
- **Beam Element**: Orange-yellow (#FFA500) beam showing direction
- **Wave Element**: Blue (#1F78B4) wave representing foundation

### Logo Usage Rules

```
PRIMARY LOGO: Full color on white/light backgrounds
ALTERNATIVE: Monochrome (grayscale) for print or constrained environments
MINIMUM SIZE: 120px width for digital, 1.5" for print
CLEAR SPACE: Minimum 50% of lighthouse height on all sides
PROHIBITED: No rotation, stretching, or color alterations
```

## Color Palette

### Primary Colors (Brand Identity)

```css
--bridge-gray: #A9A9A9;      /* Structure, stability, connection */
--lighthouse-black: #000000;  /* Authority, expertise, foundation */
--beam-orange: #FFA500;       /* Guidance, energy, action */
--wave-blue: #1F78B4;         /* Trust, reliability, depth */
```

### Secondary Colors (Supporting)

```css
--white: #FFFFFF;             /* Clarity, simplicity */
--light-gray: #F0F0F0;        /* Subtle backgrounds */
--deep-blue: #0B3D91;         /* Premium accent, depth */
```

### Functional Colors (UI/UX)

```css
--text-primary: #000000;
--text-secondary: #333333;
--text-muted: #666666;
--border-color: #DDDDDD;
--background-primary: #FFFFFF;
--background-secondary: #F0F0F0;
--background-accent: #0B3D91;
--success: #28A745;
--warning: #FFC107;
--error: #DC3545;
--info: #1F78B4;
```

### Color Application Guidelines

- **Orange (#FFA500)**: CTAs, highlights, active states, success indicators
- **Blue (#1F78B4)**: Links, secondary CTAs, trust elements
- **Deep Blue (#0B3D91)**: Premium sections, testimonials, emphasis areas
- **Gray (#A9A9A9)**: Borders, dividers, subtle elements
- **Black (#000000)**: Headings, primary text, high contrast needs

## Typography System

### Font Families

```css
/* Primary: Headings & Emphasis */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

/* Secondary: Body & Interface */
@import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@300;400&display=swap');

--font-heading: 'Montserrat', sans-serif;
--font-body: 'Helvetica Neue', Arial, sans-serif;
```

### Font Weights

```css
--weight-light: 300;   /* Captions, subtle text */
--weight-regular: 400; /* Body text, default */
--weight-bold: 700;    /* Headings, emphasis */
```

### Type Scale (Desktop)

```css
--fs-hero: 56px;        /* Homepage hero only */
--fs-h1: 48px;          /* Page titles */
--fs-h2: 36px;          /* Section headers */
--fs-h3: 28px;          /* Subsection headers */
--fs-h4: 24px;          /* Card titles */
--fs-h5: 20px;          /* Small headings */
--fs-body-large: 20px;  /* Lead paragraphs */
--fs-body: 16px;        /* Standard text */
--fs-body-small: 14px;  /* Supporting text */
--fs-caption: 12px;     /* Labels, metadata */
```

### Type Scale (Mobile < 768px)

```css
--fs-hero: 32px;
--fs-h1: 28px;
--fs-h2: 24px;
--fs-h3: 20px;
--fs-h4: 18px;
--fs-h5: 16px;
--fs-body-large: 18px;
--fs-body: 16px;
--fs-body-small: 14px;
--fs-caption: 12px;
```

### Line Heights

```css
--lh-tight: 1.2;     /* Headings */
--lh-normal: 1.5;    /* UI elements */
--lh-relaxed: 1.7;   /* Body text, readability */
```

### Letter Spacing

```css
--ls-tight: -0.02em;  /* Large headings */
--ls-normal: 0;       /* Body text */
--ls-wide: 0.02em;    /* Small caps, labels */
```

### Typography Usage Rules

```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-tight);
  color: var(--lighthouse-black);
}

/* Body Text */
body, p, li {
  font-family: var(--font-body);
  font-weight: var(--weight-regular);
  line-height: var(--lh-relaxed);
  color: var(--text-primary);
}

/* Captions & Labels */
.caption, .label {
  font-family: var(--font-body);
  font-weight: var(--weight-light);
  font-size: var(--fs-caption);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  color: var(--text-muted);
}
```

## Brand Voice & Tone

### Core Attributes

1. **Professional yet Approachable** - Expert without being intimidating
1. **Confident** - Clear, actionable guidance without arrogance
1. **Supportive** - Partnership-oriented, collaborative mindset
1. **Educational** - Teaching background shines through
1. **Authentic** - Genuine, honest, no corporate speak

### Writing Guidelines

- **DO**: Use clear, conversational language
- **DO**: Explain technical concepts simply
- **DO**: Show experience through examples, not boasting
- **DO**: Use “we” for collaboration, “I” for personal expertise
- **DON’T**: Use jargon without explanation
- **DON’T**: Make exaggerated claims
- **DON’T**: Sound overly formal or stiff
- **DON’T**: Use corporate buzzwords unnecessarily

### Tone by Context

- **Homepage**: Inspiring, welcoming, possibility-focused
- **Service Pages**: Informative, detailed, solution-oriented
- **About Page**: Personal, authentic, experience-focused
- **Contact**: Friendly, accessible, low-pressure
- **Blog/Resources**: Educational, helpful, expertise-sharing

-----

# DESIGN SYSTEM

## Spacing System

```css
--space-xs: 8px;      /* Tight spacing */
--space-sm: 16px;     /* Standard spacing */
--space-md: 24px;     /* Medium spacing */
--space-lg: 40px;     /* Large spacing */
--space-xl: 64px;     /* Extra large */
--space-2xl: 96px;    /* Section spacing */
--space-3xl: 128px;   /* Hero spacing */
```

## Layout System

```css
--container-width: 1200px;      /* Max content width */
--container-narrow: 800px;      /* Narrow content (articles) */
--section-padding: 80px 0;      /* Vertical section spacing */
--section-padding-mobile: 48px 0; /* Mobile sections */
--grid-gap: 32px;               /* Standard grid gap */
```

## Border Radius Scale

```css
--radius-sm: 4px;     /* Buttons, inputs */
--radius-md: 8px;     /* Cards, images */
--radius-lg: 12px;    /* Large cards */
--radius-full: 9999px; /* Pills, badges */
```

## Shadow System

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.2);
```

## Component Library

### Buttons

```css
/* Primary Button - Main CTAs */
.btn-primary {
  background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);
  color: #FFFFFF;
  padding: 16px 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: linear-gradient(135deg, #1F78B4 0%, #155A8A 100%);
  color: #FFFFFF;
  /* Same styling as primary */
}

/* Outline Button */
.btn-outline {
  background: transparent;
  border: 2px solid #000000;
  color: #000000;
  /* Same padding/sizing as primary */
}

.btn-outline:hover {
  background: #000000;
  color: #FFFFFF;
}

/* Large Button (Hero CTAs) */
.btn-large {
  padding: 20px 48px;
  font-size: 20px;
}

/* Small Button (Secondary actions) */
.btn-small {
  padding: 12px 24px;
  font-size: 14px;
}
```

### Cards

```css
/* Standard Card */
.card {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Featured Card (e.g., recommended service) */
.card-featured {
  border: 2px solid #FFA500;
  position: relative;
}

.card-featured::before {
  content: 'RECOMMENDED';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #FFA500;
  color: #FFFFFF;
  padding: 4px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
}
```

### Forms

```css
/* Form Input Fields */
.form-input {
  width: 100%;
  padding: 12px 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  border: 2px solid #DDDDDD;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #FFA500;
  box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.1);
}

/* Form Labels */
.form-label {
  display: block;
  font-weight: 700;
  color: #000000;
  margin-bottom: 8px;
  font-size: 16px;
}

.form-label.required::after {
  content: '*';
  color: #FFA500;
  margin-left: 4px;
}

/* Textarea */
.form-textarea {
  min-height: 150px;
  resize: vertical;
}

/* Select Dropdown */
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Dropdown arrow */
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}
```

### Badges & Pills

```css
/* Service Badge (e.g., "Most Popular") */
.badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 165, 0, 0.1);
  color: #FFA500;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Status Badge */
.badge-success {
  background: rgba(40, 167, 69, 0.1);
  color: #28A745;
}

.badge-info {
  background: rgba(31, 120, 180, 0.1);
  color: #1F78B4;
}
```

-----

# SITE STRUCTURE & NAVIGATION

## Primary Navigation

```
LOGO [Left]

Main Menu [Center/Right]:
- Home
- Services ▼
  - Collaborative Development
  - Express Development
  - Business Butler Services
  - Business Boot Camp
- About
- Resources ▼
  - Blog
  - Case Studies
  - FAQ
- Contact

CTA Button [Right]: "Book Discovery Session"
```

## Footer Navigation

```
Column 1: Brand
- Logo
- Tagline
- Social Links (LinkedIn, Facebook, Twitter)

Column 2: Services
- Collaborative Development
- Express Development
- Business Butler Services
- Business Boot Camp
- Pricing

Column 3: Company
- About
- Our Process
- Case Studies
- Blog
- Testimonials

Column 4: Contact
- Email
- Phone
- Contact Form
- Book Discovery
- Location (if applicable)

Bottom Bar:
- Copyright © 2025 Lightbridge Consulting
- Privacy Policy | Terms of Service
```

## Site Map

```
Homepage
├── Services
│   ├── Collaborative Software Development
│   ├── Express Development
│   ├── Business Butler Services
│   └── Business Boot Camp
├── About
├── Process
├── Case Studies (CMS-driven)
├── Blog (CMS-driven)
├── Resources
│   ├── Downloads
│   └── FAQ
├── Contact
├── Privacy Policy
└── Terms of Service
```

-----

# PAGE-BY-PAGE SPECIFICATIONS

# PAGE 1: HOMEPAGE

## Purpose

- Immediately communicate value proposition
- Showcase all four service offerings
- Build credibility through credentials
- Drive visitors to take action (book discovery or contact)

## Page Structure

1. Hero Section
1. Services Overview (4-column grid)
1. Why Lightbridge (credentials & differentiators)
1. Process/Approach Section
1. Testimonials
1. CTA Section
1. Footer

-----

## 1.1 HERO SECTION

### Layout Specifications

```
Full viewport height (min-height: 100vh)
Container: 1200px max-width, centered
Grid: 60% content (left) / 40% visual element (right)
Padding: 128px vertical, 24px horizontal
Background: Subtle gradient (light blue to light gray)
```

### Visual Elements

```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    rgba(11, 61, 145, 0.05) 0%, 
    rgba(240, 240, 240, 0.3) 100%);
  overflow: hidden;
}

/* Lighthouse beam effect (decorative) */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 10%;
  width: 400px;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 165, 0, 0.03) 50%, 
    transparent 100%);
  transform: skewX(-15deg);
  pointer-events: none;
}
```

### Content Structure

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      
      <!-- Badge -->
      <span class="hero-badge">
        Serving Your Community Since 1998
      </span>
      
      <!-- Main Headline -->
      <h1 class="hero-headline">
        Building Your Vision Into
        <span class="highlight">Working Software</span>
        and Growing Businesses
      </h1>
      
      <!-- Subheadline -->
      <p class="hero-subheadline">
        30 years of engineering expertise, 15 years of teaching experience, 
        and a collaborative approach that transforms ideas into reality—
        whether it's custom software or comprehensive business guidance.
      </p>
      
      <!-- CTA Buttons -->
      <div class="hero-buttons">
        <a href="#contact" class="btn btn-primary btn-large">
          Book Free Consultation
        </a>
        <a href="#services" class="btn btn-outline btn-large">
          Explore Services
        </a>
      </div>
      
      <!-- Trust Indicators -->
      <div class="hero-credentials">
        <div class="credential-item">
          <svg class="credential-icon"><!-- Code icon --></svg>
          <span class="credential-text">30 Years Engineering</span>
        </div>
        <div class="credential-item">
          <svg class="credential-icon"><!-- Education icon --></svg>
          <span class="credential-text">15 Years Teaching</span>
        </div>
        <div class="credential-item">
          <svg class="credential-icon"><!-- Business icon --></svg>
          <span class="credential-text">Entrepreneur Since 1998</span>
        </div>
        <div class="credential-item">
          <svg class="credential-icon"><!-- Consulting icon --></svg>
          <span class="credential-text">7 Years Consulting</span>
        </div>
      </div>
      
    </div>
  </div>
</section>
```

### Content Copy (Editable via CMS)

- **Badge Text**: “Serving Your Community Since 1998”
- **Headline**: “Building Your Vision Into Working Software and Growing Businesses”
- **Subheadline**: Full paragraph as shown
- **Primary CTA**: “Book Free Consultation” (link to contact form)
- **Secondary CTA**: “Explore Services” (anchor link to services section)

### Design Notes for Developer

- Hero should be responsive: stacked layout on mobile
- Headline highlight word (“Working Software”) should be orange (#FFA500)
- Lighthouse beam effect should be subtle, not overpowering
- Credentials should wrap on smaller screens
- Consider adding subtle parallax effect on scroll

-----

## 1.2 SERVICES OVERVIEW SECTION

### Layout Specifications

```
Background: White (#FFFFFF)
Padding: 80px vertical
Container: 1200px max-width
Grid: 4 columns (responsive: 2 cols tablet, 1 col mobile)
Gap: 32px between cards
```

### Section Header

```html
<div class="section-header">
  <span class="section-badge">What We Offer</span>
  <h2 class="section-title">Four Ways We Can Help Your Business</h2>
  <p class="section-description">
    From custom software development to complete business formation, 
    we provide the guidance and expertise you need to succeed.
  </p>
</div>
```

### Service Cards Layout

```
Each card contains:
├── Icon (64x64px, gradient background)
├── Service Name (H3)
├── Short Description (2-3 sentences)
├── Key Features (3-4 bullet points)
└── CTA Link ("Learn More →")
```

### Service Card 1: Collaborative Development

```html
<article class="service-card featured">
  <div class="service-icon">
    <svg><!-- Handshake/collaboration icon --></svg>
  </div>
  <h3 class="service-title">Collaborative Software Development</h3>
  <p class="service-description">
    Work side-by-side with an experienced engineer who explains every decision. 
    Perfect for those who want to understand their software, not just receive it.
  </p>
  <ul class="service-features">
    <li>Real-time "vibe coding" sessions</li>
    <li>Discover requirements together</li>
    <li>Learn as we build</li>
    <li>Full transparency throughout</li>
  </ul>
  <div class="service-pricing">
    <span class="price-from">Starting at</span>
    <span class="price-amount">$1,500</span>
  </div>
  <a href="/services/collaborative-development" class="service-cta">
    Learn More →
  </a>
</article>
```

### Service Card 2: Express Development

```html
<article class="service-card">
  <div class="service-icon">
    <svg><!-- Lightning/speed icon --></svg>
  </div>
  <h3 class="service-title">Express Development</h3>
  <p class="service-description">
    Need it done quickly? Clear requirements meet efficient execution. 
    Professional solutions delivered on accelerated timelines.
  </p>
  <ul class="service-features">
    <li>Rapid development timeline</li>
    <li>Fixed-scope projects</li>
    <li>Professional-grade code</li>
    <li>Milestone-based delivery</li>
  </ul>
  <div class="service-pricing">
    <span class="price-from">Custom Quote</span>
  </div>
  <a href="/services/express-development" class="service-cta">
    Learn More →
  </a>
</article>
```

### Service Card 3: Business Butler Services

```html
<article class="service-card">
  <div class="service-icon">
    <svg><!-- Concierge/butler icon --></svg>
  </div>
  <h3 class="service-title">Business Butler Services</h3>
  <p class="service-description">
    Your dedicated business consultant. We walk alongside you through every 
    challenge, providing guidance, expertise, and hands-on support.
  </p>
  <ul class="service-features">
    <li>Strategic business planning</li>
    <li>Operations optimization</li>
    <li>Technology integration</li>
    <li>Ongoing advisory support</li>
  </ul>
  <div class="service-pricing">
    <span class="price-from">Monthly retainer or hourly</span>
  </div>
  <a href="/services/business-butler" class="service-cta">
    Learn More →
  </a>
</article>
```

### Service Card 4: Business Boot Camp

```html
<article class="service-card">
  <div class="service-icon">
    <svg><!-- Rocket/launch icon --></svg>
  </div>
  <h3 class="service-title">Business Boot Camp</h3>
  <p class="service-description">
    Intensive program to complete everything needed to start your company. 
    From formation to launch in one comprehensive engagement.
  </p>
  <ul class="service-features">
    <li>Company formation & registration</li>
    <li>Business plan development</li>
    <li>Technology foundation setup</li>
    <li>Launch readiness checklist</li>
  </ul>
  <div class="service-pricing">
    <span class="price-from">2-4 week intensive</span>
    <span class="price-amount">$5,000</span>
  </div>
  <a href="/services/business-bootcamp" class="service-cta">
    Learn More →
  </a>
</article>
```

### Styling Specifications

```css
.service-card {
  background: #F0F0F0;
  border-radius: 8px;
  padding: 40px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
}

.service-card.featured {
  background: linear-gradient(135deg, 
    rgba(31, 120, 180, 0.05) 0%, 
    rgba(255, 165, 0, 0.05) 100%);
  border-color: #FFA500;
}

.service-card.featured::before {
  content: 'MOST POPULAR';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #FFA500;
  color: #FFFFFF;
  padding: 4px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: #1F78B4;
}

.service-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.service-icon svg {
  width: 32px;
  height: 32px;
  color: #FFFFFF;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}

.service-features li {
  padding-left: 24px;
  margin-bottom: 8px;
  position: relative;
  font-size: 14px;
  color: #333333;
}

.service-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #FFA500;
  font-weight: 700;
}

.service-pricing {
  margin: 24px 0;
  padding: 16px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  text-align: center;
}

.price-from {
  display: block;
  font-size: 12px;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.price-amount {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #FFA500;
  font-family: 'Montserrat', sans-serif;
}

.service-cta {
  display: inline-block;
  color: #1F78B4;
  font-weight: 700;
  text-decoration: none;
  margin-top: 16px;
  transition: color 0.3s ease;
}

.service-cta:hover {
  color: #0B3D91;
}

.service-cta::after {
  content: ' →';
  transition: transform 0.3s ease;
  display: inline-block;
}

.service-cta:hover::after {
  transform: translateX(4px);
}
```

-----

## 1.3 WHY LIGHTBRIDGE SECTION

### Layout Specifications

```
Background: Light Gray (#F0F0F0)
Padding: 80px vertical
Container: 1200px max-width
Grid: 40% (left sticky column) / 60% (right feature cards)
```

### Left Column: Credentials & Stats

```html
<div class="why-left">
  <span class="section-badge">Why Choose Lightbridge</span>
  <h2 class="section-title">Experience That Makes the Difference</h2>
  <p class="section-description">
    Three decades of building software, fifteen years teaching others how 
    to think through challenges, and genuine expertise in both technology 
    and business strategy.
  </p>
  
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number">30</div>
      <div class="stat-label">Years Software Engineering</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">15</div>
      <div class="stat-label">Years Teaching Database Programming</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">7</div>
      <div class="stat-label">Years Consulting</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">1998</div>
      <div class="stat-label">First Company Started</div>
    </div>
  </div>
</div>
```

### Right Column: Feature Cards

```html
<div class="feature-cards">
  
  <div class="feature-card">
    <div class="feature-icon-wrapper">
      <svg><!-- Database/architecture icon --></svg>
    </div>
    <div class="feature-content">
      <h4>Database-Driven Systems Thinking</h4>
      <p>
        15 years teaching database programming means I see the underlying 
        structure in every problem. I don't just build features—I architect 
        systems that scale, evolve, and solve the real problem.
      </p>
    </div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon-wrapper">
      <svg><!-- Teaching/explain icon --></svg>
    </div>
    <div class="feature-content">
      <h4>Professor Meets Practitioner</h4>
      <p>
        Teaching forced me to break complex concepts into understandable pieces. 
        You won't get tech jargon—you'll get clear explanations and genuine 
        understanding of what we're building and why.
      </p>
    </div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon-wrapper">
      <svg><!-- Business/strategy icon --></svg>
    </div>
    <div class="feature-content">
      <h4>Business-Minded Technology</h4>
      <p>
        As an entrepreneur since 1998 and 7 years consulting, I understand 
        business constraints. I balance perfect versus practical, thinking 
        about ROI and real-world impact, not just technical elegance.
      </p>
    </div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon-wrapper">
      <svg><!-- Discovery/collaboration icon --></svg>
    </div>
    <div class="feature-content">
      <h4>Collaborative Discovery Process</h4>
      <p>
        Most developers build what you ask for. I help you discover what you 
        actually need. Decades of experience means I ask questions you haven't 
        thought of and see possibilities you didn't know existed.
      </p>
    </div>
  </div>
  
</div>
```

### Styling Specifications

```css
.why-container {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 64px;
  align-items: start;
}

.why-left {
  position: sticky;
  top: 120px; /* Below fixed navbar */
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 64px;
}

.stat-item {
  background: #FFFFFF;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #FFA500;
}

.stat-number {
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #FFA500;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
}

.feature-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-card {
  background: #FFFFFF;
  padding: 40px;
  border-radius: 8px;
  display: flex;
  gap: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateX(8px);
}

.feature-icon-wrapper {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #1F78B4 0%, #0B3D91 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon-wrapper svg {
  width: 28px;
  height: 28px;
  color: #FFFFFF;
}

.feature-content h4 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #000000;
}

.feature-content p {
  font-size: 16px;
  color: #333333;
  line-height: 1.7;
  margin: 0;
}
```

-----

## 1.4 TESTIMONIALS SECTION

### Layout Specifications

```
Background: Deep Blue gradient (#0B3D91 to #1F78B4)
Padding: 80px vertical
Container: 1200px max-width
Grid: 3 columns (responsive: 1 column mobile)
Text Color: White
```

### Content Structure

```html
<section class="testimonials-section">
  <div class="section-header">
    <span class="section-badge">Client Success</span>
    <h2 class="section-title">What Clients Say</h2>
    <p class="section-description">
      Real results from real partnerships
    </p>
  </div>
  
  <div class="testimonials-grid">
    
    <div class="testimonial-card">
      <p class="testimonial-quote">
        I had a vague idea of what I needed. He didn't just build what I 
        asked for—he helped me figure out what I actually needed. The 
        collaborative process was incredible.
      </p>
      <div class="testimonial-author">
        <div class="author-avatar">SM</div>
        <div class="author-info">
          <div class="author-name">Sarah Mitchell</div>
          <div class="author-title">Small Business Owner</div>
        </div>
      </div>
    </div>
    
    <div class="testimonial-card">
      <p class="testimonial-quote">
        The Business Butler service saved our company. Having someone who 
        understands both technology and business strategy made all the 
        difference during our critical growth phase.
      </p>
      <div class="testimonial-author">
        <div class="author-avatar">JC</div>
        <div class="author-info">
          <div class="author-name">James Cooper</div>
          <div class="author-title">Tech Startup Founder</div>
        </div>
      </div>
    </div>
    
    <div class="testimonial-card">
      <p class="testimonial-quote">
        The database structure he designed was brilliant. It handles things 
        I didn't even know I'd need yet. That's the value of 30 years 
        experience and genuine systems thinking.
      </p>
      <div class="testimonial-author">
        <div class="author-avatar">LP</div>
        <div class="author-info">
          <div class="author-name">Lisa Patel</div>
          <div class="author-title">Operations Manager</div>
        </div>
      </div>
    </div>
    
  </div>
</section>
```

### Styling Specifications

```css
.testimonials-section {
  background: linear-gradient(135deg, #0B3D91 0%, #1F78B4 100%);
  color: #FFFFFF;
}

.testimonials-section .section-badge {
  color: #FFA500;
}

.testimonials-section .section-title,
.testimonials-section .section-description {
  color: #FFFFFF;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 64px;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 40px;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.testimonial-quote {
  font-size: 20px;
  line-height: 1.7;
  color: #FFFFFF;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-quote::before {
  content: '"';
  font-size: 48px;
  color: #FFA500;
  line-height: 0;
  display: block;
  margin-bottom: 16px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #FFFFFF;
}

.author-name {
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 2px;
}

.author-title {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
```

-----

## 1.5 CTA SECTION

### Layout Specifications

```
Background: Orange gradient (#FFA500 to #FF8C00)
Padding: 128px vertical
Text alignment: Center
Max-width: 800px centered
```

### Content Structure

```html
<section class="cta-section">
  <div class="cta-container">
    <h2 class="cta-headline">Ready to Build Something Great?</h2>
    <p class="cta-description">
      Whether you need custom software, comprehensive business guidance, 
      or an intensive boot camp to launch your company—let's start with 
      a conversation. No pressure, just exploring possibilities together.
    </p>
    <div class="cta-buttons">
      <a href="#contact" class="btn btn-white btn-large">
        Book Free Consultation
      </a>
      <a href="tel:555-0123" class="btn btn-outline-white btn-large">
        Call Now
      </a>
    </div>
  </div>
</section>
```

### Styling Specifications

```css
.cta-section {
  background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);
  padding: 128px 24px;
  position: relative;
  overflow: hidden;
}

/* Lighthouse beam pattern */
.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 200%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.1) 50%, 
    transparent 100%);
  transform: skewX(-15deg);
  pointer-events: none;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-headline {
  font-size: 48px;
  color: #FFFFFF;
  margin-bottom: 24px;
  line-height: 1.2;
}

.cta-description {
  font-size: 20px;
  color: #FFFFFF;
  line-height: 1.7;
  margin-bottom: 64px;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.btn-white {
  background: #FFFFFF;
  color: #FFA500;
  border: none;
}

.btn-white:hover {
  background: #F0F0F0;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.btn-outline-white {
  background: transparent;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
}

.btn-outline-white:hover {
  background: #FFFFFF;
  color: #FFA500;
}
```

-----

# PAGE 2: COLLABORATIVE SOFTWARE DEVELOPMENT

## Purpose

- Detail the collaborative development service
- Explain the vibe coding process
- Showcase pricing packages
- Address common questions
- Convert visitors to discovery sessions

## Page Structure

1. Service Hero Section
1. What Is Collaborative Development
1. Who It’s For
1. The Process (4 steps detail)
1. Pricing Packages
1. FAQ Accordion
1. CTA Section

-----

## 2.1 SERVICE HERO

### Content Structure

```html
<section class="service-hero">
  <div class="service-hero-content">
    <div class="hero-left">
      <span class="service-badge">
        <svg><!-- Star icon --></svg>
        Most Popular Service
      </span>
      
      <h1 class="service-hero-headline">
        Collaborative Software Development
      </h1>
      
      <p class="service-hero-description">
        Work side-by-side with an experienced engineer who explains every 
        decision. Perfect for those who want to understand their software, 
        not just receive it.
      </p>
      
      <div class="service-hero-features">
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check --></svg>
          <span>Real-time vibe coding sessions</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check --></svg>
          <span>Discover requirements together</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check --></svg>
          <span>Learn as we build</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check --></svg>
          <span>Full transparency throughout</span>
        </div>
      </div>
      
      <div class="hero-buttons">
        <a href="#pricing" class="btn btn-primary btn-large">
          View Pricing
        </a>
        <a href="#contact" class="btn btn-outline btn-large">
          Book Discovery
        </a>
      </div>
    </div>
    
    <div class="hero-right">
      <img src="/images/collaborative-coding.jpg" alt="Collaborative coding session">
    </div>
  </div>
</section>
```

-----

## 2.2 PRICING SECTION

### Content Structure

```html
<section class="pricing-section" id="pricing">
  <div class="section-header">
    <span class="section-badge">Pricing</span>
    <h2 class="section-title">Collaborative Development Packages</h2>
    <p class="section-description">
      Choose the package that fits your project. All include discovery sessions, 
      collaborative development time, and comprehensive documentation.
    </p>
  </div>
  
  <div class="pricing-grid">
    
    <!-- Starter Package -->
    <div class="pricing-card">
      <div class="pricing-header">
        <h3 class="pricing-name">Starter</h3>
        <div class="pricing-price">$1,500</div>
        <p class="pricing-duration">10 hours</p>
      </div>
      <p class="pricing-description">
        Perfect for small projects or proof-of-concepts
      </p>
      <ul class="pricing-features">
        <li><svg>✓</svg> 10 hours collaborative coding</li>
        <li><svg>✓</svg> 1 discovery session (2 hours)</li>
        <li><svg>✓</svg> Basic documentation</li>
        <li><svg>✓</svg> Email support</li>
        <li><svg>✓</svg> Code repository access</li>
      </ul>
      <a href="#contact" class="btn btn-outline pricing-cta">Get Started</a>
    </div>
    
    <!-- Standard Package (Featured) -->
    <div class="pricing-card featured">
      <div class="pricing-header">
        <h3 class="pricing-name">Standard</h3>
        <div class="pricing-price">$3,500</div>
        <p class="pricing-duration">25 hours</p>
      </div>
      <p class="pricing-description">
        Most popular for complete feature development
      </p>
      <ul class="pricing-features">
        <li><svg>✓</svg> 25 hours collaborative coding</li>
        <li><svg>✓</svg> 2 discovery sessions (4 hours)</li>
        <li><svg>✓</svg> Comprehensive documentation</li>
        <li><svg>✓</svg> Priority support</li>
        <li><svg>✓</svg> Database design included</li>
        <li><svg>✓</svg> 1 month post-launch support</li>
      </ul>
      <a href="#contact" class="btn btn-primary pricing-cta">Get Started</a>
    </div>
    
    <!-- Comprehensive Package -->
    <div class="pricing-card">
      <div class="pricing-header">
        <h3 class="pricing-name">Comprehensive</h3>
        <div class="pricing-price">$6,500</div>
        <p class="pricing-duration">50 hours</p>
      </div>
      <p class="pricing-description">
        For complex projects requiring extensive collaboration
      </p>
      <ul class="pricing-features">
        <li><svg>✓</svg> 50 hours collaborative coding</li>
        <li><svg>✓</svg> 3 discovery sessions (6 hours)</li>
        <li><svg>✓</svg> Full technical documentation</li>
        <li><svg>✓</svg> Priority support</li>
        <li><svg>✓</svg> Complete system architecture</li>
        <li><svg>✓</svg> 3 months post-launch support</li>
        <li><svg>✓</svg> Training sessions included</li>
      </ul>
      <a href="#contact" class="btn btn-outline pricing-cta">Get Started</a>
    </div>
    
  </div>
  
  <div class="pricing-note">
    <p>
      <strong>Discovery Session Only:</strong> Not ready to commit? Book a 
      2-hour discovery session for $200 to explore your project with no obligation.
    </p>
  </div>
</section>
```

-----

# PAGE 3: EXPRESS DEVELOPMENT

## Key Differentiators from Collaborative

- Emphasizes speed and efficiency
- Fixed-scope approach
- Milestone-based delivery
- Less client involvement

### Hero Content

```html
<h1>Express Development</h1>
<p class="service-hero-description">
  Clear requirements meet efficient execution. When time is essential and 
  you know what you need, we deliver professional software solutions without 
  the collaborative sessions.
</p>

<div class="service-hero-features">
  <div class="hero-feature-item">
    <svg>✓</svg> <span>Rapid development timeline</span>
  </div>
  <div class="hero-feature-item">
    <svg>✓</svg> <span>Fixed-scope projects</span>
  </div>
  <div class="hero-feature-item">
    <svg>✓</svg> <span>Professional-grade code</span>
  </div>
  <div class="hero-feature-item">
    <svg>✓</svg> <span>Milestone-based delivery</span>
  </div>
</div>
```

### When to Choose Express

```html
<section class="when-to-choose">
  <h2>Choose Express Development When:</h2>
  <ul>
    <li>You have clear, documented requirements</li>
    <li>Timeline is critical (launch date, deadline)</li>
    <li>You prefer hands-off development approach</li>
    <li>Scope is well-defined and unlikely to change</li>
    <li>You need professional execution without learning process</li>
  </ul>
</section>
```

### Pricing Structure

```
Custom quotes based on:
- Project scope and complexity
- Timeline requirements
- Technology stack
- Integration needs

Typical range: $5,000 - $25,000+
Contact for detailed quote
```

-----

# PAGE 4: BUSINESS BUTLER SERVICES

## Purpose

- Introduce comprehensive business consulting
- Position as ongoing partnership
- Explain scope of services
- Showcase value of dedicated advisor

## Page Structure

1. Service Hero
1. What Business Butler Includes
1. Service Tiers (Monthly Retainer vs Hourly)
1. Case Studies/Success Stories
1. CTA

-----

## 4.1 SERVICE HERO

### Content

```html
<section class="service-hero">
  <div class="service-hero-content">
    <div class="hero-left">
      <span class="service-badge">
        <svg><!-- Concierge icon --></svg>
        Comprehensive Business Support
      </span>
      
      <h1 class="service-hero-headline">
        Business Butler Services
      </h1>
      
      <p class="service-hero-description">
        Your dedicated business consultant who walks alongside you through 
        every challenge. From strategic planning to technology integration, 
        operations optimization to growth strategy—we provide the guidance 
        and hands-on support your business needs to thrive.
      </p>
      
      <div class="service-hero-features">
        <div class="hero-feature-item">
          <svg>✓</svg>
          <span>Strategic business planning & advisory</span>
        </div>
        <div class="hero-feature-item">
          <svg>✓</svg>
          <span>Operations optimization & process improvement</span>
        </div>
        <div class="hero-feature-item">
          <svg>✓</svg>
          <span>Technology integration & vendor selection</span>
        </div>
        <div class="hero-feature-item">
          <svg>✓</svg>
          <span>Ongoing support & problem-solving</span>
        </div>
      </div>
      
      <div class="hero-buttons">
        <a href="#pricing" class="btn btn-primary btn-large">
          View Service Tiers
        </a>
        <a href="#contact" class="btn btn-outline btn-large">
          Schedule Consultation
        </a>
      </div>
    </div>
    
    <div class="hero-right">
      <img src="/images/business-consulting.jpg" alt="Business consulting">
    </div>
  </div>
</section>
```

-----

## 4.2 WHAT’S INCLUDED SECTION

### Content Structure

```html
<section class="butler-services">
  <div class="section-header">
    <span class="section-badge">Services Included</span>
    <h2 class="section-title">What Your Business Butler Does</h2>
    <p class="section-description">
      Think of it as having a seasoned business advisor and technology expert 
      on call whenever you need guidance, strategy, or hands-on support.
    </p>
  </div>
  
  <div class="services-categories">
    
    <div class="category-card">
      <div class="category-icon">
        <svg><!-- Strategy icon --></svg>
      </div>
      <h3>Strategic Planning</h3>
      <ul>
        <li>Business model development & refinement</li>
        <li>Growth strategy & market positioning</li>
        <li>Competitive analysis & differentiation</li>
        <li>Financial planning & projections</li>
        <li>Risk assessment & mitigation</li>
      </ul>
    </div>
    
    <div class="category-card">
      <div class="category-icon">
        <svg><!-- Operations icon --></svg>
      </div>
      <h3>Operations Excellence</h3>
      <ul>
        <li>Process mapping & optimization</li>
        <li>Workflow automation opportunities</li>
        <li>Resource allocation & efficiency</li>
        <li>Quality control systems</li>
        <li>Team structure & role definition</li>
      </ul>
    </div>
    
    <div class="category-card">
      <div class="category-icon">
        <svg><!-- Technology icon --></svg>
      </div>
      <h3>Technology Integration</h3>
      <ul>
        <li>Technology stack assessment & planning</li>
        <li>Software vendor selection & evaluation</li>
        <li>System integration strategy</li>
        <li>Custom software vs off-the-shelf decisions</li>
        <li>Data management & security planning</li>
      </ul>
    </div>
    
    <div class="category-card">
      <div class="category-icon">
        <svg><!-- Growth icon --></svg>
      </div>
      <h3>Growth & Scaling</h3>
      <ul>
        <li>Scalability planning & preparation</li>
        <li>Expansion strategy & market entry</li>
        <li>Partnership & collaboration opportunities</li>
        <li>Revenue model optimization</li>
        <li>Customer acquisition & retention strategy</li>
      </ul>
    </div>
    
    <div class="category-card">
      <div class="category-icon">
        <svg><!-- Problem-solving icon --></svg>
      </div>
      <h3>Problem Resolution</h3>
      <ul>
        <li>Crisis management & rapid response</li>
        <li>Conflict resolution & negotiation support</li>
        <li>Troubleshooting technical challenges</li>
        <li>Vendor & contractor issues</li>
        <li>Strategic pivots & course corrections</li>
      </ul>
    </div>
    
    <div class="category-card">
      <div class="category-icon">
        <svg><!-- Advisory icon --></svg>
      </div>
      <h3>Ongoing Advisory</h3>
      <ul>
        <li>Regular check-ins & progress reviews</li>
        <li>On-call consultation as needed</li>
        <li>Decision-making support & validation</li>
        <li>Market insights & trends analysis</li>
        <li>Accountability & goal tracking</li>
      </ul>
    </div>
    
  </div>
</section>
```

-----

## 4.3 SERVICE TIERS

### Content Structure

```html
<section class="butler-pricing" id="pricing">
  <div class="section-header">
    <span class="section-badge">Service Tiers</span>
    <h2 class="section-title">Choose Your Engagement Level</h2>
    <p class="section-description">
      Whether you need occasional guidance or comprehensive ongoing support, 
      we have an option that fits your business needs and budget.
    </p>
  </div>
  
  <div class="pricing-grid">
    
    <!-- Hourly Consulting -->
    <div class="pricing-card">
      <div class="pricing-header">
        <h3 class="pricing-name">Hourly Consulting</h3>
        <div class="pricing-price">$200</div>
        <p class="pricing-duration">per hour</p>
      </div>
      <p class="pricing-description">
        Pay as you go for specific challenges or questions
      </p>
      <ul class="pricing-features">
        <li><svg>✓</svg> No long-term commitment</li>
        <li><svg>✓</svg> Schedule as needed</li>
        <li><svg>✓</svg> Specific problem-solving</li>
        <li><svg>✓</svg> Strategic advice sessions</li>
        <li><svg>✓</svg> Technology decisions</li>
      </ul>
      <div class="pricing-ideal">
        <strong>Ideal for:</strong> Occasional needs, specific projects, 
        supplementing existing team
      </div>
      <a href="#contact" class="btn btn-outline pricing-cta">Get Started</a>
    </div>
    
    <!-- Monthly Retainer - Essential -->
    <div class="pricing-card">
      <div class="pricing-header">
        <h3 class="pricing-name">Essential Support</h3>
        <div class="pricing-price">$1,500</div>
        <p class="pricing-duration">per month</p>
      </div>
      <p class="pricing-description">
        Ongoing advisory with regular check-ins
      </p>
      <ul class="pricing-features">
        <li><svg>✓</svg> 10 hours monthly consultation</li>
        <li><svg>✓</svg> Bi-weekly strategic meetings</li>
        <li><svg>✓</svg> Email support (48hr response)</li>
        <li><svg>✓</svg> Quarterly planning sessions</li>
        <li><svg>✓</svg> Priority scheduling</li>
        <li><svg>✓</svg> Document review & feedback</li>
      </ul>
      <div class="pricing-ideal">
        <strong>Ideal for:</strong> Growing businesses, regular strategic 
        guidance, ongoing projects
      </div>
      <a href="#contact" class="btn btn-outline pricing-cta">Get Started</a>
    </div>
    
    <!-- Monthly Retainer - Premium (Featured) -->
    <div class="pricing-card featured">
      <div class="pricing-header">
        <h3 class="pricing-name">Premium Partnership</h3>
        <div class="pricing-price">$3,500</div>
        <p class="pricing-duration">per month</p>
      </div>
      <p class="pricing-description">
        Comprehensive support with embedded advisor feel
      </p>
      <ul class="pricing-features">
        <li><svg>✓</svg> 25 hours monthly consultation</li>
        <li><svg>✓</svg> Weekly strategic meetings</li>
        <li><svg>✓</svg> Priority support (24hr response)</li>
        <li><svg>✓</svg> Monthly planning & review sessions</li>
        <li><svg>✓</svg> On-call availability</li>
        <li><svg>✓</svg> Team training & workshops</li>
        <li><svg>✓</svg> Crisis management support</li>
        <li><svg>✓</svg> Technology implementation assistance</li>
      </ul>
      <div class="pricing-ideal">
        <strong>Ideal for:</strong> Scaling businesses, major initiatives, 
        comprehensive transformation
      </div>
      <a href="#contact" class="btn btn-primary pricing-cta">Get Started</a>
    </div>
    
  </div>
  
  <div class="pricing-note">
    <p>
      <strong>Custom Engagements:</strong> Need something different? We can 
      create a custom engagement tailored to your specific situation. 
      <a href="#contact">Contact us</a> to discuss your needs.
    </p>
  </div>
</section>
```

-----

# PAGE 5: BUSINESS BOOT CAMP

## Purpose

- Introduce intensive startup formation program
- Detail complete business launch process
- Showcase comprehensive deliverables
- Convert aspiring entrepreneurs

## Page Structure

1. Service Hero
1. What You’ll Accomplish
1. The 2-4 Week Process