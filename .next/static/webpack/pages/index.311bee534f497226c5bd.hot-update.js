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

/***/ "./src/components/CarrouselDocument/Slider/index.tsx":
/*!***********************************************************!*\
  !*** ./src/components/CarrouselDocument/Slider/index.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/lucasjuste/Desktop/next-js-legal-design-master 2/src/components/CarrouselDocument/Slider/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar data = [{\n  title: 'Contrato de prestação de serviços',\n  image: 'contrato-prestacao-servico'\n}, {\n  title: 'Contrato de procuração',\n  image: 'contrato-procuracao'\n}, {\n  title: 'Códigos',\n  image: 'contrato-etica'\n}, {\n  title: 'Políticas',\n  image: 'politica-cookies'\n}, {\n  title: 'Política de privacidade',\n  image: 'politica-privacidade'\n}, {\n  title: 'Contrato de prestação de serviços',\n  image: 'contrato-prestacao-servico'\n}, {\n  title: 'Contrato de procuração',\n  image: 'contrato-procuracao'\n}, {\n  title: 'Códigos',\n  image: 'contrato-etica'\n}, {\n  title: 'Políticas',\n  image: 'politica-cookies'\n}, {\n  title: 'Política de privacidade',\n  image: 'politica-privacidade'\n}];\nfunction Slider() {\n  _s();\n\n  var _this = this;\n\n  var isWideVersion = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue)({\n    base: false,\n    lg: true,\n    xl: true\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n    speed: 1400,\n    slidesPerView: 1,\n    navigation: true,\n    pagination: {\n      clickable: true\n    },\n    style: {\n      width: '100%',\n      flex: '1'\n    },\n    initialSlide: 2,\n    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.A11y, swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Parallax],\n    spaceBetween: -10,\n    centeredSlides: true,\n    watchSlidesProgress: true,\n    autoplay: {\n      delay: 10000,\n      disableOnInteraction: false\n    },\n    parallax: true,\n    breakpoints: {\n      '380px': {\n        slidesPerView: 1\n      },\n      '812px': {\n        slidesPerView: 1\n      },\n      '1024': {\n        slidesPerView: 3,\n        spaceBetween: 0\n      },\n      '1100': {\n        slidesPerView: 4,\n        spaceBetween: 0\n      }\n    },\n    children: data.map(function (docs) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n        children: function children(_ref) {\n          var isActive = _ref.isActive;\n          return isActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            as: \"div\",\n            ml: \"auto\",\n            w: \"100%\",\n            bgImage: \"url('/images/\".concat(docs.image, \".png')\"),\n            bgSize: \"contain\",\n            bgRepeat: \"no-repeat\",\n            maxW: ['200px', '220x', '270px'],\n            h: ['400px', '400px', '450px', '390px'],\n            align: \"center\",\n            justify: \"center\",\n            direction: \"column\",\n            mt: ['1rem', '1rem', '1rem', '2.4rem'],\n            bgColor: \"transparent\",\n            mx: \"auto\",\n            boxShadow: \"2xl\",\n            transition: \"linear\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n              fontSize: \"20px\",\n              fontFamily: \"Raleway\",\n              fontWeight: \"700\",\n              textAlign: \"center\",\n              mt: ['35rem', '35rem', '35rem', '31rem'],\n              children: docs.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 17\n            }, _this)\n          }, docs.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 15\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            w: \"100%\",\n            maxW: ['200px', '220x', '240px'],\n            bgImage: \"url('/images/\".concat(docs.image, \".png')\"),\n            bgSize: \"cover\",\n            bgRepeat: \"no-repeat\",\n            h: ['400px', '400px', '450px', '360px'],\n            align: \"center\",\n            justify: \"center\",\n            direction: \"column\",\n            mt: ['0', '0', '3rem'],\n            bgColor: \"pink.900\",\n            mx: \"auto\",\n            position: \"relative\",\n            boxShadow: \"md\",\n            transition: \"ease-in\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              position: \"absolute\",\n              w: \"100%\",\n              h: \"100%\",\n              opacity: \"0.8\",\n              bgColor: \"pink.900\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n              fontSize: \"14px\",\n              mt: \"27rem\",\n              children: docs.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 174,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 150,\n            columnNumber: 15\n          }, _this);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Slider, \"3oSx7AotzFNmOkbv4NfIDZx1j4Q=\", false, function () {\n  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue];\n});\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJyb3VzZWxEb2N1bWVudC9TbGlkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7O0FBVUEsSUFBTWMsSUFBSSxHQUFHLENBQ1g7QUFDRUMsRUFBQUEsS0FBSyxFQUFFLG1DQURUO0FBRUVDLEVBQUFBLEtBQUssRUFBRTtBQUZULENBRFcsRUFLWDtBQUNFRCxFQUFBQSxLQUFLLEVBQUUsd0JBRFQ7QUFFRUMsRUFBQUEsS0FBSyxFQUFFO0FBRlQsQ0FMVyxFQVNYO0FBQ0VELEVBQUFBLEtBQUssRUFBRSxTQURUO0FBRUVDLEVBQUFBLEtBQUssRUFBRTtBQUZULENBVFcsRUFhWDtBQUNFRCxFQUFBQSxLQUFLLEVBQUUsV0FEVDtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQWJXLEVBaUJYO0FBQ0VELEVBQUFBLEtBQUssRUFBRSx5QkFEVDtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQWpCVyxFQXFCWDtBQUNFRCxFQUFBQSxLQUFLLEVBQUUsbUNBRFQ7QUFFRUMsRUFBQUEsS0FBSyxFQUFFO0FBRlQsQ0FyQlcsRUF5Qlg7QUFDRUQsRUFBQUEsS0FBSyxFQUFFLHdCQURUO0FBRUVDLEVBQUFBLEtBQUssRUFBRTtBQUZULENBekJXLEVBNkJYO0FBQ0VELEVBQUFBLEtBQUssRUFBRSxTQURUO0FBRUVDLEVBQUFBLEtBQUssRUFBRTtBQUZULENBN0JXLEVBaUNYO0FBQ0VELEVBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVDLEVBQUFBLEtBQUssRUFBRTtBQUZULENBakNXLEVBcUNYO0FBQ0VELEVBQUFBLEtBQUssRUFBRSx5QkFEVDtBQUVFQyxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQXJDVyxDQUFiO0FBMkNlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsYUFBYSxHQUFHTixvRUFBa0IsQ0FBQztBQUN2Q08sSUFBQUEsSUFBSSxFQUFFLEtBRGlD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QUdFLG1CQUFPLHlCQUFrQmUsSUFBSSxDQUFDZCxLQUF2QixXQUhUO0FBSUUsa0JBQU0sRUFBQyxPQUpUO0FBS0Usb0JBQVEsRUFBQyxXQUxYO0FBTUUsYUFBQyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUIsQ0FOTDtBQU9FLGlCQUFLLEVBQUMsUUFQUjtBQVFFLG1CQUFPLEVBQUMsUUFSVjtBQVNFLHFCQUFTLEVBQUMsUUFUWjtBQVVFLGNBQUUsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsTUFBWCxDQVZOO0FBV0UsbUJBQU8sRUFBQyxVQVhWO0FBWUUsY0FBRSxFQUFDLE1BWkw7QUFhRSxvQkFBUSxFQUFDLFVBYlg7QUFjRSxxQkFBUyxFQUFDLElBZFo7QUFlRSxzQkFBVSxFQUFDLFNBZmI7QUFBQSxvQ0FpQkUsOERBQUMsaURBQUQ7QUFDRSxzQkFBUSxFQUFDLFVBRFg7QUFFRSxlQUFDLEVBQUMsTUFGSjtBQUdFLGVBQUMsRUFBQyxNQUhKO0FBSUUscUJBQU8sRUFBQyxLQUpWO0FBS0UscUJBQU8sRUFBQztBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJGLGVBd0JFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQVEsRUFBQyxNQUFmO0FBQXNCLGdCQUFFLEVBQUMsT0FBekI7QUFBQSx3QkFDR2MsSUFBSSxDQUFDZjtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQ0g7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWTtBQUFBLEtBQWI7QUE1Q0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUhEOztHQXhIdUJFO1VBQ0FMOzs7S0FEQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fycm91c2VsRG9jdW1lbnQvU2xpZGVyL2luZGV4LnRzeD82NjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5hdmlnYXRpb24sXG4gIFBhZ2luYXRpb24sXG4gIFNjcm9sbGJhcixcbiAgQTExeSxcbiAgRWZmZWN0Q3JlYXRpdmUsXG4gIEF1dG9wbGF5LFxuICBQYXJhbGxheCxcbn0gZnJvbSAnc3dpcGVyJ1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCdcbmltcG9ydCB7IEZsZXgsIEhlYWRpbmcsIFRleHQsIHVzZUJyZWFrcG9pbnRWYWx1ZSwgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW50ZXJmYWNlIERhdGFQcm9wcyB7XG4gIGRhdGE6IERvY3VtZW50c1tdXG59XG5cbmludGVyZmFjZSBEb2N1bWVudHMge1xuICB0aXRsZTogc3RyaW5nXG4gIGltYWdlOiBzdHJpbmdcbn1cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0NvbnRyYXRvIGRlIHByZXN0YcOnw6NvIGRlIHNlcnZpw6dvcycsXG4gICAgaW1hZ2U6ICdjb250cmF0by1wcmVzdGFjYW8tc2VydmljbycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NvbnRyYXRvIGRlIHByb2N1cmHDp8OjbycsXG4gICAgaW1hZ2U6ICdjb250cmF0by1wcm9jdXJhY2FvJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ8OzZGlnb3MnLFxuICAgIGltYWdlOiAnY29udHJhdG8tZXRpY2EnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQb2zDrXRpY2FzJyxcbiAgICBpbWFnZTogJ3BvbGl0aWNhLWNvb2tpZXMnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQb2zDrXRpY2EgZGUgcHJpdmFjaWRhZGUnLFxuICAgIGltYWdlOiAncG9saXRpY2EtcHJpdmFjaWRhZGUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb250cmF0byBkZSBwcmVzdGHDp8OjbyBkZSBzZXJ2acOnb3MnLFxuICAgIGltYWdlOiAnY29udHJhdG8tcHJlc3RhY2FvLXNlcnZpY28nLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb250cmF0byBkZSBwcm9jdXJhw6fDo28nLFxuICAgIGltYWdlOiAnY29udHJhdG8tcHJvY3VyYWNhbycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0PDs2RpZ29zJyxcbiAgICBpbWFnZTogJ2NvbnRyYXRvLWV0aWNhJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUG9sw610aWNhcycsXG4gICAgaW1hZ2U6ICdwb2xpdGljYS1jb29raWVzJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUG9sw610aWNhIGRlIHByaXZhY2lkYWRlJyxcbiAgICBpbWFnZTogJ3BvbGl0aWNhLXByaXZhY2lkYWRlJyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKCkge1xuICBjb25zdCBpc1dpZGVWZXJzaW9uID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcbiAgICBiYXNlOiBmYWxzZSxcbiAgICBsZzogdHJ1ZSxcbiAgICB4bDogdHJ1ZSxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxTd2lwZXJcbiAgICAgIHNwZWVkPXsxNDAwfVxuICAgICAgc2xpZGVzUGVyVmlldz17MX1cbiAgICAgIG5hdmlnYXRpb25cbiAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XG4gICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmbGV4OiAnMScgfX1cbiAgICAgIGluaXRpYWxTbGlkZT17Mn1cbiAgICAgIG1vZHVsZXM9e1tcbiAgICAgICAgTmF2aWdhdGlvbixcbiAgICAgICAgUGFnaW5hdGlvbixcbiAgICAgICAgQTExeSxcbiAgICAgICAgU2Nyb2xsYmFyLFxuICAgICAgICBFZmZlY3RDcmVhdGl2ZSxcbiAgICAgICAgQXV0b3BsYXksXG4gICAgICAgIFBhcmFsbGF4LFxuICAgICAgXX1cbiAgICAgIHNwYWNlQmV0d2Vlbj17LTEwfVxuICAgICAgY2VudGVyZWRTbGlkZXM9e3RydWV9XG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzXG4gICAgICBhdXRvcGxheT17e1xuICAgICAgICBkZWxheTogMTAwMDAsXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgIH19XG4gICAgICBwYXJhbGxheD17dHJ1ZX1cbiAgICAgIGJyZWFrcG9pbnRzPXt7XG4gICAgICAgICczODBweCc6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuXG4gICAgICAgICc4MTJweCc6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICB9LFxuXG4gICAgICAgICcxMDI0Jzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICB9LFxuXG4gICAgICAgICcxMTAwJzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7ZGF0YS5tYXAoZG9jcyA9PiAoXG4gICAgICAgIDxTd2lwZXJTbGlkZT5cbiAgICAgICAgICB7KHsgaXNBY3RpdmUgfSkgPT5cbiAgICAgICAgICAgIGlzQWN0aXZlID8gKFxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIGtleT17ZG9jcy50aXRsZX1cbiAgICAgICAgICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgICAgICAgICAgbWw9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgYmdJbWFnZT17YHVybCgnL2ltYWdlcy8ke2RvY3MuaW1hZ2V9LnBuZycpYH1cbiAgICAgICAgICAgICAgICBiZ1NpemU9XCJjb250YWluXCJcbiAgICAgICAgICAgICAgICBiZ1JlcGVhdD1cIm5vLXJlcGVhdFwiXG4gICAgICAgICAgICAgICAgbWF4Vz17WycyMDBweCcsICcyMjB4JywgJzI3MHB4J119XG4gICAgICAgICAgICAgICAgaD17Wyc0MDBweCcsICc0MDBweCcsICc0NTBweCcsICczOTBweCddfVxuICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIG10PXtbJzFyZW0nLCAnMXJlbScsICcxcmVtJywgJzIuNHJlbSddfVxuICAgICAgICAgICAgICAgIGJnQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgbXg9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCIyeGxcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJsaW5lYXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiUmFsZXdheVwiXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBtdD17WyczNXJlbScsICczNXJlbScsICczNXJlbScsICczMXJlbSddfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtkb2NzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgbWF4Vz17WycyMDBweCcsICcyMjB4JywgJzI0MHB4J119XG4gICAgICAgICAgICAgICAgYmdJbWFnZT17YHVybCgnL2ltYWdlcy8ke2RvY3MuaW1hZ2V9LnBuZycpYH1cbiAgICAgICAgICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGg9e1snNDAwcHgnLCAnNDAwcHgnLCAnNDUwcHgnLCAnMzYwcHgnXX1cbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBtdD17WycwJywgJzAnLCAnM3JlbSddfVxuICAgICAgICAgICAgICAgIGJnQ29sb3I9XCJwaW5rLjkwMFwiXG4gICAgICAgICAgICAgICAgbXg9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cImVhc2UtaW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMC44XCJcbiAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCJwaW5rLjkwMFwiXG4gICAgICAgICAgICAgICAgPjwvQm94PlxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMTRweFwiIG10PVwiMjdyZW1cIj5cbiAgICAgICAgICAgICAgICAgIHtkb2NzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICkpfVxuICAgIDwvU3dpcGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJTY3JvbGxiYXIiLCJBMTF5IiwiRWZmZWN0Q3JlYXRpdmUiLCJBdXRvcGxheSIsIlBhcmFsbGF4IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJGbGV4IiwiSGVhZGluZyIsIlRleHQiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJCb3giLCJkYXRhIiwidGl0bGUiLCJpbWFnZSIsIlNsaWRlciIsImlzV2lkZVZlcnNpb24iLCJiYXNlIiwibGciLCJ4bCIsImNsaWNrYWJsZSIsIndpZHRoIiwiZmxleCIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWFwIiwiZG9jcyIsImlzQWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CarrouselDocument/Slider/index.tsx\n");

/***/ })

});