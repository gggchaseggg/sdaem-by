import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userTypes = {
  isLogin: boolean;
  info: {
    name: string;
    email: string;
  };
};

const initialState: userTypes = {
  isLogin: false,
  info: {
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        name: string;
        email: string;
      }>
    ) {
      state.isLogin = true;
      state.info = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
