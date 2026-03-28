import {combineReducers, configureStore} from "@reduxjs/toolkit"
import postReducer from "./slices/postSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
users: userReducer,
posts: postReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;