import React from 'react';
import'./LaTraque.css'
import HeaderTraque from '../component/HeaderTraque';
import { useState,useEffect } from 'react';
import CardProfil from '../component/CardProfil';

const LaTraque = (props) => {

  const {datas,setDatas}=props

//   const [datas,setDatas]=useState([])//   

    const [change,setChange]=useState(false)
    const newProiesSelection=document.querySelector('.news-proies-selection')
    const NewProies=()=>{
      if(!change){
        setChange(true)
        newProiesSelection.style.display='block'
      }else{
        setChange(false)
        newProiesSelection.style.display='none'
      }     
  }
//   const recupData=()=>{
//     console.log('EVENT TARGET ', EventTarget.selectedIndex.value)
//   }
//   useEffect(()=>{
    //Appel a l'api
//   },[])


  return ( 
  <div className="page-traque">
    <HeaderTraque />

    <div className="bloc-specifique-traque">
    <div className='list-nouvelles-proies back-orange'> 
        Liste de Proies Disponibles
      </div>
         {datas.map(data=><CardProfil data={data} />)}
         
         

      </div>
    
    <div className="bloc-specifique-traque ">
    <div className='list-nouvelles-proies back-orange-dark'> 
        Chasses en Cours
      </div>
      {/* <CardProfil /> */}

    </div>

    <div className="bloc-specifique-traque  CP-grey">
    <div className='list-nouvelles-proies back-red'>
        Chasses Terminées
      </div>
      {/* <CardProfil />
      <CardProfil />
      <CardProfil />
      <CardProfil />
      <CardProfil />
      <CardProfil /> */}
    </div>
  </div>
  )
};

export default LaTraque;
