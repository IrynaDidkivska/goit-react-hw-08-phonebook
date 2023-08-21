import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, registerUserThunk } from './operations';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
      password: '',
    },
    isLoggedIn: false,
    token: '',
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = slice.reducer;
