import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Progress from './Components/Progress'
import Statistics from './Components/Statistics'
import HomeWork from './Components/HomeWork'
import MyGroup from './Components/MyGroup'
import Shedule from "./Components/Shedule";

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/student/schedule" element={<Shedule></Shedule>} />
      <Route path="/student/progress" element={<Progress></Progress>} />
      <Route path="/student/statistics" element={<Statistics></Statistics>} />
      <Route path="/student/home_work" element={<HomeWork></HomeWork>} />
      <Route path="/student/my_group" element={<MyGroup></MyGroup>} />
    </Routes>
  </>
    ;
}

export default App;
