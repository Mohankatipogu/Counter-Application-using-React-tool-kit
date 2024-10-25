import { configureStore } from "@reduxjs/toolkit";
import Counterreducer from "../features/counter/counterSlice";

 export const store= configureStore({
    reducer:{
      counter:Counterreducer,
    },
 })