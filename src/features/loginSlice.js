import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginState: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { loginState } = loginSlice.actions;

export default loginSlice.reducer;
