import React from 'react';
import './CardProfil.css'
import panierProfil from '../assets/target3white.png'

const CardProfil = (props) => {
  const {data}=props
  return (  
        <div className='bande-profil-proie'>
          <img src={data.imgurl} alt="panier" className="photo-target-list"/>
          <div className="ligne-bande-profil-proie-list">
            <div className='infos-proie-list'>Nom : <span className='import-api-proie-list'>{data.name}</span></div>
            <div className='infos-proie-list'>Genre : <span className='import-api-proie-list'>{data.sex}</span></div>
            <div className='infos-proie-list'>Armé(e) : <span className='import-api-proie-list'>{data.armed}</span></div>
            <div className='infos-proie-list'>Localisation : <span className='import-api-proie-list'>{data.localisation}</span></div>
            <div className='infos-proie-list'>Forme Physique : <span className='import-api-proie-list'>{data.stature}</span></div>
          </div>
          <img src={panierProfil} alt="panier" className="image-target-list" title="Clique-ici pour ajouter cette lacheté à ta liste de Chasse" />
        </div>

)
};

export default CardProfil;
