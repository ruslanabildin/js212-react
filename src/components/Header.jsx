import {  Container} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return <header>
    <Container sx={{
        display: 'flex',
        justyfiContent: 'space-between'
    }}>
        <div className='logo'>
            <Link to={'/'}>Home</Link>
        </div>
    </Container>
  </header>
}
