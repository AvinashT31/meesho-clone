import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Global/Navbar';
import Homepage from './Component/Homepage';
import Register from './Component/Register';
import Login from './Component/Login';

function App() {
  return (
    <>
      {<Navbar />}
      <Routes>
        <Route exact path='/' element={<Homepage />}></Route >
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
      </Routes >
    </>
  );
}

export default App;
