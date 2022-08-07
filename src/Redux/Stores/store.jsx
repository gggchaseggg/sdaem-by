import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "../Reducers/activePageReducer";
import newsListReducer from "../Reducers/newsListReducer";
import userReducer from "../Reducers/userReducer";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    newsList: newsListReducer,
    user: userReducer,
  },
});
