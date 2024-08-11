import { createSlice } from "@reduxjs/toolkit";

const validationSlice = createSlice({
  name: "validationSlice",
  initialState: {
    emailError: "",
    passwordError:"",
    nameError:"",
  },
  reducers: {
    setEmailError: (state,action) => {
      state.emailError = action.payload;
    },
    setPasswordError: (state, action) => {
      state.passwordError = action.payload;
    },
    setnameError: (state, action) => {
        state.nameError = action.payload;
      },
  },
});

export const {setEmailError, setPasswordError,setnameError } = validationSlice.actions;

export default validationSlice.reducer;
