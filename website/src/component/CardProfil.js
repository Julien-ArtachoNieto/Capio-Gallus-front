import React from 'react';
import './CardProfil.css'
import panierProfil from '../assets/target3white.png'
import photoTarget from '../assets/photoTEST.jpg'

const CardProfil = (props) => {
  return (  
        <div className='bande-profil-proie'>
          <img src={photoTarget} alt="panier" className="photo-target-list"/>
          <div className="ligne-bande-profil-proie-list">
            <div className='infos-proie-list'>NOM from API</div>
            <div className='infos-proie-list'>SEXE from API</div>
            <div className='infos-proie-list'>ARME from API</div>
            <div className='infos-proie-list'>LOCALISATION from API</div>
          </div>
          <img src={panierProfil} alt="panier" className="image-target-list" title="Clique-ici pour ajouter cette lacheté à ta liste de Chasse" />
        </div>

)
};

export default CardProfil;
