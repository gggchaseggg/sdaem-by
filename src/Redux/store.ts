import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./activePageSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
