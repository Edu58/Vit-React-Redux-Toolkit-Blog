import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "./postsSlice"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (
        <section className="mt-5">
            <h2 className="mb-2 text-primary">Posts</h2>
            {orderedPosts.map((post) => {
                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>

                        <p>
                            <TimeAgo timeStamp={post.date} />
                            &nbsp;
                            <PostAuthor userId={post.userId} />
                        </p>
                        <ReactionButtons post={post} />
                    </article>
                )
            })}
        </section>
    )
}

export default PostsList