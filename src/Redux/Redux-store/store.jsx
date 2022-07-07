import { configureStore } from '@reduxjs/toolkit';
import activePageReducer from '../Redux-reducer/activePageReducer';
import newsListreducer from '../Redux-reducer/newsListreducer';

export const store = configureStore({
	reducer: {
		activePage: activePageReducer,
		newsList: newsListreducer,
	},
});
