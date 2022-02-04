import React from 'react';
import panier from '../assets/target3.png'
import './Header.css'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="bloc-target">
      <h1 className="titre-proie">TROUVE TA PROIE</h1>
      <Link to="/Capiatore/LaTraque" className="link-panier"><img src={panier} alt="panier" className="image-target" /></Link>
    </div>

  )
}

export default Header;
