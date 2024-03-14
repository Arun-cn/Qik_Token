import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.Slice";
import tokenReducer from "../features/token/token.Slice";
import queueReducer from "../features/queue/queue.Slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tokens: tokenReducer,
    queues: queueReducer,
  },
});

export default store;
