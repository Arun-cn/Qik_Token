import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userDAta = JSON.parse(localStorage.getItem("user"));
const initialState = {
  isAuthenticated: !!userDAta,
  user: userDAta || null,
};

export const login = createAsyncThunk("/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("/logout", async () => {
  return authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.data;
      })
      .addCase(login.pending, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
