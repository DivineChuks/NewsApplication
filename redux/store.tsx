import { configureStore } from "@reduxjs/toolkit";
import latestNewsReducer from "./features/latestNewsSlice";
import businessNewsReducer from "./features/businesNewsSlice"

export const store = configureStore({
  reducer: {
    news: latestNewsReducer,
    business: businessNewsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
