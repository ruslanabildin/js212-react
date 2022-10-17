import React from 'react'
import './style.css'
import { Link } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

export default function Progress() {
  const isAuth = useSelector(state => state.students.currentUser.isAuth);
  const isAuthName = useSelector(state => state.students.currentUser.currentUserName);
  let grades = useSelector(state => state.students.userList[isAuthName].grades);
  console.log(grades);
  return (
    <div className='post'>
      <h2>Ваши оценки</h2>
      {grades.map((item,i)=>{
        return <div key={i}>Дата :{item.date} Тема урока :{item.lesson} Оценка : {item.value} </div>
      })}
      <Link to='/'  underline='hover'
                    component={RouterLink}>На главную</Link>
    </div>
  )
}
