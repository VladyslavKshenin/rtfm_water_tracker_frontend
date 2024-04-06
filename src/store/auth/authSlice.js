import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const authInitialState = {
  user: { email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const handleFulfilledRegister = (state) => {
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;