import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: '' }

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
      loginState : (state, action) => {

      },
  },
});

export const { loginState } = loginSlice.actions;

export default loginSlice.reducer;