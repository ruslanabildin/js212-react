import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setGrade } from '../redux/students';

export default function Grade({ index, student }) {
    console.log(index, student);
    const dispatch = useDispatch();
    const input = useRef(null);
    const handler = () => {
        dispatch(setGrade({
            studentName: student,
            homeworkIndex: index,
            grade: input.current.value
        }))
    }
    return <>
        <input ref={input} type="number" min="1" max="12" />
        <button onClick={handler}>Оценить</button>
    </>
}
