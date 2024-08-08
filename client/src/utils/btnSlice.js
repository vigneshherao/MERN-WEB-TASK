import { createSlice } from "@reduxjs/toolkit";

const btnSlice = createSlice({
  name: "btnSlice",
  initialState: {
    isSignedUser: false,
  },
  reducers: {
    signOutUser: (state) => {
      state.isSignedUser = false;
    },
    setSignedUser: (state, action) => {
      state.isSignedUser = action.payload;
    },
  },
});

export const {setSignedUser, signOutUser } = btnSlice.actions;

export default btnSlice.reducer;
