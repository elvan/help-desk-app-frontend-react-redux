import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userService } from './userService';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, { rejectWithValue }) => {
    try {
      const data = await userService.register(user);
      if (data.isSuccess) {
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error?.message || error.toString();
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      const data = await userService.login(user);
      if (data.isSuccess) {
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message || error?.message || error.toString();
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  await userService.logout();
  toast.success('Logout successful');
});
