import {configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.Slice"

const store = configureStore({
    reducer : {
        auth : authReducer,
    }
})

export default store;