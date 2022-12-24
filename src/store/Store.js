import { configureStore } from "@reduxjs/toolkit";
import Auth from "../slice/Auth";
import ArticleReducer from "../slice/article";
export default configureStore({
  reducer: {
    auth: Auth,
    article: ArticleReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
