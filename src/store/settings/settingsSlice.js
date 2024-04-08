import { createSlice } from '@reduxjs/toolkit';
import { updateAvatar, updateUserData } from './settingsOperations';

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    avatarURL: null,
    gender: null,
    dailyNorma: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isAvatarLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(updateAvatar.pending, (state, action) => {
        state.isAvatarLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.avatarURL = action.payload.avatarURL;
        state.isAvatarLoading = false;
      })
      .addCase(updateAvatar.rejected, (state) => {
        state.isAvatarLoading = false;
      })

      .addCase(updateUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUserData.rejected, handleRejected)
  },
});

export const settingsReducer = settingsSlice.reducer;