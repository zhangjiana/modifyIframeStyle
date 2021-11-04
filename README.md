## 更改iframe 中的内容


1. 加载目标网址，比如 https://www.jd.com/AA3508130.html
2. 把目标网站 通过接口，传送后台
3. 后端解析html 树，并且给最末尾元素添加一个自定义标签，
4. 自定义标签上添加onmouseout， onmouseover事件，并且监听这个自定义标签的点击事件
5. 最后，将整个html dom 树，作为html 输出
6. 赋值到 iframe 的 srcdoc 属性上进行展示

## 使用的技术

1. `http`抓取网站，作为字符串
2. `cheerio`用来分析html 结构，并且加一些更改
3. 输出html