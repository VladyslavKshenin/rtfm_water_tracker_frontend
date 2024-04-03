import { createAsyncThunk } from '@reduxjs/toolkit';
import { addWater } from './waterApi';

export const addWaterThunk = createAsyncThunk(
  'water/addWater',
  async (doseWater, { rejectWithValue }) => {
    try {
      return await addWater(doseWater);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
