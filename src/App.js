  import { useEffect, useState } from 'react';
import './App.css';
import FirstComp from './Components/FirstComp';
import SecondComp from './Components/SecondComp';
import {useDispatch,useSelector } from 'react-redux'
import { fetchPosts } from './Store'

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.posts.posts)
  let [page,getpage] = useState([0,10])
  let numbers = [1,2,3,4,5,6,7,8,9,10]
  let getPage = (item)=>{
    let nePage = 10*item
    let firstNum = nePage - 10
    let arr = []
    arr.push(firstNum)
    arr.push(nePage)
    getpage(arr)
    dispatch(fetchPosts(page))
  }
  useEffect(()=>{
    dispatch(fetchPosts(page))
  },[page])
  return (
    <div className="App">
      <h1>Список постов</h1>
      {posts.map((item,i)=>{
           return <FirstComp key={i} post={item}></FirstComp>
      })}
      {numbers.map((item)=><button key={item} onClick={()=>{getPage(item)}} style={{backgroundColor:(item===page[1]/10)?'green':'white'}}>{item}</button>)}
     <SecondComp></SecondComp>
    </div>
  );
}

export default App;
