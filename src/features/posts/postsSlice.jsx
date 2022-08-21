import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'learning react + redux-toolkit', content: 'I am making a simple blog using vite + react + react-bootstrap + redux-toolkit' },
    { id: '2', title: 'react is simple', content: 'reactjs is imple to learn and start using even as a beginner' },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions

export default postSlice.reducer