import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import '../src/css/App.css';
import Navbar from './components/Navbar';
import Autorization from './components/Autorization';
import Registration from './components/Registration';
import Projects from './components/Projects';
import Reports from './components/Reports';
import Contacts from './components/Contacts';
import Others from './components/Others';

function App() {
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <div className='header-1 image-flex'>
          <NavLink to='/'>
            <img src='https://hrlike.ru/wp-content/uploads/2021/03/unnamed-2.jpg'></img>
          </NavLink>
        </div>
        <div className='header-2'>
          <Navbar />
        </div>
        <div className='main-1'>
          <Routes>
            <Route path="/" element={<Autorization />}/>
            <Route path="/reg" element={<Registration />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/reports" element={<Reports />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/others" element={<Others />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
