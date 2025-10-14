Website

# Lightbridge Consulting Website

## Complete Design & Development Specification

-----

# BRAND FOUNDATION

## Color System

```css
/* Primary Colors */
--bridge-gray: #A9A9A9;
--lighthouse-black: #000000;
--beam-orange: #FFA500;
--wave-blue: #1F78B4;

/* Secondary Colors */
--white: #FFFFFF;
--light-gray: #F0F0F0;
--deep-blue: #0B3D91;

/* Functional Colors */
--text-primary: #000000;
--text-secondary: #333333;
--text-muted: #666666;
--border-color: #DDDDDD;
--background-primary: #FFFFFF;
--background-secondary: #F0F0F0;
--background-accent: #0B3D91;

/* Interactive States */
--btn-primary: #FFA500;
--btn-primary-hover: #FF8C00;
--btn-secondary: #1F78B4;
--btn-secondary-hover: #155A8A;
--link-color: #1F78B4;
--link-hover: #0B3D91;
```

## Typography System

```css
/* Font Families */
--font-heading: 'Montserrat', sans-serif;
--font-body: 'Helvetica Neue', Arial, sans-serif;

/* Font Weights */
--weight-bold: 700;
--weight-regular: 400;
--weight-light: 300;

/* Font Sizes - Desktop */
--fs-hero: 56px;
--fs-h1: 48px;
--fs-h2: 36px;
--fs-h3: 28px;
--fs-h4: 24px;
--fs-h5: 20px;
--fs-body-large: 20px;
--fs-body: 16px;
--fs-body-small: 14px;
--fs-caption: 12px;

/* Line Heights */
--lh-tight: 1.2;
--lh-normal: 1.5;
--lh-relaxed: 1.7;

/* Letter Spacing */
--ls-tight: -0.02em;
--ls-normal: 0;
--ls-wide: 0.02em;
```

## Spacing System

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 40px;
--space-xl: 64px;
--space-2xl: 96px;
--space-3xl: 128px;

--container-width: 1200px;
--container-narrow: 800px;
--section-padding: 80px 0;
--section-padding-mobile: 48px 0;
```

## Layout Grid

```css
--grid-gap: 32px;
--grid-columns-desktop: 12;
--grid-columns-tablet: 8;
--grid-columns-mobile: 4;
```

-----

# GLOBAL STYLES

## Base Typography Styles

```css
body {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  font-weight: var(--weight-regular);
  line-height: var(--lh-normal);
  color: var(--text-primary);
  background-color: var(--background-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-tight);
  margin-bottom: var(--space-md);
}

h1 { font-size: var(--fs-h1); }
h2 { font-size: var(--fs-h2); }
h3 { font-size: var(--fs-h3); }
h4 { font-size: var(--fs-h4); }
h5 { font-size: var(--fs-h5); }

p {
  margin-bottom: var(--space-sm);
  line-height: var(--lh-relaxed);
}

.lead-text {
  font-size: var(--fs-body-large);
  line-height: var(--lh-relaxed);
  color: var(--text-secondary);
}

.caption {
  font-size: var(--fs-caption);
  font-weight: var(--weight-light);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
}
```

## Button Styles

```css
.btn {
  display: inline-block;
  padding: 16px 32px;
  font-family: var(--font-heading);
  font-size: var(--fs-body);
  font-weight: var(--weight-bold);
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-primary {
  background-color: var(--btn-primary);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--btn-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
}

.btn-secondary {
  background-color: var(--btn-secondary);
  color: var(--white);
}

.btn-secondary:hover {
  background-color: var(--btn-secondary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(31, 120, 180, 0.3);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--lighthouse-black);
  color: var(--lighthouse-black);
}

.btn-outline:hover {
  background-color: var(--lighthouse-black);
  color: var(--white);
}

.btn-large {
  padding: 20px 48px;
  font-size: var(--fs-body-large);
}
```

## Navigation Bar

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--space-sm) var(--space-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 60px;
  width: auto;
}

.nav-menu {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-family: var(--font-heading);
  font-size: var(--fs-body);
  font-weight: var(--weight-regular);
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--beam-orange);
  border-bottom: 2px solid var(--beam-orange);
}

.nav-cta {
  margin-left: var(--space-md);
}
```

-----

# PAGE 1: HOME PAGE

## Structure Overview

1. Hero Section (Full viewport height)
1. Services Overview (3 columns)
1. Why Lightbridge (2-column feature section)
1. Process Section (Timeline/Steps)
1. Credentials Showcase
1. Testimonials
1. CTA Section
1. Footer

-----

## 1.1 HERO SECTION

### Layout

```
[Full-width background with subtle gradient overlay]
├── Container (centered, 1200px max)
    ├── Logo (top left, subtle presence)
    ├── Headline (60% width, left-aligned)
    ├── Subheadline
    ├── Two CTA buttons (side by side)
    └── Credibility indicators (bottom)
```

### Visual Design

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    rgba(11, 61, 145, 0.05) 0%, 
    rgba(240, 240, 240, 0.3) 100%);
  position: relative;
  padding: var(--space-3xl) var(--space-md);
}

/* Subtle lighthouse beam effect */
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

.hero-content {
  max-width: 700px;
  z-index: 2;
}

.hero-badge {
  display: inline-block;
  background-color: rgba(255, 165, 0, 0.1);
  color: var(--beam-orange);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: var(--fs-body-small);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-md);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
}

.hero-headline {
  font-size: var(--fs-hero);
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  line-height: 1.1;
  color: var(--lighthouse-black);
  margin-bottom: var(--space-md);
}

.hero-headline .highlight {
  color: var(--beam-orange);
  position: relative;
}

.hero-subheadline {
  font-size: var(--fs-body-large);
  line-height: var(--lh-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--space-xl);
  max-width: 600px;
}

.hero-buttons {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.hero-credentials {
  display: flex;
  gap: var(--space-lg);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--border-color);
}

.credential-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.credential-icon {
  width: 24px;
  height: 24px;
  color: var(--beam-orange);
}

.credential-text {
  font-size: var(--fs-body-small);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
}
```

### Content

```html
<section class="hero">
  <div class="hero-content">
    <span class="hero-badge">Serving Your Community Since 1998</span>
    
    <h1 class="hero-headline">
      Build Software <span class="highlight">Together</span>,<br>
      Not Alone
    </h1>
    
    <p class="hero-subheadline">
      30 years of engineering. 15 years teaching. One collaborative approach 
      that transforms your vision into working software—while you understand 
      every step.
    </p>
    
    <div class="hero-buttons">
      <a href="#contact" class="btn btn-primary btn-large">
        Start Your Discovery Session
      </a>
      <a href="#services" class="btn btn-outline btn-large">
        Explore Services
      </a>
    </div>
    
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
    </div>
  </div>
