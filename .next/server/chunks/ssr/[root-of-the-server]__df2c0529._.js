module.exports = [
"[project]/Documents/GitHub/agence-emea/.next-internal/server/app/work/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Documents/GitHub/agence-emea/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/agence-emea/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/GitHub/agence-emea/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/agence-emea/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/GitHub/agence-emea/lib/data/work.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseStudies",
    ()=>caseStudies,
    "getCaseStudyBySlug",
    ()=>getCaseStudyBySlug,
    "getFeaturedWork",
    ()=>getFeaturedWork
]);
const caseStudies = [
    {
        slug: 'urban-commerce-uae',
        title: 'Redefining Urban Commerce',
        client: 'Souk & Co.',
        category: 'Brand Strategy / Web Development',
        year: '2024',
        description: "A full-stack brand and digital overhaul for one of the UAE's fastest-growing omni-channel retail chains.",
        challenge: 'Souk & Co. had outgrown its legacy brand — a heritage retail business with no coherent digital identity, an underperforming e-commerce site, and no mobile presence in a market where 91% of purchases begin on a smartphone.',
        approach: 'We led a full brand strategy engagement before a single pixel was designed. Workshops with founders and CMO, competitive mapping across GCC, and consumer interviews across Dubai and Abu Dhabi. We rebuilt the brand from the name system up, then delivered a new Next.js storefront with headless Shopify, an iOS/Android app, and a content programme targeting Arabic and English audiences.',
        result: 'In six months the new digital experience drove a 3.4× uplift in conversion rate, 180% growth in mobile revenue, and the brand was awarded Best Retail Rebrand at the 2024 Gulf Marketing Awards.',
        metrics: [
            {
                label: 'Conversion uplift',
                value: '3.4×'
            },
            {
                label: 'Mobile revenue growth',
                value: '+180%'
            },
            {
                label: 'Organic traffic',
                value: '+220%'
            },
            {
                label: 'App store rating',
                value: '4.8 ★'
            }
        ],
        coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80',
        images: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
            'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80'
        ],
        tags: [
            'Brand',
            'Web',
            'Mobile',
            'E-commerce'
        ],
        featured: true
    },
    {
        slug: 'saudi-logistics-digital',
        title: 'Digital Transformation at Scale',
        client: 'Majd Logistics',
        category: 'AI & Automation / Cloud & DevOps',
        year: '2024',
        description: 'Enterprise-grade digital transformation for a Saudi logistics operator managing 2,000+ daily shipments.',
        challenge: "Majd Logistics relied on manual tracking spreadsheets and a decade-old ERP that couldn't integrate with modern last-mile carriers. Customer satisfaction scores were suffering; retention was declining.",
        approach: 'We designed and built a real-time shipment intelligence platform on AWS, integrated with 14 carrier APIs, and deployed an AI-powered exception-handling agent that resolves 68% of delivery queries without human intervention. CI/CD pipelines cut release cycles from weeks to hours.',
        result: 'Customer satisfaction (CSAT) rose from 61 to 89, operational costs reduced 22%, and the platform now handles 4,000+ daily shipments without added headcount.',
        metrics: [
            {
                label: 'CSAT improvement',
                value: '+28pts'
            },
            {
                label: 'Operational cost reduction',
                value: '-22%'
            },
            {
                label: 'Shipment capacity',
                value: '2× scale'
            },
            {
                label: 'Query auto-resolution',
                value: '68%'
            }
        ],
        coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
        images: [
            'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
            'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80'
        ],
        tags: [
            'AI',
            'Cloud',
            'DevOps',
            'Enterprise'
        ],
        featured: true
    },
    {
        slug: 'fintech-africa',
        title: 'Building the Future of African Fintech',
        client: 'Pesa Flow',
        category: 'UX/UI Design / Mobile Apps',
        year: '2023',
        description: 'A mobile-first remittance and savings platform built for underbanked communities across Sub-Saharan Africa.',
        challenge: 'Pesa Flow had a breakthrough product concept but an MVP that users described as confusing and untrustworthy. With 6 months of runway and 12 markets to serve, clarity was existential.',
        approach: 'Deep user research across Kenya, Ghana, and Nigeria — in-person and moderated remote sessions. We rebuilt the app architecture, simplified the core money-movement flow to 3 taps, and introduced localised onboarding that increased completion rates immediately. Built on React Native for parity across iOS and Android.',
        result: 'Post-launch: 4.7-star App Store rating, 40% month-on-month user growth, and Pesa Flow raised a $6M Series A four months after launch.',
        metrics: [
            {
                label: 'App Store rating',
                value: '4.7 ★'
            },
            {
                label: 'Monthly user growth',
                value: '+40%'
            },
            {
                label: 'Onboarding completion',
                value: '+55%'
            },
            {
                label: 'Series A raised',
                value: '$6M'
            }
        ],
        coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80',
        images: [
            'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80'
        ],
        tags: [
            'Mobile',
            'UX/UI',
            'Fintech',
            'Africa'
        ],
        featured: true
    },
    {
        slug: 'egyptian-heritage-brand',
        title: 'A New Identity for Egyptian Heritage',
        client: 'Nil Maison',
        category: 'Brand Strategy / Web Development',
        year: '2023',
        description: 'Repositioning a century-old Egyptian luxury goods brand for the global premium market.',
        challenge: "Nil Maison's artisan craft was world-class but the brand was invisible outside Cairo. Online, it had no presence worth speaking of — a static WordPress site with no e-commerce and product photography shot on an iPhone.",
        approach: "We developed a new brand world grounded in Nil Maison's actual heritage — the artisans, the materials, the 103-year story. A new visual identity, photography direction, and editorial-level Shopify storefront designed to sit alongside Hermès and Diptyque.",
        result: 'International orders in the first quarter exceeded the entire previous year. Featured in Vogue Arabia and Wallpaper*. Net Promoter Score increased from 42 to 78.',
        metrics: [
            {
                label: 'International revenue',
                value: '+310%'
            },
            {
                label: 'Average order value',
                value: '+85%'
            },
            {
                label: 'NPS increase',
                value: '+36pts'
            },
            {
                label: 'Press features',
                value: '12'
            }
        ],
        coverImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80',
        images: [
            'https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80',
            'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80'
        ],
        tags: [
            'Brand',
            'Luxury',
            'E-commerce',
            'Heritage'
        ],
        featured: false
    },
    {
        slug: 'north-africa-ecommerce',
        title: 'E-commerce at Regional Scale',
        client: 'Maghreb Market',
        category: 'Web Development / Digital Marketing',
        year: '2024',
        description: "North Africa's first dedicated B2B marketplace for the hospitality and food-service sector.",
        challenge: 'Procurement in North African hospitality remained almost entirely offline — fragmented suppliers, no price transparency, and no digital paper trail. Maghreb Market needed a platform that worked for buyers in Casablanca, Tunis, and Algiers simultaneously.',
        approach: 'Multi-vendor marketplace on Next.js with Arabic, French, and English support. Custom supplier onboarding flows, RFQ tooling, and a logistics integration layer. Paired with an SEO content strategy across three language variants.',
        result: '300+ suppliers onboarded in 90 days, GMV of $2.4M in the first full quarter, and #1 organic ranking for key procurement terms across all three markets.',
        metrics: [
            {
                label: 'Suppliers onboarded',
                value: '300+'
            },
            {
                label: 'Q1 GMV',
                value: '$2.4M'
            },
            {
                label: 'Organic rankings',
                value: '#1'
            },
            {
                label: 'Markets live',
                value: '3'
            }
        ],
        coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80',
        images: [
            'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=1200&q=80',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80'
        ],
        tags: [
            'Marketplace',
            'Web',
            'SEO',
            'Multilingual'
        ],
        featured: false
    }
];
function getCaseStudyBySlug(slug) {
    return caseStudies.find((c)=>c.slug === slug);
}
function getFeaturedWork() {
    return caseStudies.filter((c)=>c.featured);
}
}),
"[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ScrollReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollReveal() from the server but ScrollReveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx <module evaluation>", "ScrollReveal");
}),
"[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ScrollReveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollReveal() from the server but ScrollReveal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx", "ScrollReveal");
}),
"[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/GitHub/agence-emea/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}
}),
"[project]/Documents/GitHub/agence-emea/components/ui/Tag.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Tag({ children, className, variant = 'default' }) {
    const variants = {
        default: 'bg-white/10 text-white/70',
        blue: 'bg-[#0000FF] text-white',
        outline: 'border border-white/20 text-white/60'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest', variants[variant], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/ui/Tag.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaSection",
    ()=>CtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-rsc] (ecmascript)");
