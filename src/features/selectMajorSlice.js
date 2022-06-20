import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [] };

export const selectMajorSlice = createSlice({
  name: 'selectMajor',
  initialState,
  reducers: {
    selectMajorState: (state, actions) => {
      return [...state, actions.payload];
    },
    unSelectMajorState: (state, actions) => {
      const NextSelect = state.filters((major) => major !== actions.payload);
      return NextSelect;
    },
  },
});

export const { selectMajorState, unSelectMajorState } = selectMajorSlice.actions;

export default selectMajorSlice.reducer;
