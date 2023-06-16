import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/screens/Home.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
