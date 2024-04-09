import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWaterMonth } from './mothApi.js';

export const getWaterMonthThunk = createAsyncThunk(
  'water/getWaterMonth',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await getWaterMonth(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
