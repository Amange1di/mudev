import React from 'react';
import { Routes, Route, } from "react-router-dom"
import './App.css';
import Home from './pages/home/Home';

import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Dev from './components/dev/Dev';
import Header from './components/header/Header';
import About from './pages/about/About';



const App = () => {
  return (
    <div  >
      <Dev/>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
       
      </Routes>
     
    </div>
  );
};

export default App;
