import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "./postsSlice"

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    return (
        <section className="mt-5">
            <h2 className="mb-2 text-primary">Posts</h2>
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