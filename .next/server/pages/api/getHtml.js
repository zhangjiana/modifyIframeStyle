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

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "./pages/api/getHtml.js":
/*!******************************!*\
  !*** ./pages/api/getHtml.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\"); // 获取html的字符串\n\n\nfunction loadPage(url) {\n  var https = __webpack_require__(/*! https */ \"https\");\n\n  var pm = new Promise(function (resolve, reject) {\n    https.get(url, function (res) {\n      var html = '';\n      res.on('data', function (d) {\n        html += d.toString();\n      });\n      res.on('end', function () {\n        html = dealHtml(html);\n        resolve(html);\n      });\n    }).on('error', function (e) {\n      reject(e);\n    });\n  });\n  return pm;\n} // 处理html\n\n\nfunction dealHtml(html) {\n  let str = html.replace(/<script.*?>.*?<\\/script>/ig, '');\n  const $ = cheerio.load(str);\n  let children = $('body').children();\n\n  try {\n    findLeaf(children);\n  } catch (err) {\n    console.log(\"err: \" + err);\n  }\n\n  return $.html();\n\n  function findLeaf(arr) {\n    for (let i = 0; i < arr.length; i++) {\n      let item = $(arr[i]);\n\n      if (item.children().length > 0) {\n        findLeaf(item.children());\n      } else if (arr[i].name !== 'script') {\n        const str = item.html();\n        item.empty();\n        item.append(`<kds onmouseout=\"rmSelf(this);\" onmouseover=\"addHightLightClass(this);\">${str}</kds>`);\n      } else {\n        item.remove();\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  loadPage('https://www.zkh360.com/item/AA3508130.html').then(function (d) {\n    res.statusCode = 200;\n    res.json({\n      html: d\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMEIsVUFBSixHQUFpQixHQUFqQjtBQUNBMUIsSUFBQUEsR0FBRyxDQUFDMkIsSUFBSixDQUFTO0FBQUUxQixNQUFBQSxJQUFJLEVBQUVFO0FBQVIsS0FBVDtBQUNILEdBSEQ7QUFJSCxDQUxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9hcGkvZ2V0SHRtbC5qcz80YmJmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoZWVyaW8gPSByZXF1aXJlKCdjaGVlcmlvJyk7XG4vLyDojrflj5ZodG1s55qE5a2X56ym5LiyXG5mdW5jdGlvbiBsb2FkUGFnZSh1cmwpIHtcbiAgICB2YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xuICAgIHZhciBwbSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaHR0cHMuZ2V0KHVybCwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSAnJztcbiAgICAgICAgICAgIHJlcy5vbignZGF0YScsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaHRtbCA9IGRlYWxIdG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShodG1sKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5vbignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwbTtcbn1cbi8vIOWkhOeQhmh0bWxcbmZ1bmN0aW9uIGRlYWxIdG1sIChodG1sKSB7XG4gICAgbGV0IHN0ciA9IGh0bWwucmVwbGFjZSgvPHNjcmlwdC4qPz4uKj88XFwvc2NyaXB0Pi9pZywgJycpXG4gICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChzdHIpXG4gICAgbGV0IGNoaWxkcmVuID0gJCgnYm9keScpLmNoaWxkcmVuKCkgXG4gICAgdHJ5IHtcbiAgICAgICAgZmluZExlYWYoY2hpbGRyZW4pXG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnI6IFwiICsgZXJyKVxuICAgIH1cbiAgICByZXR1cm4gJC5odG1sKClcbiAgICBmdW5jdGlvbiBmaW5kTGVhZihhcnIpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9ICQoYXJyW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmaW5kTGVhZihpdGVtLmNoaWxkcmVuKCkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbaV0ubmFtZSAhPT0gJ3NjcmlwdCcpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBpdGVtLmh0bWwoKVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmVtcHR5KClcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoYDxrZHMgb25tb3VzZW91dD1cInJtU2VsZih0aGlzKTtcIiBvbm1vdXNlb3Zlcj1cImFkZEhpZ2h0TGlnaHRDbGFzcyh0aGlzKTtcIj4ke3N0cn08L2tkcz5gKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgbG9hZFBhZ2UoJ2h0dHBzOi8vd3d3LnpraDM2MC5jb20vaXRlbS9BQTM1MDgxMzAuaHRtbCcpLnRoZW4oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbiAgICAgICAgcmVzLmpzb24oeyBodG1sOiBkIH0pXG4gICAgfSk7XG59XG4gICJdLCJuYW1lcyI6WyJjaGVlcmlvIiwicmVxdWlyZSIsImxvYWRQYWdlIiwidXJsIiwiaHR0cHMiLCJwbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwicmVzIiwiaHRtbCIsIm9uIiwiZCIsInRvU3RyaW5nIiwiZGVhbEh0bWwiLCJlIiwic3RyIiwicmVwbGFjZSIsIiQiLCJsb2FkIiwiY2hpbGRyZW4iLCJmaW5kTGVhZiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhcnIiLCJpIiwibGVuZ3RoIiwiaXRlbSIsIm5hbWUiLCJlbXB0eSIsImFwcGVuZCIsInJlbW92ZSIsInJlcSIsInRoZW4iLCJzdGF0dXNDb2RlIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getHtml.js\n");

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