import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;