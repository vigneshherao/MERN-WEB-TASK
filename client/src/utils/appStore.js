
import { configureStore } from "@reduxjs/toolkit";
import btnReducer from "./btnSlice";
import validationReducer from "./validationSlice";

const appStore = configureStore({
    reducer:{
        btns:btnReducer,
        validation:validationReducer
    }
})


export default appStore;