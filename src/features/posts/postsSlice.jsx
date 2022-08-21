import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

// const initialState = [
//     {
//         id: '1',
//         title: 'learning react + redux-toolkit',
//         content: 'I am making a simple blog using vite + react + react-bootstrap + redux-toolkit',
//         date: sub(new Date(), { minutes: 3 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         }
//     },
//     {
//         id: '2',
//         title: 'react is simple',
//         content: 'reactjs is imple to learn and start using even as a beginner',
//         date: sub(new Date(), { minutes: 123 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         }
//     },
// ]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },

        addReaction(state, action) {
            const { postId, reaction } = action.payload
            const existing = state.posts.find(post => post.id === postId)

            if (existing) {
                existing.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts.posts

export const { postAdded, addReaction } = postSlice.actions

export default postSlice.reducer