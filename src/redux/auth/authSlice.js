import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutThunk,
  refreshThunk,
  registerUserThunk,
} from './operations';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    error: '',
    isLoggedIn: false,
    token: '',
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.user.name = '';
        state.user.email = '';
        state.token = '';
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = slice.reducer;
