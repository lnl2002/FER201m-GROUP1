import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/screens/Home.js'
import DetailBlog from './screens/DetailBlog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/blogs/detail/:pid' element={<DetailBlog/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
