/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.merge */ \"lodash.merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit/wallets */ \"@rainbow-me/rainbowkit/wallets\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, wagmi__WEBPACK_IMPORTED_MODULE_6__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_7__, wagmi_chains__WEBPACK_IMPORTED_MODULE_8__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, wagmi__WEBPACK_IMPORTED_MODULE_6__, _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_7__, wagmi_chains__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst { wallets } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)();\nconst config = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultConfig)({\n    appName: \"Custom Dex\",\n    projectId: \"f2341821329860acaf128d6753106eb7\",\n    wallets: [\n        ...wallets,\n        {\n            groupName: \"Other\",\n            wallets: [\n                _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_7__.argentWallet,\n                _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_7__.trustWallet,\n                _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_7__.ledgerWallet\n            ]\n        }\n    ],\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.sepolia,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.mainnet,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.polygon,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.optimism,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.arbitrum,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.base\n    ],\n    transports: {\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.sepolia.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_6__.http)(\"https://eth-sepolia.g.alchemy.com/v2/EQ9HzWHaYcZUOkmW9D03QWn7OnqRxAkQ\")\n    }\n});\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiProvider, {\n        config: config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n                theme: myTheme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\Web3\\\\chat\\\\pages\\\\_app.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNhO0FBRVY7QUFRRDtBQUN5QztBQUM3QjtBQUtKO0FBUWxCO0FBRXRCLE1BQU0sRUFBRW1CLE9BQU8sRUFBRSxHQUFHZCx5RUFBaUJBO0FBRXJDLE1BQU1lLFNBQVNuQix3RUFBZ0JBLENBQUM7SUFDOUJvQixTQUFTO0lBQ1RDLFdBQVc7SUFDWEgsU0FBUztXQUNKQTtRQUNIO1lBQ0VJLFdBQVc7WUFDWEosU0FBUztnQkFBQ1Qsd0VBQVlBO2dCQUFFQyx1RUFBV0E7Z0JBQUVDLHdFQUFZQTthQUFDO1FBQ3BEO0tBQ0Q7SUFDRFksUUFBUTtRQUFDVixpREFBT0E7UUFBRUQsaURBQU9BO1FBQUVFLGlEQUFPQTtRQUFFQyxrREFBUUE7UUFBRUMsa0RBQVFBO1FBQUVDLDhDQUFJQTtLQUFDO0lBQzdETyxZQUFZO1FBQ1YsQ0FBQ1gsaURBQU9BLENBQUNZLEVBQUUsQ0FBQyxFQUFFakIsMkNBQUlBLENBQ2hCO0lBRUo7QUFDRjtBQUVBLE1BQU1rQixjQUFjLElBQUlyQiw4REFBV0E7QUFFbkMsTUFBTXNCLFVBQVU1QixtREFBS0EsQ0FBQ0kscUVBQWFBLElBQUk7SUFDckN5QixRQUFRO1FBQ05DLGFBQWE7UUFDYkMsdUJBQXVCO0lBQ3pCO0FBQ0Y7QUFFZSxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDMUIsZ0RBQWFBO1FBQUNZLFFBQVFBO2tCQUNyQiw0RUFBQ2Isc0VBQW1CQTtZQUFDNEIsUUFBUVI7c0JBQzNCLDRFQUFDekIsc0VBQWtCQTtnQkFBQ2tDLE9BQU9SOzBCQUN6Qiw0RUFBQ0s7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pc3dhcF90b2tlbl9tYXJrZXRwbGFjZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoLm1lcmdlXCI7XG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRDb25maWcsXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcbiAgZGFya1RoZW1lLFxuICBtaWRuaWdodFRoZW1lLFxuICBnZXREZWZhdWx0V2FsbGV0cyxcbn0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgV2FnbWlQcm92aWRlciwgaHR0cCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHtcbiAgYXJnZW50V2FsbGV0LFxuICB0cnVzdFdhbGxldCxcbiAgbGVkZ2VyV2FsbGV0LFxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC93YWxsZXRzXCI7XG5pbXBvcnQge1xuICBtYWlubmV0LFxuICBzZXBvbGlhLFxuICBwb2x5Z29uLFxuICBvcHRpbWlzbSxcbiAgYXJiaXRydW0sXG4gIGJhc2UsXG59IGZyb20gXCJ3YWdtaS9jaGFpbnNcIjtcblxuY29uc3QgeyB3YWxsZXRzIH0gPSBnZXREZWZhdWx0V2FsbGV0cygpO1xuXG5jb25zdCBjb25maWcgPSBnZXREZWZhdWx0Q29uZmlnKHtcbiAgYXBwTmFtZTogXCJDdXN0b20gRGV4XCIsXG4gIHByb2plY3RJZDogXCJmMjM0MTgyMTMyOTg2MGFjYWYxMjhkNjc1MzEwNmViN1wiLFxuICB3YWxsZXRzOiBbXG4gICAgLi4ud2FsbGV0cyxcbiAgICB7XG4gICAgICBncm91cE5hbWU6IFwiT3RoZXJcIixcbiAgICAgIHdhbGxldHM6IFthcmdlbnRXYWxsZXQsIHRydXN0V2FsbGV0LCBsZWRnZXJXYWxsZXRdLFxuICAgIH0sXG4gIF0sXG4gIGNoYWluczogW3NlcG9saWEsIG1haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bSwgYmFzZV0sXG4gIHRyYW5zcG9ydHM6IHtcbiAgICBbc2Vwb2xpYS5pZF06IGh0dHAoXG4gICAgICBcImh0dHBzOi8vZXRoLXNlcG9saWEuZy5hbGNoZW15LmNvbS92Mi9FUTlIeldIYVljWlVPa21XOUQwM1FXbjdPbnFSeEFrUVwiXG4gICAgKSxcbiAgfSxcbn0pO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG5jb25zdCBteVRoZW1lID0gbWVyZ2UobWlkbmlnaHRUaGVtZSgpLCB7XG4gIGNvbG9yczoge1xuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcbiAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwiI2ZmZlwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlQcm92aWRlciBjb25maWc9e2NvbmZpZ30+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciB0aGVtZT17bXlUaGVtZX0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibWVyZ2UiLCJnZXREZWZhdWx0Q29uZmlnIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwibWlkbmlnaHRUaGVtZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiV2FnbWlQcm92aWRlciIsImh0dHAiLCJhcmdlbnRXYWxsZXQiLCJ0cnVzdFdhbGxldCIsImxlZGdlcldhbGxldCIsIm1haW5uZXQiLCJzZXBvbGlhIiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJiYXNlIiwid2FsbGV0cyIsImNvbmZpZyIsImFwcE5hbWUiLCJwcm9qZWN0SWQiLCJncm91cE5hbWUiLCJjaGFpbnMiLCJ0cmFuc3BvcnRzIiwiaWQiLCJxdWVyeUNsaWVudCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash.merge":
/*!*******************************!*\
  !*** external "lodash.merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash.merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@rainbow-me/rainbowkit/wallets":
/*!*************************************************!*\
  !*** external "@rainbow-me/rainbowkit/wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit/wallets");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@rainbow-me"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();