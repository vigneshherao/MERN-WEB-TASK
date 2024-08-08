
import { configureStore } from "@reduxjs/toolkit";
import btnReducer from "./btnSlice";

const appStore = configureStore({
    reducer:{
        btns:btnReducer
    }
})


export default appStore;