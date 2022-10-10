import React, { useState } from "react";
import './App.css';
// import FirstComp from "./components/firstComp";
// import SecondComp from "./components/secondComp";
import Counter from "./components/Counter";
import MyComp from "./components/MyComp";
import UserList from "./components/UserList";



// const name= 'Osvald'
// function ifHi(){
//   if(Math.random() <0.5 ) return <h1>Hiii</h1>
//   else return <h1>Byyyeee </h1>
// }
// function App() {
//   // const random=Math.random ()<0.5;
//   // if(Math.random()<0.5)
//   // let counter=0;
//   // setInterval(()=>{
//   //   counter++;
//   //   console.log(counter);
//   // }, 1500)

//   return <> 
//   {/* {counter} */}
//   {/* {random && <h1> Hiii</h1>}
//   {random? <h1>Hiii</h1> :<h1>Byyyeeee</h1>}
//   {ifHi()}
//     <div className={name}>
//       style={{backgroundColor:'orange'}}
//     {name.toLocaleUpperCase()}
//     </div> */}

//  {/* {array.map((item,index)=> <div key={index}>
//   Имя:{item.name} Оценка:{item.grade}
//    </div>
//     )} */}
    
  
//     </>
// }
// const array= [{name:'Andrew', grade:10},
//               {name:'Petr', grade:5},
//               {name:'Islang', grade:7}
//             ]


// class SecondComp extends React.Component {
//   render() {
//     return <>
//       <h2>Second Comp</h2>
//       <p>{this.props.date.toLocaleDateString()} </p>
//     </>
//   }
// }
// const Arr = [{id:1,status:'busy',name:'Alex',statusLine:false},
//   {id:2,name:'Nick',status:'ready to talk',statusLine:true},
//   {id:3,name:'Oxy',status:'in search',statusLine:false}]

// class App extends React.Component{
//   render(){
//     return<>
//     {
//       Arr.map(item=><FirstComp key={item.id} 
//                                date={item}></FirstComp>)
//     }
//     <SecondComp date= {new Date()} />
//     </>
//   }
// }

function App(){
  const[color,setColor]=useState('black');
  const changeColor=(newColor)=>{
    setColor(newColor);
  }
  return(
    <div className="App"> 
<Counter />
<UserList />
<div 
style={{
  widht:'50px',
  height:'50px',
  border:'1px solid black',
  backgroundColor:color
}}>

</div>
<MyComp handleColor={changeColor}/>
 </div>
  );
}
export default App;
