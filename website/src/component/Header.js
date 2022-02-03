import React from 'react';
import panier from '../assets/target3.png'
import './Header.css'

function Header() {
  return (
    <div className="bloc-target">
      <h1 className="titre-proie">TROUVE TA PROIE</h1>
      <img src={panier} alt="panier" className="image-target" />
    </div>

  )
}

export default Header;
