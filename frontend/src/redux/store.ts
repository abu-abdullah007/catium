import { configureStore } from "@reduxjs/toolkit";
import PicoSliceReducer from './slices/PicoSlice'

export const store = configureStore({
    reducer:{
        PicoSliceReducer
    }
})