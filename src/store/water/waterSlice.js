import { createSlice } from '@reduxjs/toolkit';
import { addWaterThunk, getWaterTodayThunk } from './waterThunk';

const initialState = {
  //   items: {
  //     dose: null,
  //     time: null,
  //   },
  items: [],
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
const handleFulfilledGetToday = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addWaterThunk.pending, handlePaending)
      .addCase(addWaterThunk.rejected, handleReject)
      .addCase(addWaterThunk.fulfilled, handleFulfilled)

      .addCase(getWaterTodayThunk.pending, handlePaending)
      .addCase(getWaterTodayThunk.rejected, handleReject)
      .addCase(getWaterTodayThunk.fulfilled, handleFulfilledGetToday)
  },
});

export const waterReducer = waterSlice.reducer;
