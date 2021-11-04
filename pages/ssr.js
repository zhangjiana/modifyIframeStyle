// service side render
// 用户相关动态内容静态化 通过 getServerSideProps 获取请求 
function SSR(props) {
    return <div>你的浏览器是 {props.browser}</div>
}

export async function getServerSideProps (ctx) {
    const headers = ctx.req.headers;
    const browser = headers['user-agent'];
    return {
        props: {
            browser
        }
    }
}
export default SSR