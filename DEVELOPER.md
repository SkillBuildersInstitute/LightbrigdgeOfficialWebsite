# Developer Guide - Lightbridge Consulting Website

Complete technical guide for developers working on the Lightbridge Consulting website.

## 📋 Table of Contents

- [Development Environment Setup](#development-environment-setup)
- [Architecture Overview](#architecture-overview)
- [File Structure](#file-structure)
- [Core Components](#core-components)
- [Security Implementation](#security-implementation)
- [Content Management System](#content-management-system)
- [Styling and Design](#styling-and-design)
- [JavaScript Modules](#javascript-modules)
- [Deployment Guide](#deployment-guide)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Maintenance](#maintenance)

## 🛠️ Development Environment Setup

### Prerequisites

```bash
# Required tools
- Web browser (Chrome/Firefox recommended)
- Text editor (VS Code recommended)
- Local web server (Python, Node.js, or Apache)
- Git (for version control)
- Basic command line knowledge
```

### Local Development Setup

1. **Project Setup**
   ```bash
   # Navigate to project directory
   cd /path/to/LightbridgeConsulting

   # Start local development server
   cd src
   python3 -m http.server 8000

   # Alternative: Node.js server
   npx http-server . -p 8000

   # Alternative: PHP server
   php -S localhost:8000
   ```

2. **Development URLs**
   ```
   Main Site: http://localhost:8000
   CMS Admin: http://localhost:8000/cms/admin.html
   ```

3. **VS Code Extensions (Recommended)**
   ```
   - HTML CSS Support
   - JavaScript (ES6) code snippets
   - Live Server
   - Prettier - Code formatter
   - Auto Rename Tag
   ```

### Development Workflow

```bash
# 1. Make changes to HTML/CSS/JS files
# 2. Test in multiple browsers
# 3. Verify security features work
# 4. Check mobile responsiveness
# 5. Test CMS functionality
# 6. Validate HTML/CSS
# 7. Test performance
```

## 🏗️ Architecture Overview

### Technology Stack

**Frontend:**
- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Lucide Icons
- Google Fonts (Montserrat, Helvetica Neue)

**Libraries:**
- Quill.js (WYSIWYG editor for CMS)
- Lucide Icons (SVG icon system)

**Security:**
- Custom security utilities
- CSRF protection
- Input sanitization
- Rate limiting
- Security headers

### Design Patterns

**Modular JavaScript:**
```javascript
// SecurityUtils - Centralized security functions
// CMSManager - Content management functionality
// FormHandler - Form processing and validation
// UIManager - User interface interactions
```

**CSS Organization:**
```css
/* Base styles - Reset, typography, colors */
/* Layout - Grid, flexbox, containers */
/* Components - Buttons, cards, forms */
/* Pages - Page-specific styles */
/* Utilities - Helper classes */
```

## 📁 File Structure

### Core Files

```
src/
├── index.html                   # Homepage (main entry point)
├── css/
│   └── styles.css              # Main stylesheet
├── js/
│   ├── main.js                 # Core application logic
│   ├── security.js             # Security utilities
│   └── cms.js                  # CMS functionality
├── pages/                      # Website pages
├── cms/
│   └── admin.html              # CMS interface
└── images/                     # Static assets
```

### Page Templates

All pages follow this structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- SEO Meta Tags -->
    <!-- Fonts -->
    <!-- Styles -->
    <!-- Schema.org Markup -->
</head>
<body>
    <!-- Navigation -->
    <!-- Page Content -->
    <!-- Footer -->
    <!-- Scripts -->
</body>
</html>
```

## ⚙️ Core Components

### 1. Navigation Component

**File:** All HTML pages
**Purpose:** Consistent navigation across site

```html
<nav class="navbar">
    <div class="navbar-container">
        <div class="logo"><!-- Logo --></div>
        <ul class="nav-menu" id="navMenu"><!-- Navigation links --></ul>
        <a href="contact.html" class="btn btn-primary nav-cta">Book Discovery Session - $200</a>
        <button class="mobile-menu-toggle" id="mobileMenuToggle"><!-- Mobile toggle --></button>
    </div>
</nav>
```

**JavaScript:** `src/js/main.js`
```javascript
// Mobile menu toggle
document.getElementById('mobileMenuToggle')?.addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});
```

### 2. Form Components

**Contact Form:** `src/pages/contact.html`
**Security Features:**
- CSRF token validation
- Input sanitization
- Rate limiting
- Real-time validation

```javascript
// Form submission with security
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Rate limiting check
    if (!SecurityUtils.checkRateLimit('contact-form', 5, 60000)) {
        showError('Too many submissions. Please wait before trying again.');
        return;
    }

    // Get form data and validate
    const formData = new FormData(this);
    const validation = SecurityUtils.validateInput(formData, validationRules);

    if (!validation.isValid) {
        displayValidationErrors(validation.errors);
        return;
    }

    // Add CSRF token
    formData.append('csrf_token', SecurityUtils.generateCSRFToken());

    // Submit form (would connect to backend in production)
    handleFormSubmission(formData);
});
```

### 3. CMS Component

**File:** `src/cms/admin.html`
**Purpose:** Content management interface

**Key Features:**
- WYSIWYG editing with Quill.js
- Real-time preview
- Security validation
- Content persistence

```javascript
// CMS initialization
const cms = {
    editor: null,
    currentElement: null,

    init() {
        this.initializeEditor();
        this.bindEvents();
        this.loadContent();
    },

    initializeEditor() {
        this.editor = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [/* toolbar config */]
            }
        });
    }
};
```

## 🔒 Security Implementation

### Security Utilities (`src/js/security.js`)

**Core Security Functions:**

```javascript
const SecurityUtils = {
    // Generate CSRF tokens
    generateCSRFToken() {
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    },

    // Input sanitization
    sanitizeInput(input, type = 'general') {
        const sanitizers = {
            general: input => input.replace(/[<>]/g, '').trim(),
            email: input => input.toLowerCase().replace(/[^a-z0-9@._-]/g, ''),
            name: input => input.replace(/[^a-zA-Z\s'-]/g, '').trim(),
            phone: input => input.replace(/[^0-9()\s+-]/g, ''),
            message: input => input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        };

        return sanitizers[type] ? sanitizers[type](input) : sanitizers.general(input);
    },

    // Rate limiting
    checkRateLimit(key, maxAttempts, windowMs) {
        const now = Date.now();
        const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]');

        // Filter recent attempts
        const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);

        if (recentAttempts.length >= maxAttempts) {
            this.logSecurityEvent('rate_limit_exceeded', { key, attempts: recentAttempts.length });
            return false;
        }

        // Add current attempt
        recentAttempts.push(now);
        localStorage.setItem(`rate_limit_${key}`, JSON.stringify(recentAttempts));

        return true;
    },

    // Validation with rules
    validateInput(formData, rules) {
        const errors = [];
        const data = {};

        for (const [field, rule] of Object.entries(rules)) {
            let value = formData.get(field) || '';

            // Sanitize input
            value = this.sanitizeInput(value, rule.type || 'general');
            data[field] = value;

            // Required field check
            if (rule.required && !value) {
                errors.push(`${field} is required`);
                continue;
            }

            // Length validation
            if (value && rule.minLength && value.length < rule.minLength) {
                errors.push(`${field} must be at least ${rule.minLength} characters`);
            }

            if (value && rule.maxLength && value.length > rule.maxLength) {
                errors.push(`${field} must be no more than ${rule.maxLength} characters`);
            }

            // Type-specific validation
            if (value && rule.type === 'email' && !this.isValidEmail(value)) {
                errors.push(`${field} must be a valid email address`);
            }
        }

        return {
            isValid: errors.length === 0,
            errors,
            data
        };
    }
};
```

### Security Headers

**Implementation:** `src/js/security.js`
```javascript
// Set security headers (development - should be server-side in production)
function setSecurityHeaders() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com https://unpkg.com; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://unpkg.com";
    document.head.appendChild(meta);
}
```

### OWASP Top 10 2021 Compliance

**A01 - Broken Access Control:**
- Basic authentication for CMS
- Session management
- Role-based access control

**A03 - Injection:**
- Input sanitization for all form fields
- HTML content sanitization
- XSS prevention

**A07 - Identification and Authentication Failures:**
- CSRF token validation
- Rate limiting
- Secure session handling

## 🎨 Styling and Design

### CSS Architecture

**File:** `src/css/styles.css`

**Organization:**
```css
/* 1. CSS Reset and Base Styles */
/* 2. CSS Custom Properties (Variables) */
/* 3. Typography */
/* 4. Layout Components */
/* 5. UI Components */
/* 6. Page-Specific Styles */
/* 7. Responsive Design */
/* 8. Utility Classes */
```

### Design System

**Color Palette:**
```css
:root {
    --color-primary: #1f78b4;      /* Trust blue */
    --color-accent: #ff9500;       /* Collaborative orange */
    --color-text: #333333;         /* Main text */
    --color-text-light: #666666;   /* Secondary text */
    --color-background: #ffffff;   /* Page background */
    --color-section: #f8f9fa;      /* Section backgrounds */
    --color-border: #e5e5e5;       /* Borders */
}
```

**Typography:**
```css
:root {
    --font-primary: 'Montserrat', sans-serif;
    --font-body: 'Helvetica Neue', Arial, sans-serif;
    --font-size-h1: clamp(2rem, 5vw, 3.5rem);
    --font-size-h2: clamp(1.5rem, 4vw, 2.5rem);
    --font-size-body: 1.1rem;
    --line-height-body: 1.6;
}
```

**Component Patterns:**
```css
/* Button Component */
.btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    transition: all 0.2s ease;
    cursor: pointer;
    border: 2px solid transparent;
}

