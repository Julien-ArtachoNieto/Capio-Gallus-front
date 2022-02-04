import React from 'react';
import'./Selection.css'
import { Link } from "react-router-dom";


const Selection = () => {
  return ( 
  <div className="page-Selection">
<Link to="/Poucavius" className="bloc-poucavius effet-blur">  
<div title="Clique-ici si tu es un digne représentant de Judas et que tu souhaites dénoncer la cachette d'un(e) fourbe gaulois(e)">POUCAVIUS</div></Link>
  
<div className="bloc-info-Selection">QUEL EST TON ROLE ?</div>
<Link to="/Capiatore"className="bloc-capiatore"><div title="Clique-ici si tu es un avide chasseur de gaulois(e) à la recherche de quelques pouilleux à torturer">CAPIATORE</div></Link>
  </div>
  )
};

export default Selection;

