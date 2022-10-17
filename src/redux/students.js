import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userList: {
        'alexlee': {
            name: 'Alex Lee',
            group: 'JS1',
            password: '12345',
            schedule: [
                {
                    date: '2022-10-13',
                    title: 'React'
                },
                {
                    date: '2022-10-14',
                    title: 'React'
                }
            ],
            grades: [
                { date: '2022-10-09', lesson: 'React', value: 12 },
                { date: '2022-10-05', lesson: 'React', value: 10 }
            ],
            homeworks: [
                { date: '2022-10-09', done: false },
                { date: '2022-10-05', done: true, grade: 10 }
            ]
        },
    },
    currentUser: {
        isAuth: false,
        currentUserName: undefined
    }
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        signIn: (state, { payload }) => {
            const userList = state.userList;
            const { username, password } = payload;
            if (!userList[username]) {
                console.log('net');
                return;
            }
            if (userList[username].password === password) {
                console.log('da');
                state.currentUser.isAuth = true;
                state.currentUser.currentUserName = username;
            }
        }
    }
})

export const { signIn } = studentsSlice.actions;

export default studentsSlice.reducer;