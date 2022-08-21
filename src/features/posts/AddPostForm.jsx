import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button } from "react-bootstrap"
import { postAdded } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"


const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const handleFormSubmission = (e) => {
        e.preventDefault()

        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
        }

        setTitle('')
        setContent('')
    }

    return (
        <section className="mt-4">
            <h2 className="text-primary">Add a new post</h2>

            <Form onSubmit={handleFormSubmission}>
                <Form.Label>Post Author:</Form.Label>
                <Form.Select className="mb-3" defaultValue={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option>click to select author</option>
                    {users.map(user => {
                        return (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        )
                    })}
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Post Title:</Form.Label>
                    <Form.Control type="text" placeholder="enter a title" value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Post Content</Form.Label>
                    <Form.Control as="textarea" rows={5} value={content} onChange={(e) => setContent(e.target.value)} />
                </Form.Group>

                <Button variant="success" type="submit" disabled={!canSave}>
                    Post
                </Button>
            </Form>
        </section>
    )
}

export default AddPostForm