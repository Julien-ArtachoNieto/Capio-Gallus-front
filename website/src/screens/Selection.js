import React from 'react';
import'./Selection.css'
import { Link } from "react-router-dom";


const Selection = () => {
  return ( 
  <div className="page-Selection">
<Link to="/Poucavius" className="bloc-poucavius effet-blur">  
<div >POUCAVIUS</div></Link>
  
<div className="bloc-info-Selection">QUEL EST TON ROLE ?</div>
<Link to="/Capiatore"className="bloc-capiatore"><div>CAPIATORE</div></Link>
  </div>
  )
};

export default Selection;
