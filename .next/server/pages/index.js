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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/zhangjian/myLab/next-app/pages/index.js\";\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"pages__Wrapper\",\n  componentId: \"sc-1n084ct-0\"\n})([\"border:1px solid #000;.side{width:200px;float:left;border:1px solid #333;}iframe{width:1000px;height:900px;float:left;margin-left:200px;border:1px solid #666;}\"]);\n\nfunction HomePage() {\n  const {\n    0: html,\n    1: setHtml\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {\n    window.getPageType = function (e) {\n      console.log('pageType:' + e);\n    };\n\n    window.getCurrFieldName = function (e) {\n      console.log('fieldName' + e);\n      return 'skuName';\n    };\n\n    window.callByIframeInit = function (e) {\n      console.log('callByIframeInit' + e);\n    };\n\n    window.getCurrFieldConfig = function (e) {\n      console.log('getCurrFieldConfig' + e);\n      return {\n        mutiValue: undefined,\n        skuName: ''\n      };\n    };\n\n    window.saveSelect = function (e) {\n      console.log('saveSelect' + e);\n    };\n\n    const iframeJs = location.href + 'iframe.js';\n    let res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/getHtml'); // 遍历html,找到叶子节点\n\n    let extratorTip = '<div id=\"sd-select-tips\" class=\"sd-select-tips\">提示: 当前字段为：<span id=\"tip-field-name\"></span><br>1.点击可选中数据，再次点击相同数据则取消<br>2.先在左侧选择字段，再点选对应数据<br>3.点击”重置当前字段配置”，可清空所有点选</div>'; // let r = \"<script> window.addEventListener('mouseover', (e) => { ${e}.addClass('_highlight') }); window.addEventListener('mouseout', (e) => { ${e}.removeClass('_highlight');  e.stopPropagation(); })</script><script src='https://code.jquery.com/jquery-3.6.0.slim.min.js'></script></body>\"\n\n    let str = res.data.html.replace(/\\<\\/head\\>/g, '<link rel=\"stylesheet\" type=\"text/css\" href=\"https://static.zkh360.com/file/2021-11-15/iframe-1636944661419.css\"/>\\x3c!--[if lte IE 9]><link rel=\"stylesheet\" type=\"text/css\" href=\"http://dcdn2.keydatas.com/css/iframe.ie.css\"/><![endif]--\\x3e</head>').replace(/\\<\\/body\\>/g, extratorTip + '<script type=\"text/javascript\">var urlHome=\"\";<\\/script><\\/script><script type=\"text/javascript\" src=\"' + iframeJs + '\"><\\/script></body>');\n    setHtml(str); // <script type=\"text/javascript\" src=\"https://static.zkh360.com/file/2021-11-15/jQqsysdk-1636944599860.js\">\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"side\",\n      children: \"\\u4FA7\\u8FB9\\u680F\\u7684\\u5185\\u5BB9\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"iframe\", {\n      src: \"\",\n      srcDoc: html\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1JLE9BQU8sR0FBR0YsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUtBQWI7O0FBZUEsU0FBU0ksUUFBVCxHQUFvQjtBQUNoQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JQLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBRCxFQUFBQSxnREFBUyxDQUFDLFlBQVk7QUFDbEJTLElBQUFBLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixVQUFTQyxDQUFULEVBQVk7QUFDN0JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQWNGLENBQTFCO0FBQ0gsS0FGRDs7QUFHQUYsSUFBQUEsTUFBTSxDQUFDSyxnQkFBUCxHQUEwQixVQUFTSCxDQUFULEVBQVk7QUFDbENDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQWNGLENBQTFCO0FBQ0EsYUFBTyxTQUFQO0FBQ0gsS0FIRDs7QUFJQUYsSUFBQUEsTUFBTSxDQUFDTSxnQkFBUCxHQUEwQixVQUFVSixDQUFWLEVBQWE7QUFDbkNDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFxQkYsQ0FBakM7QUFDSCxLQUZEOztBQUdBRixJQUFBQSxNQUFNLENBQUNPLGtCQUFQLEdBQTRCLFVBQVVMLENBQVYsRUFBYTtBQUNyQ0MsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXVCRixDQUFuQztBQUNBLGFBQU87QUFBRU0sUUFBQUEsU0FBUyxFQUFFQyxTQUFiO0FBQXdCQyxRQUFBQSxPQUFPLEVBQUU7QUFBakMsT0FBUDtBQUNILEtBSEQ7O0FBSUFWLElBQUFBLE1BQU0sQ0FBQ1csVUFBUCxHQUFvQixVQUFVVCxDQUFWLEVBQWE7QUFDN0JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQWVGLENBQTNCO0FBQ0gsS0FGRDs7QUFHQSxVQUFNVSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBVCxHQUFlLFdBQWhDO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLE1BQU1yQixnREFBQSxDQUFVLGNBQVYsQ0FBaEIsQ0FuQmtCLENBb0JsQjs7QUFDQSxRQUFJdUIsV0FBVyxHQUFHLDRLQUFsQixDQXJCa0IsQ0FzQmxCOztBQUNBLFFBQUlDLEdBQUcsR0FBR0gsR0FBRyxDQUFDSSxJQUFKLENBQVNyQixJQUFULENBQWNzQixPQUFkLENBQXNCLGFBQXRCLEVBQXFDLDBQQUFyQyxFQUFpU0EsT0FBalMsQ0FBeVMsYUFBelMsRUFBd1RILFdBQVcsR0FBRyx3R0FBZCxHQUF3SEwsUUFBeEgsR0FBa0kscUJBQTFiLENBQVY7QUFDQWIsSUFBQUEsT0FBTyxDQUFDbUIsR0FBRCxDQUFQLENBeEJrQixDQXlCbEI7QUFDSCxHQTFCUSxFQTBCTixFQTFCTSxDQUFUO0FBNEJBLHNCQUFPLDhEQUFDLE9BQUQ7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFRLFNBQUcsRUFBQyxFQUFaO0FBQWUsWUFBTSxFQUFFcEI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSUQ7O0FBRUQsaUVBQWVELFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgLnNpZGUge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIH1cbiAgICBpZnJhbWUge1xuICAgICAgICB3aWR0aDogMTAwMHB4O1xuICAgICAgICBoZWlnaHQ6IDkwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICAgIH1cbmBcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IHVzZVN0YXRlKCcnKVxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5nZXRQYWdlVHlwZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWdlVHlwZTonICsgZSlcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuZ2V0Q3VyckZpZWxkTmFtZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZE5hbWUnICsgZSlcbiAgICAgICAgICAgIHJldHVybiAnc2t1TmFtZSdcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuY2FsbEJ5SWZyYW1lSW5pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2FsbEJ5SWZyYW1lSW5pdCcgKyBlKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5nZXRDdXJyRmllbGRDb25maWcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEN1cnJGaWVsZENvbmZpZycgKyBlKVxuICAgICAgICAgICAgcmV0dXJuIHsgbXV0aVZhbHVlOiB1bmRlZmluZWQsIHNrdU5hbWU6ICcnIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2F2ZVNlbGVjdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZVNlbGVjdCcgKyBlKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZUpzID0gbG9jYXRpb24uaHJlZiArJ2lmcmFtZS5qcydcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRIdG1sJylcbiAgICAgICAgLy8g6YGN5Y6GaHRtbCzmib7liLDlj7blrZDoioLngrlcbiAgICAgICAgbGV0IGV4dHJhdG9yVGlwID0gJzxkaXYgaWQ9XCJzZC1zZWxlY3QtdGlwc1wiIGNsYXNzPVwic2Qtc2VsZWN0LXRpcHNcIj7mj5DnpLo6IOW9k+WJjeWtl+auteS4uu+8mjxzcGFuIGlkPVwidGlwLWZpZWxkLW5hbWVcIj48L3NwYW4+PGJyPjEu54K55Ye75Y+v6YCJ5Lit5pWw5o2u77yM5YaN5qyh54K55Ye755u45ZCM5pWw5o2u5YiZ5Y+W5raIPGJyPjIu5YWI5Zyo5bem5L6n6YCJ5oup5a2X5q6177yM5YaN54K56YCJ5a+55bqU5pWw5o2uPGJyPjMu54K55Ye74oCd6YeN572u5b2T5YmN5a2X5q616YWN572u4oCd77yM5Y+v5riF56m65omA5pyJ54K56YCJPC9kaXY+J1xuICAgICAgICAvLyBsZXQgciA9IFwiPHNjcmlwdD4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7ICR7ZX0uYWRkQ2xhc3MoJ19oaWdobGlnaHQnKSB9KTsgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHsgJHtlfS5yZW1vdmVDbGFzcygnX2hpZ2hsaWdodCcpOyAgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk8L3NjcmlwdD48c2NyaXB0IHNyYz0naHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNi4wLnNsaW0ubWluLmpzJz48L3NjcmlwdD48L2JvZHk+XCJcbiAgICAgICAgbGV0IHN0ciA9IHJlcy5kYXRhLmh0bWwucmVwbGFjZSgvXFw8XFwvaGVhZFxcPi9nLCAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL3N0YXRpYy56a2gzNjAuY29tL2ZpbGUvMjAyMS0xMS0xNS9pZnJhbWUtMTYzNjk0NDY2MTQxOS5jc3NcIi8+XFx4M2MhLS1baWYgbHRlIElFIDldPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2RjZG4yLmtleWRhdGFzLmNvbS9jc3MvaWZyYW1lLmllLmNzc1wiLz48IVtlbmRpZl0tLVxceDNlPC9oZWFkPicpLnJlcGxhY2UoL1xcPFxcL2JvZHlcXD4vZywgZXh0cmF0b3JUaXAgKyAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+dmFyIHVybEhvbWU9XCJcIjs8XFwvc2NyaXB0PjxcXC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiJysgaWZyYW1lSnMgKydcIj48XFwvc2NyaXB0PjwvYm9keT4nKTtcbiAgICAgICAgc2V0SHRtbChzdHIpXG4gICAgICAgIC8vIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHBzOi8vc3RhdGljLnpraDM2MC5jb20vZmlsZS8yMDIxLTExLTE1L2pRcXN5c2RrLTE2MzY5NDQ1OTk4NjAuanNcIj5cbiAgICB9LCBbXSlcbiAgIFxuICAgIHJldHVybiA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZVwiPuS+p+i+ueagj+eahOWGheWuuTwvZGl2PlxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCJcIiBzcmNEb2M9e2h0bWx9PjwvaWZyYW1lPlxuICAgIDwvV3JhcHBlcj5cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcblxuICAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJheGlvcyIsIldyYXBwZXIiLCJkaXYiLCJIb21lUGFnZSIsImh0bWwiLCJzZXRIdG1sIiwid2luZG93IiwiZ2V0UGFnZVR5cGUiLCJlIiwiY29uc29sZSIsImxvZyIsImdldEN1cnJGaWVsZE5hbWUiLCJjYWxsQnlJZnJhbWVJbml0IiwiZ2V0Q3VyckZpZWxkQ29uZmlnIiwibXV0aVZhbHVlIiwidW5kZWZpbmVkIiwic2t1TmFtZSIsInNhdmVTZWxlY3QiLCJpZnJhbWVKcyIsImxvY2F0aW9uIiwiaHJlZiIsInJlcyIsImdldCIsImV4dHJhdG9yVGlwIiwic3RyIiwiZGF0YSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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