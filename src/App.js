import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
        </Routes>
    </div>
  );
}

export default App;
