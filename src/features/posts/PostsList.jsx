import { useSelector, useDispatch } from "react-redux"

const PostsList = () => {

    const posts = useSelector((state) => state.posts)

    return (
        <section>
            {posts.map((post) => {
                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default PostsList