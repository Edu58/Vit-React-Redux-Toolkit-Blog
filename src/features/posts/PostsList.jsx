import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postsSlice"
import PostsExcerpt from "./PostsExcerpt"

const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const status = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if (status == 'idle') {
            dispatch(fetchPosts())
        }
    }, [status, dispatch])

    let content;

    if (status === 'loading') {
        content = <p>Loading......</p>
    } else if (status === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (status === 'failed') {
        content = <p>{error}</p>
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