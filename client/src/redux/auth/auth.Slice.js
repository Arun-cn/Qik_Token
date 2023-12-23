import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    isAuthenticated : false,
    user : null
}

const authSlice = createSlice({
    name : auth,
    initialState,
    reducers : {
        login : (state , action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout :(state , action) =>{
            state.isAuthenticated = false;
            state.user = null;
        }

    }

});

export const {login , logout} = authSlice.actions;

export const authSelect = (state) =>{
    state.auth;
}

export default authSlice.reducer;