import { Container, Link } from '@mui/material'
import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'



export default function Header() {
    const isAuth = useSelector(state => state.students.currentUser.isAuth);
    return <header>
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start'
        }}>
            <div className='logo'>
                <Link
                    to='/'
                    underline='hover'
                    component={RouterLink}>Home</Link>
            </div>
            {isAuth &&
                <nav>
                    <div className='hidden-block'>
                    <Link
                        to='/student/schedule'
                        underline='hover'
                        component={RouterLink}>
                        Расписание
                    </Link>
                    <Link
                        to='/student/progress'
                        underline='hover'
                        component={RouterLink}>
                        Успеваемость
                    </Link>
                    <Link
                        to='/student/statistics'
                        underline='hover'
                        component={RouterLink}>
                        Статистика
                    </Link>
                    <Link
                        to='/student/home_work'
                        underline='hover'
                        component={RouterLink}>
                        Домашние задания
                    </Link>
                    <Link
                        to='/student/my_group'
                        underline='hover'
                        component={RouterLink}>
                        Моя группа
                    </Link>
                    </div>
                </nav>
            }
        </Container>
    </header>
}
