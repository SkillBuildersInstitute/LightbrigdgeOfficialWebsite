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
        loadServicesTaglines();
        loadPricingGuide();
        // loadContactInfo(); // Disabled - using hardcoded contact info
        loadFooterLinks();
        loadContentMap();
        saveContentMapFromPage();
        
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
    if (servicesDescription) {
        if (content.servicesDescriptionHTML) {
            servicesDescription.innerHTML = content.servicesDescriptionHTML;
        } else if (content.servicesDescription) {
            servicesDescription.innerHTML = content.servicesDescription;
        }
    }
}

/**
 * Load and apply services taglines (homepage cards)
 */
function loadServicesTaglines() {
    const services = JSON.parse(localStorage.getItem('cms_services') || '{}');
    if (!services || Object.keys(services).length === 0) return;

    const map = [
        { key: 'customSolutions', selector: '[data-service="custom-solutions"] .service-description' },
        { key: 'websiteDevelopment', selector: '[data-service="website-development"] .service-description' },
        { key: 'crmTools', selector: '[data-service="crm-tools"] .service-description' },
        { key: 'workflowAutomation', selector: '[data-service="workflow-automation"] .service-description' },
        { key: 'voiceAutomation', selector: '[data-service="voice-automation"] .service-description' },
        { key: 'dataAnalysis', selector: '[data-service="data-analysis"] .service-description' }
    ];

    map.forEach(({ key, selector }) => {
        const cfg = services[key];
        if (!cfg) return;
        const el = document.querySelector(selector);
        if (!el) return;
        if (cfg.taglineHTML) {
            el.innerHTML = cfg.taglineHTML;
            return;
        }
        if (cfg.tagline) {
            el.textContent = cfg.tagline;
        }
    });
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
    
    // Update Custom Solutions pricing
    if (pricing.customSolutions) {
        updateServicePricing('custom-solutions', pricing.customSolutions);
    }
    
    // Update Website Development pricing
    if (pricing.websiteDevelopment) {
        updateServicePricing('website-development', pricing.websiteDevelopment);
    }
    
    // Update Lead Generation & CRM Tools pricing
    if (pricing.crmTools) {
        updateServicePricing('crm-tools', pricing.crmTools);
    }
    
    // Update Workflow Automation pricing
    if (pricing.workflowAutomation) {
        updateServicePricing('workflow-automation', pricing.workflowAutomation);
    }
    
    // Update Voice Automation pricing
    if (pricing.voiceAutomation) {
        updateServicePricing('voice-automation', pricing.voiceAutomation);
    }
    
    // Update Data Analysis pricing
    if (pricing.dataAnalysis) {
        updateServicePricing('data-analysis', pricing.dataAnalysis);
    }
}

/**
 * Load pricing guide ranges for the homepage
 */
function loadPricingGuide() {
    const pricing = JSON.parse(localStorage.getItem('cms_pricing') || '{}');
    if (!pricing || !Array.isArray(pricing.pricingGuide)) return;

    pricing.pricingGuide.forEach((tier, index) => {
        const slot = index + 1;
        const labelEl = document.querySelector(`[data-price-guide-label="${slot}"]`);
        const rangeEl = document.querySelector(`[data-price-guide-range="${slot}"]`);

        if (labelEl && tier.label) {
            labelEl.textContent = tier.label;
        }
        if (rangeEl && tier.range) {
            rangeEl.textContent = tier.range;
        }
    });
}

/**
 * Update pricing for a specific service
 * @param {string} serviceKey - Service identifier
 * @param {object} pricingData - Pricing data object
 */
function updateServicePricing(serviceKey, pricingData) {
    // Update on service cards (homepage) - using data-price attribute
    const priceElements = document.querySelectorAll(`[data-price="${serviceKey}"]`);
    priceElements.forEach(el => {
        if (pricingData.price) {
            el.textContent = pricingData.price;
        }
    });
    
    // Update pricing description on service cards (the small text below the price)
    const serviceCard = document.querySelector(`[data-service="${serviceKey}"]`);
    if (serviceCard && pricingData.description) {
        const servicePricing = serviceCard.querySelector('.service-pricing');
        if (servicePricing) {
            // Find the description div (usually the last div in service-pricing with font-size: 14px)
            const descDivs = servicePricing.querySelectorAll('div[style*="font-size: 14px"]');
            if (descDivs.length > 0) {
                descDivs[descDivs.length - 1].textContent = pricingData.description;
            }
        }
    }
    
    // Update pricing section cards - using data-price attribute with -pricing suffix
    const pricingSectionElements = document.querySelectorAll(`[data-price="${serviceKey}-pricing"]`);
    pricingSectionElements.forEach(el => {
        if (pricingData.price) {
            el.textContent = pricingData.price;
        }
        
        // Update description in pricing section (the paragraph below the price)
        const card = el.closest('.pricing-card');
        if (card && pricingData.description) {
            // Find the description paragraph (usually has font-size: 14px and color: #666)
            const descParagraphs = card.querySelectorAll('p[style*="font-size: 14px"]');
            if (descParagraphs.length > 0) {
                // Usually the first one after the price
                descParagraphs[0].textContent = pricingData.description;
            }
        }
    });
}

/**
 * Load and apply contact information across all pages
 * DISABLED - Contact info is now hardcoded in HTML files
 */
function loadContactInfo() {
    // Contact information is hardcoded in HTML files
    // Phone: 813-618-5333
    // Email: lightbridgeconsultingco@gmail.com
    // This function is disabled to ensure consistency across all visitors
    return;
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
 * Load generic CMS content mapped by data-cms keys
 */
function loadContentMap() {
    const contentMap = JSON.parse(localStorage.getItem('cms_content_map') || '{}');
    if (!contentMap || Object.keys(contentMap).length === 0) return;

    document.querySelectorAll('[data-cms]').forEach(el => {
        const key = el.getAttribute('data-cms');
        if (!key || !(key in contentMap)) return;

        const value = contentMap[key];
        if (value === null || value === undefined || value === '') return;

        el.innerHTML = value;
    });
}

/**
 * Persist data-cms elements for the current page to localStorage
 */
function saveContentMapFromPage() {
    const contentMap = {};
    document.querySelectorAll('[data-cms]').forEach(el => {
        const key = el.getAttribute('data-cms');
        if (!key) return;
        contentMap[key] = el.innerHTML.trim();
    });

    if (Object.keys(contentMap).length > 0) {
        localStorage.setItem('cms_content_map', JSON.stringify(contentMap));
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