</section>
```

-----

## 1.2 SERVICES OVERVIEW SECTION

### Layout

```
[White background, full width]
├── Section Header (centered)
├── Services Grid (3 columns)
│   ├── Collaborative Development (featured)
│   ├── Express Development
│   └── Technology Consulting
└── View Details Link
```

### Visual Design

```css
.services-overview {
  padding: var(--section-padding);
  background-color: var(--white);
}

.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--space-xl);
}

.section-badge {
  display: inline-block;
  color: var(--beam-orange);
  font-weight: var(--weight-bold);
  font-size: var(--fs-body-small);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
  margin-bottom: var(--space-sm);
}

.section-title {
  font-size: var(--fs-h2);
  color: var(--lighthouse-black);
  margin-bottom: var(--space-md);
}

.section-description {
  font-size: var(--fs-body-large);
  color: var(--text-secondary);
  line-height: var(--lh-relaxed);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  max-width: var(--container-width);
  margin: 0 auto;
}

.service-card {
  background: var(--background-secondary);
  border-radius: 8px;
  padding: var(--space-xl);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
}

.service-card.featured {
  background: linear-gradient(135deg, 
    rgba(31, 120, 180, 0.05) 0%, 
    rgba(255, 165, 0, 0.05) 100%);
  border-color: var(--beam-orange);
}

.service-card.featured::before {
  content: 'RECOMMENDED';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--beam-orange);
  color: var(--white);
  padding: 4px 16px;
  border-radius: 12px;
  font-size: var(--fs-caption);
  font-weight: var(--weight-bold);
  letter-spacing: var(--ls-wide);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, 
    var(--beam-orange) 0%, 
    #FF8C00 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
}

.service-icon svg {
  width: 32px;
  height: 32px;
  color: var(--white);
}

.service-title {
  font-size: var(--fs-h4);
  color: var(--lighthouse-black);
  margin-bottom: var(--space-sm);
}

.service-description {
  font-size: var(--fs-body);
  color: var(--text-secondary);
  line-height: var(--lh-relaxed);
  margin-bottom: var(--space-md);
}

.service-features {
  list-style: none;
  padding: 0;
  margin: var(--space-md) 0;
}

.service-features li {
  font-size: var(--fs-body-small);
  color: var(--text-secondary);
  padding-left: var(--space-md);
  margin-bottom: var(--space-sm);
  position: relative;
}

.service-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--beam-orange);
  font-weight: var(--weight-bold);
}

.service-cta {
  display: inline-block;
  color: var(--link-color);
  font-weight: var(--weight-bold);
  text-decoration: none;
  margin-top: var(--space-md);
  transition: color 0.3s ease;
}

