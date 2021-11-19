const cheerio = require('cheerio');
// 获取html的字符串
function loadPage(url) {
    var https = require('https');
    var pm = new Promise(function (resolve, reject) {
        https.get(url, function (res) {
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
    let str = html.replace(/<script.*?>.*?<\/script>/ig, '')
    const $ = cheerio.load(str)
    let children = $('body').children() 
    try {
        findLeaf(children)
    } catch(err) {
        console.log("err: " + err)
    }
    return $.html()
    function findLeaf(arr) {
            for(let i = 0; i < arr.length; i++) {
                let item = $(arr[i])
                if (item.children().length > 0) {
                    findLeaf(item.children())
                } else if (arr[i].name !== 'script'){
                    const str = item.html()
                    item.empty()
                    item.append(`<kds onmouseout="rmSelf(this);" onmouseover="addHightLightClass(this);">${str}</kds>`)
                } else {
                    item.remove()
                }
            }
    }
    
}
export default (req, res) => {
    loadPage('https://www.zkh360.com/item/AA3508130.html').then(function (d) {
        res.statusCode = 200
        res.json({ html: d })
    });
}
  