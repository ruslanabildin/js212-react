import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/students';

export default function Main() {
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
    return <main>
        <Container>
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
        </Container>
    </main>
}
