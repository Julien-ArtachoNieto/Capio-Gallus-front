import React from 'react';
import './CardProfilTraque.css'
import panierProfil from '../assets/target3white.png'
import photoTarget from '../assets/photoTEST.jpg'
import sang from '../assets/hoverbtn2.jpg'
import piegeLoup from '../assets/piegeLoup.png'



const CardProfilTraque = (props) => {
  return (  


       <div className='bande-profil-card-page'>
          <div className="bloc-haut-profil-card">
            <div className='infos-profil-name'>SAMANTHA</div>
            <img src={photoTarget} alt="panier" className="photo-target-profil-card"/>
          </div>  
          <div className="bloc-bas-profil-card">              
              <div className='infos-proie-list'>SEXE from API</div>
              <div className='infos-proie-list'>TYPE from API</div>
              <div className='infos-proie-list'>AGE from API</div>
              <div className='infos-proie-list'>ARME from API</div>
              <div className='infos-proie-list'>LOCALISATION from API</div>
            <div className="bloc-under-bas-profil">
              <img src={sang} alt="sang" className="ball-item"/>
              <img src={piegeLoup} alt="sang" className="ball-item"/>
              <img src={sang} alt="sang" className="ball-item"/>

            </div>
          </div>
      </div>



)
};

export default CardProfilTraque;
