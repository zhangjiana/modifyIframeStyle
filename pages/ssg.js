// static side generation
// 动态内容静态化 通过 getStaticProps 获取用户无关内容
function SSG(props) {
    return <div>你的浏览器是 {props.browser}</div>
}

export async function getStaticProps (ctx) {
    console.log(ctx)
    return {
        props: {
            browser: 1
        }
    }
}
export default SSG