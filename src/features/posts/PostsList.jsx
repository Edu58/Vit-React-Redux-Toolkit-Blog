import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postsSlice"
import PostsExcerpt from "./PostsExcerpt"

const PostsList = () => {
    const dispatch = useDispatch()

    const status = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    const posts = useSelector(selectAllPosts)

    useEffect(() => {
        if (status == 'idle') {
            dispatch(fetchPosts())
        }
    }, [status, dispatch])

    let content;

    switch (status) {
        case 'loading':
            content = <p>Loading......</p>
            break;
        case 'succeeded':
            const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
            content = orderedPosts.map(post => <PostsExcerpt post={post} />)
            break;
        case 'failed':
            content = <p>{error}</p>
            break;
        default:
            break;
    }

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (
        <section className="mt-5">
            <h2 className="mb-2 text-primary">Posts</h2>
            {content}
        </section>
    )
}

export default PostsList