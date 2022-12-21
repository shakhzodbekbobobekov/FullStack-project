import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // !LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    loginUserFailure: (state) => {
      state.isLoading = false;
      state.error = "error";
    },
    // !REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
  },
  registerUserFailure: (state) => {
    state.isLoading = false;
    state.error = "error";
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  registerUserStart,
  registerUserFailure,
  registerUserSuccess,
} = authSlice.actions;
export default authSlice.reducer;
