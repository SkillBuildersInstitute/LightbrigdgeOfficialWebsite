# Administration Guide - Lightbridge Consulting CMS

Complete guide for managing content and administering the Lightbridge Consulting website.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [CMS Overview](#cms-overview)
- [Content Management](#content-management)
- [Security Administration](#security-administration)
- [User Management](#user-management)
- [Backup and Recovery](#backup-and-recovery)
- [Performance Monitoring](#performance-monitoring)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)
- [Maintenance Schedule](#maintenance-schedule)

## 🚀 Getting Started

### Accessing the CMS

**Development Environment:**
```
URL: http://localhost:8000/cms/admin.html
Authentication: Basic (development mode)
```

**Production Environment:**
```
URL: https://lightbrigdge-official-website.vercel.app/cms/admin.html
Authentication: Browser-based (localStorage)
Note: Currently uses localStorage. Implement authentication for production use.
```

### First-Time Setup

1. **Access the CMS interface**
2. **Verify security features are working**
3. **Test content editing functionality**
4. **Set up backup procedures**
5. **Configure monitoring**

### System Requirements

**Browser Support:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Permissions:**
- JavaScript enabled
- localStorage access
- Secure context (HTTPS in production)

## 🎛️ CMS Overview

### CMS Architecture

The Lightbridge Consulting CMS is a lightweight, secure content management system built with:

- **Frontend**: HTML5, CSS3, JavaScript
- **Editor**: Quill.js WYSIWYG editor
- **Security**: OWASP-compliant security measures
- **Storage**: localStorage (development) / Database (production)

### Key Features

**Content Management:**
- Real-time WYSIWYG editing with Quill.js
- Live preview of changes
- 7 dedicated management panels
- Pricing management for all services
- Footer link management
- Auto-save to localStorage
- Export pricing functionality

**Security Features:**
- CSRF protection
- Input sanitization
- Rate limiting
- Security event logging
- Access control

**User Experience:**
- Intuitive tabbed interface
- Stats dashboard
- Mobile-responsive admin
- Real-time notifications
- One-click preview
- Help text for all fields

## ✏️ Content Management

### CMS Panel Overview

The CMS is organized into 7 dedicated panels for easy content management:

#### 1. Homepage Panel
Manage all homepage content including:
- **Hero Section**: Badge text, headline, subheadline (WYSIWYG)
- **Services Section**: Title and description text (with emoji support)
- **Contact Information**: Email and phone (updates site-wide)

#### 2. Pricing Panel 💰
Comprehensive pricing management for all services:
- **Collaborative Development**: Hourly rate, minimum project
- **Express Development**: Fixed price, timeline
- **Business Butler**: Monthly retainer, included hours
- **Business Boot Camp**: One-time fee, duration
- **Discovery Session**: Consultation fee
- **Currency**: USD, CAD, EUR, GBP selector
- **Export**: Download pricing as JSON

#### 3. About Panel
Manage about page content:
- Page headline
- Introduction and description (WYSIWYG editors)
- Timeline title
- Philosophy title

#### 4. Services Panel
Edit service offering content:
- Taglines for all 4 service offerings
- Service descriptions
- Feature highlights

#### 5. Legal Panel
Update legal information:
- Privacy Policy last updated date
- Terms of Service last updated date
- Legal contact information

#### 6. Submissions Panel 📧
View and manage all form submissions:
- **Display all contact form submissions** with timestamps
- **Sender details**: Name, email, phone number
- **Message content**: Full inquiry text
- **Service interest**: Which service they selected
- **Quick reply**: Click email to respond directly
- **Automatic storage**: All submissions saved in localStorage
- **Email notifications**: Sent to admin email (if configured)

**Managing Submissions:**
1. Click **Submissions** tab in CMS
2. View all inquiries with timestamps
3. Click **Reply** button to open email client
4. Use Export feature to backup all submissions

#### 7. Settings Panel ⚙️
Configure website and email settings:
- **Email Notifications**: Admin email address and notification toggles
- **Analytics**: Google Analytics ID
- **Social Media**: LinkedIn, Facebook, Twitter, GitHub links
- **Footer Links**: Case Studies and Blog URLs
- **Backup & Restore**: Export/import all CMS content

### Editable Content Areas

The website contains several editable content areas identified by `data-cms` attributes:

#### Homepage Content (`index.html`)

```html
<!-- Hero Section -->
data-cms="hero-headline"           → Main headline
data-cms="hero-subheadline"        → Supporting headline (managed via CMS)
data-cms="hero-description"        → Hero description text
data-cms="hero-cta-primary"        → Primary button text
data-cms="hero-cta-secondary"      → Secondary button text

<!-- Services Section -->
data-cms="services-title"          → Services section title
data-cms="services-description"    → Services intro description (with emojis)
data-cms="service-1-title"         → Collaborative Development title
data-cms="service-1-description"   → Service description
data-cms="service-2-title"         → Express Development title
data-cms="service-2-description"   → Service description
data-cms="service-3-title"         → Business Butler title
data-cms="service-3-description"   → Service description
data-cms="service-4-title"         → Business Bootcamp title
data-cms="service-4-description"   → Service description

<!-- About Section -->
data-cms="about-title"             → About section title
data-cms="about-description"       → About description
data-cms="credentials-title"       → Credentials title
```

#### About Page (`pages/about.html`)

```html
<!-- About Hero -->
data-cms="about-headline"          → Main about headline
data-cms="about-intro"             → Introduction paragraph
data-cms="about-description"       → Detailed description

<!-- Credentials -->
data-cms="credential-1-title"      → 30 Years Engineering
data-cms="credential-1-desc"       → Engineering description
data-cms="credential-2-title"      → 15 Years Teaching
data-cms="credential-2-desc"       → Teaching description
data-cms="credential-3-title"      → 7 Years Consulting
data-cms="credential-3-desc"       → Consulting description
data-cms="credential-4-title"      → Entrepreneur Since 1998
data-cms="credential-4-desc"       → Entrepreneur description

<!-- Timeline -->
data-cms="timeline-title"          → Timeline section title
data-cms="timeline-1-title"        → 1998 milestone
data-cms="timeline-1-desc"         → Milestone description
data-cms="timeline-2-title"        → 2010 milestone
data-cms="timeline-2-desc"         → Milestone description
data-cms="timeline-3-title"        → 2018 milestone
data-cms="timeline-3-desc"         → Milestone description
data-cms="timeline-4-title"        → 2025 milestone
data-cms="timeline-4-desc"         → Milestone description
```

### Content Editing Process

#### Step 1: Access the CMS

1. Navigate to `/cms/admin.html`
2. Authenticate (if required)
3. Review the content editing interface

#### Step 2: Select Content to Edit

1. **Content List**: View all editable content areas
2. **Search/Filter**: Find specific content by key or page
3. **Select**: Click on content item to edit

#### Step 3: Edit Content

1. **WYSIWYG Editor**: Rich text editing interface
2. **Formatting Options**:
   - Bold, italic, underline
   - Lists (ordered/unordered)
   - Links
   - Text alignment
   - Basic styling

3. **Content Guidelines**:
   - Maintain brand voice and tone
   - Keep marketing message consistency
   - Follow SEO best practices
   - Ensure mobile readability

#### Step 4: Preview Changes

1. **Live Preview**: See changes in real-time
2. **Device Preview**: Check mobile/tablet views
3. **Content Validation**: Automatic security checks

#### Step 5: Save Content

1. **Security Validation**: Content is sanitized
2. **Backup Creation**: Previous version backed up
3. **Save Confirmation**: Success/error feedback
4. **Log Entry**: Change logged for audit trail

### Content Types and Guidelines

#### Headlines and Titles

**Best Practices:**
- Use action-oriented language
- Include key benefits
- Keep under 60 characters for SEO
- Include "vibe coding" or collaborative language where appropriate

**Examples:**
```
Good: "We Build Software Together—You'll Understand Every Step"
Good: "Ready to Vibe Code Together?"
Avoid: "Software Development Services"
Avoid: "Contact Us"
```

#### Descriptions and Body Text

**Best Practices:**
- Use conversational, professional tone
- Include credibility markers (30 years, 15 years teaching)
- Focus on client benefits
- Keep paragraphs short for web reading

**Voice Guidelines:**
- Professional yet approachable
- Educational (teaching background)
- Collaborative language
- Results-focused

#### Call-to-Action Text

**Current CTAs:**
- "Book Discovery Session - $200"
- "Start the Conversation"
- "Ready to Vibe Code Together?"

**Guidelines:**
- Always include pricing transparency
- Use action verbs
- Create urgency when appropriate
- Test different variations

### Content Approval Workflow

#### Development Environment
1. Edit content directly
2. Preview changes
3. Save when satisfied

#### Production Environment (Recommended)
1. **Draft**: Create content changes
2. **Review**: Internal review process
3. **Approve**: Final approval before publishing
4. **Publish**: Make changes live
5. **Monitor**: Track performance impact

## 🔒 Security Administration

### Security Features Overview

The CMS includes comprehensive security measures:

**Input Security:**
- CSRF token protection
- Input sanitization
- XSS prevention
- HTML content filtering

**Access Control:**
- Session management
- Rate limiting
- Authentication logging
- Failed attempt monitoring

**Data Protection:**
- Content validation
- Secure storage
- Backup encryption
- Audit logging

### Security Monitoring

#### Security Event Types

```javascript
// Events automatically logged
'csrf_token_invalid'     → CSRF token validation failure
'rate_limit_exceeded'    → Too many requests from IP
'input_validation_failed'→ Input failed security validation
'form_submitted'         → Form submission (success)
'admin_content_save'     → CMS content saved
'admin_save_failed'      → CMS save operation failed
'suspicious_input'       → Potential attack detected
```

#### Viewing Security Logs

**Browser Console Method:**
```javascript
// View recent security events
const logs = JSON.parse(localStorage.getItem('security_logs') || '[]');
console.table(logs.slice(-20)); // Last 20 events
```

**Log Analysis:**
- Check for repeated failed attempts
- Monitor for suspicious input patterns
- Review rate limiting triggers
- Identify potential attacks

#### Security Alerts

**High Priority Events:**
- Multiple CSRF token failures
- Repeated rate limit violations
- Suspicious input patterns
- Failed authentication attempts

**Response Procedures:**
1. **Immediate**: Block suspicious IP if needed
2. **Investigation**: Analyze attack patterns
3. **Mitigation**: Update security rules if required
4. **Documentation**: Record incident details

### Security Configuration

#### Rate Limiting Settings

**Current Limits:**
```javascript
// Contact form submissions
'contact-form': 5 submissions per minute

// CMS operations
'cms-save': 20 operations per minute

// General form submissions
'form-submit': 10 submissions per minute
```

**Adjusting Rate Limits:**
```javascript
// In security.js, modify checkRateLimit calls
SecurityUtils.checkRateLimit('contact-form', 10, 60000); // 10 per minute
```

#### Input Validation Rules

**Contact Form Rules:**
```javascript
const contactValidationRules = {
    name: { required: true, type: 'name', minLength: 2, maxLength: 100 },
    email: { required: true, type: 'email', maxLength: 255 },
    phone: { required: false, type: 'phone', maxLength: 20 },
    service: { required: true, type: 'general', maxLength: 50 },
    timeline: { required: false, type: 'general', maxLength: 50 },
    message: { required: true, type: 'message', minLength: 10, maxLength: 2000 },
    newsletter: { required: false, type: 'boolean' }
};
```

#### Content Sanitization Rules

**HTML Allowed Tags:**
```javascript
// Safe HTML tags for content
const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li', 'a'];
const allowedAttributes = {
    'a': ['href', 'title'],
    '*': ['class'] // Allow class on all elements
};
```

## 👥 User Management

### Access Levels

#### Current Implementation (Development)
- **Basic Access**: localStorage-based authentication
- **Single User**: One admin account

#### Production Recommendations
- **Super Admin**: Full system access
- **Content Editor**: Content management only
- **Viewer**: Read-only access

### User Authentication

#### Development Setup
```javascript
// Simple password protection
const adminPassword = 'your-secure-password';

// Session management
function authenticateUser(password) {
    if (password === adminPassword) {
        sessionStorage.setItem('cms_authenticated', 'true');
        return true;
    }
    return false;
}
```

#### Production Implementation Needed
```php
// Secure user authentication system
class CMSAuth {
    public function login($username, $password) {
        // Verify against database
        // Create secure session
        // Log authentication attempt
    }

    public function checkAccess($requiredRole) {
        // Verify user session
        // Check user permissions
        // Log access attempt
    }
}
```

### Session Management

**Current Session Features:**
- Browser session storage
- Automatic timeout after inactivity
- Secure session IDs
- Session validation on each request

**Session Configuration:**
```javascript
// Session timeout (30 minutes)
const SESSION_TIMEOUT = 30 * 60 * 1000;

// Session validation
function validateSession() {
    const lastActivity = sessionStorage.getItem('last_activity');
    const now = Date.now();

    if (!lastActivity || (now - parseInt(lastActivity)) > SESSION_TIMEOUT) {
        // Session expired
        sessionStorage.clear();
        redirectToLogin();
        return false;
    }

    // Update last activity
    sessionStorage.setItem('last_activity', now.toString());
    return true;
}
```

## 💾 Backup and Recovery

### Backup Strategy

#### Current Backup (Development)
- **Storage**: Browser localStorage
- **Frequency**: On every save
- **Retention**: Limited by browser storage

#### Production Backup Strategy
- **Database Backups**: Daily automated backups
- **File Backups**: Weekly full backups
- **Content Versioning**: Track all content changes
- **Offsite Storage**: Cloud backup storage

### Creating Backups

#### Manual Content Backup
```javascript
// Export all CMS content
function exportCMSContent() {
    const content = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('cms_')) {
            content[key] = localStorage.getItem(key);
        }
    }

    // Download as JSON file
    const blob = new Blob([JSON.stringify(content, null, 2)], {
        type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cms-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
}
```

#### Restoring from Backup
```javascript
// Import CMS content
function importCMSContent(jsonFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const content = JSON.parse(e.target.result);

            // Validate content structure
            for (const [key, value] of Object.entries(content)) {
                if (key.startsWith('cms_')) {
                    // Security: Sanitize imported content
                    const sanitizedContent = SecurityUtils.sanitizeHTML(value);
                    localStorage.setItem(key, sanitizedContent);
                }
            }

            alert('Content imported successfully');
            location.reload();
        } catch (error) {
            alert('Error importing content: ' + error.message);
        }
    };
    reader.readAsText(jsonFile);
}
```

### Recovery Procedures

#### Content Recovery Steps

1. **Identify Issue**:
   - Content appears corrupted
   - Recent changes need to be reverted
   - Accidental deletion occurred

2. **Access Backup**:
   - Locate most recent backup file
   - Verify backup integrity
   - Check backup timestamp

3. **Restore Process**:
   - Stop making further changes
   - Import backup content
   - Verify restoration success
   - Test website functionality

4. **Post-Recovery**:
   - Document incident
   - Review what caused the issue
   - Update backup procedures if needed

## 📊 Performance Monitoring

### Content Performance Metrics

#### Page Load Impact
- Monitor how content changes affect load times
- Track image optimization needs
- Watch for excessive HTML content

#### User Engagement
- Monitor time spent on updated pages
- Track conversion rate changes
- Analyze user behavior after content updates

#### SEO Impact
- Monitor search ranking changes
- Track organic traffic impact
- Analyze click-through rates

### Content Analytics

#### Measuring Content Effectiveness

**Key Metrics:**
- Page views after content updates
- Time on page
- Bounce rate
- Conversion rate (form submissions)
- Search engine ranking positions

**Tools Setup:**
```javascript
// Google Analytics event tracking for content
function trackContentUpdate(contentKey, oldValue, newValue) {
    gtag('event', 'content_update', {
        'content_key': contentKey,
        'content_length': newValue.length,
        'custom_parameter': 'cms_update'
    });
}

// Track form conversions
function trackConversion(formType) {
    gtag('event', 'conversion', {
        'event_category': 'form_submission',
        'event_label': formType,
        'value': formType === 'discovery' ? 200 : 0
    });
}
```

### Performance Optimization

#### Content Best Practices

**Text Content:**
- Keep paragraphs under 150 words
- Use descriptive headings for SEO
- Include keywords naturally
- Optimize for mobile reading

**Image Content:**
- Use WebP format when possible
- Implement lazy loading
- Include alt text for accessibility
- Optimize file sizes

**HTML Structure:**
- Maintain semantic markup
- Use proper heading hierarchy
- Include structured data
- Ensure accessibility compliance

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue: CMS Won't Load

**Symptoms:**
- Blank CMS admin page
- JavaScript errors in console
- Editor doesn't initialize

**Troubleshooting Steps:**
1. Check browser console for errors
2. Verify all JavaScript files are loading
3. Check localStorage permissions
4. Test in different browsers
5. Clear browser cache and reload

**Solutions:**
```javascript
// Check if Quill.js loaded
if (typeof Quill === 'undefined') {
    console.error('Quill.js failed to load');
    // Reload the page or show error message
}

// Check localStorage availability
if (!window.localStorage) {
    console.error('localStorage not available');
    // Show fallback message
}
```

#### Issue: Content Not Saving

**Symptoms:**
- Save button doesn't respond
- Content reverts after refresh
- No success/error message

**Troubleshooting Steps:**
1. Check browser console for JavaScript errors
2. Verify localStorage space availability
3. Test with smaller content amounts
4. Check security validation errors

**Solutions:**
```javascript
// Check localStorage space
function checkLocalStorageSpace() {
    try {
        const testKey = 'storage-test';
        const testValue = 'x'.repeat(1000000); // 1MB test
        localStorage.setItem(testKey, testValue);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        console.error('localStorage space issue:', e);
        return false;
    }
}

// Enhanced error handling for save operations
function saveContentWithErrorHandling(key, content) {
    try {
        // Validate content first
        const sanitizedContent = SecurityUtils.sanitizeHTML(content);

        // Check storage space
        if (!checkLocalStorageSpace()) {
            throw new Error('Insufficient storage space');
        }

        // Save content
        localStorage.setItem(`cms_${key}`, sanitizedContent);

        // Log successful save
        SecurityUtils.logSecurityEvent('admin_content_save', {
            key: key,
            contentLength: content.length
        });

        return { success: true };
    } catch (error) {
        // Log error
        SecurityUtils.logSecurityEvent('admin_save_failed', {
            key: key,
            error: error.message
        });

        return {
            success: false,
            error: error.message
        };
    }
}
```

#### Issue: Security Warnings

**Symptoms:**
- CSRF token errors
- Rate limiting messages
- Input validation failures

**Troubleshooting Steps:**
1. Check security event logs
2. Verify session is valid
3. Test with clean browser session
4. Review recent security rule changes

**Solutions:**
```javascript
// Reset security state
function resetSecurityState() {
    // Clear rate limiting data
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('rate_limit_')) {
            localStorage.removeItem(key);
        }
    });

    // Generate new CSRF token
    const newToken = SecurityUtils.generateCSRFToken();
    sessionStorage.setItem('csrf_token', newToken);

    // Clear security logs if needed
    localStorage.removeItem('security_logs');

    console.log('Security state reset');
}
```

#### Issue: Content Display Problems

**Symptoms:**
- Content appears corrupted
- Formatting is lost
- Special characters display incorrectly

**Troubleshooting Steps:**
1. Check content in localStorage directly
2. Verify character encoding
3. Test content sanitization
4. Check for HTML entity issues

**Solutions:**
```javascript
// Debug content issues
function debugContentIssues(contentKey) {
    const rawContent = localStorage.getItem(`cms_${contentKey}`);
    console.log('Raw content:', rawContent);

    const element = document.querySelector(`[data-cms="${contentKey}"]`);
    if (element) {
        console.log('Element innerHTML:', element.innerHTML);
        console.log('Element textContent:', element.textContent);
    }

    // Test sanitization
    const sanitized = SecurityUtils.sanitizeHTML(rawContent);
    console.log('Sanitized content:', sanitized);
}
```

### Emergency Procedures

#### Content Rollback

If content update causes issues:

1. **Immediate Action:**
   ```javascript
   // Quick rollback to previous content
   const backupKey = `cms_${contentKey}_backup`;
   const backup = localStorage.getItem(backupKey);
   if (backup) {
       localStorage.setItem(`cms_${contentKey}`, backup);
       location.reload();
   }
   ```

2. **Full Site Restoration:**
   - Access full content backup
   - Import backup using CMS import function
   - Verify all pages display correctly
   - Test all functionality

#### Security Incident Response

If security breach suspected:

1. **Immediate Actions:**
   - Change all passwords
   - Review security logs
   - Block suspicious IP addresses
   - Take screenshots of evidence

2. **Investigation:**
   - Analyze security event logs
   - Check for data changes
   - Review access patterns
   - Document findings

3. **Recovery:**
   - Restore from clean backup
   - Update security measures
   - Monitor for continued issues
   - Update incident response procedures

## 📋 Best Practices

### Content Management Best Practices

#### Writing Guidelines

**Voice and Tone:**
- Maintain professional yet approachable tone
- Use active voice where possible
- Include credibility markers naturally
- Focus on client benefits

**SEO Optimization:**
- Include target keywords naturally
- Use descriptive headings
- Keep meta descriptions under 160 characters
- Include local SEO terms when relevant

**Conversion Optimization:**
- Use action-oriented language
- Include pricing transparency
- Create urgency when appropriate
- Test different CTAs

#### Content Planning

**Content Calendar:**
- Plan content updates in advance
- Coordinate with marketing campaigns
- Schedule seasonal updates
- Track performance of changes

**A/B Testing:**
- Test different headlines
- Compare CTA variations
- Measure conversion impact
- Document successful changes

#### Quality Assurance

**Before Publishing:**
- [ ] Spell check and grammar review
- [ ] Brand voice consistency check
- [ ] Mobile readability test
- [ ] Link functionality verification
- [ ] SEO optimization review

**After Publishing:**
- [ ] Visual quality check on live site
- [ ] Mobile device testing
- [ ] Performance impact assessment
- [ ] Analytics setup verification

### Security Best Practices

#### Regular Security Tasks

**Daily:**
- Review security event logs
- Monitor for suspicious activity
- Check backup completion

**Weekly:**
- Update security rules if needed
- Review user access logs
- Test security features

**Monthly:**
- Full security audit
- Password policy review
- Security training refresh

#### Content Security

**Input Validation:**
- Always sanitize user input
- Validate data types and lengths
- Check for malicious content
- Log validation failures

**Access Control:**
- Use principle of least privilege
- Regular access review
- Strong password requirements
- Session timeout enforcement

### Performance Best Practices

#### Content Performance

**Text Content:**
- Keep content concise and scannable
- Use bullet points for lists
- Break up long paragraphs
- Optimize for mobile reading

**Media Content:**
- Optimize images before upload
- Use appropriate file formats
- Implement lazy loading
- Include alt text for accessibility

#### Monitoring

**Key Metrics:**
- Page load times
- Time to first contentful paint
- Cumulative layout shift
- Form conversion rates

**Regular Reviews:**
- Weekly performance reports
- Monthly conversion analysis
- Quarterly SEO performance review
- Annual content audit

## 📅 Maintenance Schedule

### Daily Tasks (5 minutes)

- [ ] Check security event logs
- [ ] Verify website is accessible
- [ ] Review any error notifications
- [ ] Check backup completion status

### Weekly Tasks (30 minutes)

- [ ] Content performance review
- [ ] Security log analysis
- [ ] Test all forms functionality
- [ ] Mobile responsiveness check
- [ ] Update content calendar

### Monthly Tasks (2 hours)

- [ ] Full content audit
- [ ] Security policy review
- [ ] Performance optimization
- [ ] Analytics review and reporting
- [ ] Backup system verification
- [ ] User access review
- [ ] Content calendar planning

### Quarterly Tasks (1 day)

- [ ] Comprehensive security audit
- [ ] SEO performance analysis
- [ ] Content strategy review
- [ ] System updates evaluation
- [ ] User training updates
- [ ] Disaster recovery testing
- [ ] Documentation updates

### Annual Tasks (2 days)

- [ ] Complete system review
- [ ] Security policy overhaul
- [ ] Performance benchmark update
- [ ] Content strategy revision
- [ ] Technology stack evaluation
- [ ] Staff training program
- [ ] Business continuity planning

---

## 🎯 Quick Reference

### Common Tasks

**Update Pricing:**
1. Go to CMS → Pricing tab
2. Update price fields for any service
3. Click "Save Pricing Changes"
4. Refresh homepage to see changes

**Update Footer Links:**
1. Go to CMS → Settings tab
2. Scroll to "Footer Links" section
3. Enter URLs for Case Studies and/or Blog
4. Click "Save Settings"
5. Refresh any page to see changes

**Update Contact Information:**
1. Go to CMS → Homepage tab
2. Update email and/or phone in "Contact Information" section
3. Click "Save Homepage Changes"
4. Changes apply site-wide on next page load

**View Form Submissions:**
1. Go to CMS → Submissions tab
2. Review all submissions
3. Click "Reply" to respond via email

**Configure Email Notifications:**
1. Go to CMS → Settings tab
2. Scroll to "Email Notifications" section
3. Enter your admin email address
4. Check "Enable email notifications" box
5. Click "Save Settings"
6. Configure Web3Forms access key in Vercel (see EMAIL_SETUP.md)

**Export Pricing:**
1. Go to CMS → Pricing tab
2. Click "Export Pricing" button
3. JSON file downloads automatically

### Keyboard Shortcuts

- `Ctrl/Cmd + S` - Save current panel (when implemented)
- `Ctrl/Cmd + P` - Preview current page
- `Esc` - Close notification

### Browser Console Commands

```javascript
// View all saved content
Object.keys(localStorage).forEach(key => console.log(key, localStorage.getItem(key)));

// Clear all CMS data (use with caution!)
localStorage.clear();

// Export all CMS data
const cmsData = {};
Object.keys(localStorage).forEach(key => {
  if (key.startsWith('cms_')) cmsData[key] = localStorage.getItem(key);
});
console.log(JSON.stringify(cmsData, null, 2));
```

---

**Last Updated**: January 2025
**Administrator**: Lightbridge Consulting
**Version**: 2.0.0
**GitHub**: https://github.com/SkillBuildersInstitute/LightbrigdgeOfficialWebsite.git
**Live Site**: https://lightbrigdge-official-website.vercel.app/
**Support**: info@lightbridgeconsulting.com