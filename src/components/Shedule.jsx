import React from 'react'
import { Link } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

export default function Shedule() {
const isAuthName = useSelector(state => state.students.currentUser.currentUserName);
let name = useSelector(state => state.students.userList[isAuthName].name);
let schedule = useSelector(state => state.students.userList[isAuthName].schedule);
  return (
    <div>Shedule
           {schedule.map((item,i)=>{
        return <div key={i}>Дата :{item.date} Тема урока :{item.title}</div>
      })}
      <Link to='/'  underline='hover'
                    component={RouterLink}>На главную</Link>
    </div>
  )
}
