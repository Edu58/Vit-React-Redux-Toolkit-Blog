import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'learning react + redux-toolkit', content: 'I am making a simple blog using vite + react + react-bootstrap + redux-toolkit' },
    { id: '2', title: 'react is simple', content: 'reactjs is imple to learn and start using evn as a beginner' },
]

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export default postSlice.reducer