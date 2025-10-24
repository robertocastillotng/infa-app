import { configureStore } from "@reduxjs/toolkit";
import { rootreducer } from "./rootReducer";
const store = configureStore({
    reducer: rootreducer,
    devTools: process.env.NODE_ENV !== 'production'
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;