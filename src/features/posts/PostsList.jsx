import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "./postsSlice"
import PostAuthor from "./PostAuthor"

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

                        <p>
                            <PostAuthor userId={post.userId} />
                        </p>
                    </article>
                )
            })}
        </section>
    )
}

export default PostsList