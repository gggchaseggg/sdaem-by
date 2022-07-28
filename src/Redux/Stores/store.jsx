import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "../Reducers/activePageReducer";
import newsListReducer from "../Reducers/newsListReducer";
import contactListReducer from "../Reducers/contactListReducer";
import userReducer from "../Reducers/userReducer";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    newsList: newsListReducer,
    contactList: contactListReducer,
    user: userReducer,
  },
});
