import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, { rejectWithValue }) => {
    console.log(user);
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, { rejectWithValue }) => {
    console.log(user);
  }
);
