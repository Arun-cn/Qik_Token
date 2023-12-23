import {configStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.Slice"

const store = configStore({
    reducer : {
        auth : authReducer,
    }
})

export default store;