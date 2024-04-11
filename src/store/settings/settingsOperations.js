import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from "notiflix";

axios.defaults.baseURL = 'https://rtfm-water-tracker-backend.onrender.com/api';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateAvatar = createAsyncThunk(
  'user-settings/avatar',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user-settings/edit', formData, {headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'user-settings/info',
  async (userData, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.patch('/user-settings/edit', userData);
      return data;
    } catch (error) {
      Notify.failure('Request error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const authInstance = axios.create({
//   baseURL: "https://rtfm-water-tracker-backend.onrender.com/api",
// });

// export const requestUserCurrent = async () => {
//   const { data } = await authInstance.get("user");
//   return data;
// };