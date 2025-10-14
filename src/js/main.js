// Lightbridge Consulting - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initMobileMenu();
    initSmoothScrolling();
    initNavbarScroll();
    initFormHandling();
    initCMSContent();

    console.log('Lightbridge Consulting website initialized');
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Change icon between menu and X
            const icon = mobileMenuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }

            // Reinitialize Lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });

        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        });
    }
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

// Form Handling
function initFormHandling() {
    const forms = document.querySelectorAll('form[id^="contact"]');

    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
    });
}

function handleFormSubmission(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('[type="submit"]');

    // Disable submit button and show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
        // Convert FormData to object
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // Add timestamp and form type
        data.timestamp = new Date().toISOString();
        data.formType = form.id || 'contact';

        // Apply OWASP security validation and sanitization
        const sanitizedData = SecurityUtils.secureFormSubmit(data, 'contact');

        // Send to CMS with sanitized data
        submitToCMS(sanitizedData)
            .then(response => {
                showSuccessMessage(form);
                form.reset();

                // Generate new CSRF token after successful submission
                const newToken = SecurityUtils.generateCSRFToken();
                localStorage.setItem('csrf_token', newToken);
                const csrfInput = form.querySelector('input[name="csrf_token"]');
                if (csrfInput) {
                    csrfInput.value = newToken;
                }
            })
            .catch(error => {
                SecurityUtils.logSecurityEvent('form_submission_failed', {
                    error: error.message,
                    form: form.id
                });
                showErrorMessage(form, error);
            })
            .finally(() => {
                // Re-enable submit button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });

    } catch (securityError) {
        // Security validation failed
        showErrorMessage(form, securityError);
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
}

function showSuccessMessage(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    successDiv.innerHTML = `
        <div style="background: #28a745; color: white; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <strong>Thank you!</strong> Your message has been sent successfully. I'll respond within 24 hours during business days.
        </div>
    `;

    form.parentNode.insertBefore(successDiv, form);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function showErrorMessage(form, error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.innerHTML = `
        <div style="background: #dc3545; color: white; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <strong>Error:</strong> There was a problem sending your message. Please try again or contact us directly.
        </div>
    `;

    form.parentNode.insertBefore(errorDiv, form);

    // Remove error message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// CMS Integration Functions
async function submitToCMS(data) {
    // This would integrate with your chosen CMS
    // For now, we'll simulate the submission and store locally

    try {
        // Store in localStorage as fallback
        const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
        submissions.push(data);
        localStorage.setItem('contact_submissions', JSON.stringify(submissions));

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // In production, replace this with actual CMS API call:
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        // return response.json();

        return { success: true, id: Date.now() };

    } catch (error) {
        console.error('CMS submission error:', error);
        throw error;
    }
}

// Initialize CMS Content Management
function initCMSContent() {
    loadCMSContent();
    loadContactInformation();
}

async function loadCMSContent() {
    try {
        // This would load dynamic content from CMS
        // For now, we'll use the static content defined in HTML

        // In production, this might look like:
        // const content = await fetch('/api/content/homepage').then(r => r.json());
        // updatePageContent(content);

        console.log('CMS content loaded');
    } catch (error) {
        console.error('Failed to load CMS content:', error);
    }
}

// Load contact information from CMS and update all references
function loadContactInformation() {
    try {
        // Load contact info from CMS
        const cmsContent = JSON.parse(localStorage.getItem('cms_homepage_content') || '{}');
        const legalContent = JSON.parse(localStorage.getItem('cms_legal_content') || '{}');

        // Use CMS data if available, otherwise use defaults
        const contactEmail = cmsContent.contactEmail || legalContent.legalEmail || 'info@lightbridgeconsulting.com';
        const contactPhone = cmsContent.contactPhone || legalContent.legalPhone || '(555) 555-0123';

        // Update all email references in footers and contact info
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            // Only update if it's a company email (not user-specific emails)
            if (link.href.includes('lightbridgeconsulting') || link.href.includes('info@')) {
                link.href = `mailto:${contactEmail}`;
                link.textContent = contactEmail;
            }
        });

        // Update all phone references
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            // Extract just the phone number from href
            const cleanPhone = contactPhone.replace(/[^0-9]/g, '');
            link.href = `tel:${cleanPhone}`;
            link.textContent = contactPhone;
        });

        // Update any plain text phone/email references in footers
        const footerLinks = document.querySelectorAll('.footer-links a');
        footerLinks.forEach(link => {
            if (link.textContent.includes('@') || link.textContent.includes('info')) {
                link.textContent = contactEmail;
                link.href = `mailto:${contactEmail}`;
            }
            if (link.textContent.includes('555') || link.textContent.match(/\(\d{3}\)/)) {
                link.textContent = contactPhone;
                const cleanPhone = contactPhone.replace(/[^0-9]/g, '');
                link.href = `tel:${cleanPhone}`;
            }
        });

        console.log('Contact information updated from CMS:', { contactEmail, contactPhone });
    } catch (error) {
        console.error('Failed to load contact information:', error);
    }
}

