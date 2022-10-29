import { createSlice } from "@reduxjs/toolkit";

const initstate={
    count :10
}

const counterSlice=createSlice({
    name:'counter',
    initialState:initstate,
    reducers:{
        increment: function(state,action){
            state.count=state.count+1;
        },
        decrement: function(state,action){
            state.count=state.count-1;
        }
    }
});

export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;