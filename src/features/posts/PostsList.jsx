import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "./postsSlice"

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

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