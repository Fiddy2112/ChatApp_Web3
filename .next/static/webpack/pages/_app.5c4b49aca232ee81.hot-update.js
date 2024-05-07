"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.merge */ \"./node_modules/lodash.merge/index.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/esm/exports/chains.js\");\n\n\n\n\n\n\n\n\nconst config = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultConfig)({\n    appName: \"Custom Dex\",\n    projectId: \"f2341821329860acaf128d6753106eb7\",\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.sepolia,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygonMumbai,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.opBNBTestnet\n    ],\n    transports: {\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.sepolia.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.http)(\"https://eth-sepolia.g.alchemy.com/v2/EQ9HzWHaYcZUOkmW9D03QWn7OnqRxAkQ\")\n    }\n});\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClient();\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction App(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiProvider, {\n        config: config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n                theme: myTheme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ2E7QUFFVjtBQU9EO0FBQ3lDO0FBQzdCO0FBUXRCO0FBRXRCLE1BQU1lLFNBQVNkLHdFQUFnQkEsQ0FBQztJQUM5QmUsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFFBQVE7UUFBQ1IsaURBQU9BO1FBQUVDLHVEQUFhQTtRQUFFQyxpREFBT0E7UUFBRUMsc0RBQVlBO0tBQUM7SUFDdkRNLFlBQVk7UUFDVixDQUFDVCxpREFBT0EsQ0FBQ1UsRUFBRSxDQUFDLEVBQUVaLDJDQUFJQSxDQUNoQjtJQUVKO0FBQ0Y7QUFFQSxNQUFNYSxjQUFjLElBQUloQiw4REFBV0E7QUFFbkMsTUFBTWlCLFVBQVV0QixtREFBS0EsQ0FBQ0kscUVBQWFBLElBQUk7SUFDckNtQixRQUFRO1FBQ05DLGFBQWE7UUFDYkMsdUJBQXVCO0lBQ3pCO0FBQ0Y7QUFFZSxTQUFTQyxJQUFJLEtBQXdCO1FBQXhCLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQXhCO0lBQzFCLHFCQUNFLDhEQUFDckIsZ0RBQWFBO1FBQUNRLFFBQVFBO2tCQUNyQiw0RUFBQ1Qsc0VBQW1CQTtZQUFDdUIsUUFBUVI7c0JBQzNCLDRFQUFDbkIsc0VBQWtCQTtnQkFBQzRCLE9BQU9SOzBCQUN6Qiw0RUFBQ0s7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0tBVndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcIkByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC5tZXJnZVwiO1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0Q29uZmlnLFxuICBSYWluYm93S2l0UHJvdmlkZXIsXG4gIGRhcmtUaGVtZSxcbiAgbWlkbmlnaHRUaGVtZSxcbn0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgV2FnbWlQcm92aWRlciwgaHR0cCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHtcbiAgbWFpbm5ldCxcbiAgc2Vwb2xpYSxcbiAgcG9seWdvbk11bWJhaSxcbiAgcG9seWdvbixcbiAgb3BCTkJUZXN0bmV0LFxuICBvcEJOQixcbn0gZnJvbSBcIndhZ21pL2NoYWluc1wiO1xuXG5jb25zdCBjb25maWcgPSBnZXREZWZhdWx0Q29uZmlnKHtcbiAgYXBwTmFtZTogXCJDdXN0b20gRGV4XCIsXG4gIHByb2plY3RJZDogXCJmMjM0MTgyMTMyOTg2MGFjYWYxMjhkNjc1MzEwNmViN1wiLFxuICBjaGFpbnM6IFtzZXBvbGlhLCBwb2x5Z29uTXVtYmFpLCBwb2x5Z29uLCBvcEJOQlRlc3RuZXRdLFxuICB0cmFuc3BvcnRzOiB7XG4gICAgW3NlcG9saWEuaWRdOiBodHRwKFxuICAgICAgXCJodHRwczovL2V0aC1zZXBvbGlhLmcuYWxjaGVteS5jb20vdjIvRVE5SHpXSGFZY1pVT2ttVzlEMDNRV243T25xUnhBa1FcIlxuICAgICksXG4gIH0sXG59KTtcblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xuICBjb2xvcnM6IHtcbiAgICBhY2NlbnRDb2xvcjogXCIjMTgxODFiXCIsXG4gICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNmZmZcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pUHJvdmlkZXIgY29uZmlnPXtjb25maWd9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgdGhlbWU9e215VGhlbWV9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9XYWdtaVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZ2V0RGVmYXVsdENvbmZpZyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsIm1pZG5pZ2h0VGhlbWUiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJXYWdtaVByb3ZpZGVyIiwiaHR0cCIsIm1haW5uZXQiLCJzZXBvbGlhIiwicG9seWdvbk11bWJhaSIsInBvbHlnb24iLCJvcEJOQlRlc3RuZXQiLCJvcEJOQiIsImNvbmZpZyIsImFwcE5hbWUiLCJwcm9qZWN0SWQiLCJjaGFpbnMiLCJ0cmFuc3BvcnRzIiwiaWQiLCJxdWVyeUNsaWVudCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});