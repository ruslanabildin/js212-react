import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Progress from "./components/Progress";
import Statistics from "./components/Statistics";
import HomeWork from "./components/HomeWork";
import MyGroup from "./components/MyGroup";
import Schedule from "./components/Shedule";
import GradeHomeWork from "./components/GradeHomeWork";
import { useEffect } from "react";
import { getCookie } from "react-use-cookie";
import { useDispatch } from "react-redux";
import { cookieAuth } from "./redux/students";
import { cookieAuthTeacher } from "./redux/teachers";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let userName = getCookie('username');
    if (userName !== '') {
      dispatch(cookieAuth(userName));
      return;
    }
    let teacherName = getCookie('username_teacher');
    if (teacherName) {
      dispatch(cookieAuthTeacher(teacherName));
    }
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/student/schedule" element={<Schedule></Schedule>} />
        <Route path="/student/progress" element={<Progress></Progress>} />
        <Route path="/student/statistics" element={<Statistics></Statistics>} />
        <Route path="/student/home_work" element={<HomeWork></HomeWork>} />
        <Route path="/student/my_group" element={<MyGroup></MyGroup>} />
        <Route path="/teacher">
          <Route path="homework" element={<GradeHomeWork />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
