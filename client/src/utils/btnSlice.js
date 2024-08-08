import { createSlice } from "@reduxjs/toolkit";


const btnSlice = createSlice({
    name:"btnSlice",
    initialState:{
        isSignUp:false,
    },
    reducers:{
        toggleSignIn:(state,action)=>{
            state.isSignUp = !state.isSignUp;
        }
    }
})


export const {toggleSignIn} = btnSlice.actions;

export default btnSlice.reducer;