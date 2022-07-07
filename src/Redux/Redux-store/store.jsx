import { configureStore, combineReducers } from '@reduxjs/toolkit';
import activePageReducer from '../Redux-reducer/activePageReducer';

const rootReducer = combineReducers({
	activePage: activePageReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
