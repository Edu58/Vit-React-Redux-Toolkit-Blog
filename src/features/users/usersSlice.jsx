import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

// const initialState = [
//     { id: '0', name: 'john doe' },
//     { id: '1', name: 'bob junior' },
// ]

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET'
        })
        const data = response.json()
        return data

    } catch (error) {
        return error.message
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload
            })
    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer