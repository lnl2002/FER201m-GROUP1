import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/screens/Home.js'
import ContactPage from './screens/ContactPage';
import AboutPage from './screens/AboutPage';
import CopyrightPage from './screens/CopyrightPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/copyright" element={<CopyrightPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
