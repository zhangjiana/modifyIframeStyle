let atricalId; 

function Artical({id}) {
    return <div> 这是我的文章，我的文章id 是 {id} </div>
  }
export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: '1' } }, 
        { params: { id: '2' } }, 
        { params: { id: '3' } }, 
      ],
      fallback: true
    };
}

export async function getStaticProps(ctx) {
    const { params } = ctx;
    const { id } = params
    return {
        props: { id },
        revalidate: 5
    }
}

  
export default Artical