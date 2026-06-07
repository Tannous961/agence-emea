module.exports = [
"[project]/Documents/GitHub/agence-emea/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const variants = {
    primary: 'bg-[#0000FF] text-white hover:bg-white hover:text-[#0000FF] border border-[#0000FF]',
    outline: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-white hover:text-[#0000FF] border border-transparent'
};
const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
};
function Button({ children, href, onClick, variant = 'primary', size = 'md', className, external, type = 'button', disabled }) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-2 font-body font-semibold tracking-wide uppercase transition-all duration-300 ease-out', variants[variant], sizes[size], disabled && 'opacity-40 pointer-events-none', className);
    if (href) {
        return external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: base,
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/ui/Button.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: base,
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/ui/Button.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: base,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/ui/Button.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Hero() {
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const fadeUp = (delay = 0)=>({
            initial: prefersReducedMotion ? {} : {
                opacity: 0,
                y: 32
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ],
                delay
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex flex-col justify-end overflow-hidden",
        "aria-label": "Hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85",
                        alt: "Premium digital agency — modern skyline at dusk",
                        fill: true,
                        priority: true,
                        className: "object-cover object-center",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container-site pb-20 md:pb-28 pt-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        ...fadeUp(0.1),
                        className: "inline-block mb-6 text-xs font-body font-semibold uppercase tracking-[0.25em] text-[#0000FF]",
                        children: "Digital Agency · Middle East & Africa"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        ...fadeUp(0.2),
                        className: "font-display text-display-xl text-white uppercase max-w-5xl",
                        children: [
                            "We Build",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                lineNumber: 47,
                                columnNumber: 19
                            }, this),
                            "Experiences",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                lineNumber: 48,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#0000FF]",
                                children: "That Move"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                lineNumber: 49,
                                columnNumber: 60
                            }, this),
                            "Markets."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        ...fadeUp(0.35),
                        className: "mt-8 max-w-lg font-body text-lg text-white/70 leading-relaxed",
                        children: "A premium digital agency headquartered in Dubai, operating across the Middle East and Africa. Brand strategy, technology, and marketing for ambitious organisations."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fadeUp(0.45),
                        className: "mt-10 flex flex-wrap items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/work",
                                size: "lg",
                                children: "See Our Work"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/contact",
                                variant: "outline",
                                size: "lg",
                                children: "Start a Project"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUp(0.8),
                className: "absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 z-10",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "block w-px h-16 bg-white/30 origin-top",
                        animate: {
                            scaleY: [
                                1,
                                0.4,
                                1
                            ]
                        },
                        transition: {
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-body font-semibold uppercase tracking-widest text-white/40 [writing-mode:vertical-rl]",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ScrollReveal({ children, className, delay = 0, direction = 'up', once = true }) {
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.15,
        triggerOnce: once
    });
    const offsets = {
        up: {
            y: 32,
            x: 0
        },
        down: {
            y: -32,
            x: 0
        },
        left: {
            y: 0,
            x: 32
        },
        right: {
            y: 0,
            x: -32
        },
        none: {
            y: 0,
            x: 0
        }
    };
    const { x, y } = offsets[direction];
    const initial = prefersReducedMotion ? {
        opacity: 1,
        x: 0,
        y: 0
    } : {
        opacity: 0,
        x,
        y
    };
    const animate = inView ? {
        opacity: 1,
        x: 0,
        y: 0
    } : initial;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: initial,
        animate: animate,
        transition: {
            duration: 0.7,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/lib/data/work.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Documents/GitHub/agence-emea/components/ui/Tag.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Tag({ children, className, variant = 'default' }) {
    const variants = {
        default: 'bg-white/10 text-white/70',
        blue: 'bg-[#0000FF] text-white',
        outline: 'border border-white/20 text-white/60'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest', variants[variant], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/ui/Tag.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedWork",
    ()=>FeaturedWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/data/work.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/Tag.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function FeaturedWork() {
    const featured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$work$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeaturedWork"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black section-padding",
        "aria-labelledby": "work-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-site",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "work-heading",
                                className: "font-display text-display-md text-white uppercase",
                                children: "Selected Work"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/work",
                                className: "text-sm font-body font-semibold uppercase tracking-widest text-white/40 hover:text-[#0000FF] transition-colors",
                                children: "View All Projects →"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6",
                    children: featured.map((study, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: i * 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/work/${study.slug}`,
                                className: "group relative block overflow-hidden bg-grey-900 aspect-[4/3]",
                                "aria-label": `${study.title} — ${study.client}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: study.coverImage,
                                        alt: `${study.client}: ${study.title}`,
                                        fill: true,
                                        className: "object-cover object-center transition-transform duration-700 group-hover:scale-105",
                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 p-8 flex flex-col justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 mb-4",
                                                children: study.tags.slice(0, 2).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-display-sm text-white uppercase",
                                                children: study.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 font-body text-sm text-white/60",
                                                children: [
                                                    study.client,
                                                    " — ",
                                                    study.year
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "mt-4 flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-widest text-[#0000FF]",
                                                initial: {
                                                    opacity: 0,
                                                    x: -8
                                                },
                                                whileHover: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                children: "View Case Study →"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        }, study.slug, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/FeaturedWork.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapabilitiesMarquee",
    ()=>CapabilitiesMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const capabilities = [
    'Brand Strategy',
    'Web Design',
    'Mobile Apps',
    'UI/UX Design',
    'Digital Marketing',
    'SEO',
    'AI Automation',
    'Cloud Architecture',
    'E-commerce',
    'Content Strategy',
    'Performance Marketing',
    'DevOps',
    'Arabic Localisation',
    'Market Research',
    'Data & Analytics'
];
function MarqueeRow({ reversed = false }) {
    const items = [
        ...capabilities,
        ...capabilities
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-8 whitespace-nowrap ${reversed ? 'animate-[marquee_40s_linear_infinite_reverse]' : 'animate-marquee'}`,
            "aria-hidden": "true",
            children: items.map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-4xl md:text-5xl font-black uppercase text-white/20",
                            children: cap
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#0000FF] font-display text-4xl font-black",
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function CapabilitiesMarquee() {
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (prefersReducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-black py-16 overflow-hidden border-y border-white/5",
            "aria-label": "Capabilities",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-site",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3",
                    children: capabilities.map((cap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-xl font-black uppercase text-white/20 px-2",
                            children: [
                                cap,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#0000FF]",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                                    lineNumber: 57,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, cap, true, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black py-12 overflow-hidden border-y border-white/5",
        "aria-label": "Capabilities",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-6 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {}, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarqueeRow, {
                    reversed: true
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/agence-emea/lib/data/clients.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clients",
    ()=>clients,
    "offices",
    ()=>offices,
    "testimonials",
    ()=>testimonials
]);
const clients = [
    {
        name: 'Aldar Properties',
        logo: '/logos/aldar.svg'
    },
    {
        name: 'Majid Al Futtaim',
        logo: '/logos/maf.svg'
    },
    {
        name: 'Ooredoo',
        logo: '/logos/ooredoo.svg'
    },
    {
        name: 'Arab Bank',
        logo: '/logos/arabbank.svg'
    },
    {
        name: 'Jumia',
        logo: '/logos/jumia.svg'
    },
    {
        name: 'Emirates NBD',
        logo: '/logos/emiratesnbd.svg'
    },
    {
        name: 'Safaricom',
        logo: '/logos/safaricom.svg'
    },
    {
        name: 'OCP Group',
        logo: '/logos/ocp.svg'
    },
    {
        name: 'Etisalat',
        logo: '/logos/etisalat.svg'
    },
    {
        name: 'Flutterwave',
        logo: '/logos/flutterwave.svg'
    }
];
const offices = [
    {
        city: 'Dubai',
        country: 'UAE',
        address: 'Dubai Design District, Building 7, Dubai, UAE',
        phone: '+971 4 567 8900',
        email: 'dubai@agence-emea.com',
        timezone: 'GST (UTC+4)',
        markets: [
            'UAE',
            'Qatar',
            'Bahrain',
            'Kuwait',
            'Oman'
        ]
    },
    {
        city: 'Riyadh',
        country: 'Saudi Arabia',
        address: 'King Abdullah Financial District, Tower B, Riyadh',
        phone: '+966 11 234 5678',
        email: 'riyadh@agence-emea.com',
        timezone: 'AST (UTC+3)',
        markets: [
            'Saudi Arabia'
        ]
    },
    {
        city: 'Cairo',
        country: 'Egypt',
        address: 'Smart Village, Building 4, Cairo, Egypt',
        phone: '+20 2 3456 7890',
        email: 'cairo@agence-emea.com',
        timezone: 'EET (UTC+2)',
        markets: [
            'Egypt',
            'Jordan',
            'Lebanon',
            'Iraq'
        ]
    },
    {
        city: 'Nairobi',
        country: 'Kenya',
        address: 'Westlands Business Park, Nairobi, Kenya',
        phone: '+254 20 765 4321',
        email: 'nairobi@agence-emea.com',
        timezone: 'EAT (UTC+3)',
        markets: [
            'Kenya',
            'Ethiopia',
            'Tanzania',
            'Rwanda'
        ]
    },
    {
        city: 'Casablanca',
        country: 'Morocco',
        address: 'Casablanca Finance City, Tower A, Casablanca',
        phone: '+212 5 22 34 56 78',
        email: 'casablanca@agence-emea.com',
        timezone: 'WET (UTC+1)',
        markets: [
            'Morocco',
            'Tunisia',
            'Algeria',
            'West Africa'
        ]
    }
];
const testimonials = [
    {
        quote: 'Agence EMEA did not just build us a website — they gave us a brand we are genuinely proud of. The rigour of their process and the beauty of the output are unlike anything we had encountered in the region.',
        author: 'Fatima Al-Sayed',
        role: 'Chief Marketing Officer',
        company: 'Souk & Co.'
    },
    {
        quote: 'From the first briefing to launch, the team demonstrated a rare combination of strategic clarity and technical excellence. Our platform now processes four times the volume with greater reliability than before.',
        author: 'Mohammed Al-Otaibi',
        role: 'Chief Digital Officer',
        company: 'Majd Logistics'
    },
    {
        quote: 'Working with a partner who genuinely understands the African market — the infrastructure constraints, the cultural nuances, the user behaviours — made all the difference. The results speak for themselves.',
        author: 'Amara Diallo',
        role: 'Co-Founder & CEO',
        company: 'Pesa Flow'
    }
];
}),
"[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/data/clients.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TestimonialsSection() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testimonials"][active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-black section-padding",
        "aria-labelledby": "testimonials-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-site",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "testimonials-heading",
                        className: "font-display text-display-md text-white uppercase mb-16",
                        children: "What Clients Say"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row lg:flex-col gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$clients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testimonials"].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActive(i),
                                    className: `text-left transition-colors duration-200 ${active === i ? 'text-white' : 'text-white/30 hover:text-white/60'}`,
                                    "aria-label": `Testimonial from ${item.author}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block font-body text-sm font-semibold",
                                            children: item.author
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block font-body text-xs text-inherit opacity-70 mt-0.5",
                                            children: item.company
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this),
                                        active === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "testimonial-indicator",
                                            className: "mt-2 h-px w-8 bg-[#0000FF]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].blockquote, {
                                    initial: prefersReducedMotion ? {} : {
                                        opacity: 0,
                                        y: 16
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: prefersReducedMotion ? {} : {
                                        opacity: 0,
                                        y: -16
                                    },
                                    transition: {
                                        duration: 0.4,
                                        ease: 'easeOut'
                                    },
                                    className: "border-l-2 border-[#0000FF] pl-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-body text-xl md:text-2xl text-white/80 leading-relaxed font-light italic",
                                            children: [
                                                "“",
                                                t.quote,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                            className: "mt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                                className: "not-italic",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-body font-semibold text-white",
                                                        children: t.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-body text-sm text-white/40 mt-0.5",
                                                        children: [
                                                            t.role,
                                                            ", ",
                                                            t.company
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, active, true, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_GitHub_agence-emea_f8485f3c._.js.map