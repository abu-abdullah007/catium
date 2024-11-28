import { createSlice } from "@reduxjs/toolkit";


const PicoSlice = createSlice({
    name:'PicoSlice',
    initialState:{
        viewMessage:false
    },
    reducers:{
        isVisible:(state,action)=>{
            state.viewMessage = action.payload
        },
    }
})

export const {isVisible} = PicoSlice.actions;
export default PicoSlice.reducer; 