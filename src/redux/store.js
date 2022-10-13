import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './students';

export const store = configureStore({
    reducer: {
        students: studentsReducer
    }
})