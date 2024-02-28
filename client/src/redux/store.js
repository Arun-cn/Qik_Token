import {configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.Slice";
import tokenReducer from "../features/token/token.Slice";

const store = configureStore({
    reducer : {
        auth : authReducer,
        tokens : tokenReducer
    }
})

export default store;