
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*"  element={<Home />}/>
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />}  />
      <Route path="/contact" element={<Contact />}  />
    


    </Routes>
    </BrowserRouter>
  );
};

export default App;