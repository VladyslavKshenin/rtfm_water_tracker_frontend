import { createAsyncThunk } from '@reduxjs/toolkit';
import { addWater, getWaterToday, removeWater } from 'components/api/water';
import { Notify } from 'notiflix';


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

export const deleteWaterThunk = createAsyncThunk(
  'water/deleteWater', async (id, { rejectWithValue, getState }) => {
    try {
      const data = await removeWater(id, getState().auth.token)
      console.log('data remove', data)
      return data
    } catch (error) {
      Notify.warning('Oops. Something went wrong. Try again.')
      return rejectWithValue(error)
    }
  }
)