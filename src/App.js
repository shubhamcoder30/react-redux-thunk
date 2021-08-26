import React,{useState} from "react";
import "./style.css";
import {useSelector,useDispatch} from "react-redux";
import {incrementByAmount} from "./actions/index";

export default function App() {
  const [incrementAmount, setIncrementAmount] = useState(1);
  const incrementValue = Number(incrementAmount) || 0;
  const mystate=useSelector((state)=>state.changeNumber);
  const dispatch =useDispatch()
  return (
    <div>
      <h1> {mystate} </h1>
     <button onClick={()=>dispatch({type:"INCREMENT"})}> increment </button>
     <button onClick={()=>dispatch({type:"DECREMENT"})} > decrement </button>
     <button onClick={()=>dispatch({type:"add"})} > add 5 </button>
  
     <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
       
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
    </div>
  );
}
