import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: "" }

export const selectIdSlice = createSlice({
    name: "selectId",
    initialState,
    reducers: {
        selectIdState: (state, actions) => {
            state.value = actions.payload
        },
    },
})

export const { selectIdState } = selectIdSlice.actions

export default selectIdSlice.reducer
