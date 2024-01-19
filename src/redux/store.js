import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";


export const store = configureStore({
    reducer: {
        user: movieReducer,
        movie: userReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
},
)