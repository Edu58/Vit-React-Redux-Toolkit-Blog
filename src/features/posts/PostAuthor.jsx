import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";


const PostAuthor = ({ userId }) => {

    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return (
        <span className="fst-italic">by {author ? author.name : 'unknown'}</span>
    )
}

export default PostAuthor