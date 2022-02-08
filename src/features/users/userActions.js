import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from './userService';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, { rejectWithValue }) => {
    try {
      return await userService.register(user);
    } catch (error) {
      const message =
        error.response?.data?.message || error?.message || error.toString();
      return rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, { rejectWithValue }) => {
    console.log(user);
  }
);
