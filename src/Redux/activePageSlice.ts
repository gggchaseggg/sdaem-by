import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type activePageTypes = {
  page: number;
};

const initialState: activePageTypes = {
  page: -1,
};

const activePageSlice = createSlice({
  name: "activePage",
  initialState,
  reducers: {
    setActivePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setActivePage } = activePageSlice.actions;

export default activePageSlice.reducer;
