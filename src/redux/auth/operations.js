import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const API = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

// Робимо хелпери для запису токена, на всі наші запити буде додано хедер "Authorization"
const setToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Робимо хелпер для очистки токена, коли людина натискає вийти
const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};

export const registerUserThunk = createAsyncThunk(
  'auth/reg',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.post('users/logout');
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().user.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue(toast.error(`Token is not exist!`));
    }
    try {
      setToken(savedToken);
      const { data } = await API.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