.service-cta:hover {
  color: var(--link-hover);
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

### Content

```html
<section class="services-overview" id="services">
  <div class="section-header">
    <span class="section-badge">Our Services</span>
    <h2 class="section-title">Three Ways We Can Help</h2>
    <p class="section-description">
      From hands-on collaboration to rapid development, we meet you where you are 
      and deliver solutions that work.
    </p>
  </div>
  
  <div class="services-grid">
    <!-- Service Card 1: Collaborative Development (Featured) -->
    <article class="service-card featured">
      <div class="service-icon">
        <svg><!-- Collaborative icon --></svg>
      </div>
      <h3 class="service-title">Collaborative Development</h3>
      <p class="service-description">
        Work side-by-side with an experienced engineer who explains every decision. 
        Perfect for those who want to understand and shape their software.
      </p>
      <ul class="service-features">
        <li>Real-time "vibe coding" sessions</li>
        <li>Discover requirements together</li>
        <li>Learn as we build</li>
        <li>Full transparency throughout</li>
      </ul>
      <a href="/services/collaborative" class="service-cta">Learn More</a>
    </article>
    
    <!-- Service Card 2: Express Development -->
    <article class="service-card">
      <div class="service-icon">
        <svg><!-- Lightning icon --></svg>
      </div>
      <h3 class="service-title">Express Development</h3>
      <p class="service-description">
        Need it done quickly? Clear requirements meet efficient execution. 
        Get professional solutions without the collaborative sessions.
      </p>
      <ul class="service-features">
        <li>Rapid development timeline</li>
        <li>Fixed-scope projects</li>
        <li>Professional-grade code</li>
        <li>Milestone-based delivery</li>
      </ul>
      <a href="/services/express" class="service-cta">Learn More</a>
    </article>
    
    <!-- Service Card 3: Technology Consulting -->
    <article class="service-card">
      <div class="service-icon">
        <svg><!-- Lighthouse icon --></svg>
      </div>
      <h3 class="service-title">Technology Consulting</h3>
      <p class="service-description">
        Strategic guidance for your technology decisions. Architecture reviews, 
        vendor selection, and technical advisory services.
      </p>
      <ul class="service-features">
        <li>Architecture planning</li>
        <li>Technology stack selection</li>
        <li>Code review & audits</li>
        <li>Strategic advisory</li>
      </ul>
      <a href="/services/consulting" class="service-cta">Learn More</a>
    </article>
  </div>
</section>
```

-----

## 1.3 WHY LIGHTBRIDGE SECTION

### Layout

```
[Light gray background, full width]
├── Container
├── Left Column (40%)
│   ├── Section Header
│   ├── Description
│   └── Stats Grid
└── Right Column (60%)
    └── Feature Cards (stacked)
```

### Visual Design

```css
.why-lightbridge {
  padding: var(--section-padding);
  background-color: var(--background-secondary);
}

.why-container {
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: var(--space-xl);
  align-items: start;
}

.why-left {
  position: sticky;
  top: 120px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.stat-item {
  background-color: var(--white);
  padding: var(--space-md);
  border-radius: 8px;
  border-left: 4px solid var(--beam-orange);
}

.stat-number {
  font-size: var(--fs-h2);
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  color: var(--beam-orange);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--fs-body-small);
  color: var(--text-secondary);
  line-height: var(--lh-normal);
}

.feature-cards {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.feature-card {
  background-color: var(--white);
  padding: var(--space-xl);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: var(--space-md);
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
  background: linear-gradient(135deg, 
    var(--wave-blue) 0%, 
    var(--deep-blue) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon-wrapper svg {
  width: 28px;
  height: 28px;
  color: var(--white);
}

.feature-content h4 {
  font-size: var(--fs-h5);
  margin-bottom: var(--space-sm);
  color: var(--lighthouse-black);
}

.feature-content p {
  font-size: var(--fs-body);
  color: var(--text-secondary);
  line-height: var(--lh-relaxed);
  margin-bottom: 0;
}
```

### Content

```html
<section class="why-lightbridge">
  <div class="why-container">
    <div class="why-left">
      <span class="section-badge">Why Choose Us</span>
      <h2 class="section-title">Experience That Makes the Difference</h2>
      <p class="section-description">
        Three decades of solving real problems, fifteen years teaching others 
        how to think through challenges, and a genuine passion for building 
        software that actually works.
      </p>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">30</div>
          <div class="stat-label">Years Engineering Experience</div>
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
    
    <div class="feature-cards">
      <div class="feature-card">
        <div class="feature-icon-wrapper">
          <svg><!-- Brain/thinking icon --></svg>
        </div>
        <div class="feature-content">
          <h4>Systems Thinking from the Ground Up</h4>
          <p>
            15 years teaching database programming means I see the underlying 
            structure in every problem. I don't just build features—I architect 
            systems that scale, evolve, and actually solve the problem.
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
            Teaching forced me to break complex concepts into understandable 
            pieces. You won't get tech jargon—you'll get clear explanations 
            and genuine understanding of what we're building and why.
          </p>
        </div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon-wrapper">
          <svg><!-- Business/briefcase icon --></svg>
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
          <svg><!-- Discovery/magnifying glass icon --></svg>
        </div>
        <div class="feature-content">
          <h4>Uncovering Hidden Requirements</h4>
          <p>
            Most developers build what you ask for. I help you discover what 
            you actually need. Decades of experience means I ask questions you 
            haven't thought of and see possibilities you didn't know existed.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

-----

## 1.4 PROCESS SECTION

### Layout

```
[White background with subtle pattern]
├── Section Header (centered)
└── Timeline/Steps (horizontal on desktop, vertical on mobile)
    ├── Step 1: Discovery
    ├── Step 2: Collaborate
    ├── Step 3: Build
    └── Step 4: Deliver
```

### Visual Design

```css
.process-section {
  padding: var(--section-padding);
  background-color: var(--white);
  position: relative;
  overflow: hidden;
}

/* Subtle bridge pattern background */
.process-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(90deg, rgba(169, 169, 169, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(169, 169, 169, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

.process-container {
  max-width: var(--container-width);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-xl);
  position: relative;
}

/* Connecting line between steps */
.process-timeline::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, 
    var(--beam-orange) 0%, 
    var(--wave-blue) 100%);
  z-index: -1;
}

.process-step {
  position: relative;
  text-align: center;
}

.step-number {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space-md);
  background: linear-gradient(135deg, 
    var(--beam-orange) 0%, 
    #FF8C00 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-h3);
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  color: var(--white);
  box-shadow: 0 4px 16px rgba(255, 165, 0, 0.3);
  position: relative;
  z-index: 2;
}

.process-step:nth-child(even) .step-number {
  background: linear-gradient(135deg, 
    var(--wave-blue) 0%, 
    var(--deep-blue) 100%);
  box-shadow: 0 4px 16px rgba(31, 120, 180, 0.3);
}

.step-title {
  font-size: var(--fs-h5);
  color: var(--lighthouse-black);
  margin-bottom: var(--space-sm);
}

.step-description {
  font-size: var(--fs-body-small);
  color: var(--text-secondary);
  line-height: var(--lh-relaxed);
}

.step-duration {
  display: inline-block;
  margin-top: var(--space-sm);
  padding: 4px 12px;
  background-color: var(--background-secondary);
  border-radius: 12px;
  font-size: var(--fs-caption);
  font-weight: var(--weight-bold);
  color: var(--text-muted);
}
```

### Content

```html
<section class="process-section">
  <div class="process-container">
    <div class="section-header">
      <span class="section-badge">How We Work</span>
      <h2 class="section-title">A Clear Path from Vision to Reality</h2>
      <p class="section-description">
        Four straightforward steps that turn your ideas into working software
      </p>
    </div>
    
    <div class="process-timeline">
      <div class="process-step">
        <div class="step-number">1</div>
        <h3 class="step-title">Discovery</h3>
        <p class="step-description">
          We explore your vision, challenges, and goals. No technical jargon—
          just honest conversation about what you're trying to achieve.
        </p>
        <span class="step-duration">1-2 Sessions</span>
      </div>
      
      <div class="process-step">
        <div class="step-number">2</div>
        <h3 class="step-title">Collaborate</h3>
        <p class="step-description">
          Real-time vibe coding sessions where you see decisions being made 
          and understand the "why" behind every choice.
        </p>
        <span class="step-duration">Ongoing</span>
      </div>
      
      <div class="process-step">
        <div class="step-number">3</div>
        <h3 class="step-title">Build</h3>
        <p class="step-description">
          Professional-grade development with 30 years of best practices, 
          database-driven architecture, and modern technology.
        </p>
        <span class="step-duration">Project-Based</span>
      </div>
      
      <div class="process-step">
        <div class="step-number">4</div>
        <h3 class="step-title">Deliver</h3>
        <p class="step-description">
          You get working software, clear documentation, and the knowledge 
          to maintain and grow your solution confidently.
        </p>
        <span class="step-duration">Plus Training</span>
      </div>
    </div>
  </div>
</section>
```

-----

## 1.5 TESTIMONIALS SECTION

### Layout

```
[Deep blue background, full width]
├── Section Header (centered, white text)
└── Testimonial Slider/Grid
    ├── Testimonial Card 1
    ├── Testimonial Card 2
    └── Testimonial Card 3
```

### Visual Design

```css
.testimonials-section {
  padding: var(--section-padding);
  background: linear-gradient(135deg, 
    var(--deep-blue) 0%, 
    var(--wave-blue) 100%);
  color: var(--white);
}

.testimonials-section .section-badge {
  color: var(--beam-orange);
}

.testimonials-section .section-title,
.testimonials-section .section-description {
  color: var(--white);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  max-width: var(--container-width);
  margin: 0 auto;
  margin-top: var(--space-xl);
}

.testimonial-card {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: var(--space-xl);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.testimonial-quote {
  font-size: var(--fs-body-large);
  line-height: var(--lh-relaxed);
  color: var(--white);
  margin-bottom: var(--space-md);
  font-style: italic;
}

.testimonial-quote::before {
  content: '"';
  font-size: 48px;
  color: var(--beam-orange);
  line-height: 0;
  display: block;
  margin-bottom: var(--space-sm);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding-top: var(--space-md);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    var(--beam-orange) 0%, 
    #FF8C00 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-h5);
  font-weight: var(--weight-bold);
  color: var(--white);
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: var(--fs-body);
  font-weight: var(--weight-bold);
  color: var(--white);
  margin-bottom: 2px;
}

.author-title {
  font-size: var(--fs-body-small);
  color: rgba(255, 255, 255, 0.8);
}
```

### Content

```html
<section class="testimonials-section">
  <div class="section-header">
    <span class="section-badge">Client Success Stories</span>
    <h2 class="section-title">What Clients Say</h2>
    <p class="section-description">
      Real results from real partnerships
    </p>
  </div>
  
  <div class="testimonials-grid">
    <div class="testimonial-card">
      <p class="testimonial-quote">
        I had a vague idea of what I needed. He didn't just build what I asked 
        for—he helped me figure out what I actually needed. The collaborative 
        process was incredible.
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
        Finally, a developer who speaks human! I understood everything we were 
        building and why. His teaching background really shows.
      </p>
      <div class="testimonial-author">
        <div class="author-avatar">JC</div>
        <div class="author-info">
          <div class="author-name">James Cooper</div>
          <div class="author-title">Entrepreneur</div>
        </div>
      </div>
    </div>
    
    <div class="testimonial-card">
      <p class="testimonial-quote">
        The database structure he designed was brilliant. It handles things I 
        didn't even know I'd need yet. That's the value of 30 years experience.
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

-----

## 1.6 CTA SECTION

### Layout

```
[Beam orange background with pattern]
├── Container (centered)
├── Headline
├── Description
└── CTA Button
```

### Visual Design

```css
.cta-section {
  padding: var(--space-3xl) var(--space-md);
  background: linear-gradient(135deg, 
    var(--beam-orange) 0%, 
    #FF8C00 100%);
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
  font-size: var(--fs-h1);
  color: var(--white);
  margin-bottom: var(--space-md);
  line-height: var(--lh-tight);
}

.cta-description {
  font-size: var(--fs-body-large);
  color: var(--white);
  line-height: var(--lh-relaxed);
  margin-bottom: var(--space-xl);
  opacity: 0.95;
}

.cta-button-wrapper {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
}

.btn-white {
  background-color: var(--white);
  color: var(--beam-orange);
}

.btn-white:hover {
  background-color: var(--light-gray);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.btn-outline-white {
  background-color: transparent;
  border: 2px solid var(--white);
  color: var(--white);
}

.btn-outline-white:hover {
  background-color: var(--white);
  color: var(--beam-orange);
}
```

### Content

```html
<section class="cta-section">
  <div class="cta-container">
    <h2 class="cta-headline">Ready to Build Something Great?</h2>
    <p class="cta-description">
      Let's start with a conversation. No obligation—just a chance to explore 
      what's possible together.
    </p>
    <div class="cta-button-wrapper">
      <a href="#contact" class="btn btn-white btn-large">
        Book Discovery Session
      </a>
      <a href="tel:YOUR-PHONE" class="btn btn-outline-white btn-large">
        Call Now
      </a>
    </div>
  </div>
</section>
```

-----

## 1.7 FOOTER

### Visual Design

```css
.footer {
  background-color: var(--lighthouse-black);
  color: var(--white);
  padding: var(--space-xl) var(--space-md) var(--space-md);
}

.footer-container {
  max-width: var(--container-width);
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-xl);
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: var(--space-md);
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  height: 60px;
  margin-bottom: var(--space-md);
}

.footer-tagline {
  font-size: var(--fs-body);
  color: rgba(255, 255, 255, 0.8);
  line-height: var(--lh-relaxed);
  margin-bottom: var(--space-md);
}

.footer-social {
  display: flex;
  gap: var(--space-sm);
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--beam-orange);
  transform: translateY(-2px);
}

.footer-column h4 {
  font-size: var(--fs-h5);
  color: var(--white);
  margin-bottom: var(--space-md);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: var(--space-sm);
}

.footer-links a {
  font-size: var(--fs-body);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--beam-orange);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fs-body-small);
  color: rgba(255, 255, 255, 0.6);
}

.footer-bottom-links {
  display: flex;
  gap: var(--space-md);
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: var(--beam-orange);
}
```

### Content

```html
<footer class="footer">
  <div class="footer-container">
    <div class="footer-main">
      <div class="footer-brand">
        <img src="/logo-white.svg" alt="Lightbridge Consulting" class="footer-logo">
        <p class="footer-tagline">
          Guiding you from vision to working software with 30 years of 
          experience and genuine collaboration.
        </p>
        <div class="footer-social">
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg><!-- LinkedIn icon --></svg>
          </a>
          <a href="#" class="social-link" aria-label="Facebook">
            <svg><!-- Facebook icon --></svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <svg><!-- Twitter icon --></svg>
          </a>
        </div>
      </div>
      
      <div class="footer-column">
        <h4>Services</h4>
        <ul class="footer-links">
          <li><a href="/services/collaborative">Collaborative Development</a></li>
          <li><a href="/services/express">Express Development</a></li>
          <li><a href="/services/consulting">Technology Consulting</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Company</h4>
        <ul class="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/process">Our Process</a></li>
          <li><a href="/case-studies">Case Studies</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h4>Contact</h4>
        <ul class="footer-links">
          <li><a href="mailto:info@lightbridge.com">info@lightbridge.com</a></li>
          <li><a href="tel:555-0123">555-0123</a></li>
          <li><a href="/contact">Contact Form</a></li>
          <li><a href="#booking">Book Discovery</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 Lightbridge Consulting. All rights reserved.</p>
      <ul class="footer-bottom-links">
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </div>
  </div>
</footer>
```

-----

# PAGE 2: SERVICES - COLLABORATIVE DEVELOPMENT

## Page Structure

1. Hero Section (service-specific)
1. What Is Collaborative Development
1. Who It’s For
1. The Process Detail
1. Pricing Packages
1. FAQ
1. CTA
1. Footer

-----

## 2.1 SERVICE HERO SECTION

### Visual Design

```css
.service-hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    rgba(31, 120, 180, 0.08) 0%, 
    rgba(255, 165, 0, 0.08) 100%);
  padding: var(--space-3xl) var(--space-md);
  position: relative;
}

.service-hero-content {
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 55% 45%;
  gap: var(--space-xl);
  align-items: center;
}

.service-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  background-color: rgba(255, 165, 0, 0.1);
  color: var(--beam-orange);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: var(--fs-body-small);
  font-weight: var(--weight-bold);
  margin-bottom: var(--space-md);
}

.service-hero-headline {
  font-size: var(--fs-hero);
  line-height: 1.1;
  margin-bottom: var(--space-md);
}

.service-hero-description {
  font-size: var(--fs-body-large);
  color: var(--text-secondary);
  line-height: var(--lh-relaxed);
  margin-bottom: var(--space-xl);
}

.service-hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.hero-feature-item {
  display: flex;
  align-items: start;
  gap: var(--space-sm);
}

.hero-feature-icon {
  width: 24px;
  height: 24px;
  color: var(--beam-orange);
  flex-shrink: 0;
}

.hero-feature-text {
  font-size: var(--fs-body);
  color: var(--text-primary);
  line-height: var(--lh-normal);
}

.service-hero-image {
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.service-hero-image img {
  width: 100%;
  height: auto;
  display: block;
}
```

### Content

```html
<section class="service-hero">
  <div class="service-hero-content">
    <div>
      <span class="service-badge">
        <svg><!-- Star icon --></svg>
        Most Popular Service
      </span>
      <h1 class="service-hero-headline">
        Collaborative Development
      </h1>
      <p class="service-hero-description">
        Work side-by-side with an experienced engineer who explains every 
        decision. Perfect for those who want to understand their software, 
        not just receive it.
      </p>
      
      <div class="service-hero-features">
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Real-time vibe coding sessions</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Discover requirements together</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Learn as we build</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Full transparency throughout</span>
        </div>
      </div>
      
      <div class="hero-buttons">
        <a href="#pricing" class="btn btn-primary btn-large">View Pricing</a>
        <a href="#contact" class="btn btn-outline btn-large">Book Discovery</a>
      </div>
    </div>
    
    <div class="service-hero-image">
      <img src="/images/collaborative-coding.jpg" alt="Collaborative coding session">
    </div>
  </div>
</section>
```

-----

## 2.2 PRICING SECTION

### Visual Design

```css
.pricing-section {
  padding: var(--section-padding);
  background-color: var(--background-secondary);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  max-width: var(--container-width);
  margin: 0 auto;
  margin-top: var(--space-xl);
}

.pricing-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: var(--space-xl);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card.featured {
  border-color: var(--beam-orange);
  transform: scale(1.05);
  box-shadow: 0 16px 48px rgba(255, 165, 0, 0.2);
}

.pricing-card.featured::before {
  content: 'BEST VALUE';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--beam-orange);
  color: var(--white);
  padding: 4px 16px;
  border-radius: 12px;
  font-size: var(--fs-caption);
  font-weight: var(--weight-bold);
}

.pricing-card:hover:not(.featured) {
  border-color: var(--wave-blue);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.pricing-header {
  text-align: center;
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: var(--space-md);
}

.pricing-name {
  font-size: var(--fs-h4);
  color: var(--lighthouse-black);
  margin-bottom: var(--space-sm);
}

.pricing-price {
  font-size: var(--fs-h1);
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  color: var(--beam-orange);
  line-height: 1;
}

.pricing-period {
  font-size: var(--fs-body);
  color: var(--text-muted);
  font-weight: var(--weight-regular);
}

.pricing-description {
  font-size: var(--fs-body);
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: var(--space-md);
  line-height: var(--lh-relaxed);
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: var(--space-md) 0;
}

.pricing-features li {
  padding: var(--space-sm) 0;
  display: flex;
  align-items: start;
  gap: var(--space-sm);
  font-size: var(--fs-body);
  color: var(--text-secondary);
}

.pricing-features li svg {
  width: 20px;
  height: 20px;
  color: var(--beam-orange);
  flex-shrink: 0;
  margin-top: 2px;
}

.pricing-cta {
  margin-top: var(--space-xl);
  width: 100%;
}
```

### Content

```html
<section class="pricing-section" id="pricing">
  <div class="section-header">
    <span class="section-badge">Pricing</span>
    <h2 class="section-title">Collaborative Development Packages</h2>
    <p class="section-description">
      Choose the package that fits your project. All include discovery sessions, 
      collaborative development time, and documentation.
    </p>
  </div>
  
  <div class="pricing-grid">
    <!-- Starter Package -->
    <div class="pricing-card">
      <div class="pricing-header">
        <h3 class="pricing-name">Starter</h3>
        <div>
          <span class="pricing-price">$1,500</span>
        </div>
      </div>
      <p class="pricing-description">
        Perfect for small projects or proof-of-concepts
      </p>
      <ul class="pricing-features">
        <li>
          <svg><!-- Check icon --></svg>
          <span>10 hours collaborative coding</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>1 discovery session (2 hours)</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Basic documentation</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Email support</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Code repository access</span>
        </li>
      </ul>
      <a href="#contact" class="btn btn-outline pricing-cta">Get Started</a>
    </div>
    
    <!-- Standard Package (Featured) -->
    <div class="pricing-card featured">
      <div class="pricing-header">
        <h3 class="pricing-name">Standard</h3>
        <div>
          <span class="pricing-price">$3,500</span>
        </div>
      </div>
      <p class="pricing-description">
        Most popular for complete feature development
      </p>
      <ul class="pricing-features">
        <li>
          <svg><!-- Check icon --></svg>
          <span>25 hours collaborative coding</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>2 discovery sessions (4 hours)</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Comprehensive documentation</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Priority support</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Database design included</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>1 month post-launch support</span>
        </li>
      </ul>
      <a href="#contact" class="btn btn-primary pricing-cta">Get Started</a>
    </div>
    
    <!-- Comprehensive Package -->
    <div class="pricing-card">
      <div class="pricing-header">
        <h3 class="pricing-name">Comprehensive</h3>
        <div>
          <span class="pricing-price">$6,500</span>
        </div>
      </div>
      <p class="pricing-description">
        For complex projects requiring extensive collaboration
      </p>
      <ul class="pricing-features">
        <li>
          <svg><!-- Check icon --></svg>
          <span>50 hours collaborative coding</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>3 discovery sessions (6 hours)</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Full technical documentation</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Priority support</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Complete system architecture</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>3 months post-launch support</span>
        </li>
        <li>
          <svg><!-- Check icon --></svg>
          <span>Training sessions included</span>
        </li>
      </ul>
      <a href="#contact" class="btn btn-outline pricing-cta">Get Started</a>
    </div>
  </div>
  
  <div class="pricing-note">
    <p style="text-align: center; margin-top: var(--space-xl); color: var(--text-secondary);">
      <strong>Discovery Session Only:</strong> Not ready to commit? Book a 2-hour 
      discovery session for $200 to explore your project.
    </p>
  </div>
</section>
```

-----

# PAGE 3: SERVICES - EXPRESS DEVELOPMENT

## Page Structure (Similar to Collaborative but emphasized speed)

### Key Differences in Content:

- Hero emphasizes speed and efficiency
- Process section shows streamlined timeline
- Pricing reflects fixed-scope approach
- FAQ addresses time-sensitive needs

```html
<section class="service-hero">
  <div class="service-hero-content">
    <div>
      <span class="service-badge">
        <svg><!-- Lightning icon --></svg>
        Fast Track Option
      </span>
      <h1 class="service-hero-headline">
        Express Development
      </h1>
      <p class="service-hero-description">
        Clear requirements meet efficient execution. When time is essential 
        and you know what you need, we deliver professional solutions without 
        the collaborative sessions.
      </p>
      
      <div class="service-hero-features">
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Rapid development timeline</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Fixed-scope projects</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Professional-grade code</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Milestone-based delivery</span>
        </div>
      </div>
      
      <div class="hero-buttons">
        <a href="#contact" class="btn btn-primary btn-large">Request Quote</a>
        <a href="#how-it-works" class="btn btn-outline btn-large">How It Works</a>
      </div>
    </div>
    
    <div class="service-hero-image">
      <img src="/images/express-development.jpg" alt="Fast software development">
    </div>
  </div>
</section>
```

-----

# PAGE 4: TECHNOLOGY CONSULTING

## Page Structure

1. Hero Section
1. Consulting Services Grid
1. When You Need Consulting
1. Deliverables
1. Hourly Rate Section
1. CTA

### Content Focus

```html
<section class="service-hero">
  <div class="service-hero-content">
    <div>
      <span class="service-badge">
        <svg><!-- Lighthouse icon --></svg>
        Strategic Guidance
      </span>
      <h1 class="service-hero-headline">
        Technology Consulting
      </h1>
      <p class="service-hero-description">
        30 years of experience guiding your technology decisions. Architecture 
        reviews, vendor selection, code audits, and strategic advisory services.
      </p>
      
      <div class="service-hero-features">
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Architecture planning & review</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Technology stack selection</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Code review & quality audits</span>
        </div>
        <div class="hero-feature-item">
          <svg class="hero-feature-icon"><!-- Check icon --></svg>
          <span class="hero-feature-text">Strategic technology advisory</span>
        </div>
      </div>
      
      <div class="hero-buttons">
        <a href="#contact" class="btn btn-primary btn-large">Schedule Consultation</a>
      </div>
    </div>
    
    <div class="service-hero-image">
      <img src="/images/consulting.jpg" alt="Technology consulting">
    </div>
  </div>
</section>
```

-----

# PAGE 5: ABOUT PAGE

## Structure

1. Hero/Introduction
1. My Story
1. Credentials Timeline
1. Philosophy
1. Why I Do This
1. CTA

-----

## 5.1 ABOUT HERO SECTION

### Visual Design

```css
.about-hero {
  padding: var(--space-3xl) var(--space-md);
  background: linear-gradient(135deg, 
    rgba(11, 61, 145, 0.05) 0%, 
    rgba(240, 240, 240, 0.3) 100%);
}

.about-hero-content {
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: var(--space-xl);
  align-items: center;
}

.about-image-wrapper {
  position: relative;
}

.about-main-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
}

.about-accent-box {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(135deg, 
    var(--beam-orange) 0%, 
    #FF8C00 100%);
  color: var(--white);
  padding: var(--space-md);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(255, 165, 0, 0.3);
  text-align: center;
  min-width: 180px;
}

.about-accent-number {
  font-size: var(--fs-h1);
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.about-accent-label {
  font-size: var(--fs-body-small);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ls-wide);
}

.about-intro h1 {
  font-size: var(--fs-h1);
  margin-bottom: var(--space-md);
}

.about-intro .lead-text {
  margin-bottom: var(--space-md);
}

.credentials-summary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 2px solid var(--border-color);
}

.credential-summary-item {
  display: flex;
  align-items: start;
  gap: var(--space-sm);
}

.credential-summary-icon {
  width: 32px;
  height: 32px;
  background-color: rgba(255, 165, 0, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--beam-orange);
  flex-shrink: 0;
}

.credential-summary-text {
  flex: 1;
}

.credential-summary-title {
  font-weight: var(--weight-bold);
  color: var(--lighthouse-black);
  margin-bottom: 2px;
}

.credential-summary-description {
  font-size: var(--fs-body-small);
  color: var(--text-secondary);
}
```

### Content

```html
<section class="about-hero">
  <div class="about-hero-content">
    <div class="about-image-wrapper">
      <img src="/images/profile.jpg" alt="Your Name" class="about-main-image">
      <div class="about-accent-box">
        <div class="about-accent-number">30+</div>
        <div class="about-accent-label">Years Experience</div>
      </div>
    </div>
    
    <div class="about-intro">
      <h1>Building Software the Right Way for Three Decades</h1>
      <p class="lead-text">
        I've spent 30 years writing code, 15 years teaching others how to think 
        about software, and over two decades solving real business problems. 
        Lightbridge Consulting brings all of that together.
      </p>
      <p>
        What makes my approach different? I don't just build what you ask for—
        I help you discover what you actually need. Teaching database programming 
        at the college level taught me how to break down complex problems and 
        explain solutions clearly. That's what I bring to every project.
      </p>
      
      <div class="credentials-summary">
        <div class="credential-summary-item">
          <div class="credential-summary-icon">
            <svg><!-- Code icon --></svg>
          </div>
          <div class="credential-summary-text">
            <div class="credential-summary-title">30 Years Engineering</div>
            <div class="credential-summary-description">
              Building production systems across industries
            </div>
          </div>
        </div>
        
        <div class="credential-summary-item">
          <div class="credential-summary-icon">
            <svg><!-- Teaching icon --></svg>
          </div>
          <div class="credential-summary-text">
            <div class="credential-summary-title">15 Years Professor</div>
            <div class="credential-summary-description">
              Teaching database programming & app development
            </div>
          </div>
        </div>
        
        <div class="credential-summary-item">
          <div class="credential-summary-icon">
            <svg><!-- Consulting icon --></svg>
          </div>
          <div class="credential-summary-text">
            <div class="credential-summary-title">7 Years Consulting</div>
            <div class="credential-summary-description">
              Solving business challenges with technology
            </div>
          </div>
        </div>
        
        <div class="credential-summary-item">
          <div class="credential-summary-icon">
            <svg><!-- Business icon --></svg>
          </div>
          <div class="credential-summary-text">
            <div class="credential-summary-title">Entrepreneur Since 1998</div>
            <div class="credential-summary-description">
              Started first company, understand business needs
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

-----

## 5.2 JOURNEY TIMELINE SECTION

### Visual Design

```css
.journey-section {
  padding: var(--section-padding);
  background-color: var(--white);
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  margin-top: var(--space-xl);
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, 
    var(--beam-orange) 0%, 
    var(--wave-blue) 100%);
  transform: translateX(-50%);
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
  position: relative;
}

.timeline-item:nth-child(odd) .timeline-content {
  grid-column: 1;
  text-align: right;
}

.timeline-item:nth-child(odd) .timeline-year {
  grid-column: 2;
  justify-content: start;
}

.timeline-item:nth-child(even) .timeline-content {
  grid-column: 2;
  text-align: left;
}

.timeline-item:nth-child(even) .timeline-year {
  grid-column: 1;
  justify-content: end;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: var(--beam-orange);
  border: 4px solid var(--white);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 165, 0, 0.2);
  z-index: 2;
}

