import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './students';
import teachersReducer from './teachers'

export const store = configureStore({
    reducer: {
        students: studentsReducer,
        teachers: teachersReducer
    }
})