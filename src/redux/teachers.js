import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    teacherList: {
        'annarich': {
            name: 'Anna Rich',
            groups: ['JS1', 'JS2'],
            password: '112233',
            schedule: [
                {
                    date: '2022-10-13',
                    title: 'React',
                    group: 'JS1'
                },
                {
                    date: '2022-10-14',
                    title: 'React',
                    group: 'JS2 '
                }
            ]
        }
    }
}

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        signIn: (state, { payload }) => {
            const teacherList = state.teacherList;
            const {username, password} = payload;
            if(!teacherList[username]){
                console.log('net');
                return
            }
            if(teacherList[username].password === password){
                console.log('da');
            }
        }
    }
})

export const {signIn} = teachersSlice.actions;

export default teachersSlice.reducer;