.timeline-year {
  display: flex;
  align-items: center;
}

.year-badge {
  background: linear-gradient(135deg, 
    var(--wave-blue) 0%, 
    var(--deep-blue) 100%);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: var(--fs-body);
  font-weight: var(--weight-bold);
}

.timeline-content {
  background-color: var(--background-secondary);
  padding: var(--space-md);
  border-radius: 8px;
}

.timeline-title {
  font-size: var(--fs-h5);
  color: var(--lighthouse-black);
  margin-bottom: var(--space-xs);
}

.timeline-description {
  font-size: var(--fs-body);
  color: var(--text-secondary);
  line-height: var(--lh-relaxed);
}
```

### Content

```html
<section class="journey-section">
  <div class="section-header">
    <span class="section-badge">My Journey</span>
    <h2 class="section-title">Three Decades of Learning and Building</h2>
  </div>
  
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">Started First Company</h3>
        <p class="timeline-description">
          Launched my first technology venture, learning firsthand what it 
          takes to build and run a software business.
        </p>
      </div>
      <div class="timeline-year">
        <span class="year-badge">1998</span>
      </div>
      <div class="timeline-dot"></div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">Began Teaching</h3>
        <p class="timeline-description">
          Started teaching database programming and application development 
          at the college level, transforming how I communicate technical concepts.
        </p>
      </div>
      <div class="timeline-year">
        <span class="year-badge">2010</span>
      </div>
      <div class="timeline-dot"></div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">Consulting Practice</h3>
        <p class="timeline-description">
          Expanded into full-time consulting, helping businesses solve complex 
          technology challenges and build scalable systems.
        </p>
      </div>
      <div class="timeline-year">
        <span class="year-badge">2018</span>
      </div>
      <div class="timeline-dot"></div>
    </div>
    
    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">Lightbridge Consulting</h3>
        <p class="timeline-description">
          Founded Lightbridge Consulting to bring collaborative development 
          to local businesses and the broader community.
        </p>
      </div>
      <div class="timeline-year">
        <span class="year-badge">2025</span>
      </div>
      <div class="timeline-dot"></div>
    </div>
  </div>
