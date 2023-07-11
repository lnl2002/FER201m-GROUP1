import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/screens/Home.js'
import DetailBlog from './screens/DetailBlog';
import UserList from './screens/UserList';
import ContactPage from './screens/ContactPage';
import CopyrightPage from './screens/CopyrightPage';
import AboutPage from './screens/AboutPage';
import AddNewBlogManager from './screens/AddNewBlogManager';
import FeedbackList from './screens/FeedbackList';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/blogs/detail/:pid' element={<DetailBlog />} ></Route>
          <Route path='/admin/managers' element={<UserList />} ></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/copyright" element={<CopyrightPage />} />
          <Route path="/admin/add-new-blog-manager" element={<AddNewBlogManager />} />
          <Route path="/admin/feedback" element={<FeedbackList />} />
        </Routes>

      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
