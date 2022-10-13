import { Container, Link } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'


export default function Header() {
    const isAuth = useSelector(state => state.students.currentUser.isAuth);
    return <header>
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div className='logo'>
                <Link
                    to='/'
                    underline='hover'
                    component={RouterLink}>Home</Link>
            </div>
            {isAuth &&
                <nav>
                    <Link
                        to='/student/schedule'
                        underline='hover'
                        component={RouterLink}>
                        Расписание
                    </Link>
                </nav>
            }
        </Container>
    </header>
}