/* Card Component */
.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Form Components */
.form-input, .form-select, .form-textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--color-border);
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
}
```

### Responsive Design

**Mobile-First Approach:**
```css
/* Base styles for mobile */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
    .container {
        padding: 0 2rem;
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .container {
        padding: 0 3rem;
    }
}
```

## 📱 Content Management System

### CMS Architecture

**File:** `src/cms/admin.html`

**Core Components:**
1. **Editor Interface**: Quill.js WYSIWYG editor
2. **Content Preview**: Real-time preview of changes
3. **Content Persistence**: localStorage for development
4. **Security Integration**: All operations validated

### CMS Implementation

**Initialization:**
```javascript
// CMS Manager
const CMSManager = {
    editor: null,
    currentElement: null,
    previewFrame: null,

    init() {
        this.initializeEditor();
        this.loadEditableContent();
        this.bindEvents();
        this.initializePreview();
    },

    initializeEditor() {
        this.editor = new Quill('#editor', {
            theme: 'snow',
            placeholder: 'Start editing...',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    ['link'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['clean']
                ]
            }
        });
    }
};
```

**Content Editing Workflow:**

1. **Select Content**: Click on editable elements (marked with `data-cms="key"`)
2. **Edit**: Use WYSIWYG editor to modify content
3. **Preview**: See changes in real-time preview
4. **Save**: Persist changes to localStorage (production would use database)
5. **Security**: All content goes through sanitization

### Editable Content Areas

**HTML Markup:**
```html
<!-- Any element with data-cms attribute is editable -->
<h1 data-cms="hero-headline">Build Software Together, Not Alone</h1>
<p data-cms="hero-description">Your vision + My 30 years experience = Solutions that work</p>
<div data-cms="service-feature-1">Custom Application Development</div>
```

**CMS JavaScript:**
```javascript
// Load editable content
loadEditableContent() {
    document.querySelectorAll('[data-cms]').forEach(element => {
        const key = element.dataset.cms;
        const savedContent = localStorage.getItem(`cms_${key}`);

        if (savedContent) {
            // Security: Sanitize content before displaying
            element.innerHTML = SecurityUtils.sanitizeHTML(savedContent);
        }

        // Make element editable
        element.addEventListener('click', () => this.editContent(element, key));
    });
}
```

## 🔧 JavaScript Modules

### Main Application (`src/js/main.js`)

**Core Functionality:**
```javascript
// Application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize security
    SecurityUtils.setSecurityHeaders();

    // Initialize UI components
    initializeNavigation();
    initializeForms();
    initializeAnimations();

    // Initialize CMS (if on CMS page)
    if (window.location.pathname.includes('cms')) {
        CMSManager.init();
    }
});

