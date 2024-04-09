import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { clearAuthHeader, setAuthHeader } from 'components/api/api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {

    try {
      console.log('credentials', credentials)
      const { data } = await axios.post('/auth/register', credentials);
      Notify.success('Registered successfully!');
      return data;
    } catch (error) {
      Notify.failure('Registered failed!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.token);
      Notify.success('Login is successful!');
      return data;
    } catch (error) {
      Notify.failure('Login failed!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/logout');
    clearAuthHeader();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios('/user-settings/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
