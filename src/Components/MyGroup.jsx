import React from 'react'
import { Link } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

export default function MyGroup() {
const isAuth = useSelector(state => state.students.currentUser.isAuth);
const isAuthName = useSelector(state => state.students.currentUser.currentUserName);
let group = useSelector(state => state.students.userList[isAuthName].group);
let name = useSelector(state => state.students.userList[isAuthName].name);
  return (
    <div>Уважаемый {name} Ваша группа : {group}   <Link to='/'  underline='hover'
    component={RouterLink}>На главную</Link></div>
  
  )
}
