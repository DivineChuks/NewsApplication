import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/latestNewsSlice";
import businessNewsReducer from "./features/businesNewsSlice"

export const store = configureStore({
  reducer: {
    news: newsReducer,
    business: businessNewsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
