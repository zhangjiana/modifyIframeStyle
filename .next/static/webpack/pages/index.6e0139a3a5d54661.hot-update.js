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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_zhangjian_myLab_next_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_zhangjian_myLab_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zhangjian_myLab_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zhangjian_myLab_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zhangjian/myLab/next-app/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-1n084ct-0\"\n})([\"border:1px solid #000;.side{width:200px;float:left;border:1px solid #333;}iframe{width:800px;height:600px;float:left;margin-left:200px;border:1px solid #666;}\"]);\n_c = Wrapper;\n\nfunction HomePage() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('<p>我只是测试标签</p>'),\n      html = _useState[0],\n      setHtml = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)( /*#__PURE__*/(0,_Users_zhangjian_myLab_next_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_zhangjian_myLab_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var res, extratorTip, str;\n    return _Users_zhangjian_myLab_next_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/getHtml');\n\n          case 2:\n            res = _context.sent;\n            // 遍历html,找到叶子节点\n            extratorTip = '<div id=\"sd-select-tips\" class=\"sd-select-tips\">提示: 当前字段为：<span id=\"tip-field-name\"></span><br>1.点击可选中数据，再次点击相同数据则取消<br>2.先在左侧选择字段，再点选对应数据<br>3.点击”重置当前字段配置”，可清空所有点选</div>'; // let r = \"<script> window.addEventListener('mouseover', (e) => { ${e}.addClass('_highlight') }); window.addEventListener('mouseout', (e) => { ${e}.removeClass('_highlight');  e.stopPropagation(); })</script><script src='https://code.jquery.com/jquery-3.6.0.slim.min.js'></script></body>\"\n\n            str = res.data.html.replace(/\\<\\/head\\>/g, '<link rel=\"stylesheet\" type=\"text/css\" href=\"http://dcdn2.keydatas.com/css/iframe.css\"/>\\x3c!--[if lte IE 9]><link rel=\"stylesheet\" type=\"text/css\" href=\"http://dcdn2.keydatas.com/css/iframe.ie.css\"/><![endif]--\\x3e</head>').replace(/\\<\\/body\\>/g, extratorTip + '<script type=\"text/javascript\">var urlHome=\"\";<\\/script><script type=\"text/javascript\" src=\"http://dcdn2.keydatas.com/js/jquery-1.11.9.min.js\"><\\/script></body>');\n            setHtml(str);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"side\",\n      children: \"\\u4FA7\\u8FB9\\u680F\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"iframe\", {\n      srcDoc: html\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 12\n  }, this);\n}\n\n_s(HomePage, \"SvEvceCiFdOJ4jLFKKgO4FZbKCI=\");\n\n_c2 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUksT0FBTyxHQUFHRix3RUFBSDtBQUFBO0FBQUE7QUFBQSxzS0FBYjtLQUFNRTs7QUFlTixTQUFTRSxRQUFULEdBQW9CO0FBQUE7O0FBQ2hCLGtCQUF3QkwsK0NBQVEsQ0FBQyxnQkFBRCxDQUFoQztBQUFBLE1BQU9NLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBUixFQUFBQSxnREFBUyxvUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNVRyxnREFBQSxDQUFVLGNBQVYsQ0FEVjs7QUFBQTtBQUNGTyxZQUFBQSxHQURFO0FBRU47QUFDSUMsWUFBQUEsV0FIRSxHQUdZLDRLQUhaLEVBSU47O0FBQ0lDLFlBQUFBLEdBTEUsR0FLSUYsR0FBRyxDQUFDRyxJQUFKLENBQVNOLElBQVQsQ0FBY08sT0FBZCxDQUFzQixhQUF0QixFQUFxQyxnT0FBckMsRUFBdVFBLE9BQXZRLENBQStRLGFBQS9RLEVBQThSSCxXQUFXLEdBQUcsa0tBQTVTLENBTEo7QUFNTkgsWUFBQUEsT0FBTyxDQUFDSSxHQUFELENBQVA7O0FBTk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUFPLDhEQUFDLE9BQUQ7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFRLFlBQU0sRUFBRUw7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSUQ7O0dBZk1EOztNQUFBQTtBQWlCUCwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIC5zaWRlIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICB9XG4gICAgaWZyYW1lIHtcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICAgIH1cbmBcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IHVzZVN0YXRlKCc8cD7miJHlj6rmmK/mtYvor5XmoIfnrb48L3A+JylcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldEh0bWwnKVxuICAgICAgICAvLyDpgY3ljoZodG1sLOaJvuWIsOWPtuWtkOiKgueCuVxuICAgICAgICBsZXQgZXh0cmF0b3JUaXAgPSAnPGRpdiBpZD1cInNkLXNlbGVjdC10aXBzXCIgY2xhc3M9XCJzZC1zZWxlY3QtdGlwc1wiPuaPkOekujog5b2T5YmN5a2X5q615Li677yaPHNwYW4gaWQ9XCJ0aXAtZmllbGQtbmFtZVwiPjwvc3Bhbj48YnI+MS7ngrnlh7vlj6/pgInkuK3mlbDmja7vvIzlho3mrKHngrnlh7vnm7jlkIzmlbDmja7liJnlj5bmtog8YnI+Mi7lhYjlnKjlt6bkvqfpgInmi6nlrZfmrrXvvIzlho3ngrnpgInlr7nlupTmlbDmja48YnI+My7ngrnlh7vigJ3ph43nva7lvZPliY3lrZfmrrXphY3nva7igJ3vvIzlj6/muIXnqbrmiYDmnInngrnpgIk8L2Rpdj4nXG4gICAgICAgIC8vIGxldCByID0gXCI8c2NyaXB0PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHsgJHtlfS5hZGRDbGFzcygnX2hpZ2hsaWdodCcpIH0pOyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4geyAke2V9LnJlbW92ZUNsYXNzKCdfaGlnaGxpZ2h0Jyk7ICBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTwvc2NyaXB0PjxzY3JpcHQgc3JjPSdodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy42LjAuc2xpbS5taW4uanMnPjwvc2NyaXB0PjwvYm9keT5cIlxuICAgICAgICBsZXQgc3RyID0gcmVzLmRhdGEuaHRtbC5yZXBsYWNlKC9cXDxcXC9oZWFkXFw+L2csICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9kY2RuMi5rZXlkYXRhcy5jb20vY3NzL2lmcmFtZS5jc3NcIi8+XFx4M2MhLS1baWYgbHRlIElFIDldPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2RjZG4yLmtleWRhdGFzLmNvbS9jc3MvaWZyYW1lLmllLmNzc1wiLz48IVtlbmRpZl0tLVxceDNlPC9oZWFkPicpLnJlcGxhY2UoL1xcPFxcL2JvZHlcXD4vZywgZXh0cmF0b3JUaXAgKyAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+dmFyIHVybEhvbWU9XCJcIjs8XFwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHA6Ly9kY2RuMi5rZXlkYXRhcy5jb20vanMvanF1ZXJ5LTEuMTEuOS5taW4uanNcIj48XFwvc2NyaXB0PjwvYm9keT4nKTtcbiAgICAgICAgc2V0SHRtbChzdHIpXG4gICAgfSwgW10pXG4gICBcbiAgICByZXR1cm4gPFdyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj7kvqfovrnmoI88L2Rpdj5cbiAgICAgICAgICAgIDxpZnJhbWUgc3JjRG9jPXtodG1sfT48L2lmcmFtZT5cbiAgICA8L1dyYXBwZXI+XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbiAgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiYXhpb3MiLCJXcmFwcGVyIiwiZGl2IiwiSG9tZVBhZ2UiLCJodG1sIiwic2V0SHRtbCIsImdldCIsInJlcyIsImV4dHJhdG9yVGlwIiwic3RyIiwiZGF0YSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});