;
;
;
;
function CtaSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden",
        style: {
            height: '90vh'
        },
        "aria-label": "Final CTA",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1920&q=85",
                        alt: "MEA skyline",
                        fill: true,
                        className: "object-cover object-center",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: 'linear-gradient(to bottom right, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.60) 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex flex-col items-center justify-center text-center px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block font-body font-light uppercase text-[var(--color-cream)]/40 mb-8",
                            style: {
                                fontSize: '0.62rem',
                                letterSpacing: '0.38em'
                            },
                            children: "Ready to Begin"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-semibold uppercase text-[var(--color-cream)] max-w-3xl mx-auto",
                            style: {
                                fontSize: 'clamp(3rem, 8vw, 8rem)',
                                lineHeight: 0.92,
                                letterSpacing: '-0.025em'
                            },
                            children: [
                                "Let's Build",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        WebkitTextStroke: '1px rgba(239,239,239,0.45)',
                                        color: 'transparent'
                                    },
                                    children: "Something"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 20
                                }, this),
                                "Exceptional."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "mt-14 inline-flex items-center gap-4 font-body font-light uppercase text-[var(--color-cream)]/60 hover:text-[var(--color-cream)] transition-colors duration-500 group",
                            style: {
                                fontSize: '0.68rem',
                                letterSpacing: '0.32em'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-px bg-[#0000FF] group-hover:w-14 transition-all duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                "Start a Conversation",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-px bg-[#0000FF] group-hover:w-14 transition-all duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/app/work/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/data/work.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/Tag.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$sections$2f$CtaSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/sections/CtaSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const metadata = {
    title: 'Work — Case Studies & Projects',
    description: 'A selection of our work across brand strategy, web development, mobile apps, and digital marketing for clients throughout the Middle East and Africa.',
    alternates: {
        canonical: 'https://agence-emea.com/work'
    }
};
function WorkPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-black pt-40 pb-24 border-b border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block mb-4 text-xs font-body font-semibold uppercase tracking-[0.25em] text-[#0000FF]",
                                children: "Selected Projects"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-display-lg text-white uppercase max-w-3xl",
                                children: [
                                    "Work That",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 24
                                    }, this),
                                    "Moves the Needle"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: 0.2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 font-body text-lg text-white/60 max-w-xl leading-relaxed",
                                children: "Every project here has a business result attached. Craft is the baseline — outcomes are the measure."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-black py-24",
                "aria-label": "Case studies",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caseStudies"].map((study, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                delay: Math.min(i * 0.08, 0.3),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/work/${study.slug}`,
                                    className: "group relative block overflow-hidden bg-grey-900 aspect-[4/3]",
                                    "aria-label": `${study.title} — ${study.client}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: study.coverImage,
                                            alt: `${study.client}: ${study.title}`,
                                            fill: true,
                                            className: "object-cover object-center transition-transform duration-700 group-hover:scale-105",
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 p-8 flex flex-col justify-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 mb-4",
                                                    children: study.tags.slice(0, 2).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"], {
                                                            children: t
                                                        }, t, false, {
                                                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 58
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-display text-display-sm text-white uppercase",
                                                    children: study.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-body text-sm text-white/50 mt-1",
                                                    children: [
                                                        study.client,
                                                        " · ",
                                                        study.year
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 grid grid-cols-2 gap-4",
                                                    children: study.metrics.slice(0, 2).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-display text-3xl font-black text-[#0000FF]",
                                                                    children: m.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                                    lineNumber: 68,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-body text-xs text-white/40 uppercase tracking-wider mt-0.5",
                                                                    children: m.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, m.label, true, {
                                                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this)
                            }, study.slug, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$sections$2f$CtaSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CtaSection"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/app/work/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/GitHub/agence-emea/app/work/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/agence-emea/app/work/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__df2c0529._.js.map