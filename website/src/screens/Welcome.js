import React from 'react';
import'./Welcome.css'
import logo from '../assets/logoTitre.png'
import { Link } from "react-router-dom";


const Welcome = () => {
  return ( 
  <div className="page-Welcome">
    <Link to="/Selection">
      <img src={logo} alt="logo" className="logo"/>
    </Link>
  </div>
  )
};

export default Welcome;