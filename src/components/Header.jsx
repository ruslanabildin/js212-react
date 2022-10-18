import { Button, Container, Link } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { setCookie } from 'react-use-cookie';



export default function Header() {
    const isAuth = useSelector(state => state.students.currentUser.isAuth);
    const navigate = useNavigate();
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
                <nav style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
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
                </nav>
            }
            <Button onClick={() => {
                setCookie('username', '', {
                    days: -1
                });
                setCookie('username_teacher', '', {
                    days: -1
                });
                navigate('/')
            }} variant="text">Выйти</Button>
        </Container>
    </header>
}
