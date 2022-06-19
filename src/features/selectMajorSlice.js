import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

export const selectMajorSlice = createSlice({
  name: 'selectMajor',
  initialState,
  reducers: {
    selectMajorState: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { selectMajorState } = selectMajorSlice.actions;

export default selectMajorSlice.reducer;
