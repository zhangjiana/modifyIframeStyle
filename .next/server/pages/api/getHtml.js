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
exports.id = "pages/api/getHtml";
exports.ids = ["pages/api/getHtml"];
exports.modules = {

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "./pages/api/getHtml.js":
/*!******************************!*\
  !*** ./pages/api/getHtml.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\"); // 获取html的字符串\n\n\nfunction loadPage(url) {\n  var http = __webpack_require__(/*! http */ \"http\");\n\n  var pm = new Promise(function (resolve, reject) {\n    http.get(url, function (res) {\n      var html = '';\n      res.on('data', function (d) {\n        html += d.toString();\n      });\n      res.on('end', function () {\n        html = dealHtml(html);\n        resolve(html);\n      });\n    }).on('error', function (e) {\n      reject(e);\n    });\n  });\n  return pm;\n} // 处理html\n\n\nfunction dealHtml(html) {\n  const $ = cheerio.load(html);\n  let children = $('body').children();\n  findLeaf(children);\n  return $.html();\n\n  function findLeaf(arr) {\n    for (let i = 0; i < arr.length; i++) {\n      let item = $(arr[i]);\n\n      if (item.children().length > 0) {\n        findLeaf(item.children());\n      } else {\n        if (arr[i].name === 'script') return;\n        const str = item.html();\n        item.empty();\n        item.append(`<qsc onmouseout=\"\" onmouseover=\"\">${str}</qsc>`);\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  loadPage('http://www.baidu.com').then(function (d) {\n    res.statusCode = 200;\n    res.json({\n      html: d\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0SHRtbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQXZCLEVBQ0E7OztBQUNBLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ25CLE1BQUlDLElBQUksR0FBR0gsbUJBQU8sQ0FBQyxrQkFBRCxDQUFsQjs7QUFDQSxNQUFJSSxFQUFFLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzVDSixJQUFBQSxJQUFJLENBQUNLLEdBQUwsQ0FBU04sR0FBVCxFQUFjLFVBQVVPLEdBQVYsRUFBZTtBQUN6QixVQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLEVBQUosQ0FBTyxNQUFQLEVBQWUsVUFBVUMsQ0FBVixFQUFhO0FBQ3hCRixRQUFBQSxJQUFJLElBQUlFLENBQUMsQ0FBQ0MsUUFBRixFQUFSO0FBQ0gsT0FGRDtBQUdBSixNQUFBQSxHQUFHLENBQUNFLEVBQUosQ0FBTyxLQUFQLEVBQWMsWUFBWTtBQUN0QkQsUUFBQUEsSUFBSSxHQUFHSSxRQUFRLENBQUNKLElBQUQsQ0FBZjtBQUNBSixRQUFBQSxPQUFPLENBQUNJLElBQUQsQ0FBUDtBQUNILE9BSEQ7QUFJSCxLQVRELEVBU0dDLEVBVEgsQ0FTTSxPQVROLEVBU2UsVUFBVUksQ0FBVixFQUFhO0FBQ3hCUixNQUFBQSxNQUFNLENBQUNRLENBQUQsQ0FBTjtBQUNILEtBWEQ7QUFZSCxHQWJRLENBQVQ7QUFjQSxTQUFPWCxFQUFQO0FBQ0gsRUFDRDs7O0FBQ0EsU0FBU1UsUUFBVCxDQUFtQkosSUFBbkIsRUFBeUI7QUFDckIsUUFBTU0sQ0FBQyxHQUFHakIsT0FBTyxDQUFDa0IsSUFBUixDQUFhUCxJQUFiLENBQVY7QUFDQSxNQUFJUSxRQUFRLEdBQUdGLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUUsUUFBVixFQUFmO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0QsUUFBRCxDQUFSO0FBQ0EsU0FBT0YsQ0FBQyxDQUFDTixJQUFGLEVBQVA7O0FBQ0EsV0FBU1MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbkIsU0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdELEdBQUcsQ0FBQ0UsTUFBdkIsRUFBK0JELENBQUMsRUFBaEMsRUFBb0M7QUFDaEMsVUFBSUUsSUFBSSxHQUFHUCxDQUFDLENBQUNJLEdBQUcsQ0FBQ0MsQ0FBRCxDQUFKLENBQVo7O0FBQ0EsVUFBSUUsSUFBSSxDQUFDTCxRQUFMLEdBQWdCSSxNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM1QkgsUUFBQUEsUUFBUSxDQUFDSSxJQUFJLENBQUNMLFFBQUwsRUFBRCxDQUFSO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBSUUsR0FBRyxDQUFDQyxDQUFELENBQUgsQ0FBT0csSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM5QixjQUFNQyxHQUFHLEdBQUdGLElBQUksQ0FBQ2IsSUFBTCxFQUFaO0FBQ0FhLFFBQUFBLElBQUksQ0FBQ0csS0FBTDtBQUNBSCxRQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBYSxxQ0FBb0NGLEdBQUksUUFBckQ7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxpRUFBZSxDQUFDRyxHQUFELEVBQU1uQixHQUFOLEtBQWM7QUFDekJSLEVBQUFBLFFBQVEsQ0FBQyxzQkFBRCxDQUFSLENBQWlDNEIsSUFBakMsQ0FBc0MsVUFBVWpCLENBQVYsRUFBYTtBQUMvQ0gsSUFBQUEsR0FBRyxDQUFDcUIsVUFBSixHQUFpQixHQUFqQjtBQUNBckIsSUFBQUEsR0FBRyxDQUFDc0IsSUFBSixDQUFTO0FBQUVyQixNQUFBQSxJQUFJLEVBQUVFO0FBQVIsS0FBVDtBQUNILEdBSEQ7QUFJSCxDQUxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9hcGkvZ2V0SHRtbC5qcz80YmJmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoZWVyaW8gPSByZXF1aXJlKCdjaGVlcmlvJyk7XG4vLyDojrflj5ZodG1s55qE5a2X56ym5LiyXG5mdW5jdGlvbiBsb2FkUGFnZSh1cmwpIHtcbiAgICB2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbiAgICB2YXIgcG0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGh0dHAuZ2V0KHVybCwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSAnJztcbiAgICAgICAgICAgIHJlcy5vbignZGF0YScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaHRtbCA9IGRlYWxIdG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShodG1sKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5vbignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwbTtcbn1cbi8vIOWkhOeQhmh0bWxcbmZ1bmN0aW9uIGRlYWxIdG1sIChodG1sKSB7XG4gICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sKVxuICAgIGxldCBjaGlsZHJlbiA9ICQoJ2JvZHknKS5jaGlsZHJlbigpXG4gICAgZmluZExlYWYoY2hpbGRyZW4pXG4gICAgcmV0dXJuICQuaHRtbCgpXG4gICAgZnVuY3Rpb24gZmluZExlYWYoYXJyKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gJChhcnJbaV0pXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmaW5kTGVhZihpdGVtLmNoaWxkcmVuKCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhcnJbaV0ubmFtZSA9PT0gJ3NjcmlwdCcpIHJldHVyblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ciA9IGl0ZW0uaHRtbCgpXG4gICAgICAgICAgICAgICAgaXRlbS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoYDxxc2Mgb25tb3VzZW91dD1cIlwiIG9ubW91c2VvdmVyPVwiXCI+JHtzdHJ9PC9xc2M+YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICAgIGxvYWRQYWdlKCdodHRwOi8vd3d3LmJhaWR1LmNvbScpLnRoZW4oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbiAgICAgICAgcmVzLmpzb24oeyBodG1sOiBkIH0pXG4gICAgfSk7XG59XG4gICJdLCJuYW1lcyI6WyJjaGVlcmlvIiwicmVxdWlyZSIsImxvYWRQYWdlIiwidXJsIiwiaHR0cCIsInBtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJyZXMiLCJodG1sIiwib24iLCJkIiwidG9TdHJpbmciLCJkZWFsSHRtbCIsImUiLCIkIiwibG9hZCIsImNoaWxkcmVuIiwiZmluZExlYWYiLCJhcnIiLCJpIiwibGVuZ3RoIiwiaXRlbSIsIm5hbWUiLCJzdHIiLCJlbXB0eSIsImFwcGVuZCIsInJlcSIsInRoZW4iLCJzdGF0dXNDb2RlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getHtml.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/getHtml.js"));
module.exports = __webpack_exports__;

})();