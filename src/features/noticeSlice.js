import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: "" }

export const noticeSlice = createSlice({
    name: "notice",
    initialState,
    reducers: {
        noticeState: (state, actions) => {
            state.value = actions.payload
        },
    },
})

export const { noticeState } = noticeSlice.actions

export default noticeSlice.reducer
