
// 页面由多级路由，参数拼接
function Artical({gid, pid}) {
    return <div> 这是我的文章，文章路径是 {gid}, {pid} </div>
}
export async function getStaticPaths() {
    let paths = []
    let arr = [1,2,3,4,5]
    arr.forEach((item, index) => {
        paths.push(`/posts/section/${item}/${index}`)
    })
    return {
      paths,
      fallback: true
    };
}

export async function getStaticProps(ctx) {
    const { params } = ctx;
    const [gid, pid] = params.slug
    return {
        props: { gid, pid },
        revalidate: 5
    }
}

  
export default Artical