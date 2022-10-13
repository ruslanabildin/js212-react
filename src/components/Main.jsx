import React from 'react'
import { Button, Container, Stack, TextField} from '@mui/material'

export default function Main() {
  return (
    <Container>
        <Stack 
            style={{
                width: 450,
                mx: 'auto'
            }}>
            <TextField/>
            <TextField/>
            <Button variant='contained'>войти</Button>
        </Stack>
    </Container>
  )
}
