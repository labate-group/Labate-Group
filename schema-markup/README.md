All schemas pull 4 sections from the /master-template.json file to construct a full schema.

## Static Page Construction:
(in this order)
- Global Schema
- All Pages Schema
- Specific Static Page Schema

## CMS Page Construction:
(in this order)
- Global Schema
- All Pages Schema
- Specific CMS Page Schema

GLOBAL
- "@type": ["ProfessionalService", "Brand", "WebSite"],
- "@type": "WPFooter",

ALL PAGES
- "@type": "WebPage",

PORTFOLIO
- "@type": "CreativeWork",

TEAM MEMBERS
- "@type": "Person",

PUBLIC-FIGURES
- "@type": "Person",

CLIENTS
- "@type": "Person",
- "@type": "UserReview",

ORGANIZATIONS
- "@type": "Organization",

EVENTS
- "@type": "BusinessEvent",

FAQ (IN PLACE OF "@type": "@WebPage"
- "@type": "FAQPage",

LANDING

BLOGS
- "@type": "BlogPosting",

SERVICES
- "@type": ["ItemPage", "Offer", "Product", "Service", "ServiceType"],

CATEGORIES
- "@type": ["Offer", "OfferCatalog", "ProductCategory", "ServiceCategory", "ServiceType", "Collection"],
