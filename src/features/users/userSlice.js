import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'user',

  initialState: initialUser,

  reducers: {},

  extraReducers: (builder) => {},
});

export const userReducer = userSlice.reducer;
