"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/components/login.js":
/*!*************************************!*\
  !*** ./src/app/components/login.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_backforms_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/backforms.png */ \"(app-pages-browser)/./public/backforms.png\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/logo.png */ \"(app-pages-browser)/./public/logo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const response = (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            method: \"post\",\n            baseURL: \"http://localhost:3001\",\n            url: \"/login\",\n            data: {\n                email,\n                password\n            }\n        }).then((result)=>{\n            console.log(result);\n            if (result.data === \"Valid login\") {\n                router.push(\"http://localhost:5000\");\n            }\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gradient-to-b from-red-950 to-transparent h-screen relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-cover bg-center z-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_backforms_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        className: \"w-auto h-auto\",\n                        alt: \"Background Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                        lineNumber: 35,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                    lineNumber: 34,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-8 left-8 z-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        width: 160,\n                        height: 160,\n                        alt: \"Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                        lineNumber: 40,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                    lineNumber: 39,\n                    columnNumber: 1\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"absolute inset-0 flex items-center justify-center text-white text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl mb-4 font-poppins font-semibold\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            id: \"email\",\n                                            placeholder: \"Email\",\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            className: \"border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                id: \"password\",\n                                                placeholder: \"Password\",\n                                                onChange: (e)=>setPassword(e.target.value),\n                                                className: \"border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 11\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mt-2 text-sm text-gray-500\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 14\n                                                    }, undefined),\n                                                    \"Forget password? \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"font-medium text-white hover:underline\",\n                                                        children: \"Click here\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 30\n                                                    }, undefined),\n                                                    \".\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \" bg-black relative inline-flex w-48 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-white rounded-lg group \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"relative px-5 py-2.5 w-48 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-red-800\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mx-4 mb-0 text-center font-semibold dark:text-neutral-200\",\n                                    children: \"OR\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 85,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-5 py-2 inline-flex items-center justify-center  border  gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-6 h-6\",\n                                        src: \"https://www.svgrepo.com/show/475656/google-color.svg\",\n                                        loading: \"lazy\",\n                                        alt: \"google logo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Login with Google\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 94,\n                                columnNumber: 3\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                    lineNumber: 45,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n            lineNumber: 32,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Login, \"b/i3ultItu0HSlZxJrpLWngwmCU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ3dCO0FBQ1g7QUFDTztBQUN6QjtBQUNnQjtBQUUxQyxNQUFNUSxRQUFROztJQUNaLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLE9BQU1DLFNBQVMsR0FBQ04sK0NBQVFBO0lBQy9CLE1BQU0sQ0FBQ08sVUFBU0MsWUFBWSxHQUFDUiwrQ0FBUUE7SUFDckMsTUFBTVMsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxXQUFZWCxpREFBS0EsQ0FBQztZQUN0QlksUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLEtBQUs7WUFDTEMsTUFBTTtnQkFDSlg7Z0JBQ0FFO1lBQ0Y7UUFDRixHQUNHVSxJQUFJLENBQUNDLENBQUFBO1lBQVVDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDMUIsSUFBR0EsT0FBT0YsSUFBSSxLQUFHLGVBQWM7Z0JBQzdCWixPQUFPaUIsSUFBSSxDQUFDO1lBQ2Q7UUFDQSxHQUNEQyxLQUFLLENBQUNDLENBQUFBLE1BQU9KLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDOUI7SUFDQSxxQkFBTyw4REFBQ0M7a0JBQ0wsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUVmLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDbEIsNEVBQUM5QixtREFBS0E7d0JBQUMrQixLQUFLOUIsNkRBQVVBO3dCQUFFNkIsV0FBVTt3QkFBZ0JFLEtBQUk7Ozs7Ozs7Ozs7OzhCQUl4RCw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUM5QixtREFBS0E7d0JBQUMrQixLQUFLN0Isd0RBQUlBO3dCQUFFK0IsT0FBTzt3QkFBS0MsUUFBUTt3QkFBS0YsS0FBSTs7Ozs7Ozs7Ozs7OEJBSzdDLDhEQUFDRztvQkFBS0wsV0FBVTs4QkFDZCw0RUFBQ0Q7OzBDQUVDLDhEQUFDTztnQ0FBR04sV0FBVTswQ0FBMkM7Ozs7OzswQ0FDekQsOERBQUNPO2dDQUFLQyxVQUFVeEI7O2tEQUNoQiw4REFBQ2U7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNTOzRDQUNDQyxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIQyxhQUFZOzRDQUNaQyxVQUFXLENBQUM3QixJQUFLSixTQUFTSSxFQUFFOEIsTUFBTSxDQUFDQyxLQUFLOzRDQUN4Q2hCLFdBQVU7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDaUI7Ozs7O2tEQUNELDhEQUFDbEI7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDUztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTEMsSUFBRztnREFDSEMsYUFBWTtnREFDWkMsVUFBVSxDQUFDN0IsSUFBSUYsWUFBWUUsRUFBRThCLE1BQU0sQ0FBQ0MsS0FBSztnREFDekNoQixXQUFVOzs7Ozs7MERBR1osOERBQUNrQjtnREFBRWxCLFdBQVU7O2tFQUNWLDhEQUFDaUI7Ozs7O29EQUFJO2tFQUNXLDhEQUFDRTt3REFBRUMsTUFBSzt3REFBSXBCLFdBQVU7a0VBQXlDOzs7Ozs7b0RBQWM7Ozs7Ozs7Ozs7Ozs7a0RBR2xHLDhEQUFDcUI7d0NBQ0NYLE1BQUs7d0NBQ1BWLFdBQVU7a0RBQ1osNEVBQUNzQjs0Q0FBS3RCLFdBQVU7c0RBQXdLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNdEwsOERBQUNEO2dDQUNDQyxXQUFVOzBDQUNWLDRFQUFDa0I7b0NBQ0NsQixXQUFVOzhDQUE0RDs7Ozs7Ozs7Ozs7MENBTWhGLDhEQUFDcUI7Z0NBQU9yQixXQUFVOztrREFDZCw4REFBQ3VCO3dDQUFJdkIsV0FBVTt3Q0FBVUMsS0FBSTt3Q0FBdUR1QixTQUFRO3dDQUFPdEIsS0FBSTs7Ozs7O2tEQUN2Ryw4REFBQ29CO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1o7R0E5Rk01Qzs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBK0ZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi5qcz8yZTcwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGJhY2tyYW91bmQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2JhY2tmb3Jtcy5wbmcnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvbG9nby5wbmcnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF09dXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF09dXNlU3RhdGUoKVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnLFxyXG4gICAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzdWx0ID0+e2NvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICBpZihyZXN1bHQuZGF0YT09PVwiVmFsaWQgbG9naW5cIil7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWIgZnJvbS1yZWQtOTUwIHRvLXRyYW5zcGFyZW50IGgtc2NyZWVuIHJlbGF0aXZlXCI+XHJcbiAgICBcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctY292ZXIgYmctY2VudGVyIHotMFwiPlxyXG4gIDxJbWFnZSBzcmM9e2JhY2tyYW91bmR9IGNsYXNzTmFtZT0ndy1hdXRvIGgtYXV0bycgYWx0PVwiQmFja2dyb3VuZCBJbWFnZVwiIC8+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTggbGVmdC04IHotMTBcIj5cclxuICA8SW1hZ2Ugc3JjPXtMb2dvfSB3aWR0aD17MTYwfSBoZWlnaHQ9ezE2MH0gYWx0PVwiTG9nb1wiIC8+XHJcbjwvZGl2PlxyXG5cclxuXHJcbiBcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtYi00IGZvbnQtcG9wcGlucyBmb250LXNlbWlib2xkXCI+TG9naW48L2gxPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT5zZXRFbWFpbChlLnRhcmdldC52YWx1ZSkgfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItd2hpdGUgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGZvbnQtcG9wcGlucyB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItd2hpdGUgcC0yIGZvY3VzOm91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGZvbnQtcG9wcGlucyB0ZXh0LWJhc2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIEZvcmdldCBwYXNzd29yZD8gPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiPkNsaWNrIGhlcmU8L2E+LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsYWNrIHJlbGF0aXZlIGlubGluZS1mbGV4IHctNDggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMC41IG1iLTIgbWUtMiBvdmVyZmxvdy1oaWRkZW4gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgcm91bmRlZC1sZyBncm91cCBcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtNSBweS0yLjUgdy00OCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluIGR1cmF0aW9uLTc1IGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgZ3JvdXAtaG92ZXI6YmctZ3JhZGllbnQtdG8tYnIgZ3JvdXAtaG92ZXI6ZnJvbS1yZWQtOTUwIGdyb3VwLWhvdmVyOnZpYS1yZWQtODAwXCI+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgICA8L3NwYW4+XHJcbiAgICAgICA8L2J1dHRvbj5cclxuICAgICAgIDwvZm9ybT5cclxuICAgICAgIFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTQgZmxleCBpdGVtcy1jZW50ZXIgYmVmb3JlOm10LTAuNSBiZWZvcmU6ZmxleC0xIGJlZm9yZTpib3JkZXItdCBiZWZvcmU6Ym9yZGVyLW5ldXRyYWwtMzAwIGFmdGVyOm10LTAuNSBhZnRlcjpmbGV4LTEgYWZ0ZXI6Ym9yZGVyLXQgYWZ0ZXI6Ym9yZGVyLW5ldXRyYWwtMzAwXCI+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC00IG1iLTAgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBkYXJrOnRleHQtbmV1dHJhbC0yMDBcIj5cclxuICAgICAgICAgICAgT1JcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgXHJcbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC01IHB5LTIgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBib3JkZXIgIGdhcC0yIGJvcmRlci1zbGF0ZS0yMDAgZGFyazpib3JkZXItc2xhdGUtNzAwIHJvdW5kZWQtbGcgdGV4dC1zbGF0ZS03MDAgZGFyazp0ZXh0LXNsYXRlLTIwMCBob3Zlcjpib3JkZXItc2xhdGUtNDAwIGRhcms6aG92ZXI6Ym9yZGVyLXNsYXRlLTUwMCBob3Zlcjp0ZXh0LXNsYXRlLTkwMCBkYXJrOmhvdmVyOnRleHQtc2xhdGUtMzAwIGhvdmVyOnNoYWRvdyB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MFwiPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInctNiBoLTZcIiBzcmM9XCJodHRwczovL3d3dy5zdmdyZXBvLmNvbS9zaG93LzQ3NTY1Ni9nb29nbGUtY29sb3Iuc3ZnXCIgbG9hZGluZz1cImxhenlcIiBhbHQ9XCJnb29nbGUgbG9nb1wiLz5cclxuICAgICAgPHNwYW4+TG9naW4gd2l0aCBHb29nbGU8L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9tYWluPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sIm5hbWVzIjpbIkltYWdlIiwiYmFja3Jhb3VuZCIsIkxvZ28iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJMb2dpbiIsInJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJiYXNlVVJMIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYWluIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJiciIsInAiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInNwYW4iLCJpbWciLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/login.js\n"));

/***/ })

});