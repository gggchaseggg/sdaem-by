import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "../redux-reducers/activePageReducer";
import newsListReducer from "../redux-reducers/newsListreducer";
import contactListReducer from "../redux-reducers/contactListReducer";

export const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    newsList: newsListReducer,
    contactList: contactListReducer,
  },
});