</section>
```

-----

# PAGE 6: CONTACT PAGE

## Structure

1. Hero/Introduction
1. Contact Form (Primary)
1. Alternative Contact Methods
1. FAQ Quick Links
1. Map (if applicable)

-----

## 6.1 CONTACT FORM SECTION

### Visual Design

```css
.contact-page {
  padding: var(--space-3xl) var(--space-md);
  background: linear-gradient(135deg, 
    rgba(240, 240, 240, 0.5) 0%, 
    rgba(255, 255, 255, 1) 100%);
}

.contact-container {
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 45% 55%;
  gap: var(--space-xl);
}

.contact-info {
  padding-right: var(--space-lg);
}

.contact-info h1 {
  font-size: var(--fs-h1);
  margin-bottom: var(--space-md);
}

.contact-info .lead-text {
  margin-bottom: var(--space-xl);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.contact-method {
  display: flex;
  align-items: start;
  gap: var(--space-md);
  padding: var(--space-md);
  background-color: var(--white);
  border-radius: 8px;
  border-left: 4px solid var(--beam-orange);
  transition: all 0.3s ease;
}

.contact-method:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.contact-method-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, 
    var(--beam-orange) 0%, 
    #FF8C00 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
}

.contact-method-content h3 {
  font-size: var(--fs-h5);
  margin-bottom: var(--space-xs);
  color: var(--lighthouse-black);
}

