import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWaterMonth } from './mothApi.js';

export const getWaterMonthThunk = createAsyncThunk(
  'water/getWaterMonth',
  async (date, { rejectWithValue, getState }) => {
    try {
      return await getWaterMonth(getState().auth.token, date);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
