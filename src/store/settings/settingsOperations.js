import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://watertracker-ldwc.onrender.com';
axios.defaults.baseURL = 'https://rtfm-water-tracker-backend.onrender.com/api';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateAvatar = createAsyncThunk(
  'user-settings/avatar',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user-settings/avatar', formData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'user-settings/edit',
  async (body, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.patch('/user-settings', body);
      return data;
    } catch (error) {
      toast.error('Request error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
