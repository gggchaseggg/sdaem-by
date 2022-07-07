import { createAction, createReducer } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

export const setActivePage = createAction('SET_ACTIVE_PAGE');

export default createReducer(initialState, {
	[setActivePage]: (state, { payload }) => {
		state.activePage = payload;
	},
});
