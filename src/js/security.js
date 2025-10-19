// OWASP Security Utilities for Lightbridge Consulting
// Implements comprehensive security safeguards against common web vulnerabilities

class SecurityUtils {
    constructor() {
        this.initCSRFProtection();
        this.initRateLimiting();
        this.setupSecurityHeaders();
    }

    // OWASP A03:2021 - Injection Prevention
    static sanitizeInput(input, type = 'text') {
        if (typeof input !== 'string') {
            return '';
        }

        // Remove null bytes and control characters
        input = input.replace(/[\x00-\x1f\x7f-\x9f]/g, '');

        switch (type) {
            case 'email':
                return this.sanitizeEmail(input);
            case 'phone':
                return this.sanitizePhone(input);
            case 'name':
                return this.sanitizeName(input);
            case 'message':
                return this.sanitizeMessage(input);
            case 'html':
                return this.sanitizeHTML(input);
            default:
                return this.sanitizeText(input);
        }
    }

    static sanitizeText(input) {
        return input
            .trim()
            .replace(/[<>]/g, '') // Remove angle brackets to prevent basic XSS
            .substring(0, 500); // Limit length
    }

    static sanitizeName(input) {
        return input
            .trim()
            .replace(/[^a-zA-Z\s\-'\.]/g, '') // Allow only letters, spaces, hyphens, apostrophes, periods
            .substring(0, 100);
    }

    static sanitizeEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        input = input.trim().toLowerCase().substring(0, 254);
        return emailRegex.test(input) ? input : '';
    }

    static sanitizePhone(input) {
        // Remove all non-digit characters except +, -, (, ), and spaces
        return input
            .replace(/[^\d\+\-\(\)\s]/g, '')
            .substring(0, 20);
    }

    static sanitizeMessage(input) {
        return input
            .trim()
            .replace(/[<>]/g, '') // Basic XSS prevention
            .substring(0, 5000); // Reasonable message length limit
    }

    static sanitizeHTML(input) {
        // For WYSIWYG content - allow only safe HTML tags
        const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li', 'a'];
        const allowedAttributes = {
            'a': ['href', 'title']
        };

        // This is a simplified sanitizer - in production, use DOMPurify
        return input
            .replace(/<script[^>]*>.*?<\/script>/gi, '')
            .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+="[^"]*"/gi, '')
            .replace(/on\w+='[^']*'/gi, '');
    }

    // OWASP A07:2021 - Identification and Authentication Failures
    static validateInput(data, rules) {
        const errors = [];
        const sanitizedData = {};

        for (const [field, value] of Object.entries(data)) {
            const rule = rules[field];
            if (!rule) continue;

            // Check required fields
            if (rule.required && (!value || value.trim() === '')) {
                errors.push(`${field} is required`);
                continue;
            }

            // Sanitize input
            const sanitized = this.sanitizeInput(value, rule.type);
            sanitizedData[field] = sanitized;

            // Validate length
            if (rule.minLength && sanitized.length < rule.minLength) {
                errors.push(`${field} must be at least ${rule.minLength} characters`);
            }
            if (rule.maxLength && sanitized.length > rule.maxLength) {
                errors.push(`${field} must be no more than ${rule.maxLength} characters`);
            }

            // Custom validation
            if (rule.validate && !rule.validate(sanitized)) {
                errors.push(`${field} is not valid`);
            }
        }

        return {
            isValid: errors.length === 0,
            errors,
            data: sanitizedData
        };
    }

