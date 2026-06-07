(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/agence-emea/components/ui/TypewriterText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypewriterText",
    ()=>TypewriterText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const BASE_CHAR_MS = 36;
const JITTER_MS = 22;
const WORD_PAUSE_MS = 90;
const PUNCT_PAUSE_MS = 140;
const LINE_PAUSE_MS = 260;
const DEFAULT_START_DELAY_MS = 420;
function getCharDelay(char) {
    let ms = BASE_CHAR_MS + Math.random() * JITTER_MS;
    if (char === ' ') ms += WORD_PAUSE_MS;
    if (char === '.' || char === ',' || char === '!' || char === '?') ms += PUNCT_PAUSE_MS;
    return ms;
}
function TypewriterText(param) {
    let { segments, onComplete, className, lineClassName = 'block font-body font-bold uppercase', charClassName, style, startDelayMs = DEFAULT_START_DELAY_MS, ariaLabel } = param;
    _s();
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [segmentIndex, setSegmentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [charIndex, setCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    onCompleteRef.current = onComplete;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypewriterText.useEffect": ()=>{
            const t = setTimeout({
                "TypewriterText.useEffect.t": ()=>setStarted(true)
            }["TypewriterText.useEffect.t"], startDelayMs);
            return ({
                "TypewriterText.useEffect": ()=>clearTimeout(t)
            })["TypewriterText.useEffect"];
        }
    }["TypewriterText.useEffect"], [
        startDelayMs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypewriterText.useEffect": ()=>{
            var _onCompleteRef_current;
            if (!started || done) return;
            const current = segments[segmentIndex];
            if (!current) {
                var _onCompleteRef_current1;
                setDone(true);
                (_onCompleteRef_current1 = onCompleteRef.current) === null || _onCompleteRef_current1 === void 0 ? void 0 : _onCompleteRef_current1.call(onCompleteRef);
                return;
            }
            if (charIndex < current.text.length) {
                var _current_text_charIndex;
                const nextChar = (_current_text_charIndex = current.text[charIndex]) !== null && _current_text_charIndex !== void 0 ? _current_text_charIndex : '';
                const timeout = setTimeout({
                    "TypewriterText.useEffect.timeout": ()=>setCharIndex({
                            "TypewriterText.useEffect.timeout": (c)=>c + 1
                        }["TypewriterText.useEffect.timeout"])
                }["TypewriterText.useEffect.timeout"], getCharDelay(nextChar));
                return ({
                    "TypewriterText.useEffect": ()=>clearTimeout(timeout)
                })["TypewriterText.useEffect"];
            }
            if (segmentIndex < segments.length - 1) {
                const timeout = setTimeout({
                    "TypewriterText.useEffect.timeout": ()=>{
                        setSegmentIndex({
                            "TypewriterText.useEffect.timeout": (s)=>s + 1
                        }["TypewriterText.useEffect.timeout"]);
                        setCharIndex(0);
                    }
                }["TypewriterText.useEffect.timeout"], LINE_PAUSE_MS);
                return ({
                    "TypewriterText.useEffect": ()=>clearTimeout(timeout)
                })["TypewriterText.useEffect"];
            }
            setDone(true);
            (_onCompleteRef_current = onCompleteRef.current) === null || _onCompleteRef_current === void 0 ? void 0 : _onCompleteRef_current.call(onCompleteRef);
        }
    }["TypewriterText.useEffect"], [
        started,
        charIndex,
        done,
        segmentIndex,
        segments
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: className,
        "aria-label": ariaLabel,
        children: segments.map((seg, i)=>{
            if (i > segmentIndex) return null;
            const visible = i < segmentIndex ? seg.text : seg.text.slice(0, charIndex);
            const isActiveLine = !done && i === segmentIndex;
            const showCursor = isActiveLine;
            var _seg_color;
            const color = (_seg_color = seg.color) !== null && _seg_color !== void 0 ? _seg_color : 'var(--color-cream)';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "leading-[0.92]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: lineClassName,
                    style: {
                        ...style,
                        color
                    },
                    children: [
                        visible.split('').map((char, ci)=>{
                            const isNewest = isActiveLine && ci === visible.length - 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: isNewest ? [
                                    'typewriter-char-new',
                                    charClassName
                                ].filter(Boolean).join(' ') : charClassName,
                                children: char
                            }, "".concat(i, "-").concat(ci), false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/ui/TypewriterText.tsx",
                                lineNumber: 108,
                                columnNumber: 19
                            }, this);
                        }),
                        showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "typewriter-cursor typewriter-cursor-ai",
                            style: {
                                color
                            },
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/ui/TypewriterText.tsx",
                            lineNumber: 121,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/ui/TypewriterText.tsx",
                    lineNumber: 101,
                    columnNumber: 13
                }, this)
            }, seg.text, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/ui/TypewriterText.tsx",
                lineNumber: 100,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/ui/TypewriterText.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(TypewriterText, "yNT7KhDnfntU+NkNvg3Z6Nf64NU=");
