import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Global/Navbar';
import Homepage from './Component/Homepage';
import Register from './Component/Register';

function App() {
  return (
    <>
      {<Navbar />}
      <Routes>
        {/* <Route exact path='/' element={</>}></Route > */}
          <Route exact path='/register' element={<Register />}></Route>
      </Routes>  
    </>
  );
}

export default App;
