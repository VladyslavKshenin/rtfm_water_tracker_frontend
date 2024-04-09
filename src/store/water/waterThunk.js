import { createAsyncThunk } from '@reduxjs/toolkit';
import { addWater, getWaterToday } from './waterApi';

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

export const getWaterTodayThunk = createAsyncThunk(
  'water/getWaterToday',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await getWaterToday(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