_c = TypewriterText;
var _c;
__turbopack_context__.k.register(_c, "TypewriterText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$TypewriterText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/TypewriterText.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const HEADLINE_SEGMENTS = [
    {
        text: 'Premium',
        color: 'var(--color-cream)'
    },
    {
        text: 'Digital',
        color: '#0000FF'
    },
    {
        text: 'Agency.',
        color: 'var(--color-cream)'
    }
];
const headlineStyle = {
    fontSize: '120px',
    letterSpacing: '-0.025em'
};
/** SSR + first client paint — empty first line, no cursor. */ function HeadlinePlaceholder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "mb-12",
        "aria-label": "Premium Digital Agency",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "leading-[0.92]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "block font-body font-bold uppercase",
                style: {
                    ...headlineStyle,
                    color: HEADLINE_SEGMENTS[0].color
                }
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = HeadlinePlaceholder;
function StaticHeadline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "mb-12",
        "aria-label": "Premium Digital Agency",
        children: HEADLINE_SEGMENTS.map((seg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "leading-[0.92]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block font-body font-bold uppercase",
                    style: {
                        ...headlineStyle,
                        color: seg.color
                    },
                    children: seg.text
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, seg.text, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c1 = StaticHeadline;
function Hero() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            'start start',
            'end start'
        ]
    });
    const [motionPrefs, setMotionPrefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [headlineDone, setHeadlineDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');
            const desktopMq = window.matchMedia('(min-width: 768px)');
            setMotionPrefs({
                reducedMotion: reducedMq.matches,
                isDesktop: desktopMq.matches
            });
            const onReducedChange = {
                "Hero.useEffect.onReducedChange": (e)=>{
                    setMotionPrefs({
                        "Hero.useEffect.onReducedChange": (prev)=>prev ? {
                                ...prev,
                                reducedMotion: e.matches
                            } : prev
                    }["Hero.useEffect.onReducedChange"]);
                }
            }["Hero.useEffect.onReducedChange"];
            const onDesktopChange = {
                "Hero.useEffect.onDesktopChange": (e)=>{
                    setMotionPrefs({
                        "Hero.useEffect.onDesktopChange": (prev)=>prev ? {
                                ...prev,
                                isDesktop: e.matches
                            } : prev
                    }["Hero.useEffect.onDesktopChange"]);
                }
            }["Hero.useEffect.onDesktopChange"];
            reducedMq.addEventListener('change', onReducedChange);
            desktopMq.addEventListener('change', onDesktopChange);
            return ({
                "Hero.useEffect": ()=>{
                    reducedMq.removeEventListener('change', onReducedChange);
                    desktopMq.removeEventListener('change', onDesktopChange);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    const shouldAnimateParallax = motionPrefs !== null && motionPrefs.isDesktop && !motionPrefs.reducedMotion;
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], shouldAnimateParallax ? [
        '0%',
        '22%'
    ] : [
        '0%',
        '0%'
    ]);
    const fadeOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.55
    ], shouldAnimateParallax ? [
        1,
        0
    ] : [
        1,
        1
    ]);
    const handleHeadlineComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[handleHeadlineComplete]": ()=>setHeadlineDone(true)
    }["Hero.useCallback[handleHeadlineComplete]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (motionPrefs === null || motionPrefs === void 0 ? void 0 : motionPrefs.reducedMotion) {
                setHeadlineDone(true);
            }
        }
    }["Hero.useEffect"], [
        motionPrefs === null || motionPrefs === void 0 ? void 0 : motionPrefs.reducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative h-screen overflow-hidden bg-[#F5F5F5]",
        "aria-label": "Hero — Premium Digital Agency for the Middle East and Africa",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/hero-wallpaper.png",
                        alt: "",
                        fill: true,
                        priority: true,
                        unoptimized: true,
                        className: "object-cover object-[65%_center]",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: 'linear-gradient(to bottom, rgba(245,245,245,0.35) 0%, rgba(245,245,245,0.05) 35%, rgba(245,245,245,0.65) 75%, rgba(245,245,245,0.95) 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10 h-full flex flex-col justify-end",
                style: {
                    y: textY,
                    opacity: fadeOut
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-site pb-20 md:pb-28",
                    children: [
                        motionPrefs === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeadlinePlaceholder, {}, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this) : motionPrefs.reducedMotion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StaticHeadline, {}, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$TypewriterText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypewriterText"], {
                            segments: HEADLINE_SEGMENTS,
                            className: "mb-12",
                            style: headlineStyle,
                            ariaLabel: "Premium Digital Agency",
                            onComplete: handleHeadlineComplete
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-black/[0.08] pt-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body font-light text-[var(--color-cream)]/45 max-w-xs leading-relaxed",
                                    style: {
                                        fontSize: '1rem'
                                    },
                                    children: [
                                        "Building brands & digital experiences",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                            lineNumber: 160,
                                            columnNumber: 56
                                        }, this),
                                        "for the Middle East and Africa."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/work",
                                            className: "group flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/55 hover:text-[var(--color-cream)] focus-visible:text-[#0000FF] transition-colors duration-400 outline-none",
                                            style: {
                                                fontSize: '0.78rem',
                                                letterSpacing: '0.3em'
                                            },
                                            children: [
                                                "Explore Work",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-7 h-px bg-current transition-all duration-500 group-hover:w-12",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "font-body font-light uppercase text-[#0000FF] hover:text-[var(--color-cream)] focus-visible:text-white transition-colors duration-400 outline-none",
                                            style: {
                                                fontSize: '0.78rem',
                                                letterSpacing: '0.3em'
                                            },
                                            children: "Start a Project"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            motionPrefs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2",
                "aria-hidden": "true",
                initial: motionPrefs.reducedMotion ? {} : {
                    opacity: 0
                },
                animate: {
                    opacity: headlineDone ? 1 : 0
                },
                transition: {
                    delay: motionPrefs.reducedMotion ? 0 : 0.5,
                    duration: 0.8
                },
                style: {
                    opacity: fadeOut
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "block w-px bg-[var(--color-cream)]/20",
                    style: {
                        height: 52
                    },
                    animate: motionPrefs.reducedMotion ? {} : {
                        scaleY: [
                            0,
                            1,
                            0
                        ],
                        opacity: [
                            0,
                            0.5,
                            0
                        ]
                    },
                    transition: {
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/Hero.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(Hero, "lzYkkW/qZybl6BrRsuEnJIbEfaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = Hero;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeadlinePlaceholder");
__turbopack_context__.k.register(_c1, "StaticHeadline");
__turbopack_context__.k.register(_c2, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/hooks/useClientMotionPrefs.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ScrollReveal(param) {
    let { children, className, delay = 0, direction = 'up', once = true } = param;
    _s();
    const { ready, reducedMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientMotionPrefs"])();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.06,
        triggerOnce: once
    });
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            if (inView) setRevealed(true);
        }
    }["ScrollReveal.useEffect"], [
        inView
    ]);
    const offsets = {
        up: {
            y: 16,
            x: 0
        },
        down: {
            y: -16,
            x: 0
        },
        left: {
            y: 0,
            x: 16
        },
        right: {
            y: 0,
            x: -16
        },
        none: {
            y: 0,
            x: 0
        }
    };
    const { x, y } = offsets[direction];
    // SSR + first client paint: static wrapper — identical HTML, no motion styles
    if (!ready || reducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    const initial = {
        opacity: 0,
        x,
        y
    };
    const animate = revealed ? {
        opacity: 1,
        x: 0,
        y: 0
    } : initial;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: initial,
        animate: animate,
        transition: {
            duration: 1.1,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ],
            delay
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ScrollReveal, "JFy0UM3MMgWZM+aHV3IAJFTbeb8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientMotionPrefs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesSection",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ServicesSection() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // Detect mobile — on mobile always show tagline (no hover)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesSection.useEffect": ()=>{
            const mq = window.matchMedia('(max-width: 767px)');
            setIsMobile(mq.matches);
            const handler = {
                "ServicesSection.useEffect.handler": (e)=>setIsMobile(e.matches)
            }["ServicesSection.useEffect.handler"];
            mq.addEventListener('change', handler);
            return ({
                "ServicesSection.useEffect": ()=>mq.removeEventListener('change', handler)
            })["ServicesSection.useEffect"];
        }
    }["ServicesSection.useEffect"], []);
    const isExpanded = (slug)=>active === slug || isMobile;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#F0F0F0] section-pad border-t border-black/[0.05]",
        "aria-labelledby": "services-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-site",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-20 md:mb-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-4 h-px bg-[#0000FF]",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "services-heading",
                                        className: "font-body font-light uppercase text-[var(--color-cream)]/40",
                                        style: {
                                            fontSize: '0.72rem',
                                            letterSpacing: '0.35em'
                                        },
                                        children: "What We Do"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/services",
                                className: "hidden md:flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/35 hover:text-[var(--color-cream)] focus-visible:text-[#0000FF] transition-colors duration-400 outline-none",
                                style: {
                                    fontSize: '0.72rem',
                                    letterSpacing: '0.3em'
                                },
                                "aria-label": "View all services",
                                children: [
                                    "All Services ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-6 h-px bg-current inline-block",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "list",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((service, i)=>{
                            const on = isExpanded(service.slug);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                                delay: Math.min(i * 0.04, 0.2),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "listitem",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services/".concat(service.slug),
                                        className: "group block border-t border-black/[0.06] hover:border-black/20 focus-visible:border-[#0000FF]/50 transition-colors duration-500 outline-none",
                                        onMouseEnter: ()=>!isMobile && setActive(service.slug),
                                        onMouseLeave: ()=>!isMobile && setActive(null),
                                        onFocus: ()=>!isMobile && setActive(service.slug),
                                        onBlur: ()=>!isMobile && setActive(null),
                                        "aria-label": "".concat(service.title, " — ").concat(service.tagline),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-6 md:gap-10 py-8 md:py-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "shrink-0 font-body font-light text-[var(--color-cream)]/20 tabular-nums w-8",
                                                    style: {
                                                        fontSize: '0.84rem',
                                                        letterSpacing: '0.1em'
                                                    },
                                                    "aria-hidden": "true",
                                                    children: String(i + 1).padStart(2, '0')
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block font-display font-semibold uppercase transition-colors duration-300",
                                                            style: {
                                                                fontSize: 'clamp(1.5rem, 3.2vw, 3.2rem)',
                                                                lineHeight: 0.92,
                                                                letterSpacing: '-0.02em',
                                                                color: on ? 'var(--color-cream)' : 'rgba(17,17,17,0.55)'
                                                            },
                                                            children: service.shortTitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            initial: false,
                                                            children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: pfx || isMobile ? {} : {
                                                                    height: 0,
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    height: 'auto',
                                                                    opacity: 1
                                                                },
                                                                exit: pfx || isMobile ? {} : {
                                                                    height: 0,
                                                                    opacity: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.28,
                                                                    ease: [
                                                                        0.25,
                                                                        0.46,
                                                                        0.45,
                                                                        0.94
                                                                    ]
                                                                },
                                                                className: "overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-body font-light text-[var(--color-cream)]/40 mt-2.5 max-w-xl leading-relaxed",
                                                                    style: {
                                                                        fontSize: '1rem'
                                                                    },
                                                                    children: service.tagline
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: active === service.slug && !pfx && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 6
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: 6
                                                        },
                                                        transition: {
                                                            duration: 0.28
                                                        },
                                                        className: "hidden lg:block shrink-0 relative overflow-hidden",
                                                        style: {
                                                            width: 100,
                                                            height: 70
                                                        },
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: service.image,
                                                            alt: "",
                                                            fill: true,
                                                            className: "object-cover grayscale opacity-60",
                                                            sizes: "100px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    className: "shrink-0 font-body font-light text-[var(--color-cream)]/25 group-hover:text-[#0000FF] group-focus-visible:text-[#0000FF] transition-colors duration-300",
                                                    animate: !pfx ? {
                                                        x: on && !isMobile ? 4 : 0
                                                    } : {},
                                                    transition: {
                                                        duration: 0.2
                                                    },
                                                    style: {
                                                        fontSize: '1rem'
                                                    },
                                                    "aria-hidden": "true",
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this)
                            }, service.slug, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-black/[0.06]",
                            role: "separator"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/services",
                        className: "inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/35 hover:text-[var(--color-cream)] transition-colors duration-300",
                        style: {
                            fontSize: '0.72rem',
                            letterSpacing: '0.3em'
                        },
                        children: [
                            "All Services ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 h-px bg-current inline-block",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                                lineNumber: 168,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/ServicesSection.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ServicesSection, "S3mQsEMXDJ4LYqoFYuggSAIu4co=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapabilitiesMarquee",
    ()=>CapabilitiesMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const caps = [
    'Brand Strategy',
    'UX · UI Design',
    'Operational Efficiency',
    'Web Design',
    'Cloud & DevOps',
    'Mobile Apps',
    'Digital Marketing',
    'Platform Architecture',
    'SEO',
    'AI Automation',
    'UX Engineering',
    'E-commerce',
    'Performance Media',
    'DevOps',
    'Arabic Localisation',
    'Data & Analytics',
    'Workflow Automation',
    'FinOps'
];
function Row(param) {
    let { reversed = false } = param;
    const items = [
        ...caps,
        ...caps
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-10 whitespace-nowrap ".concat(reversed ? 'animate-[marquee_48s_linear_infinite_reverse]' : 'animate-marquee'),
            "aria-hidden": "true",
            children: items.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display font-light uppercase text-[var(--color-cream)]/15",
                            style: {
                                fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
                                letterSpacing: '-0.01em'
                            },
                            children: c
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#0000FF] font-display",
                            style: {
                                fontSize: '0.65rem'
                            },
                            children: "●"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Row;
function CapabilitiesMarquee() {
    _s();
    const pfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (pfx) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-[#F5F5F5] py-16 border-y border-black/[0.05]",
            "aria-label": "Capabilities",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-site",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4",
                    children: caps.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display font-light uppercase text-[var(--color-cream)]/20 text-xl",
                            children: c
                        }, c, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#F5F5F5] py-14 border-y border-black/[0.05] overflow-hidden",
        "aria-label": "Capabilities",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {}, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Row, {
                    reversed: true
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/CapabilitiesMarquee.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(CapabilitiesMarquee, "XTNt7xIUTSUD/0PrnL5RMtyXC1E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = CapabilitiesMarquee;
var _c, _c1;
__turbopack_context__.k.register(_c, "Row");
__turbopack_context__.k.register(_c1, "CapabilitiesMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/agence-emea/lib/data/clients.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/data/clients.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/hooks/useClientMotionPrefs.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function TestimonialsSection() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { ready, reducedMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientMotionPrefs"])();
    const motionEnabled = ready && !reducedMotion;
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"][active];
    const quoteContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display font-light text-[var(--color-cream)]/70 italic",
                style: {
                    fontSize: 'clamp(1.5rem, 3vw, 2.8rem)',
                    lineHeight: 1.3,
                    letterSpacing: '-0.01em'
                },
                children: [
                    "“",
                    t.quote,
                    "”"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-10 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-6 h-px bg-[#0000FF]"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                className: "not-italic font-body font-light text-[var(--color-cream)]/60 text-sm",
                                children: t.author
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block font-body font-light text-[var(--color-cream)]/30 mt-0.5",
                                style: {
                                    fontSize: '0.84rem',
                                    letterSpacing: '0.1em'
                                },
                                children: [
                                    t.role,
                                    ", ",
                                    t.company
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#F5F5F5] section-pad border-t border-black/[0.05]",
        "aria-labelledby": "testimonials-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-site",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 mb-20 md:mb-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-px bg-[#0000FF]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "testimonials-heading",
                                className: "font-body font-light uppercase text-[var(--color-cream)]/40",
                                style: {
                                    fontSize: '0.72rem',
                                    letterSpacing: '0.35em'
                                },
                                children: "Client Perspectives"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3",
                            children: motionEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].blockquote, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    transition: {
                                        duration: 0.6,
                                        ease: 'easeOut'
                                    },
                                    children: quoteContent
                                }, active, false, {
                                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                children: quoteContent
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: 0.15,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex lg:flex-col gap-3 lg:gap-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$data$2f$clients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActive(i),
                                        className: "text-left py-3 border-t border-black/[0.07] group transition-colors duration-300",
                                        "aria-label": "Quote from ".concat(item.author),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block font-body font-light transition-colors duration-300",
                                                style: {
                                                    fontSize: '0.86rem',
                                                    color: active === i ? 'var(--color-cream)' : 'rgba(17,17,17,0.28)'
                                                },
                                                children: item.author
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block font-body font-light mt-0.5 transition-colors duration-300",
                                                style: {
                                                    fontSize: '0.76rem',
                                                    letterSpacing: '0.08em',
                                                    color: active === i ? '#0000FF' : 'rgba(17,17,17,0.18)'
                                                },
                                                children: item.company
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/TestimonialsSection.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(TestimonialsSection, "pxK4acnv7lfgUtRQciuteijEe1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientMotionPrefs"]
    ];
});
_c = TestimonialsSection;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndustriesSection",
    ()=>IndustriesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/agence-emea/lib/hooks/useClientMotionPrefs.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const industries = [
    {
        name: 'Real Estate & PropTech',
        markets: 'UAE · KSA · Egypt'
    },
    {
        name: 'Financial Services',
        markets: 'GCC · North Africa'
    },
    {
        name: 'Fintech & Payments',
        markets: 'Africa · Levant'
    },
    {
        name: 'Luxury & Fashion',
        markets: 'UAE · KSA · Morocco'
    },
    {
        name: 'Retail & E-commerce',
        markets: 'MEA-wide'
    },
    {
        name: 'Hospitality & Tourism',
        markets: 'GCC · East Africa'
    },
    {
        name: 'Healthcare & MedTech',
        markets: 'UAE · KSA · Egypt'
    },
    {
        name: 'Energy & Oil & Gas',
        markets: 'Gulf · North Africa'
    },
    {
        name: 'Logistics & Supply Chain',
        markets: 'GCC · Kenya · Morocco'
    },
    {
        name: 'Education & EdTech',
        markets: 'MEA-wide'
    },
    {
        name: 'Government & Public Sector',
        markets: 'UAE · KSA · Egypt'
    },
    {
        name: 'Media & Entertainment',
        markets: 'MENA · Sub-Saharan'
    },
    {
        name: 'Telecommunications',
        markets: 'Africa · Gulf'
    },
    {
        name: 'Food & Beverage',
        markets: 'GCC · North Africa'
    },
    {
        name: 'Construction & Infra',
        markets: 'UAE · KSA · Egypt'
    },
    {
        name: 'Banking & Insurance',
        markets: 'GCC · Morocco · Kenya'
    },
    {
        name: 'Agritech & FoodTech',
        markets: 'East Africa · Morocco'
    },
    {
        name: 'Travel & Transport',
        markets: 'MEA-wide'
    }
];
function IndustriesSection() {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { ready, reducedMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientMotionPrefs"])();
    const motionEnabled = ready && !reducedMotion;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#F5F5F5] section-pad border-t border-black/[0.05]",
        "aria-labelledby": "industries-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-site",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-4 h-px bg-[#0000FF]"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-body font-light uppercase text-[var(--color-cream)]/40",
                                                style: {
                                                    fontSize: '0.62rem',
                                                    letterSpacing: '0.35em'
                                                },
                                                children: "Industries We Serve"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "industries-heading",
                                        className: "font-display font-semibold uppercase text-[var(--color-cream)]",
                                        style: {
                                            fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
                                            lineHeight: 0.92,
                                            letterSpacing: '-0.02em'
                                        },
                                        children: [
                                            "Built for Every",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                                lineNumber: 64,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    WebkitTextStroke: '1px rgba(17,17,17,0.4)',
                                                    color: 'rgba(0, 0, 255, 1)'
                                                },
                                                children: "MEA Vertical."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body font-light text-[var(--color-cream)]/40 max-w-xs leading-relaxed",
                                style: {
                                    fontSize: '0.82rem'
                                },
                                children: "From sovereign wealth funds to Series A startups — we have delivered across every major sector in the region."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.05]",
                    children: industries.map((ind, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: Math.min(i * 0.025, 0.3),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-[#F5F5F5] p-7 group cursor-default overflow-hidden transition-colors duration-300 hover:bg-[#EDEDED]",
                                onMouseEnter: ()=>setHovered(i),
                                onMouseLeave: ()=>setHovered(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "absolute left-0 top-0 bottom-0 w-0.5 bg-[#0000FF] origin-top",
                                        animate: motionEnabled ? {
                                            scaleY: hovered === i ? 1 : 0
                                        } : {},
                                        initial: {
                                            scaleY: 0
                                        },
                                        transition: {
                                            duration: 0.3,
                                            ease: 'easeOut'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block font-body font-light text-[var(--color-cream)]/15 mb-4 tabular-nums",
                                        style: {
                                            fontSize: '0.6rem',
                                            letterSpacing: '0.18em'
                                        },
                                        children: String(i + 1).padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block font-body font-light transition-colors duration-300",
                                        style: {
                                            fontSize: '0.88rem',
                                            color: hovered === i ? 'var(--color-cream)' : 'rgba(17,17,17,0.6)',
                                            letterSpacing: '0.01em'
                                        },
                                        children: ind.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: hovered === i && motionEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                opacity: 0,
                                                y: 4
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 4
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            className: "block font-body font-light text-[#0000FF]/60 mt-1.5",
                                            style: {
                                                fontSize: '0.6rem',
                                                letterSpacing: '0.2em'
                                            },
                                            children: ind.markets
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                            lineNumber: 124,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        }, ind.name, false, {
                            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-px bg-[#F0F0F0] border border-black/[0.07] p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 w-1.5 h-1.5 rounded-full bg-[#0000FF]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-body font-light text-[var(--color-cream)]/55",
                                        style: {
                                            fontSize: '0.82rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-cream)]/80 font-normal",
                                                children: "Don't see your industry?"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            "We have delivered for 20+ sectors across MEA — chances are we have solved your exact problem before."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "shrink-0 inline-flex items-center gap-3 font-body font-light uppercase text-[var(--color-cream)]/50 hover:text-[#0000FF] transition-colors duration-300",
                                style: {
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.28em'
                                },
                                children: [
                                    "Let's Talk",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-5 h-px bg-current"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/agence-emea/components/sections/IndustriesSection.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(IndustriesSection, "1TkdefHBm22CHwMvBnsk0uXZIQM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$agence$2d$emea$2f$lib$2f$hooks$2f$useClientMotionPrefs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientMotionPrefs"]
    ];
});
_c = IndustriesSection;
var _c;
__turbopack_context__.k.register(_c, "IndustriesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_agence-emea_ce73677e._.js.map