// Form handling
function initializeForms() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Newsletter signup
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSignup);
    }
}
```

### Security Module (`src/js/security.js`)

**Key Functions:**
- `generateCSRFToken()`: Cryptographically secure token generation
- `sanitizeInput()`: Multi-type input sanitization
- `validateInput()`: Rule-based input validation
- `checkRateLimit()`: Time-window rate limiting
- `logSecurityEvent()`: Security event logging
- `setSecurityHeaders()`: Client-side security headers

### CMS Module (`src/js/cms.js`)

**Key Functions:**
- `init()`: Initialize CMS system
- `editContent()`: Start editing content
- `saveContent()`: Persist content changes
- `previewContent()`: Real-time preview updates
- `validateContent()`: Security validation for content

## 🚀 Deployment Guide

### Current Deployment (Vercel)

**Live Site**: https://lightbrigdge-official-website.vercel.app/
**GitHub Repo**: https://github.com/SkillBuildersInstitute/LightbrigdgeOfficialWebsite.git

**Deployment Process:**
1. Push code to `main` branch on GitHub
2. Vercel automatically detects changes
3. Builds and deploys within 1-2 minutes
4. Site goes live at production URL

**Vercel Configuration:**
- `vercel.json` handles routing and rewrites
- All requests routed through `/src` directory
- Security headers configured in `vercel.json`
- Automatic HTTPS enforcement
- CDN distribution worldwide

### Development vs Production

**Development Environment:**
- Client-side security headers
- localStorage for content persistence
- Minimal error handling
- Basic authentication

**Production (Current State):**
- localStorage for CMS (browser-based)
- Server-side security headers (via vercel.json)
- HTTPS enforced automatically
- CDN performance optimization
- Automatic deployments from GitHub

**Production (Recommended Upgrades):**
- Database for content storage (instead of localStorage)
- Server-side session management
- Authentication system for CMS access
- Centralized logging service
- Email notification integration

### Production Deployment Checklist

**1. Server Configuration:**
```apache
# Apache .htaccess
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com"

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