// CMS Content Management Functions
const CMS = {
    // Update page content dynamically
    updateContent: function(selector, content) {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = content;
        }
    },

    // Update multiple elements
    updateMultiple: function(updates) {
        updates.forEach(update => {
            this.updateContent(update.selector, update.content);
        });
    },

    // Get current page content for editing
    getCurrentContent: function() {
        return {
            hero: {
                badge: document.querySelector('.hero-badge')?.textContent || '',
                headline: document.querySelector('.hero-headline')?.innerHTML || '',
                subheadline: document.querySelector('.hero-subheadline')?.textContent || ''
            },
            services: Array.from(document.querySelectorAll('.service-card')).map(card => ({
                title: card.querySelector('.service-title')?.textContent || '',
                description: card.querySelector('.service-description')?.textContent || '',
                features: Array.from(card.querySelectorAll('.service-features li')).map(li => li.textContent)
            })),
            testimonials: Array.from(document.querySelectorAll('.testimonial-card')).map(card => ({
                quote: card.querySelector('.testimonial-quote')?.textContent || '',
                author: card.querySelector('.author-name')?.textContent || '',
                title: card.querySelector('.author-title')?.textContent || '',
                initials: card.querySelector('.author-avatar')?.textContent || ''
            }))
        };
    },

    // Save content to CMS (would integrate with backend)
    saveContent: function(content) {
        localStorage.setItem('cms_content', JSON.stringify(content));
        console.log('Content saved to CMS:', content);
    },

    // Load content from CMS
    loadContent: function() {
        const content = localStorage.getItem('cms_content');
        return content ? JSON.parse(content) : null;
    }
};

// Admin Panel Functions (for CMS editing)
function initAdminPanel() {
    // This would be loaded only for admin users
    if (isAdmin()) {
        createAdminPanel();
    }
}

function isAdmin() {
    // Check if user is logged in as admin
    return localStorage.getItem('admin_logged_in') === 'true';
}

function createAdminPanel() {
    const adminPanel = document.createElement('div');
    adminPanel.id = 'admin-panel';
    adminPanel.innerHTML = `
        <div style="position: fixed; top: 0; right: -300px; width: 300px; height: 100vh;
                    background: white; box-shadow: -2px 0 10px rgba(0,0,0,0.1);
                    transition: right 0.3s; z-index: 9999; padding: 20px; overflow-y: auto;">
            <h3>Content Management</h3>
            <button onclick="toggleAdminPanel()" style="position: absolute; left: -40px; top: 50%;
                     background: #FFA500; border: none; color: white; padding: 10px; cursor: pointer;">
                CMS
            </button>
            <div id="admin-content">
                <!-- Admin controls would go here -->
                <button onclick="editPageContent()">Edit Page Content</button>
                <button onclick="viewSubmissions()">View Form Submissions</button>
                <button onclick="manageServices()">Manage Services</button>
            </div>
        </div>
    `;

    document.body.appendChild(adminPanel);
}

function toggleAdminPanel() {
    const panel = document.getElementById('admin-panel').firstElementChild;
    if (panel.style.right === '0px') {
        panel.style.right = '-300px';
    } else {
        panel.style.right = '0px';
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CMS,
        submitToCMS,
        handleFormSubmission
    };
}

// Make CMS available globally for admin use
window.LightbridgeCMS = CMS;