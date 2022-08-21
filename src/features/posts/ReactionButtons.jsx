import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";
import { Button } from "react-bootstrap";

const reactionEmojis = {
    thumbsUp: '👍',
    wow: '😯',
    heart: '💗',
    rocket: '🚀',
    coffee: '☕'
}


const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
            <Button
                key={name}
                onClick={() => dispatch(addReaction({ postId: post.id, reaction: name }))}
                className="me-2"
            >
                {emoji} {post.reactions[name]}
            </Button>
        )
    })

    return (
        <div>{reactionButtons}</div>
    )
}

export default ReactionButtons