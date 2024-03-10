import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    queues: [],
    error: null
}

const queueSlice = createSlice({
    name: "queues",
    initialState,
    reducers: {
        fetchQueuesSuccess(state,action) {
            state.queues = action.payload;
            state.error = null;
        },
        fetchQueuesFailure(state,action){
            state.queues = [];
            state.error = action.payload
        },
        fetchMoreQueuesSuccess(state,action){
            state.queues.push(...action.payload);
            state.error = null;

        }
    }

});

export const {fetchMoreQueuesSuccess, fetchQueuesFailure, fetchQueuesSuccess} = queueSlice.actions;
export default queueSlice.reducer