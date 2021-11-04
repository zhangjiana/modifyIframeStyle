"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/zhangjian/myLab/next-app/pages/index.js\";\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-1n084ct-0\"\n})([\"border:1px solid #000;.side{width:200px;float:left;border:1px solid #333;}iframe{width:800px;height:600px;float:left;margin-left:200px;border:1px solid #666;}\"]);\n\nfunction HomePage() {\n  const {\n    0: html,\n    1: setHtml\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {\n    let res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/getHtml'); // 遍历html,找到叶子节点\n\n    let extratorTip = '<div id=\"sd-select-tips\" class=\"sd-select-tips\">提示: 当前字段为：<span id=\"tip-field-name\"></span><br>1.点击可选中数据，再次点击相同数据则取消<br>2.先在左侧选择字段，再点选对应数据<br>3.点击”重置当前字段配置”，可清空所有点选</div>'; // let r = \"<script> window.addEventListener('mouseover', (e) => { ${e}.addClass('_highlight') }); window.addEventListener('mouseout', (e) => { ${e}.removeClass('_highlight');  e.stopPropagation(); })</script><script src='https://code.jquery.com/jquery-3.6.0.slim.min.js'></script></body>\"\n\n    let str = res.data.html.replace(/\\<\\/head\\>/g, '<link rel=\"stylesheet\" type=\"text/css\" href=\"http://dcdn2.keydatas.com/css/iframe.css\"/>\\x3c!--[if lte IE 9]><link rel=\"stylesheet\" type=\"text/css\" href=\"http://dcdn2.keydatas.com/css/iframe.ie.css\"/><![endif]--\\x3e</head>').replace(/\\<\\/body\\>/g, extratorTip + '<script type=\"text/javascript\">var urlHome=\"\";<\\/script><script type=\"text/javascript\" src=\"http://dcdn2.keydatas.com/js/jquery-1.11.9.min.js\"><\\/script></body>');\n    setHtml(str);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"side\",\n      children: \"\\u4FA7\\u8FB9\\u680F\\u963F\\u65AF\\u987F\\u53D1\\u7684\\\\n\\u963F\\u65AF\\u987F\\u53D1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"iframe\", {\n      srcDoc: html\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1JLE9BQU8sR0FBR0YsdUVBQUg7QUFBQTtBQUFBO0FBQUEsc0tBQWI7O0FBZUEsU0FBU0ksUUFBVCxHQUFvQjtBQUNoQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JQLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBRCxFQUFBQSxnREFBUyxDQUFDLFlBQVk7QUFDbEIsUUFBSVMsR0FBRyxHQUFHLE1BQU1OLGdEQUFBLENBQVUsY0FBVixDQUFoQixDQURrQixDQUVsQjs7QUFDQSxRQUFJUSxXQUFXLEdBQUcsNEtBQWxCLENBSGtCLENBSWxCOztBQUNBLFFBQUlDLEdBQUcsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNOLElBQVQsQ0FBY08sT0FBZCxDQUFzQixhQUF0QixFQUFxQyxnT0FBckMsRUFBdVFBLE9BQXZRLENBQStRLGFBQS9RLEVBQThSSCxXQUFXLEdBQUcsa0tBQTVTLENBQVY7QUFDQUgsSUFBQUEsT0FBTyxDQUFDSSxHQUFELENBQVA7QUFDSCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQU8sOERBQUMsT0FBRDtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQVEsWUFBTSxFQUFFTDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFJRDs7QUFFRCxpRUFBZUQsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAuc2lkZSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgfVxuICAgIGlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgICB9XG5gXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgICBjb25zdCBbaHRtbCwgc2V0SHRtbF0gPSB1c2VTdGF0ZSgnJylcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldEh0bWwnKVxuICAgICAgICAvLyDpgY3ljoZodG1sLOaJvuWIsOWPtuWtkOiKgueCuVxuICAgICAgICBsZXQgZXh0cmF0b3JUaXAgPSAnPGRpdiBpZD1cInNkLXNlbGVjdC10aXBzXCIgY2xhc3M9XCJzZC1zZWxlY3QtdGlwc1wiPuaPkOekujog5b2T5YmN5a2X5q615Li677yaPHNwYW4gaWQ9XCJ0aXAtZmllbGQtbmFtZVwiPjwvc3Bhbj48YnI+MS7ngrnlh7vlj6/pgInkuK3mlbDmja7vvIzlho3mrKHngrnlh7vnm7jlkIzmlbDmja7liJnlj5bmtog8YnI+Mi7lhYjlnKjlt6bkvqfpgInmi6nlrZfmrrXvvIzlho3ngrnpgInlr7nlupTmlbDmja48YnI+My7ngrnlh7vigJ3ph43nva7lvZPliY3lrZfmrrXphY3nva7igJ3vvIzlj6/muIXnqbrmiYDmnInngrnpgIk8L2Rpdj4nXG4gICAgICAgIC8vIGxldCByID0gXCI8c2NyaXB0PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHsgJHtlfS5hZGRDbGFzcygnX2hpZ2hsaWdodCcpIH0pOyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4geyAke2V9LnJlbW92ZUNsYXNzKCdfaGlnaGxpZ2h0Jyk7ICBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTwvc2NyaXB0PjxzY3JpcHQgc3JjPSdodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy42LjAuc2xpbS5taW4uanMnPjwvc2NyaXB0PjwvYm9keT5cIlxuICAgICAgICBsZXQgc3RyID0gcmVzLmRhdGEuaHRtbC5yZXBsYWNlKC9cXDxcXC9oZWFkXFw+L2csICc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9kY2RuMi5rZXlkYXRhcy5jb20vY3NzL2lmcmFtZS5jc3NcIi8+XFx4M2MhLS1baWYgbHRlIElFIDldPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2RjZG4yLmtleWRhdGFzLmNvbS9jc3MvaWZyYW1lLmllLmNzc1wiLz48IVtlbmRpZl0tLVxceDNlPC9oZWFkPicpLnJlcGxhY2UoL1xcPFxcL2JvZHlcXD4vZywgZXh0cmF0b3JUaXAgKyAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+dmFyIHVybEhvbWU9XCJcIjs8XFwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHA6Ly9kY2RuMi5rZXlkYXRhcy5jb20vanMvanF1ZXJ5LTEuMTEuOS5taW4uanNcIj48XFwvc2NyaXB0PjwvYm9keT4nKTtcbiAgICAgICAgc2V0SHRtbChzdHIpXG4gICAgfSwgW10pXG4gICBcbiAgICByZXR1cm4gPFdyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj7kvqfovrnmoI/pmL/mlq/pob/lj5HnmoRcXG7pmL/mlq/pob/lj5E8L2Rpdj5cbiAgICAgICAgICAgIDxpZnJhbWUgc3JjRG9jPXtodG1sfT48L2lmcmFtZT5cbiAgICA8L1dyYXBwZXI+XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG5cbiAgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiYXhpb3MiLCJXcmFwcGVyIiwiZGl2IiwiSG9tZVBhZ2UiLCJodG1sIiwic2V0SHRtbCIsInJlcyIsImdldCIsImV4dHJhdG9yVGlwIiwic3RyIiwiZGF0YSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();