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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_backforms_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/backforms.png */ \"(app-pages-browser)/./public/backforms.png\");\n/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/logo.png */ \"(app-pages-browser)/./public/logo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            method: \"post\",\n            baseURL: \"http://localhost:3001\",\n            url: \"/login\",\n            data: {\n                email,\n                password\n            }\n        }).then((response)=>{\n            console.log(response);\n            if (response.data === \"Valid login\") {\n                router.push(\"\");\n            }\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gradient-to-b from-red-950 to-transparent h-screen relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-cover bg-center z-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_backforms_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        className: \"w-auto h-auto\",\n                        alt: \"Background Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                        lineNumber: 37,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                    lineNumber: 36,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-8 left-8 z-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _public_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        width: 160,\n                        height: 160,\n                        alt: \"Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                        lineNumber: 42,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                    lineNumber: 41,\n                    columnNumber: 1\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \"absolute inset-0 flex items-center justify-center text-white text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl mb-4 font-poppins font-semibold\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 50,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            id: \"email\",\n                                            placeholder: \"Email\",\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            className: \"border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                id: \"password\",\n                                                placeholder: \"Password\",\n                                                onChange: (e)=>setPassword(e.target.value),\n                                                className: \"border-b border-white p-2 focus:outline-none bg-transparent text-white font-poppins text-base\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 11\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mt-2 text-sm text-gray-500\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 14\n                                                    }, undefined),\n                                                    \"Forget password? \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"font-medium text-white hover:underline\",\n                                                        children: \"Click here\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 30\n                                                    }, undefined),\n                                                    \".\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \" bg-black relative inline-flex w-48 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium text-white rounded-lg group \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"relative px-5 py-2.5 w-48 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-gradient-to-br group-hover:from-red-950 group-hover:via-red-800\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mx-4 mb-0 text-center font-semibold dark:text-neutral-200\",\n                                    children: \"OR\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 87,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-5 py-2 inline-flex items-center justify-center  border  gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-6 h-6\",\n                                        src: \"https://www.svgrepo.com/show/475656/google-color.svg\",\n                                        loading: \"lazy\",\n                                        alt: \"google logo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Login with Google\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                                lineNumber: 96,\n                                columnNumber: 3\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n            lineNumber: 34,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hh\\\\Desktop\\\\chatbot\\\\my-app\\\\client\\\\src\\\\app\\\\components\\\\login.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Login, \"IjUem0aZZUlm6NzNrISE5qnCu/Q=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ3dCO0FBQ1g7QUFDTztBQUN6QjtBQUNnQjtBQUMxQyxNQUFNUSxRQUFROztJQUNaLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1TLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFFaEJWLGlEQUFLQSxDQUFDO1lBQ0pXLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxLQUFLO1lBQ0xDLE1BQU07Z0JBQ0pWO2dCQUNBRTtZQUNGO1FBQ0YsR0FDQ1MsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osSUFBSUEsU0FBU0YsSUFBSSxLQUFLLGVBQWU7Z0JBQ25DWCxPQUFPZ0IsSUFBSSxDQUFDO1lBQ2Q7UUFDRixHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQU9KLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDNUI7SUFDQSxxQkFBTyw4REFBQ0M7a0JBQ0wsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUVmLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDbEIsNEVBQUM3QixtREFBS0E7d0JBQUM4QixLQUFLN0IsNkRBQVVBO3dCQUFFNEIsV0FBVTt3QkFBZ0JFLEtBQUk7Ozs7Ozs7Ozs7OzhCQUl4RCw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUM3QixtREFBS0E7d0JBQUM4QixLQUFLNUIsd0RBQUlBO3dCQUFFOEIsT0FBTzt3QkFBS0MsUUFBUTt3QkFBS0YsS0FBSTs7Ozs7Ozs7Ozs7OEJBSzdDLDhEQUFDRztvQkFBS0wsV0FBVTs4QkFDZCw0RUFBQ0Q7OzBDQUVDLDhEQUFDTztnQ0FBR04sV0FBVTswQ0FBMkM7Ozs7OzswQ0FDekQsOERBQUNPO2dDQUFLQyxVQUFVdkI7O2tEQUNoQiw4REFBQ2M7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNTOzRDQUNDQyxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIQyxhQUFZOzRDQUNaQyxVQUFXLENBQUM1QixJQUFLSixTQUFTSSxFQUFFNkIsTUFBTSxDQUFDQyxLQUFLOzRDQUN4Q2hCLFdBQVU7Ozs7Ozs7Ozs7O2tEQUdkLDhEQUFDaUI7Ozs7O2tEQUNELDhEQUFDbEI7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDUztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTEMsSUFBRztnREFDSEMsYUFBWTtnREFDWkMsVUFBVSxDQUFDNUIsSUFBSUYsWUFBWUUsRUFBRTZCLE1BQU0sQ0FBQ0MsS0FBSztnREFDekNoQixXQUFVOzs7Ozs7MERBR1osOERBQUNrQjtnREFBRWxCLFdBQVU7O2tFQUNWLDhEQUFDaUI7Ozs7O29EQUFJO2tFQUNXLDhEQUFDRTt3REFBRUMsTUFBSzt3REFBSXBCLFdBQVU7a0VBQXlDOzs7Ozs7b0RBQWM7Ozs7Ozs7Ozs7Ozs7a0RBR2xHLDhEQUFDcUI7d0NBQ0NYLE1BQUs7d0NBQ1BWLFdBQVU7a0RBQ1osNEVBQUNzQjs0Q0FBS3RCLFdBQVU7c0RBQXdLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNdEwsOERBQUNEO2dDQUNDQyxXQUFVOzBDQUNWLDRFQUFDa0I7b0NBQ0NsQixXQUFVOzhDQUE0RDs7Ozs7Ozs7Ozs7MENBTWhGLDhEQUFDcUI7Z0NBQU9yQixXQUFVOztrREFDZCw4REFBQ3VCO3dDQUFJdkIsV0FBVTt3Q0FBVUMsS0FBSTt3Q0FBdUR1QixTQUFRO3dDQUFPdEIsS0FBSTs7Ozs7O2tEQUN2Ryw4REFBQ29CO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1o7R0FqR00zQzs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBa0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi5qcz8yZTcwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGJhY2tyYW91bmQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2JhY2tmb3Jtcy5wbmcnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvbG9nby5wbmcnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJyxcclxuICAgICAgdXJsOiAnL2xvZ2luJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT09IFwiVmFsaWQgbG9naW5cIikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tcmVkLTk1MCB0by10cmFuc3BhcmVudCBoLXNjcmVlbiByZWxhdGl2ZVwiPlxyXG4gICAgXHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWNvdmVyIGJnLWNlbnRlciB6LTBcIj5cclxuICA8SW1hZ2Ugc3JjPXtiYWNrcmFvdW5kfSBjbGFzc05hbWU9J3ctYXV0byBoLWF1dG8nIGFsdD1cIkJhY2tncm91bmQgSW1hZ2VcIiAvPlxyXG48L2Rpdj5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC04IGxlZnQtOCB6LTEwXCI+XHJcbiAgPEltYWdlIHNyYz17TG9nb30gd2lkdGg9ezE2MH0gaGVpZ2h0PXsxNjB9IGFsdD1cIkxvZ29cIiAvPlxyXG48L2Rpdj5cclxuXHJcblxyXG4gXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItNCBmb250LXBvcHBpbnMgZm9udC1zZW1pYm9sZFwiPkxvZ2luPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpIH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXdoaXRlIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBmb250LXBvcHBpbnMgdGV4dC1iYXNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXdoaXRlIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBmb250LXBvcHBpbnMgdGV4dC1iYXNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBGb3JnZXQgcGFzc3dvcmQ/IDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIj5DbGljayBoZXJlPC9hPi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgIGNsYXNzTmFtZT1cIiBiZy1ibGFjayByZWxhdGl2ZSBpbmxpbmUtZmxleCB3LTQ4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTAuNSBtYi0yIG1lLTIgb3ZlcmZsb3ctaGlkZGVuIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgZ3JvdXAgXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTUgcHktMi41IHctNDggdHJhbnNpdGlvbi1hbGwgZWFzZS1pbiBkdXJhdGlvbi03NSBiZy10cmFuc3BhcmVudCByb3VuZGVkLW1kIGdyb3VwLWhvdmVyOmJnLWdyYWRpZW50LXRvLWJyIGdyb3VwLWhvdmVyOmZyb20tcmVkLTk1MCBncm91cC1ob3Zlcjp2aWEtcmVkLTgwMFwiPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgPC9idXR0b24+XHJcbiAgICAgICA8L2Zvcm0+XHJcbiAgICAgICBcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS00IGZsZXggaXRlbXMtY2VudGVyIGJlZm9yZTptdC0wLjUgYmVmb3JlOmZsZXgtMSBiZWZvcmU6Ym9yZGVyLXQgYmVmb3JlOmJvcmRlci1uZXV0cmFsLTMwMCBhZnRlcjptdC0wLjUgYWZ0ZXI6ZmxleC0xIGFmdGVyOmJvcmRlci10IGFmdGVyOmJvcmRlci1uZXV0cmFsLTMwMFwiPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCBtYi0wIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LW5ldXRyYWwtMjAwXCI+XHJcbiAgICAgICAgICAgIE9SXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgIFxyXG4gIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNSBweS0yIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgYm9yZGVyICBnYXAtMiBib3JkZXItc2xhdGUtMjAwIGRhcms6Ym9yZGVyLXNsYXRlLTcwMCByb3VuZGVkLWxnIHRleHQtc2xhdGUtNzAwIGRhcms6dGV4dC1zbGF0ZS0yMDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTQwMCBkYXJrOmhvdmVyOmJvcmRlci1zbGF0ZS01MDAgaG92ZXI6dGV4dC1zbGF0ZS05MDAgZGFyazpob3Zlcjp0ZXh0LXNsYXRlLTMwMCBob3ZlcjpzaGFkb3cgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTYgaC02XCIgc3JjPVwiaHR0cHM6Ly93d3cuc3ZncmVwby5jb20vc2hvdy80NzU2NTYvZ29vZ2xlLWNvbG9yLnN2Z1wiIGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiZ29vZ2xlIGxvZ29cIi8+XHJcbiAgICAgIDxzcGFuPkxvZ2luIHdpdGggR29vZ2xlPC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuICAgICBcclxuICAgIDwvbWFpbj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJJbWFnZSIsImJhY2tyYW91bmQiLCJMb2dvIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiTG9naW4iLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImJhc2VVUkwiLCJ1cmwiLCJkYXRhIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjYXRjaCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFpbiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnIiLCJwIiwiYSIsImhyZWYiLCJidXR0b24iLCJzcGFuIiwiaW1nIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/login.js\n"));

/***/ })

});