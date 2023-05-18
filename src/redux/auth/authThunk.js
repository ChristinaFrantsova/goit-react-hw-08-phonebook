import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpUserApi,
  setAuthHeader,
  clearAuthHeader,
  logInUserApi,
  logOutUserApi,
  getCurrentUser,
} from '../../api/Api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const responce = await signUpUserApi(credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const responce = await logInUserApi(credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logOutUserApi();
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      return getCurrentUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
