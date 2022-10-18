import React from 'react'
import { Link } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

export default function HomeWork() {
  const isAuthName = useSelector(state => state.students.currentUser.currentUserName);
  let name = useSelector(state => state.students.userList[isAuthName].name);
  let homework = useSelector(state => state.students.userList[isAuthName].homeworks);
  return (
    <div> Уважаемый {name} HomeWork
      {homework.map((item, i) => {
        return <div key={i}>Дата :{item.date} Выполнена : <input type='checkbox' checked={item.done}></input> {item.grade && <span>Оценка : {item.grade}</span>} </div>
      })}
      <Link to='/' underline='hover'
        component={RouterLink}>На главную</Link>
    </div>
  )
}
