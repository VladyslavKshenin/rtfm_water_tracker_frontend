import { createSlice } from '@reduxjs/toolkit';
import { updateUserData } from './settingsOperations';

const initialState = {
  avatar: {
    avatarURL: '',
  },
  isAvatarLoading: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(updateUserData.pending, (state, action) => {
        state.isAvatarLoading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.avatar.avatarURL = action.payload.avatarURL;
        state.isAvatarLoading = false;
      })
      .addCase(updateUserData.rejected, (state) => {
        state.isAvatarLoading = false;
      })
  },
});

export const settingsReducer = settingsSlice.reducer;