import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Global/Navbar';

function App() {
  return (
    <>
    {<Navbar/>}
    <Routes>
      {/* <Route exact path='' element={</>}></Route> */}
    </Routes>

    </>
  );
}

export default App;
