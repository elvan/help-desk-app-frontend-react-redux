import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './userActions';

const user = JSON.parse(localStorage.getItem('help-desk-app-user'));

const initialUser = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  user: user ?? null,
};

export const userSlice = createSlice({
  name: 'user',

  initialState: initialUser,

  reducers: {
    resetUserState: (state) => initialUser,
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.user = null;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.user = null;
    });

    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = null;
    });
  },
});

export const resetUserState = userSlice.actions.resetUserState;

export const userReducer = userSlice.reducer;
