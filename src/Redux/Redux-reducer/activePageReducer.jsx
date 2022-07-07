import { createAction, createReducer } from '@reduxjs/toolkit';
import { activePageInitialState } from '../initialState';

export const setActivePage = createAction('SET_ACTIVE_PAGE');

export default createReducer(activePageInitialState, {
	[setActivePage]: (state, { payload }) => {
		state.page = payload;
	},
});
