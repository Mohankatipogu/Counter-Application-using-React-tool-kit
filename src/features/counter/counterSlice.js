import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0,
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
       inccount:(state,action)=>{
           state.count++
       },
        deccount:(state,action)=>{
           state.count--;
        },
        rescount:(state,action)=>{
            state.count=0;
        }
    }
})


export const{inccount,deccount,rescount}=counterSlice.actions;
const Counterreducer=counterSlice.reducer;
export default Counterreducer; 