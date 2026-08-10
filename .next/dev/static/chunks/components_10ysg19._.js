(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/drone/DroneAnnotations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DroneAnnotations",
    ()=>DroneAnnotations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/drone/types.ts [app-client] (ecmascript)");
'use client';
;
;
function DroneAnnotations({ activePart, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "system-callouts drone-annotations",
        "aria-label": "Autonomous drone system components",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRONE_PARTS"].map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `system-callout ${activePart === part.id ? 'is-active' : ''}`,
                    "aria-pressed": activePart === part.id,
                    onClick: ()=>onSelect(part.id),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "system-callout__mark",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/drone/DroneAnnotations.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "system-callout__label",
                                    children: part.label
                                }, void 0, false, {
                                    fileName: "[project]/components/drone/DroneAnnotations.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "system-callout__detail",
                                    children: part.detail
                                }, void 0, false, {
                                    fileName: "[project]/components/drone/DroneAnnotations.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/drone/DroneAnnotations.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/drone/DroneAnnotations.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, part.id, false, {
                fileName: "[project]/components/drone/DroneAnnotations.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/drone/DroneAnnotations.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = DroneAnnotations;
var _c;
__turbopack_context__.k.register(_c, "DroneAnnotations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/drone/DroneHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DroneHero",
    ()=>DroneHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$DroneAnnotations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/drone/DroneAnnotations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$DroneSvgFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/drone/DroneSvgFallback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/drone/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$useDroneDeployment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/drone/useDroneDeployment.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const DroneExperience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/drone/DroneExperience.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((module)=>module.DroneExperience), {
    loadableGenerated: {
        modules: [
            "[project]/components/drone/DroneExperience.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = DroneExperience;
function DroneHero() {
    _s();
    const scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DroneHero.useMemo[progress]": ()=>({
                value: 0
            })
    }["DroneHero.useMemo[progress]"], []);
    const [sceneReady, setSceneReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [motionReduced, setMotionReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dormant');
    const [activePart, setActivePart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleStageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DroneHero.useCallback[handleStageChange]": (nextStage)=>setStage(nextStage)
    }["DroneHero.useCallback[handleStageChange]"], []);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$useDroneDeployment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroneDeployment"])({
        scope: scopeRef,
        pinTarget: pinTargetRef,
        progress,
        sceneReady: sceneReady && motionReduced === false,
        onStageChange: handleStageChange
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DroneHero.useEffect": ()=>{
            const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
            const update = {
                "DroneHero.useEffect.update": ()=>setMotionReduced(preference.matches)
            }["DroneHero.useEffect.update"];
            update();
            preference.addEventListener('change', update);
            return ({
                "DroneHero.useEffect": ()=>preference.removeEventListener('change', update)
            })["DroneHero.useEffect"];
        }
    }["DroneHero.useEffect"], []);
    const handleSceneReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DroneHero.useCallback[handleSceneReady]": ()=>{
            setSceneReady(true);
            requestAnimationFrame({
                "DroneHero.useCallback[handleSceneReady]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
            }["DroneHero.useCallback[handleSceneReady]"]);
        }
    }["DroneHero.useCallback[handleSceneReady]"], []);
    const toggleSystem = ()=>{
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOperationalStage"])(stage) ? 0.04 : 0.92;
        if (timelineRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(timelineRef.current, {
                progress: target,
                duration: 0.8,
                ease: 'power2.inOut',
                overwrite: true
            });
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(progress, {
            value: target,
            duration: 0.8,
            ease: 'power2.inOut',
            overwrite: true,
            onUpdate: ()=>{
                const nextStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDroneStage"])(progress.value);
                setStage((current)=>current === nextStage ? current : nextStage);
            }
        });
    };
    const status = motionReduced || stage === 'activate' ? 'SYSTEM READY' : stage === 'dormant' ? 'SYSTEM INIT' : 'SYSTEM ' + stage.toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: scopeRef,
        className: "drone-scene",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drone-scene__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Deployment / 01"
                    }, void 0, false, {
                        fileName: "[project]/components/drone/DroneHero.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-live": "polite",
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/components/drone/DroneHero.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/drone/DroneHero.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: pinTargetRef,
                className: "drone-scene__story",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "drone-scene__art",
                    children: motionReduced === null || motionReduced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$DroneSvgFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DroneSvgFallback"], {
                        state: "activate",
                        activePart: activePart
                    }, void 0, false, {
                        fileName: "[project]/components/drone/DroneHero.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DroneExperience, {
                        progress: progress,
                        activePart: activePart,
                        onSelect: setActivePart,
                        onReady: handleSceneReady,
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$DroneSvgFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DroneSvgFallback"], {
                            state: "activate",
                            activePart: activePart
                        }, void 0, false, {
                            fileName: "[project]/components/drone/DroneHero.tsx",
                            lineNumber: 88,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/drone/DroneHero.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/drone/DroneHero.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneHero.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drone-scene__controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "system-toggle",
                        onClick: toggleSystem,
                        "aria-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOperationalStage"])(stage),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "system-toggle__dot",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneHero.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOperationalStage"])(stage) ? 'Reassemble the system' : 'Open the system'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneHero.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Scroll to deploy the system. Use the component index to inspect the role of each subsystem."
                    }, void 0, false, {
                        fileName: "[project]/components/drone/DroneHero.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/drone/DroneHero.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$DroneAnnotations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DroneAnnotations"], {
                activePart: activePart,
                onSelect: setActivePart
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneHero.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "drone-scene__text-equivalent",
                children: "This visual maps distributed intelligence into an engineered autonomous system: an airframe, rotor assembly, embedded electronics, flight controller, sensor integration, payload management and autonomous navigation."
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneHero.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/drone/DroneHero.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(DroneHero, "Tye9dSayhI5knpmNhDgG80PMEHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$drone$2f$useDroneDeployment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDroneDeployment"]
    ];
});
_c1 = DroneHero;
var _c, _c1;
__turbopack_context__.k.register(_c, "DroneExperience");
__turbopack_context__.k.register(_c1, "DroneHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/drone/DroneSvgFallback.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DroneSvgFallback",
    ()=>DroneSvgFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const PARTICLES = Array.from({
    length: 64
}, (_, index)=>{
    const angle = index * 2.399;
    const radius = 18 + index * 37 % 120;
    return {
        x: Math.round((250 + Math.cos(angle) * radius * 1.25) * 1000) / 1000,
        y: Math.round((160 + Math.sin(angle) * radius * 0.7) * 1000) / 1000,
        size: Math.round((0.7 + index % 4 * 0.3) * 1000) / 1000
    };
});
function DroneSvgFallback({ state = 'activate', activePart = null }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "drone-svg",
        viewBox: "0 0 500 330",
        role: "img",
        "aria-labelledby": "drone-fallback-title drone-fallback-description",
        "data-state": state,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                id: "drone-fallback-title",
                children: "KAALKRIT autonomous drone system diagram"
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("desc", {
                id: "drone-fallback-description",
                children: "A geometric quadcopter with a central intelligence metaphor, mechanical arms, electronics, sensors, and payload components."
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "drone-svg__cloud",
                "aria-hidden": "true",
                children: PARTICLES.map((particle, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: particle.x,
                        cy: particle.y,
                        r: particle.size,
                        fill: index % 5 === 0 ? '#8b5cf6' : index % 3 === 0 ? '#06b6d4' : '#c4c7c7'
                    }, index, false, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 24,
                        columnNumber: 45
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "drone-svg__grid",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M48 274H452M78 267V281M138 267V281M198 267V281M258 267V281M318 267V281M378 267V281M438 267V281"
                    }, void 0, false, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "250",
                        cy: "164",
                        r: "112"
                    }, void 0, false, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "drone-svg__connectors",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M250 164L142 94M250 164L358 94M250 164L145 236M250 164L355 236M250 164L250 128M250 164L310 216"
                }, void 0, false, {
                    fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "drone-svg__assembly",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "drone-svg__part drone-svg__part--rotor",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "drone-svg__arm",
                                d: "M220 151L142 94M280 151L358 94M220 179L145 236M280 179L355 236"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            [
                                [
                                    142,
                                    94
                                ],
                                [
                                    358,
                                    94
                                ],
                                [
                                    145,
                                    236
                                ],
                                [
                                    355,
                                    236
                                ]
                            ].map(([cx, cy])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    className: "drone-svg__rotor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: cx ?? 0,
                                            cy: cy ?? 0,
                                            r: "24"
                                        }, void 0, false, {
                                            fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: 'M' + ((cx ?? 0) - 12) + ' ' + ((cy ?? 0) - 3) + 'h24M' + ((cx ?? 0) - 12) + ' ' + ((cy ?? 0) + 3) + 'h24'
                                        }, void 0, false, {
                                            fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, String(cx) + '-' + String(cy), true, {
                                    fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: [
                            'drone-svg__part',
                            'drone-svg__part--airframe',
                            activePart === 'airframe' ? 'is-active' : ''
                        ].join(' '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "drone-svg__body",
                                d: "M207 143L250 117L293 143V192L250 218L207 192Z"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                className: "drone-svg__body-detail",
                                d: "M222 151L250 134L278 151M222 185L250 202L278 185"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: [
                            'drone-svg__part',
                            'drone-svg__part--electronics',
                            activePart === 'electronics' ? 'is-active' : ''
                        ].join(' '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "230",
                                y: "153",
                                width: "40",
                                height: "28"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M236 160h28M236 168h18M236 176h24"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: [
                            'drone-svg__part',
                            'drone-svg__part--flight-controller',
                            activePart === 'flight-controller' ? 'is-active' : ''
                        ].join(' '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "241",
                                y: "126",
                                width: "18",
                                height: "16"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "250",
                                cy: "134",
                                r: "3"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "drone-svg__intelligence-core",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "250",
                                cy: "134",
                                r: "15"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "250",
                                cy: "134",
                                r: "5"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M235 134h30M250 119v30"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: [
                            'drone-svg__part',
                            'drone-svg__part--sensor',
                            activePart === 'sensor' ? 'is-active' : ''
                        ].join(' '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "358",
                                cy: "94",
                                r: "10"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "358",
                                cy: "94",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: [
                            'drone-svg__part',
                            'drone-svg__part--payload',
                            activePart === 'payload' ? 'is-active' : ''
                        ].join(' '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M288 191L330 207L322 226L280 210Z"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "309",
                                cy: "212",
                                r: "7"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: [
                            'drone-svg__part',
                            'drone-svg__part--navigation',
                            activePart === 'navigation' ? 'is-active' : ''
                        ].join(' '),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M151 214l20-10 14 15-20 11z"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M161 215l9 5"
                            }, void 0, false, {
                                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                className: "drone-svg__caption",
                x: "48",
                y: "304",
                children: "DISTRIBUTED INTELLIGENCE / AUTONOMOUS SYSTEM"
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                className: "drone-svg__state",
                x: "452",
                y: "304",
                textAnchor: "end",
                children: state === 'activate' ? 'SYSTEM READY' : 'SYSTEM ' + state.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/drone/DroneSvgFallback.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/drone/DroneSvgFallback.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = DroneSvgFallback;
var _c;
__turbopack_context__.k.register(_c, "DroneSvgFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/drone/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRONE_PARTS",
    ()=>DRONE_PARTS,
    "getDroneStage",
    ()=>getDroneStage,
    "isOperationalStage",
    ()=>isOperationalStage
]);
const DRONE_PARTS = [
    {
        id: 'airframe',
        label: 'Airframe',
        detail: 'Mechanical design and rapid prototyping.'
    },
    {
        id: 'rotor',
        label: 'Rotor Assembly',
        detail: 'Flight control and autonomous navigation.'
    },
    {
        id: 'electronics',
        label: 'Embedded Electronics',
        detail: 'PCB design and embedded systems development.'
    },
    {
        id: 'flight-controller',
        label: 'Flight Controller',
        detail: 'Control systems and autonomous navigation.'
    },
    {
        id: 'sensor',
        label: 'Sensor Integration',
        detail: 'Sensor integration and control systems.'
    },
    {
        id: 'payload',
        label: 'Payload Management',
        detail: 'Mission planning and payload management.'
    },
    {
        id: 'navigation',
        label: 'Autonomous Navigation',
        detail: 'AI, computer vision, and autonomous flight.'
    }
];
const getDroneStage = (progress)=>{
    if (progress < 0.15) return 'dormant';
    if (progress < 0.3) return 'awaken';
    if (progress < 0.6) return 'unfold';
    if (progress < 0.8) return 'deploy';
    return 'activate';
};
const isOperationalStage = (stage)=>stage === 'deploy' || stage === 'activate';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/drone/useDroneDeployment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDroneDeployment",
    ()=>useDroneDeployment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const DEPLOYMENT_TRIGGER_ID = 'kaalkrit-drone-deployment';
function useDroneDeployment({ scope, pinTarget, progress, sceneReady, onStageChange }) {
    _s();
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('dormant');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "useDroneDeployment.useGSAP": ()=>{
            if (!scope.current || !pinTarget.current || !sceneReady) return;
            const media = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
            media.add({
                desktop: '(min-width: 48rem)',
                mobile: '(max-width: 47.99rem)',
                reduced: '(prefers-reduced-motion: reduce)'
            }, {
                "useDroneDeployment.useGSAP": (context)=>{
                    if (context.conditions?.mobile || context.conditions?.reduced) return undefined;
                    const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        paused: true,
                        defaults: {
                            ease: 'none'
                        },
                        onUpdate: {
                            "useDroneDeployment.useGSAP.timeline": ()=>{
                                const nextProgress = timeline.progress();
                                progress.value = nextProgress;
                                const nextStage = nextProgress < 0.15 ? 'dormant' : nextProgress < 0.3 ? 'awaken' : nextProgress < 0.6 ? 'unfold' : nextProgress < 0.8 ? 'deploy' : 'activate';
                                if (stageRef.current !== nextStage) {
                                    stageRef.current = nextStage;
                                    onStageChange(nextStage);
                                }
                            }
                        }["useDroneDeployment.useGSAP.timeline"]
                    });
                    timeline.to(progress, {
                        value: 1,
                        duration: 1
                    });
                    timelineRef.current = timeline;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        id: DEPLOYMENT_TRIGGER_ID,
                        trigger: scope.current,
                        start: 'top top',
                        end: {
                            "useDroneDeployment.useGSAP": ()=>`+=${Math.max(window.innerHeight, 720)}`
                        }["useDroneDeployment.useGSAP"],
                        pin: pinTarget.current,
                        pinSpacing: false,
                        scrub: 1,
                        animation: timeline,
                        invalidateOnRefresh: true
                    });
                    requestAnimationFrame({
                        "useDroneDeployment.useGSAP": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
                    }["useDroneDeployment.useGSAP"]);
                    return ({
                        "useDroneDeployment.useGSAP": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getById(DEPLOYMENT_TRIGGER_ID)?.kill();
                            timeline.kill();
                            timelineRef.current = null;
                            progress.value = 0;
                            stageRef.current = 'dormant';
                        }
                    })["useDroneDeployment.useGSAP"];
                }
            }["useDroneDeployment.useGSAP"]);
            return ({
                "useDroneDeployment.useGSAP": ()=>{
                    media.revert();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getById(DEPLOYMENT_TRIGGER_ID)?.kill();
                    timelineRef.current?.kill();
                    timelineRef.current = null;
                }
            })["useDroneDeployment.useGSAP"];
        }
    }["useDroneDeployment.useGSAP"], {
        scope,
        dependencies: [
            sceneReady
        ]
    });
    return timelineRef;
}
_s(useDroneDeployment, "x2suYz8UrIPcuS5gFtV/9L6YvkQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
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
"[project]/components/ui/ScrollProgressRail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgressRail",
    ()=>ScrollProgressRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollProgressRail() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgressRail.useEffect": ()=>{
            const update = {
                "ScrollProgressRail.useEffect.update": ()=>{
                    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                    setProgress(scrollable > 0 ? Math.min(100, window.scrollY / scrollable * 100) : 0);
                }
            }["ScrollProgressRail.useEffect.update"];
            update();
            window.addEventListener('scroll', update, {
                passive: true
            });
            window.addEventListener('resize', update, {
                passive: true
            });
            return ({
                "ScrollProgressRail.useEffect": ()=>{
                    window.removeEventListener('scroll', update);
                    window.removeEventListener('resize', update);
                }
            })["ScrollProgressRail.useEffect"];
        }
    }["ScrollProgressRail.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scroll-rail",
        "aria-hidden": "true",
        style: {
            '--scroll-progress': `${progress}%`
        }
    }, void 0, false, {
        fileName: "[project]/components/ui/ScrollProgressRail.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_s(ScrollProgressRail, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = ScrollProgressRail;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgressRail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_10ysg19._.js.map