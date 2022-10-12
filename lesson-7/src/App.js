import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/Index';
import Contacts from './Components/Contacts';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <h1>React-routing</h1>
      <Header />
      <div>
        {/* <Home/>
        <Gallery/>
        <Contacts/>
        <About/> */}


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
};

export default App; 