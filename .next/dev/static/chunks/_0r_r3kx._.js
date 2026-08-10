(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/journey/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/milestones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const kindLabels = {
    founding: 'Founding',
    competition: 'Competition',
    project: 'Project',
    achievement: 'Achievement',
    forward: 'Direction'
};
function Timeline() {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            const node = trackRef.current;
            if (!node) return;
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduced) {
                return;
            }
            let frame = 0;
            const update = {
                "Timeline.useEffect.update": ()=>{
                    frame = 0;
                    const rect = node.getBoundingClientRect();
                    const anchor = window.innerHeight * 0.5;
                    const travelled = anchor - rect.top;
                    const ratio = rect.height === 0 ? 0 : travelled / rect.height;
                    setProgress(Math.min(100, Math.max(0, ratio * 100)));
                }
            }["Timeline.useEffect.update"];
            const onScroll = {
                "Timeline.useEffect.onScroll": ()=>{
                    if (frame) return;
                    frame = window.requestAnimationFrame(update);
                }
            }["Timeline.useEffect.onScroll"];
            update();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            window.addEventListener('resize', onScroll, {
                passive: true
            });
            return ({
                "Timeline.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    window.removeEventListener('resize', onScroll);
                    if (frame) window.cancelAnimationFrame(frame);
                }
            })["Timeline.useEffect"];
        }
    }["Timeline.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timeline.useEffect": ()=>{
            const items = Array.from(trackRef.current?.querySelectorAll('[data-milestone]') ?? []);
            if (items.length === 0) return;
            const observer = new IntersectionObserver({
                "Timeline.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            const index = Number(entry.target.getAttribute('data-milestone'));
                            if (!Number.isNaN(index)) setActiveIndex(index);
                        }
                    }
                }
            }["Timeline.useEffect"], {
                rootMargin: '-45% 0px -45% 0px'
            });
            for (const item of items)observer.observe(item);
            return ({
                "Timeline.useEffect": ()=>observer.disconnect()
            })["Timeline.useEffect"];
        }
    }["Timeline.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: trackRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "k-rule-v absolute left-0 top-0 bottom-0 md:left-[calc(25%-1px)]",
                style: {
                    '--k-progress': `${progress}%`
                }
            }, void 0, false, {
                fileName: "[project]/components/journey/Timeline.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "grid gap-[var(--k-10)] pl-[var(--k-6)] md:pl-0",
                "aria-label": "KAALKRIT milestones",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$milestones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["milestones"].map((milestone, index)=>{
                    const project = milestone.projectSlug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProject"])(milestone.projectSlug) : undefined;
                    const active = index === activeIndex;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        "data-milestone": index,
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "absolute -left-[calc(var(--k-6)+3px)] top-[10px] block size-[7px] rounded-[var(--k-radius-pill)] transition-colors duration-[var(--k-dur)] md:left-[calc(25%-4px)]",
                                style: {
                                    background: active ? 'var(--k-signal)' : 'var(--k-line-strong)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/journey/Timeline.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-[var(--k-4)] md:grid-cols-4 md:gap-[var(--k-5)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-1 md:pr-[var(--k-7)] md:text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-[family-name:var(--font-mono)] text-[1.75rem] leading-none transition-colors duration-[var(--k-dur)]",
                                                style: {
                                                    color: active ? 'var(--k-text)' : 'var(--k-text-faint)'
                                                },
                                                children: milestone.year ?? '—'
                                            }, void 0, false, {
                                                fileName: "[project]/components/journey/Timeline.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "k-meta mt-[var(--k-2)]",
                                                children: kindLabels[milestone.kind]
                                            }, void 0, false, {
                                                fileName: "[project]/components/journey/Timeline.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/journey/Timeline.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-3 md:pl-[var(--k-7)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "k-meta",
                                                children: milestone.yearLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/journey/Timeline.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "k-display mt-[var(--k-2)] text-[length:var(--k-t-h3)]",
                                                children: milestone.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/journey/Timeline.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "k-body mt-[var(--k-4)]",
                                                children: milestone.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/journey/Timeline.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            project ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/projects#${project.slug}`,
                                                className: "mt-[var(--k-4)] inline-flex items-center gap-[var(--k-2)] min-h-[44px] text-[var(--k-t-small)] text-[var(--k-text)] underline decoration-[var(--k-line-strong)] underline-offset-4 hover:decoration-[var(--k-signal)] transition-colors duration-[var(--k-dur-fast)]",
                                                children: [
                                                    project.shortTitle,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/journey/Timeline.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/journey/Timeline.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/journey/Timeline.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/journey/Timeline.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        ]
                    }, milestone.id, true, {
                        fileName: "[project]/components/journey/Timeline.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/journey/Timeline.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/journey/Timeline.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(Timeline, "a9CeBp5Po+REaRkwSgDFO/6VDzs=");
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Reveal({ children, delay = 0, className = '' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [armed, setArmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const node = ref.current;
            if (!node) return;
            // Already on screen at mount, or no observer: show it outright. Arming
            // visible content only to fade it back in reads as a glitch, not motion.
            if (typeof IntersectionObserver === 'undefined' || node.getBoundingClientRect().top < window.innerHeight * 0.9) {
                setRevealed(true);
                return;
            }
            setArmed(true);
            const observer = new IntersectionObserver({
                "Reveal.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            setRevealed(true);
                            observer.disconnect();
                        }
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.2,
                rootMargin: '0px 0px -5% 0px'
            });
            observer.observe(node);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    const style = delay ? {
        '--k-reveal-delay': `${delay}ms`
    } : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `${armed ? 'k-reveal' : ''} ${revealed ? 'is-revealed' : ''} ${className}`.trim(),
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Reveal.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Reveal, "y5AgDzHMyDHOvDmT5IVtuZgvcc8=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/milestones.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "milestones",
    ()=>milestones
]);
const milestones = [
    {
        id: 'founded',
        year: 2024,
        yearLabel: '2024',
        kind: 'founding',
        title: 'KAALKRIT is established',
        description: 'Founded at Sir M. Visvesvaraya Institute of Technology, Bengaluru, as the institute’s official drone and robotics innovation team — multidisciplinary from the start, drawing students across engineering domains.'
    },
    {
        id: 'uas-built',
        year: 2026,
        yearLabel: 'NIDAR 2026',
        kind: 'project',
        projectSlug: 'uas-nidar-2026',
        title: 'A complete unmanned aerial system',
        description: 'Airframe design, embedded electronics, flight-controller integration, mission planning, payload management and autonomous flight brought together in an integrated UAS.'
    },
    {
        id: 'national-competition',
        year: 2026,
        yearLabel: 'NIDAR 2026',
        kind: 'competition',
        title: 'Sir MVIT at national level',
        description: 'Represented the institute at national-level drone innovation competitions with a self-built autonomous aerial platform.'
    },
    {
        id: 'business-evaluation',
        year: 2026,
        yearLabel: 'NIDAR 2026',
        kind: 'achievement',
        title: '11th place, Business Evaluation',
        description: 'Placed 11th in Business Evaluation at a national-level competition.'
    },
    {
        id: 'robotics-track',
        year: 2026,
        yearLabel: 'Robotics track',
        kind: 'project',
        projectSlug: 'robot-vacuum',
        title: 'Autonomy moves to the ground',
        description: 'An autonomous robot vacuum cleaner developed, and an intelligent robotic arm taken into development — navigation, obstacle detection and precision motion control off the airframe.'
    },
    {
        id: 'bwh',
        year: 2026,
        yearLabel: 'Platform',
        kind: 'project',
        projectSlug: 'build-with-hardware',
        title: 'Build With Hardware',
        description: 'The team’s flagship platform, in development: structured learning, practical hardware projects, documentation, collaborative workspaces and AI-powered engineering assistance.'
    },
    {
        id: 'airmos',
        year: 2027,
        yearLabel: 'NIDAR 2027',
        kind: 'project',
        projectSlug: 'airmos',
        title: 'AirMOS in development',
        description: 'The second cycle of the aerial programme — advanced sensing, autonomous capability and mission-oriented design, building directly on the 2026 platform.'
    },
    {
        id: 'forward',
        year: null,
        yearLabel: 'Forward',
        kind: 'forward',
        title: 'Where the programme is headed',
        description: 'Swarm intelligence, computer-vision-driven autonomy, advanced embedded platforms, intelligent robotic manipulators and integrated autonomous ecosystems. Stated as direction, not as schedule.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProject",
    ()=>getProject,
    "platformProject",
    ()=>platformProject,
    "programmeProjects",
    ()=>programmeProjects,
    "projects",
    ()=>projects,
    "roboticsProjects",
    ()=>roboticsProjects,
    "statusLabel",
    ()=>statusLabel
]);
const projects = [
    {
        slug: 'uas-nidar-2026',
        title: 'Autonomous Unmanned Aerial System',
        shortTitle: 'Autonomous UAS',
        programme: 'nidar-2026',
        programmeLabel: 'NIDAR 2026',
        status: 'completed',
        year: 2026,
        summary: 'A fully integrated unmanned aerial system, designed and built end to end: airframe, embedded electronics, flight controller integration, mission planning, payload management and autonomous flight.',
        problem: 'Documented engineering scope: bringing airframe design, embedded electronics, flight control, mission planning and payload management into one autonomous system.',
        significance: 'Represents KAALKRIT’s full-lifecycle work across design, integration, software, testing and autonomous flight.',
        capabilities: [
            'uas',
            'flight-control',
            'embedded',
            'mechanical',
            'pcb'
        ]
    },
    {
        slug: 'airmos',
        title: 'AirMOS',
        shortTitle: 'AirMOS',
        programme: 'nidar-2027',
        programmeLabel: 'NIDAR 2027',
        status: 'in-development',
        year: 2027,
        summary: 'Currently in development; advanced sensing, autonomy and mission-oriented design.',
        problem: 'Documented engineering scope: advanced sensing, autonomy and mission-oriented design for the next aerial programme cycle.',
        significance: 'Continues the NIDAR aerial programme into 2027.',
        capabilities: [
            'uas',
            'drone-tech',
            'flight-control',
            'sensors',
            'ai-cv'
        ]
    },
    {
        slug: 'build-with-hardware',
        title: 'Build With Hardware',
        shortTitle: 'BWH',
        status: 'in-development',
        summary: 'The team’s flagship engineering platform: structured learning, practical hardware projects, technical documentation, collaborative workspaces and AI-powered engineering assistance in one environment.',
        problem: 'Documented platform scope: structured learning, projects, documentation, collaborative workspaces and AI-powered engineering assistance.',
        significance: 'Extends KAALKRIT’s engineering practice into a flagship learning and collaboration platform.',
        capabilities: [
            'software',
            'ai-cv',
            'research',
            'embedded'
        ]
    },
    {
        slug: 'robotic-arm',
        title: 'Intelligent Robotic Arm',
        shortTitle: 'Robotic Arm',
        status: 'in-development',
        summary: 'A servo-driven manipulator in development, combining mechanical engineering, electronics and control algorithms for precision motion.',
        problem: 'Documented engineering scope: servo control, precision motion and control algorithms.',
        significance: 'Applies mechanical design, electronics and control to an intelligent robotic arm.',
        capabilities: [
            'robotics',
            'mechanical',
            'embedded',
            'sensors'
        ]
    },
    {
        slug: 'robot-vacuum',
        title: 'Autonomous Robot Vacuum Cleaner',
        shortTitle: 'Robot Vacuum',
        status: 'completed',
        summary: 'Developed system covering navigation, obstacle detection, motion control, sensor integration and autonomous mobility.',
        problem: 'Documented engineering scope: navigation, obstacle detection, motion control, sensor integration and autonomous mobility.',
        significance: 'Demonstrates autonomous robotics beyond the aerial programme.',
        capabilities: [
            'robotics',
            'sensors',
            'embedded',
            'ai-cv'
        ]
    }
];
const bySlug = new Map(projects.map((project)=>[
        project.slug,
        project
    ]));
function getProject(slug) {
    return bySlug.get(slug);
}
const programmeProjects = projects.filter((project)=>project.programme !== undefined);
const roboticsProjects = projects.filter((project)=>[
        'robotic-arm',
        'robot-vacuum'
    ].includes(project.slug));
const platformProject = getProject('build-with-hardware');
const statusLabel = {
    completed: 'Built',
    'in-development': 'In development'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0r_r3kx._.js.map