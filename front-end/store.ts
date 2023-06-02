import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./src/slices/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
