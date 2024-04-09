import { createSlice } from '@reduxjs/toolkit';
import { getWaterMonthThunk } from './monthThunk';

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
export const handleApdate = (state, { payload }) => {
  state.todayData = payload;
};

export const monthSlice = createSlice({
  name: 'month',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getWaterMonthThunk.pending, handlePaending)
      .addCase(getWaterMonthThunk.rejected, handleReject)
      .addCase(getWaterMonthThunk.fulfilled, (state, { payload }) => {
        state.todayData = payload;
      });
  },
});
export const monthReducer = monthSlice.reducer;
