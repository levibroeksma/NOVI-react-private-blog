import data from '../data/posts.json'

function Blogs() {
    const newBlogPost = data.map(() => {
        return (
            <>
                <h2>{data.title}</h2>

            </>
        )
    })

    return (
        <>
        <div>
            {newBlogPost}
        </div>
        </>
    )

}

export default Blogs;