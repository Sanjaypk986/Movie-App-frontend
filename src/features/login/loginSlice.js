import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false
  },
  reducers: {
    changeLogginStatus: (state, action) => {
      state.loggedIn = action.payload;
    }
  }
});

export const { changeLogginStatus } = loginSlice.actions;

export default loginSlice.reducer;
