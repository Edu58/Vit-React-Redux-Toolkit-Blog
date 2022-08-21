import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <p>
                <TimeAgo timeStamp={post.date} />
                &nbsp;
                <PostAuthor userId={post.userId} />
            </p>
            <ReactionButtons post={post} />
        </article >
    )
}

export default PostsExcerpt