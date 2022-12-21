import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoadingUser: false,
  loggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    // REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserFailure: (state) => {},
  },
});

export const { loginUserStart, registerUserStart } = authSlice.actions;
export default authSlice.reducer;
