import { createAsyncThunk } from '@reduxjs/toolkit';
import { addWater } from './waterApi';

export const addWaterThunk = createAsyncThunk(
  'water/addWater',
  async (body, { rejectWithValue, getState }) => {
    try {
      return await addWater(body, getState().auth.token);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
