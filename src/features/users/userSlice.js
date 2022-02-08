import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './userActions';

const initialUser = {
  user: null,
  message: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const userSlice = createSlice({
  name: 'user',

  initialState: initialUser,

  reducers: {
    resetUserState: (state) => {
      state = initialUser;
    },

    checkAuthentication: (state) => {
      const user = JSON.parse(localStorage.getItem('help-desk-app-user'));
      if (user) {
        state.user = user;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.user = null;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.user = null;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });

    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = null;
      state.message = 'Logout successful';
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    });
  },
});

export const resetUserState = userSlice.actions.resetUserState;
export const checkAuthentication = userSlice.actions.checkAuthentication;

export const userReducer = userSlice.reducer;
