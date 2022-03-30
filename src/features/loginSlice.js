import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: false }

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginState: (state) => {
            state.value = !state.value
        },
    },
})

export const { loginState } = loginSlice.actions

export default loginSlice.reducer
