import React from 'react';
import { Routes, Route } from "react-router-dom";
import Welcome from './screens/Welcome';
// import Home from './screens/Home';
import Selection from './screens/Selection';
import Capiatore from './screens/Capiatore';
// import Header from './component/Header';
// import Footer from './component/Footer';
import LaTraque from './screens/LaTraque'
import Poucavius from './screens/Poucavius';
import './App.css'
import Profil from './screens/Profil';

const App = () => {
  return (
  <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Poucavius" element={<Poucavius/>} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Capiatore" element={<Capiatore />} />
        <Route path="/Capiatore/LaTraque" element={<LaTraque />} />
        <Route path="/Capiatore/Profil" element={<Profil />} />

      </Routes>
  </div>
  )};

export default App;

