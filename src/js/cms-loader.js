// CMS Content Loader for Lightbridge Consulting
// This script loads and applies CMS-managed content to pages

/**
 * Initialize CMS content loading on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    loadCMSContent();
});

/**
 * Load all CMS content and apply to current page
 */
function loadCMSContent() {
    try {
        loadHomepageContent();
        loadAboutContent();
        loadLegalContent();
        loadPricingContent();
        loadContactInfo();
        loadFooterLinks();
        
        console.log('CMS content loaded successfully');
    } catch (error) {
        console.error('Error loading CMS content:', error);
    }
}

/**
 * Load and apply homepage content
 */
function loadHomepageContent() {
    const content = JSON.parse(localStorage.getItem('cms_homepage_content') || '{}');
    
    if (Object.keys(content).length === 0) return;
    
    // Update hero headline
    const heroHeadline = document.querySelector('.hero-headline');
    if (heroHeadline && content.heroHeadline) {
        heroHeadline.innerHTML = content.heroHeadline;
    }
    
    // Update hero subheadline
    const heroSubheadline = document.querySelector('.hero-subheadline');
    if (heroSubheadline && content.heroSubheadlineHTML) {
        heroSubheadline.innerHTML = content.heroSubheadlineHTML;
    }
    
    // Update services title
    const servicesTitle = document.querySelector('.services-overview .section-title');
    if (servicesTitle && content.servicesTitle) {
        servicesTitle.textContent = content.servicesTitle;
    }
    
    // Update services description
    const servicesDescription = document.querySelector('[data-cms="services-description"]');
    if (servicesDescription && content.servicesDescription) {
        servicesDescription.innerHTML = content.servicesDescription;
    }
}

/**
 * Load and apply about page content
 */
function loadAboutContent() {
    const content = JSON.parse(localStorage.getItem('cms_about_content') || '{}');
    
    if (Object.keys(content).length === 0) return;
    
    // Update about headline
    const aboutHeadline = document.querySelector('.about-hero h1, .about-intro h1');
    if (aboutHeadline && content.aboutHeadline) {
        aboutHeadline.textContent = content.aboutHeadline;
    }
    
    // Update timeline title
    const timelineTitle = document.querySelector('.journey-section .section-title');
    if (timelineTitle && content.timelineTitle) {
        timelineTitle.textContent = content.timelineTitle;
    }
}

/**
 * Load and apply legal content (Privacy, Terms)
 */
function loadLegalContent() {
    const content = JSON.parse(localStorage.getItem('cms_legal_content') || '{}');
    
    if (Object.keys(content).length === 0) return;
    
    // Update privacy policy date
    if (content.privacyUpdated) {
        const privacyDate = document.querySelectorAll('[data-cms="privacy-date"], .lead-text');
        privacyDate.forEach(el => {
            if (el.textContent.includes('Last updated') || el.textContent.includes('updated')) {
                el.textContent = `Last updated: ${new Date(content.privacyUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`;
            }
        });
    }
    
    // Update terms date
    if (content.termsUpdated) {
        const termsDate = document.querySelectorAll('[data-cms="terms-date"], .lead-text');
        termsDate.forEach(el => {
            if (el.textContent.includes('Last updated') || el.textContent.includes('updated')) {
                el.textContent = `Last updated: ${new Date(content.termsUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`;
            }
        });
    }
    
    // Update Privacy Policy content
    if (content.privacyContentHTML && window.location.pathname.includes('privacy')) {
        const privacyContainer = document.querySelector('.container-narrow > div[style*="text-align: left"]');
        if (privacyContainer) {
            // Keep the header, replace the content
            const header = document.querySelector('.section-header');
            if (header) {
                privacyContainer.innerHTML = content.privacyContentHTML;
            }
        }
    }
    
    // Update Terms of Service content
    if (content.termsContentHTML && window.location.pathname.includes('terms')) {
        const termsContainer = document.querySelector('.container-narrow > div[style*="text-align: left"]');
        if (termsContainer) {
            // Keep the header, replace the content
            const header = document.querySelector('.section-header');
            if (header) {
                termsContainer.innerHTML = content.termsContentHTML;
            }
        }
    }
    
    // Update discovery session price throughout site
    if (content.discoveryPrice) {
        const discoveryPriceElements = document.querySelectorAll('[data-cms="discovery-price"]');
        discoveryPriceElements.forEach(el => {
            el.textContent = `$${content.discoveryPrice}`;
        });
    }
}

/**
 * Load and apply pricing content
 */
function loadPricingContent() {
    const pricing = JSON.parse(localStorage.getItem('cms_pricing') || '{}');
    
    if (Object.keys(pricing).length === 0) return;
    
    // Update Collaborative Development pricing
    if (pricing.collaborative) {
        updateServicePricing('collaborative', pricing.collaborative);
    }
    
    // Update Express Development pricing
    if (pricing.express) {
        updateServicePricing('express', pricing.express);
    }
    
    // Update Business Butler pricing
    if (pricing.businessButler) {
        updateServicePricing('business-butler', pricing.businessButler);
    }
    
    // Update Business Boot Camp pricing
    if (pricing.businessBootcamp) {
        updateServicePricing('business-bootcamp', pricing.businessBootcamp);
    }
}

