import { useEffect, useState } from 'react'
import styled from "styled-components";
import axios from 'axios'
const Wrapper = styled.div`
    border: 1px solid #000;
    .side {
        width: 200px;
        float: left;
        border: 1px solid #333;
    }
    iframe {
        width: 1000px;
        height: 900px;
        float: left;
        margin-left: 200px;
        border: 1px solid #666;
    }
`
function HomePage() {
    const [html, setHtml] = useState('')
    useEffect(async () => {
        window.getPageType = function(e) {
            console.log('pageType:' + e)
        }
        window.getCurrFieldName = function(e) {
            console.log('fieldName' + e)
            return 'skuName'
        }
        window.callByIframeInit = function (e) {
            console.log('callByIframeInit' + e)
        }
        window.getCurrFieldConfig = function (e) {
            console.log('getCurrFieldConfig' + e)
            return { mutiValue: undefined, skuName: '' }
        }
        window.saveSelect = function (e) {
            console.log('saveSelect' + e)
        }
        const iframeJs = location.href +'iframe.js'
        let res = await axios.get('/api/getHtml')
        // 遍历html,找到叶子节点
        let extratorTip = '<div id="sd-select-tips" class="sd-select-tips">提示: 当前字段为：<span id="tip-field-name"></span><br>1.点击可选中数据，再次点击相同数据则取消<br>2.先在左侧选择字段，再点选对应数据<br>3.点击”重置当前字段配置”，可清空所有点选</div>'
        // let r = "<script> window.addEventListener('mouseover', (e) => { ${e}.addClass('_highlight') }); window.addEventListener('mouseout', (e) => { ${e}.removeClass('_highlight');  e.stopPropagation(); })</script><script src='https://code.jquery.com/jquery-3.6.0.slim.min.js'></script></body>"
        let str = res.data.html.replace(/\<\/head\>/g, '<link rel="stylesheet" type="text/css" href="https://static.zkh360.com/file/2021-11-15/iframe-1636944661419.css"/>\x3c!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="http://dcdn2.keydatas.com/css/iframe.ie.css"/><![endif]--\x3e</head>').replace(/\<\/body\>/g, extratorTip + '<script type="text/javascript">var urlHome="";<\/script><\/script><script type="text/javascript" src="'+ iframeJs +'"><\/script></body>');
        setHtml(str)
        // <script type="text/javascript" src="https://static.zkh360.com/file/2021-11-15/jQqsysdk-1636944599860.js">
    }, [])
   
    return <Wrapper>
            <div className="side">侧边栏的内容</div>
            <iframe src="" srcDoc={html}></iframe>
    </Wrapper>
  }
  
  export default HomePage

  