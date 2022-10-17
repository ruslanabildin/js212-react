import React from 'react'
import './style.css'
import { Link } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

export default function Statistics() {
const isAuth = useSelector(state => state.students.currentUser.isAuth);
  return (
    <div>Статистика
      <Link to='/'  underline='hover'
    component={RouterLink}>На главную</Link>
    </div>
  )
}
