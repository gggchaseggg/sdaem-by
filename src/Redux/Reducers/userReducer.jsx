import { createAction, createReducer } from "@reduxjs/toolkit";
import { userInitialState } from "../initialState";

export const setUser = createAction("SET_USER");

export default createReducer(userInitialState, {
  [setUser]: (state, { payload }) => {
    state.isLogin = true;
    state.info = payload;
  },
});
