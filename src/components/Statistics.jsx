import React from 'react'
import './style.css'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Statistics() {
  return (
    <div>Статистика
      <Link to='/' underline='hover'
        component={RouterLink}>На главную</Link>
    </div>
  )
}
