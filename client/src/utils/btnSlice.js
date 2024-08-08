import { createSlice } from "@reduxjs/toolkit";


const btnSlice = createSlice({
    name:"btnSlice",
    initialState:{
        isSignUp:false,
        isSignIn:true,
    },
    reducers:{
        toggleSignUp:(state,action)=>{
            state.isSignUp = !state.isSignUp;
        },
        toggleSignIn:(state,action)=>{
            state.isSignUp = !state.isSignUp;
        }
    }
})


export const {toggleSignIn,toggleSignUp} = btnSlice.actions;

export default btnSlice.reducer;