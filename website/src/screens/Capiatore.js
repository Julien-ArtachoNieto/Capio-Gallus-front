import React from 'react';
import'./Capiatore.css'
import Header from '../component/Header';
import { useState,useEffect } from 'react';
import CardProfil from '../component/CardProfil';
import axios from 'axios'
const Capiatore = (props) => {
  const {datas,setDatas}=props

  const [change,setChange]=useState(false)
  
  const filterSelection=document.querySelector('.filter-selection')
  const activeFilter=()=>{
      if(!change){
        setChange(true)
        filterSelection.style.display='flex'
      }else{
        setChange(false)
        filterSelection.style.display='none'
      }     
  }
  const recupData=()=>{
    console.log('EVENT TARGET ', EventTarget.selectedIndex.value)
  }
  useEffect(()=>{
    axios.get('http://localhost:3100/capiatore/gaulois').then((res)=>setDatas(res.data))
    
  },[])


  return ( 
  <div className="page-Capiatore">
    <Header />
    <div className="bloc-specifique">
      <div className='filter-btn' onClick={activeFilter}> 
        Peaufiner la traque
      </div>
      { console.log("DONNEES",datas)}

      <div className='filter-selection'>
        
        <label for='sexe' className="titres-filtrage"> Sexe</label>
          <select name='sexe'className="resultats-filtrage">
            <option value='Femme'>Femme</option>
            <option value='Homme'>Homme</option>
            <option value='Emascule'>Emasculé</option>
          </select>
        
        <label for='hairColor'className="titres-filtrage"> Couleur de cheveux</label>
          <select name='hairColor'className="resultats-filtrage" onChange={recupData}>
            <option value='Noir' >Noir</option>
            <option value='Brun'>Brun</option>
            <option value='Roux'>Roux</option>
            <option value='Blond'>Blond</option>
            <option value='Blanc'>Blanc</option>
            <option value='Gris'>Gris</option>
            <option value='Cranedoeuf'>Crâne d'oeuf</option>
          </select>
          <label for='taille'className="titres-filtrage">Taille</label>
          <select name='taille'className="resultats-filtrage">
            <option value='GrandGaillard'>Grand Gaillard</option>
            <option value='Moyen'>Moyen</option>
            <option value='PetitHomme'>Petit Homme</option>
            <option value='Insignifiant'>Insignifiant</option>
          </select>
          <label for='carrure' className="titres-filtrage">Type de physique</label>
          <select name='carrure'className="resultats-filtrage">
            <option value='Athleticus'>Athléticus</option>
            <option value='BienPortant'>Bien-portantus</option>
            <option value='Bofus'>Bofus</option>
            <option value='Biscottus'>Biscottus</option>
          </select>
          <label for='pilosité' className="titres-filtrage">Pilosité apparente</label>
          <select name='pilosité'className="resultats-filtrage">
          <option value='Trop'>Trop, beaucoup trop!</option>
            <option value='Amazonie'>Amazonie</option>
            <option value='Touffe'>Touffe d'herbe</option>
            <option value='Imberbe'>Bloc de marbre</option>
          </select>
          <label for='arme' className="titres-filtrage">Equipé(e) d'une arme</label>
          <select name='arme'className="resultats-filtrage">
            <option value='Oui'>Oui comme un pleutre</option>
            <option value='Non'>Non comme un looser</option>
            <option value='Fiole'>J'ai fermé les yeux comme une fiole</option>
          </select>
                 
          
          
      </div>
    </div>
    <div className='bloc-list-cible'>
        <div className='list-proies'> 
        Liste de Proies
      </div>
      {datas ? datas.map(data=><CardProfil key={data.id} data={data}/> ) : ''}
     

    

    </div>
    
  </div>
  )
};

export default Capiatore;
