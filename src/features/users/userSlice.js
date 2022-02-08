import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './userActions';

const user = JSON.parse(localStorage.getItem('help-desk-app-user'));

const initialUser = {
  user: user ?? null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
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
      state.user = action.payload;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.user = null;
      state.message = action.payload;
    });
  },
});

export const { resetUserState } = userSlice.actions;

export const userReducer = userSlice.reducer;
