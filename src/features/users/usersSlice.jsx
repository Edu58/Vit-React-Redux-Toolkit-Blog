import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'john doe' },
    { id: '1', name: 'bob junior' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer