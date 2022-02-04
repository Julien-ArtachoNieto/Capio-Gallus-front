import React from 'react';
import panier from '../assets/target3.png'
import './HeaderTraque.css'

function HeaderTraque() {
  return (
    <div className="bloc-target-traque">
      
      <img src={panier} alt="panier" className="image-target-traque" />
      <h1 className="titre-proie-traque">LE TRAQUEUR</h1>
    </div>

  )
}

export default HeaderTraque;
