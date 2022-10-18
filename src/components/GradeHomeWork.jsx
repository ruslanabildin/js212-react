import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Grade from './Grade';

export default function GradeHomeWork() {
    const isAuthTeacher = useSelector(state => state.teachers.currentUser.isAuth);
    const studentsList = useSelector(state => state.students.userList);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthTeacher) {
            navigate('/');
        }
    }, [isAuthTeacher, navigate])
    return <>
        {Object.keys(studentsList).map((item, index) => {
            let student = studentsList[item];
            return <div key={index}>
                <h3>{student.name}</h3>
                {student.homeworks.map((hw, subindex) => {
                    return <div key={index + "_" + subindex}>
                        <p>{new Date(hw.date).toLocaleDateString()}</p>
                        {hw.done && <p>{hw.grade}</p>}
                        {!hw.done && <>
                            <Grade index={index} student={item} />
                        </>}
                    </div>
                })}
            </div>
        }

        )}

    </>

}