    // CSRF Protection
    static generateCSRFToken() {
        if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
            const array = new Uint8Array(32);
            crypto.getRandomValues(array);
            return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
        }
        // Fallback for older browsers
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    initCSRFProtection() {
        // Generate and store CSRF token
        if (!localStorage.getItem('csrf_token')) {
            const token = SecurityUtils.generateCSRFToken();
            localStorage.setItem('csrf_token', token);
        }

        // Add CSRF token to all forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            if (!form.querySelector('input[name="csrf_token"]')) {
                const csrfInput = document.createElement('input');
                csrfInput.type = 'hidden';
                csrfInput.name = 'csrf_token';
                csrfInput.value = localStorage.getItem('csrf_token');
                form.appendChild(csrfInput);
            }
        });
    }

    static validateCSRFToken(submittedToken) {
        const storedToken = localStorage.getItem('csrf_token');
        return storedToken && submittedToken === storedToken;
    }

    // Rate Limiting
    initRateLimiting() {
        this.submissionCounts = new Map();
        this.rateLimits = {
            contact: { limit: 5, window: 60000 }, // 5 submissions per minute
            search: { limit: 20, window: 60000 }   // 20 searches per minute
        };
    }

    checkRateLimit(action, identifier = 'anonymous') {
        const key = `${action}_${identifier}`;
        const now = Date.now();
        const limit = this.rateLimits[action];

        if (!limit) return true; // No limit defined

        if (!this.submissionCounts.has(key)) {
            this.submissionCounts.set(key, []);
        }

        const submissions = this.submissionCounts.get(key);

        // Clean old submissions outside the time window
        const validSubmissions = submissions.filter(time => now - time < limit.window);

        if (validSubmissions.length >= limit.limit) {
            return false; // Rate limit exceeded
        }

        // Add current submission
        validSubmissions.push(now);
        this.submissionCounts.set(key, validSubmissions);
        return true;
    }

    // Content Security Policy helpers
    setupSecurityHeaders() {
        // Note: Security headers like X-Frame-Options, X-Content-Type-Options, etc.
        // are already configured server-side in vercel.json and cannot be set via meta tags

        // Basic CSP for development - should be implemented server-side in production
        this.addMetaTag('Content-Security-Policy',
            "default-src 'self'; " +
            "script-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.quilljs.com https://fonts.googleapis.com; " +
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.quilljs.com; " +
            "font-src 'self' https://fonts.gstatic.com; " +
            "img-src 'self' data:; " +
            "connect-src 'self' https://unpkg.com;"
        );
    }

    addMetaTag(name, content) {
        if (!document.querySelector(`meta[http-equiv="${name}"]`)) {
            const meta = document.createElement('meta');
            meta.setAttribute('http-equiv', name);
            meta.setAttribute('content', content);
            document.head.appendChild(meta);
        }
    }

    // OWASP A09:2021 - Security Logging and Monitoring
    static logSecurityEvent(event, details = {}) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            event: event,
            details: details,
            userAgent: navigator.userAgent,
            url: window.location.href,
            sessionId: this.getSessionId()
        };

        // Store security logs
        const logs = JSON.parse(localStorage.getItem('security_logs') || '[]');
        logs.push(logEntry);

        // Keep only last 100 logs to prevent storage overflow
        if (logs.length > 100) {
            logs.splice(0, logs.length - 100);
        }

        localStorage.setItem('security_logs', JSON.stringify(logs));

        // In production, these should be sent to a server-side logging system
        console.warn('Security Event:', logEntry);
    }

    static getSessionId() {
        let sessionId = sessionStorage.getItem('session_id');
        if (!sessionId) {
            sessionId = this.generateCSRFToken();
            sessionStorage.setItem('session_id', sessionId);
        }
        return sessionId;
    }

    // Secure form submission helper
    static secureFormSubmit(formData, action) {
        // Validate CSRF token
        if (!this.validateCSRFToken(formData.csrf_token)) {
            this.logSecurityEvent('csrf_token_invalid', { action });
            throw new Error('Security validation failed');
        }

        // Check rate limiting
        const securityInstance = window.lightbridgeSecurity;
        if (securityInstance && !securityInstance.checkRateLimit(action)) {
            this.logSecurityEvent('rate_limit_exceeded', { action });
            throw new Error('Too many requests. Please try again later.');
        }

        // Validate and sanitize all form data
        const validationRules = this.getValidationRules(action);
        const validation = this.validateInput(formData, validationRules);

        if (!validation.isValid) {
            this.logSecurityEvent('input_validation_failed', {
                action,
                errors: validation.errors
            });
            throw new Error('Invalid input: ' + validation.errors.join(', '));
        }

        // Log successful validation
        this.logSecurityEvent('form_submitted', { action });

        return validation.data;
    }

    static getValidationRules(action) {
        const rules = {
            contact: {
                name: {
                    required: true,
                    type: 'name',
                    minLength: 2,
                    maxLength: 100
                },
                email: {
                    required: true,
                    type: 'email',
                    validate: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                },
                phone: {
                    required: false,
                    type: 'phone',
                    maxLength: 20
                },
                service: {
                    required: false,
                    type: 'text',
                    maxLength: 100
                },
                timeline: {
                    required: false,
                    type: 'text',
                    maxLength: 50
                },
                message: {
                    required: true,
                    type: 'message',
                    minLength: 10,
                    maxLength: 5000
                }
            }
        };

        return rules[action] || {};
    }
}

// Initialize security system
window.lightbridgeSecurity = new SecurityUtils();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SecurityUtils;
}