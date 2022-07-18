import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "../Reducers/activePageReducer";
import newsListReducer from "../Reducers/newsListreducer";
import contactListReducer from "../Reducers/contactListReducer";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    newsList: newsListReducer,
    contactList: contactListReducer,
  },
});
