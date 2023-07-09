import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/screens/Home.js'
import DetailBlog from './screens/DetailBlog';
import UserList from './screens/UserList';
import ContactPage from './screens/ContactPage';
import CopyrightPage from './screens/CopyrightPage';
import AboutPage from './screens/AboutPage';
import AddNewBlogManager from './screens/AddNewBlogManager';
import FeedbackList from './screens/FeedbackList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/blogs/detail/:pid' element={<DetailBlog/>} ></Route>
        <Route path='userlist' element={<UserList/>} ></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="/admin/add-new-blog-manager" element={<AddNewBlogManager />} />
        <Route path="/admin/feedback" element={<FeedbackList />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
