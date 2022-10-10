import React from "react";

// export default class Counter extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             counter:0,
//             appName:'Counter+'
//         }
//         this.counterUp=this.counterUp.bind(this);
//     }
// counterUp(event){
//     console.log(this)
//     this.setState({
// counter:this.state.counter+1
//     })
// }

//     render(){
//         return<>
//         <h2>{this.state.appName} </h2>
//         <button onClick={this.counterUp}>+</button>
//         <p>{this.state.counter} </p>
//         </>
//     }
// }
import {useState} from 'react';

export default function CounterComp(){
    let [counter,setCounter]=useState(0);
    const counterUp=()=>{
        setCounter(counter + 1)}
    return<>
           <p> Функциональный компонент </p>
           {/* //так: */}
            <button onClick={()=> setCounter(counter+1)}>+</button>
            <p>{counter} </p>
            
            {/* //или так: */}
            <button onClick={counterUp}>+</button>   
        </>
}