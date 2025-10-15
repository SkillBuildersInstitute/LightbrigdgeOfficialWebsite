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
        const privacyDate = document.querySelector('[data-cms="privacy-date"]');
        if (privacyDate) {
            privacyDate.textContent = new Date(content.privacyUpdated).toLocaleDateString();
        }
    }
    
    // Update terms date
    if (content.termsUpdated) {
        const termsDate = document.querySelector('[data-cms="terms-date"]');
        if (termsDate) {
            termsDate.textContent = new Date(content.termsUpdated).toLocaleDateString();
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
 * Export for use in other scripts
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadCMSContent,
        loadHomepageContent,
        loadAboutContent,
        loadLegalContent,
        loadPricingContent,
        loadContactInfo
    };
}

