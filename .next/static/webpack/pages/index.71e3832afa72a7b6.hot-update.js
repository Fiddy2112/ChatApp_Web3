"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Header() {\n    _s();\n    const [installWallet, setInstallWallet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!window.ethereum) return setInstallWallet(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"\",\n                    className: \"no-underline text-4xl font-medium font-sans\",\n                    children: \"CHAT APP\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\components\\\\Header.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\components\\\\Header.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            installWallet ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton, {}, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\components\\\\Header.js\",\n                lineNumber: 17,\n                columnNumber: 24\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.WalletButton, {\n                wallet: \"metamask\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\components\\\\Header.js\",\n                lineNumber: 17,\n                columnNumber: 44\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\components\\\\Header.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"IRWBf9JgyVz46QAZbASQYV7+84Q=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNrQjtBQUVyRSxTQUFTSzs7SUFDUCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNPLE9BQU9DLFFBQVEsRUFBRSxPQUFPRixpQkFBaUI7SUFDaEQ7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEOzBCQUNDLDRFQUFDRTtvQkFBRUMsTUFBSztvQkFBR0YsV0FBVTs4QkFBOEM7Ozs7Ozs7Ozs7O1lBSXBFTCw4QkFBZ0IsOERBQUNILGlFQUFhQTs7OztxQ0FBTSw4REFBQ0MsZ0VBQVlBO2dCQUFDVSxRQUFPOzs7Ozs7Ozs7Ozs7QUFHaEU7R0FoQlNUO0tBQUFBO0FBa0JULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiwgV2FsbGV0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbaW5zdGFsbFdhbGxldCwgc2V0SW5zdGFsbFdhbGxldF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gc2V0SW5zdGFsbFdhbGxldChmYWxzZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vLXVuZGVybGluZSB0ZXh0LTR4bCBmb250LW1lZGl1bSBmb250LXNhbnNcIj5cclxuICAgICAgICAgIENIQVQgQVBQXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2luc3RhbGxXYWxsZXQgPyA8Q29ubmVjdEJ1dHRvbiAvPiA6IDxXYWxsZXRCdXR0b24gd2FsbGV0PVwibWV0YW1hc2tcIiAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb25uZWN0QnV0dG9uIiwiV2FsbGV0QnV0dG9uIiwiSGVhZGVyIiwiaW5zdGFsbFdhbGxldCIsInNldEluc3RhbGxXYWxsZXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});