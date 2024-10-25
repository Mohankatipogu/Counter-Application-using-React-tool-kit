import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counterreducer from "./counterSlice";
import { inccount } from "./counterSlice";
import { deccount } from "./counterSlice";
import { rescount } from "./counterSlice";
function Counter(){
    const {count}=useSelector(state=>state.counter)
    console.log(count)
    const  dispatch=useDispatch();
    return(
        <div className="container" class='counter'>
            <h1 className="m-2 p-3 ">Counter:{count}</h1>
            <button id='incb' className="m-2 rounded" onClick={()=>{dispatch(inccount())}} >Increment</button>
            <button id='incb' className="m-2 rounded" onClick={()=>{dispatch(deccount())}}>Decrement</button>
            <button id='incb' className="m-2 rounded" onClick={()=>{dispatch(rescount())}}>Reset</button>
        </div>
    )
}
export default Counter;