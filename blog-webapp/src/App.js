import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/screens/Home.js'
import DetailBlog from './screens/DetailBlog';
import UserList from './screens/UserList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/blogs/detail/:pid' element={<DetailBlog/>} ></Route>
        <Route path='userlist' element={<UserList/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
