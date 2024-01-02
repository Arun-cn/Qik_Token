import {configStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.Slice"

const store = configStore({
    reducer : {
        auth : authReducer,
    }
})

export default store;