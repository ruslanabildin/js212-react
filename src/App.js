  import { useEffect, useState } from 'react';
import './App.css';
import FirstComp from './Components/FirstComp';
import SecondComp from './Components/SecondComp';
import {useDispatch,useSelector } from 'react-redux'
import { fetchPosts } from './Store'

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.posts.posts)
  let [arr,getArr] =  useState([])
  let [page,getpage] = useState(10)
  let [page2,getpage2] = useState(0)
  let numbers = [1,2,3,4,5,6,7,8,9,10]
  let fetchPost = (page,page2)=>{
      dispatch(fetchPosts())
      let newArr = []
      if(posts.length!==0){
        for(let i=page2;i<page;i++){
          newArr.push(posts[i])
          getArr(newArr)
      }
     }
  }
  let getPage = (item)=>{
    let nePage = 10*item
    let firstNum = nePage - 10
    getpage(nePage)
    getpage2(firstNum)
    fetchPost(page,page2)
  }
  useEffect(()=>{
    fetchPost(page,page2)
  },[page])
  console.log(posts);
  return (
    <div className="App">
      <h1>Список постов</h1>
      <button onClick={()=>{ getPage(1)}}>Загрузить</button>
      {arr.map((item,i)=>{
           return <FirstComp key={i} post={item}></FirstComp>
      })}
      {numbers.map((item)=><button key={item} onClick={()=>{getPage(item)}} style={{backgroundColor:(item===page/10)?'green':'white'}}>{item}</button>)}
     <SecondComp></SecondComp>
    </div>
  );
}

export default App;
