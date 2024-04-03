import { createSlice } from '@reduxjs/toolkit';
import { addWaterThunk } from './waterThunk';

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

export const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addWaterThunk.pending, handlePaending)
      .addCase(addWaterThunk.rejected, handleReject)
      .addCase(addWaterThunk.fulfilled, handleFulfilled);
  },
});

export const waterReducer = waterSlice.reducer;