.contact-method-content p {
  font-size: var(--fs-body);
  color: var(--text-secondary);
  margin-bottom: var(--space-xs);
}

.contact-method-content a {
  color: var(--link-color);
  text-decoration: none;
  font-weight: var(--weight-bold);
  transition: color 0.3s ease;
}

.contact-method-content a:hover {
  color: var(--link-hover);
}

.response-time {
  display: inline-block;
  margin-top: var(--space-sm);
  padding: 4px 12px;
  background-color: rgba(255, 165, 0, 0.1);
  color: var(--beam-orange);
  border-radius: 12px;
  font-size: var(--fs-caption);
  font-weight: var(--weight-bold);
}

.contact-form-wrapper {
  background-color: var(--white);
  padding: var(--space-xl);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: var(--space-md);
}

.form-label {
  display: block;
  font-weight: var(--weight-bold);
  color: var(--lighthouse-black);
  margin-bottom: var(--space-xs);
  font-size: var(--fs-body);
}

.form-label.required::after {
  content: '*';
  color: var(--beam-orange);
  margin-left: 4px;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: var(--fs-body);
  border: 2px solid var(--border-color);
  border-radius: 6px;
  transition: all 0.3s ease;
  background-color: var(--white);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--beam-orange);
  box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.1);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.form-help-text {
  display: block;
  font-size: var(--fs-body-small);
  color: var(--text-muted);
  margin-top: var(--space-xs);
  font-style: italic;
}