**2. File Permissions:**
```bash
# Set appropriate file permissions
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;

# Protect sensitive files
chmod 600 .htaccess
chmod 600 config.php (if using PHP backend)
```

**3. Database Setup (for production CMS):**
```sql
CREATE TABLE cms_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content_key VARCHAR(100) NOT NULL UNIQUE,
    content_value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX(content_key)
);

CREATE TABLE security_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL,
    user_session VARCHAR(100),
    event_data JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX(event_type, created_at)
);
```

**4. Backend Integration:**
```php
<?php
// Example PHP backend for form processing
session_start();

// CSRF Protection
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    http_response_code(403);
    die('Invalid CSRF token');
}

// Rate limiting
$client_ip = $_SERVER['REMOTE_ADDR'];
if (!checkRateLimit($client_ip, 'contact_form', 5, 300)) {
    http_response_code(429);
    die('Rate limit exceeded');
}

// Input validation and sanitization
$validation = validateContactForm($_POST);
if (!$validation['valid']) {
    http_response_code(400);
    echo json_encode(['errors' => $validation['errors']]);
    exit;
}

// Process form
processContactForm($validation['data']);
?>
```

### Performance Optimization

**1. Image Optimization:**
- Use WebP format where supported
- Implement lazy loading
- Serve appropriate sizes for device

