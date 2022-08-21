import { useState } from "react"
import { useDispatch } from "react-redux"
import { Form, Button } from "react-bootstrap"
import { nanoid } from "@reduxjs/toolkit"
import { postAdded } from "./postsSlice"

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleFormSubmission = (e) => {
        e.preventDefault()

        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            )
        }

        setTitle('')
        setContent('')
    }

    return (
        <section className="mt-4">
            <h2>Add a new post</h2>

            <Form onSubmit={handleFormSubmission}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Post Title:</Form.Label>
                    <Form.Control type="text" placeholder="enter a title" value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Post Content</Form.Label>
                    <Form.Control as="textarea" rows={5} value={content} onChange={(e) => setContent(e.target.value)} />
                </Form.Group>

                <Button variant="success" type="submit">
                    Post
                </Button>
            </Form>
        </section>
    )
}

export default AddPostForm