/**
 * Update pricing for a specific service
 * @param {string} serviceKey - Service identifier
 * @param {object} pricingData - Pricing data object
 */
function updateServicePricing(serviceKey, pricingData) {
    // Update on service cards (homepage)
    const priceElements = document.querySelectorAll(`[data-service="${serviceKey}"] [data-cms="price"]`);
    priceElements.forEach(el => {
        if (pricingData.price) {
            el.textContent = pricingData.price;
        }
    });
    
    // Update pricing description
    const priceDescElements = document.querySelectorAll(`[data-service="${serviceKey}"] [data-cms="price-description"]`);
    priceDescElements.forEach(el => {
        if (pricingData.description) {
            el.textContent = pricingData.description;
        }
    });
    
    // Update pricing cards on service pages
    const pricingCards = document.querySelectorAll(`[data-pricing="${serviceKey}"]`);
    pricingCards.forEach(card => {
        const priceEl = card.querySelector('.pricing-price');
        const descEl = card.querySelector('.pricing-description');
        
        if (priceEl && pricingData.price) {
            priceEl.textContent = pricingData.price;
        }
        if (descEl && pricingData.description) {
            descEl.textContent = pricingData.description;
        }
    });
}

/**
 * Load and apply contact information across all pages
 */
function loadContactInfo() {
    const homepageContent = JSON.parse(localStorage.getItem('cms_homepage_content') || '{}');
    const legalContent = JSON.parse(localStorage.getItem('cms_legal_content') || '{}');
    
    // Use whichever is most recently updated
    const contactEmail = homepageContent.contactEmail || legalContent.legalEmail;
    const contactPhone = homepageContent.contactPhone || legalContent.legalPhone;
    
    if (contactEmail) {
        // Update all email links
        document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
            if (link.href.includes('lightbridgeconsulting') || link.href.includes('info@')) {
                link.href = `mailto:${contactEmail}`;
                if (!link.querySelector('i, svg')) { // Don't update if it's just an icon
                    link.textContent = contactEmail;
                }
            }
        });
        
        // Update email text elements
        document.querySelectorAll('[data-cms="contact-email"]').forEach(el => {
            el.textContent = contactEmail;
        });
    }
    
    if (contactPhone) {
        // Update all phone links
        const cleanPhone = contactPhone.replace(/[^0-9]/g, '');
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.href = `tel:${cleanPhone}`;
            if (!link.querySelector('i, svg')) { // Don't update if it's just an icon
                link.textContent = contactPhone;
            }
        });
        
        // Update phone text elements
        document.querySelectorAll('[data-cms="contact-phone"]').forEach(el => {
            el.textContent = contactPhone;
        });
    }
}

/**
 * Load and apply footer links from settings
 */
function loadFooterLinks() {
    const settings = JSON.parse(localStorage.getItem('cms_settings') || '{}');
    
    // Update Case Studies link
    const caseStudiesLinks = document.querySelectorAll('a[href*="case-studies"], a[data-cms="case-studies"]');
    caseStudiesLinks.forEach(link => {
        if (settings.caseStudiesUrl) {
            link.href = settings.caseStudiesUrl;
            link.style.display = '';
        } else {
            // Hide if no URL is set
            link.style.display = 'none';
        }
    });
    
    // Update Blog link
    const blogLinks = document.querySelectorAll('a[data-cms="blog"]');
    blogLinks.forEach(link => {
        if (settings.blogUrl) {
            link.href = settings.blogUrl;
            link.style.display = '';
        } else {
            // Hide if no URL is set
            link.style.display = 'none';
        }
    });
    
    // Update social media links
    if (settings.linkedinUrl) {
        document.querySelectorAll('a[data-social="linkedin"]').forEach(link => {
            link.href = settings.linkedinUrl;
        });
    }
    
    if (settings.facebookUrl) {
        document.querySelectorAll('a[data-social="facebook"]').forEach(link => {
            link.href = settings.facebookUrl;
        });
    }
    
    if (settings.twitterUrl) {
        document.querySelectorAll('a[data-social="twitter"]').forEach(link => {
            link.href = settings.twitterUrl;
        });
    }
    
    if (settings.githubUrl) {
        document.querySelectorAll('a[data-social="github"]').forEach(link => {
            link.href = settings.githubUrl;
        });
    }
}

/**
 * Export for use in other scripts
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadCMSContent,
        loadHomepageContent,
        loadAboutContent,
        loadLegalContent,
        loadPricingContent,
        loadContactInfo,
        loadFooterLinks
    };
}