**2. CSS/JS Optimization:**
- Minify CSS and JavaScript
- Implement critical CSS
- Use browser caching headers

**3. Monitoring:**
- Google Analytics for traffic
- Core Web Vitals monitoring
- Error tracking
- Security event monitoring

## 🧪 Testing

### Manual Testing Checklist

**Functionality Testing:**
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Forms submit successfully
- [ ] CMS editing works
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

**Security Testing:**
- [ ] CSRF protection works
- [ ] Input sanitization prevents XSS
- [ ] Rate limiting blocks excessive requests
- [ ] Security headers are present
- [ ] Error messages don't leak information

**Performance Testing:**
- [ ] Page load times under 3 seconds
- [ ] Images load properly
- [ ] Mobile performance acceptable
- [ ] Form submission feedback

### Automated Testing Setup

**HTML Validation:**
```bash
# Install HTML validator
npm install -g html-validate

# Validate all HTML files
html-validate src/**/*.html
```

**CSS Validation:**
```bash
# Install CSS validator
npm install -g css-validator

# Validate CSS
css-validator src/css/styles.css
```

**Security Testing:**
```javascript
// Security test suite
const securityTests = {
    testCSRFProtection() {
        // Test CSRF token generation and validation
    },

    testInputSanitization() {
        // Test various XSS payloads
    },

    testRateLimiting() {
        // Test rate limiting functionality
    }
};
```

## 🔍 Troubleshooting

### Common Issues

**1. CMS Not Loading:**
```javascript
// Check browser console for errors
// Verify Quill.js is loading
// Check localStorage permissions
```

**2. Forms Not Submitting:**
```javascript
// Check CSRF tokens
// Verify rate limiting not triggered
// Check input validation errors
```

**3. Styles Not Applied:**
```css
/* Check CSS file path */
/* Verify browser cache */
/* Check media queries */
```

**4. JavaScript Errors:**
```javascript
// Check browser compatibility
// Verify all dependencies loaded
// Check for syntax errors
```

### Debugging Tools

**Browser DevTools:**
- Network tab for loading issues
- Console for JavaScript errors
- Security tab for HTTPS issues
- Application tab for localStorage

**Security Debugging:**
```javascript
// Enable security logging
SecurityUtils.enableDebugLogging = true;

// Check security events
console.log(SecurityUtils.getSecurityLogs());
```

## 🔄 Maintenance

### Regular Maintenance Tasks

**Daily:**
- [ ] Check security logs
- [ ] Monitor form submissions
- [ ] Check website accessibility

**Weekly:**
- [ ] Review analytics data
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Backup content

**Monthly:**
- [ ] Update external dependencies
- [ ] Review security implementation
- [ ] Performance optimization
- [ ] Content review and updates

### Content Updates

**Using CMS:**
1. Access `/cms/admin.html`
2. Click on content to edit
3. Make changes in WYSIWYG editor
4. Preview changes
5. Save updates

**Manual Updates:**
1. Edit HTML files directly
2. Update `data-cms` attributes
3. Test changes locally
4. Deploy to production

### Security Maintenance

**Monitor Security Events:**
```javascript
// Review security logs
const logs = JSON.parse(localStorage.getItem('security_logs') || '[]');
const recentLogs = logs.filter(log =>
    Date.now() - log.timestamp < 24 * 60 * 60 * 1000
);
```

**Update Security Rules:**
- Review input validation rules
- Update rate limiting thresholds
- Check for new security vulnerabilities
- Update CSP headers as needed

---

**Last Updated**: January 2025
**Developer**: Lightbridge Consulting
**Version**: 1.0.0