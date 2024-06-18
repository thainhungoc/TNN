import React, { useReducer, useState } from 'react'
import Item from'./Item'
const reducer = (state=0, action:string)=>{
    // reducer la noi xuw ly cacs action va cap nhat state
    //action la hanh vi dc gui len thong qua dispatch
    // state la trang thai cua reducer
    switch(action){
        case"Tang 1":
            return state+1;
        case"Tang 2":
            return state+2;
        case"Tang 3":
            return state+3;
        default:
            return state;
    }
}
const Home = ()=> {
    // const[count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer,0,undefined);
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch("Tang 1")}>Tang count len 1</button>
        <button onClick={() => dispatch("Tang 2")}>Tang count len 2</button>
        <button onClick={() => dispatch("Tang 3")}>Tang count len 3</button>
      </div>
    )
  }

  export default Home