import React from 'react';
import { Routes, Route } from "react-router-dom";
import Welcome from './screens/Welcome';
// import Home from './screens/Poucavius';
import Selection from './screens/Selection';
import Contact from './screens/Contact';
import Header from './component/Header';
import Footer from './component/Footer';

import './App.css'

const App = () => {
  return (
  <div className="App">
    <Header />
<h1>Espac pour le header</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
  </div>
  )};

export default App;

