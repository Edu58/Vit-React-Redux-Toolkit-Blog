import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        title: 'learning react + redux-toolkit',
        content: 'I am making a simple blog using vite + react + react-bootstrap + redux-toolkit',
        date: sub(new Date(), {minutes: 3}).toISOString()   
    },
    {
        id: '2',
        title: 'react is simple',
        content: 'reactjs is imple to learn and start using even as a beginner',
        date: sub(new Date(), { minutes: 123 }).toISOString()
    },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                    }
                }
            }
        },
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions

export default postSlice.reducer