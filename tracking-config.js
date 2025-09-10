// Google Ads Conversion Tracking Configuration
// This file contains the configuration for Google Ads conversion tracking

const GOOGLE_ADS_CONFIG = {
    // Google Ads Account ID
    accountId: 'AW-17537512610',
    
    // Conversion Action ID
    conversionId: 'AW-17537512610/8RagCLuHrJcbEKLpxKpB',
    
    // Conversion pages (pages where conversions should be tracked)
    conversionPages: [
        'thank-you.html'
    ],
    
    // Form submission events to track
    formSubmissionEvents: [
        {
            formType: 'consultation_request',
            location: 'hero_section',
            page: 'index.html'
        },
        {
            formType: 'mailing_list',
            location: 'footer_section', 
            page: 'index.html'
        },
        {
            formType: 'free_sample_request',
            location: 'freeleads_page',
            page: 'freeleads.html'
        },
        {
            formType: 'lead_list_order',
            location: 'order_now_page',
            page: 'order-now.html'
        }
    ]
};

// Helper function to generate unique transaction IDs
function generateTransactionId() {
    return new Date().getTime() + '_' + Math.random().toString(36).substr(2, 9);
}

// Helper function to track conversions
function trackConversion(transactionId = null) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': GOOGLE_ADS_CONFIG.conversionId,
            'transaction_id': transactionId || generateTransactionId()
        });
    }
}

// Export for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GOOGLE_ADS_CONFIG,
        generateTransactionId,
        trackConversion
    };
}
