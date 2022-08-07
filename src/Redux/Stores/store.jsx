import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "../Reducers/activePageReducer";
import userReducer from "../Reducers/userReducer";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    user: userReducer,
  },
});
