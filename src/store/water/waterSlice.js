import { createSlice } from '@reduxjs/toolkit';
import { addWaterThunk, getWaterTodayThunk } from './waterThunk';

const initialState = {
  items: [],
  todayData: null,
  isLoading: false,
  error: null,
};

const handlePaending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = [payload, ...state.items];
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getWaterTodayThunk.pending, handlePaending)
      .addCase(getWaterTodayThunk.rejected, handleReject)
      .addCase(getWaterTodayThunk.fulfilled, (state, { payload }) => {
        state.todayData = payload;
      })
      .addCase(addWaterThunk.pending, handlePaending)
      .addCase(addWaterThunk.rejected, handleReject)
      .addCase(addWaterThunk.fulfilled, handleFulfilled);
  },
});

export const waterReducer = waterSlice.reducer;
