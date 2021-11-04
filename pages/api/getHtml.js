const cheerio = require('cheerio');
// 获取html的字符串
function loadPage(url) {
    var http = require('http');
    var pm = new Promise(function (resolve, reject) {
        http.get(url, function (res) {
            var html = '';
            res.on('data', function (d) {
                html += d.toString()
            });
            res.on('end', function () {
                html = dealHtml(html)
                resolve(html);
            });
        }).on('error', function (e) {
            reject(e)
        });
    });
    return pm;
}
// 处理html
function dealHtml (html) {
    const $ = cheerio.load(html)
    let children = $('body').children()
    findLeaf(children)
    return $.html()
    function findLeaf(arr) {
        for(let i = 0; i < arr.length; i++) {
            let item = $(arr[i])
            if (item.children().length > 0) {
                findLeaf(item.children())
            } else {
                if (arr[i].name === 'script') return
                const str = item.html()
                item.empty()
                item.append(`<qsc onmouseout="" onmouseover="">${str}</qsc>`)
            }
        }
    }
}
export default (req, res) => {
    loadPage('http://www.baidu.com').then(function (d) {
        res.statusCode = 200
        res.json({ html: d })
    });
}
  