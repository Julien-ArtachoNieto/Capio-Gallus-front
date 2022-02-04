import React from 'react';
import iconViking from '../assets/vikingicon.png'
import './HeaderCardProfil.css'

function HeaderCardProfil() {
  return (
    <div className="bloc-target-card">
      
      <img src={iconViking} alt="panier" className="image-target-card" />
      <h1 className="titre-proie-card">LA PROIE</h1>
    </div>

  )
}

export default HeaderCardProfil;
