import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { login } from '../api/login';
import { logout } from '../api/logout';

interface AuthState {
  username: string | null;
}

const initialState: AuthState = {
  // Note: a real app would probably have more complex auth state,
  // but for this example we'll keep things simple
  username: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.username = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.username = null;
      });
  },
});

export default authSlice.reducer;

export const selectCurrentUsername = (state: RootState) => state.auth.username;