.form-checkbox-group {
  display: flex;
  align-items: start;
  gap: var(--space-sm);
}

.form-checkbox {
  margin-top: 4px;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.form-checkbox-label {
  font-size: var(--fs-body-small);
  color: var(--text-secondary);
  line-height: var(--lh-relaxed);
  cursor: pointer;
}

.form-submit {
  width: 100%;
  margin-top: var(--space-md);
}

.form-note {
  text-align: center;
  font-size: var(--fs-body-small);
  color: var(--text-muted);
  margin-top: var(--space-md);
  font-style: italic;
}
```

### Content

```html
<section class="contact-page">
  <div class="contact-container">
    <div class="contact-info">
      <h1>Let's Start a Conversation</h1>
      <p class="lead-text">
        Whether you have a specific project in mind or just want to explore 
        possibilities, I'd love to hear from you.
      </p>
      
      <div class="contact-methods">
        <div class="contact-method">
          <div class="contact-method-icon">
            <svg><!-- Email icon --></svg>
          </div>
          <div class="contact-method-content">
            <h3>Email</h3>
            <p>Preferred for detailed inquiries</p>
            <a href="mailto:info@lightbridge.com">info@lightbridge.com</a>
            <span class="response-time">Response within 24 hours</span>
          </div>
        </div>
        
        <div class="contact-method">
          <div class="contact-method-icon">
            <svg><!-- Phone icon --></svg>
          </div>
          <div class="contact-method-content">
            <h3>Phone</h3>
            <p>For quick questions or urgent matters</p>
            <a href="tel:555-0123">(555) 555-0123</a>
            <span class="response-time">Mon-Fri, 9am-5pm</span>
          </div>
        </div>
        
        <div class="contact-method">
          <div class="contact-method-icon">
            <svg><!-- Calendar icon --></svg>
          </div>
          <div class="contact-method-content">
            <h3>Book Discovery Session</h3>
            <p>Schedule directly on my calendar</p>
            <a href="#booking">View Available Times →</a>
            <span class="response-time">$200 for 2 hours</span>
          </div>
        </div>
      </div>
      
      <div class="trust-indicators">
        <p style="font-size: var(--fs-body-small); color: var(--text-muted);">
          ✓ No high-pressure sales<br>
          ✓ Honest assessment of fit<br>
          ✓ Clear next steps<br>
          ✓ Your privacy respected
        </p>
      </div>
    </div>
    
    <div class="contact-form-wrapper">
      <h2 style="margin-bottom: var(--space-md);">Send Me a Message</h2>
      
      <form id="contactForm" action="/submit" method="POST">
        <div class="form-group">
          <label for="name" class="form-label required">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            class="form-input" 
            required
            placeholder="John Smith"
          >
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label required">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-input" 
            required
            placeholder="john@example.com"
          >
        </div>
        
        <div class="form-group">
          <label for="phone" class="form-label">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            class="form-input"
            placeholder="(555) 555-5555"
          >
          <span class="form-help-text">Optional, but helpful for quick follow-up</span>
        </div>
        
        <div class="form-group">
          <label for="service" class="form-label required">Service Interest</label>
          <select id="service" name="service" class="form-select" required>
            <option value="">Select a service...</option>
            <option value="collaborative">Collaborative Development</option>
            <option value="express">Express Development</option>
            <option value="consulting">Technology Consulting</option>
            <option value="discovery">Discovery Session Only</option>
            <option value="unsure">Not Sure Yet</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="timeline" class="form-label">Project Timeline</label>
          <select id="timeline" name="timeline" class="form-select">
            <option value="">Select timeline...</option>
            <option value="urgent">Urgent (Within 2 weeks)</option>
            <option value="soon">Soon (Within 1 month)</option>
            <option value="planning">Planning (1-3 months)</option>
            <option value="exploring">Just Exploring</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="message" class="form-label required">Tell Me About Your Project</label>
          <textarea 
            id="message" 
            name="message" 
            class="form-textarea" 
            required
            placeholder="What are you trying to build or solve? The more detail you provide, the better I can help."
          ></textarea>
          <span class="form-help-text">
            Don't worry about technical terms—just describe your challenge or vision
          </span>
        </div>
        
        <div class="form-group">
          <div class="form-checkbox-group">
            <input 
              type="checkbox" 
              id="newsletter" 
              name="newsletter" 
              class="form-checkbox"
            >
            <label for="newsletter" class="form-checkbox-label">
              Send me occasional tips and updates about software development 
              (you can unsubscribe anytime)
            </label>
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary form-submit">
          Send Message
        </button>
        
        <p class="form-note">
          I'll respond within 24 hours during business days
        </p>
      </form>
    </div>
  </div>
</section>
```

-----

# RESPONSIVE DESIGN SPECIFICATIONS

## Mobile Breakpoints

```css
/* Tablet: 768px - 1024px */
@media (max-width: 1024px) {
  :root {
    --fs-hero: 42px;
    --fs-h1: 36px;
    --fs-h2: 28px;
    --fs-h3: 22px;
    --space-xl: 48px;
    --space-2xl: 72px;
  }
  
  .services-grid,
  .pricing-grid,
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .why-container,
  .service-hero-content,
  .about-hero-content,
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .process-timeline {
    grid-template-columns: 1fr;
  }
  
  .process-timeline::before {
    left: 20px;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    grid-template-columns: 1fr;
    padding-left: 60px;
  }
  
  .timeline-dot {
    left: 20px;
    transform: none;
  }
}

/* Mobile: < 768px */
@media (max-width: 767px) {
  :root {
    --fs-hero: 32px;
    --fs-h1: 28px;
    --fs-h2: 24px;
    --fs-h3: 20px;
    --fs-body-large: 18px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --section-padding: 48px 16px;
  }
  
  .navbar-container {
    flex-wrap: wrap;
  }
  
  .nav-menu {
    flex-direction: column;
    width: 100%;
    gap: var(--space-sm);
  }
  
  .hero {
    min-height: auto;
    padding: var(--space-xl) var(--space-md);
  }
  
  .hero-headline {
    font-size: var(--fs-h1);
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .hero-credentials {
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .services-grid,
  .pricing-grid,
  .testimonials-grid,
  .stats-grid,
  .service-hero-features,
  .credentials-summary {
    grid-template-columns: 1fr;
  }
  
  .service-card.featured {
    transform: none;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
```