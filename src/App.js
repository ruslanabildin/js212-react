import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </>
    ;
}

export default App;
