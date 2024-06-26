import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterThunk,
  getWaterTodayThunk,
  deleteWaterTodayThunk,
  editWaterTodayThunk,
} from './waterThunk';

const initialState = {
  items: [],
  todayData: {},
  listItems: [],
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
  state.items = {...state.items,...payload}
  //state.items.push(payload);
};
const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};
const handleFulfilledGetToday = (state, { payload }) => {
  state.isLoading = false;
  state.listItems = payload;
  state.todayData = payload;
};
const handleFulfilledEdit = (state, { payload }) => {
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

      .addCase(deleteWaterTodayThunk.pending, handlePaending)
      .addCase(deleteWaterTodayThunk.rejected, handleReject)
      .addCase(deleteWaterTodayThunk.fulfilled, handleFulfilledDel)

      .addCase(editWaterTodayThunk.pending, handlePaending)
      .addCase(editWaterTodayThunk.rejected, handleReject)
      .addCase(editWaterTodayThunk.fulfilled, handleFulfilledEdit);
  },
});

export const waterReducer = waterSlice.reducer;
