import { Button, Container, Stack, TextField, List, ListItem, Link } from '@mui/material'
import React, { useEffect } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/students';
import { signInTeacher } from '../redux/teachers';
import { getCookie, setCookie } from 'react-use-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications'

export default function Main() {
    const isAuth = useSelector(state => state.students.currentUser.isAuth);
    const isAuthTeacher = useSelector(state => state.teachers.currentUser.isAuth);
    const studentsList = useSelector(state => state.students.userList);
    const teacherList = useSelector(state => state.teachers.userList);

    const currentUserName = useSelector(
        state => state.students.currentUser.currentUserName);
    const currentUserNameTeacher = useSelector(
        state => state.teachers.currentUser.currentUserName);
    const dispatch = useDispatch();
    const authUser = (event) => {
        event.preventDefault();
        let form = event.target;
        let usernameInput = form.elements.login;
        let passwordInput = form.elements.password;
        let username = usernameInput.value;
        let password = passwordInput.value;

        if (studentsList[username]) {
            dispatch(signIn({ username, password }));
        } else
            if (teacherList[username]) {
                dispatch(signInTeacher({ username, password }))
            } else {
                NotificationManager.error('Ошибка', 'Пользователь не найден', 5000)
            }

    }
    const navigate = useNavigate();
    useEffect(() => {
        let cookie = getCookie('username');
        if (isAuth && cookie === '') {
            setCookie('username', currentUserName, {
                days: 1
            })
        }

        let cookieTeacher = getCookie('username_teacher');
        if (isAuthTeacher) {
            navigate('teacher/homework')
        }
        if (isAuthTeacher && cookieTeacher === '') {
            setCookie('username_teacher', currentUserNameTeacher, {
                days: 1
            })
        }
    }, [isAuth, isAuthTeacher, navigate, currentUserName, currentUserNameTeacher])
    return <main>
        <Container>
            {!(isAuth || isAuthTeacher) &&
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
            {isAuthTeacher && <List sx={{ width: 450, mx: 'auto', mt: '20px' }}>
                <ListItem>
                    <Link
                        to='/student/schedule'
                        underline='hover'
                        component={RouterLink}>
                        Расписание Teacer
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
        <NotificationContainer />
    </main>
}
