import React from 'react';
import './Profil.css'
import HeaderCardProfil from '../component/HeaderCardProfil';
import CardProfilTraque from '../component/CardProfilTraque'

const Profil = () => {
return(
  <div className="page-card-profil">
<HeaderCardProfil />
<CardProfilTraque />
  </div>
)
};

export default Profil;
