import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tokens: [],
    error: null
}

const tokenSlice = createSlice({
    name: "tokens",
    initialState,
    reducers: {
        fetchTokensSuccess(state,action) {
            state.tokens = action.payload;
            state.error = null;
        },
        fetchTokensFailure(state,action){
            state.tokens = [];
            state.error = action.payload
        },
        fetchMoreTokenSuccess(state,action){
            state.tokens.push(...action.payload);
            state.error = null;

        }
    }

});

export const {fetchMoreTokenSuccess, fetchTokensFailure, fetchTokensSuccess} = tokenSlice.actions;
export default tokenSlice.reducer