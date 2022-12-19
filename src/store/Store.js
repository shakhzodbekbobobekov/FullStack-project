import { configureStore } from "@reduxjs/toolkit";
import Auth from "../slice/Auth";
export default configureStore({
  reducer: {
    auth: Auth,
  },
  devTools: process.env.NODE_ENV !== "production",
});
