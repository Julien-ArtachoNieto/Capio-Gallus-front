import React from 'react';
import './CardProfil.css'
import panierProfil from '../assets/target3white.png'
import photoTarget from '../assets/photoTEST.jpg'

const CardProfil = (props) => {
  const {data}=props
  return (  
        <div className='bande-profil-proie'>
          <img src={data.imgurl} alt="panier" className="photo-target-list"/>
          <div className="ligne-bande-profil-proie-list">
            <div className='infos-proie-list'>{data.name}</div>
            <div className='infos-proie-list'>{data.sex}</div>
            <div className='infos-proie-list'>{data.armed}</div>
            <div className='infos-proie-list'>{data.localisation}</div>
            <div className='infos-proie-list'>{data.stature}</div>
          </div>
          <img src={panierProfil} alt="panier" className="image-target-list" title="Clique-ici pour ajouter cette lacheté à ta liste de Chasse" />
        </div>

)
};

export default CardProfil;
