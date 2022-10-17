import { Button, Container, Stack, TextField, List, ListItem, Link } from '@mui/material'
import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/students';
import { getCookie, setCookie } from 'react-use-cookie';

export default function Main() {
    const isAuth = useSelector(state => state.students.currentUser.isAuth);
    const currentUserName = useSelector(
        state => state.students.currentUser.currentUserName);
    const dispatch = useDispatch();
    const authUser = (event) => {
        event.preventDefault();
        let form = event.target;
        let usernameInput = form.elements.login;
        let passwordInput = form.elements.password;
        let username = usernameInput.value;
        let password = passwordInput.value;

        dispatch(signIn({ username, password }));
    }

    useEffect(() => {
        let cookie = getCookie('username');
        if (isAuth && cookie === '') {
            setCookie('username', currentUserName, {
                days: 1
            })
        }
    }, [isAuth])
    return <main>
        <Container>
            {!isAuth &&
                <form onSubmit={authUser}>
                    <Stack sx={{
                        width: 450,
                        mx: 'auto'
                    }}
                        gap={2}
                    >
                        <TextField label='Логин' name='login' />
                        <TextField label='Пароль' type='password' name='password' />
                        <Button type='submit' variant='contained'>Войти</Button>
                    </Stack>
                </form>
            }
            {isAuth && <List sx={{ width: 450, mx: 'auto', mt: '20px' }}>
                <ListItem>
                    <Link
                        to='/student/schedule'
                        underline='hover'
                        component={RouterLink}>
                        Расписание
                    </Link>
                </ListItem>
                <ListItem><Link
                    to='/student/progress'
                    underline='hover'
                    component={RouterLink}>
                    Успеваемость
                </Link>
                </ListItem>
                <ListItem><Link
                    to='/student/statistics'
                    underline='hover'
                    component={RouterLink}>
                    Статистика
                </Link>
                </ListItem>
                <ListItem><Link
                    to='/student/home_work'
                    underline='hover'
                    component={RouterLink}>
                    Домашние задания
                </Link>
                </ListItem>
                <ListItem><Link
                    to='/student/my_group'
                    underline='hover'
                    component={RouterLink}>
                    Моя группа
                </Link>
                </ListItem>
            </List>}
        </Container>
    </main>
}
