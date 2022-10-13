import { createSlice } from "@reduxjs/toolkit"

const initialState = {
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
    _currentUser: {
        isAuth: false,
        currentUserName: undefined,
    }
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState
})

export default studentsSlice.reducer;