import { useState } from "react";
import Dropdown from "./Dropdown";
import './Balance.css'

const Balance = () => {
    const [name, setName] = useState('name');
    const [sexe, setSexe] = useState('sexe');
    const [type, setType] = useState('type');
    const [age, setAge] = useState('Age');
    const [skinColor, setSkinColor] = useState('couleur de peau');
    const [hairColor, setHairColor] = useState('couleur de cheveux');
    const [eyeColor, setEyeColor] = useState('couleur des yeux');
    const [taille, setTaille] = useState('taille');
    const [carrure, setCarrure] = useState('carrure');
    const [pilosite, setPilosite] = useState('pilosité');
    const [arme, setArme] = useState('armé');
    const [localisation, setLocalisation] = useState('localisation');

  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleSexeChange = (event) => {
      setSexe(event.target.value);
    };

    const handleTypeChange = (event) => {
      setType(event.target.value);
    };

    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };

    const handleSkinChange = (event) => {
      setSkinColor(event.target.value);
    };
    
    const handleHairChange = (event) => {
      setHairColor(event.target.value);
    };
    const handleEyeChange = (event) => {
      setEyeColor(event.target.value);
    };

    const handleTailleChange = (event) => {
      setTaille(event.target.value);
    };

    const handleCarrureChange = (event) => {
      setCarrure(event.target.value);
    };

    const handlePilositeChange = (event) => {
      setPilosite(event.target.value);
    };
    
    const handleArmeChange = (event) => {
      setArme(event.target.value);
    };

    const handleLocalisationChange = (event) => {
      setLocalisation(event.target.value);
    };

   
  
    return (
      <div className='page-poucavius'>
            <div className='txt-intro'>
                <h2>Ave Poucavius</h2>
                <p>Digne descendant de judas, tu va te plaire ici !</p>
                <p>Donne tout les renseignements que tu peux sur le pleutre Gaulois que tu viens de repérer !</p>
                <p>Sois précis pour aider les dignes Capiatores à traquer ces misérables loques humaines</p>
            </div>
       
      <div className='filter-selection'>

              <label for='name' className="titres-filtrage"> Nom du vilain</label>
              <input className="input-name" 
              type="text"
              placeholder="Quel est le nom de ce gueu?"
              value={name}
              onChange={handleNameChange}/>
      
              <div>
              <Dropdown
                label="Sexe"
                options={[
                  { label: 'Féminin', value: 'Feminin' },
                  { label: 'Masculin', value: 'Masculin' },
                  { label: 'Inconnu', value: 'Inconnu' },
                  { label: 'Emasculé', value: 'Emascule' },
                ]}
                value={sexe}
                onChange={handleSexeChange}
              />
              </div>
              <div>  
              <Dropdown
                label="Type"
                options={[
                  { label: 'Nourrisson', value: 'Nourrisson'},
                  { label: 'Enfant', value: 'Enfant' },
                  { label: 'Adulte', value: 'Adulte' },
                  { label: 'Sénior', value: 'Senior' },
                ]}
                value={type}
                onChange={handleTypeChange}
              />
              </div>
              <div>
                  <label for='age' className="titres-filtrage"> Age du vilain</label>
                  <input type="text"
                  className="resultats-filtrage"
                  placeholder="Quel est le nom de ce gueu?"
                  value={age}
                  onChange={handleAgeChange}/>
              </div>
              <div>
              <Dropdown
                label='Couleur de Peau'
                options={[
                  { label: 'Blanc', value: 'Blanc' },
                  { label: 'Halé', value: 'Hale' },
                  { label: 'Noir', value: 'Noir' },
                  { label: 'Déguelasse', value: 'Deguelasse' },
                ]}
                value={skinColor}
                onChange={handleSkinChange}
              />
              </div>
              <div>
              <Dropdown
                label='Couleur de Cheveux'
                options={[
                  { label: 'Blond', value: 'Blond' },
                  { label: 'Brun', value: 'Brun' },
                  { label: 'Roux', value: 'Roux' },
                  { label: 'Noir', value: 'Noir' },
                  { label: 'Gris', value: 'Gris' },
                  { label: 'Blanc', value: 'Blanc' },
                  { label: "Crâne d'oeuf", value: 'Cranedoeuf' },
                ]}
                value={hairColor}
                onChange={handleHairChange}
              />
              </div>
              <div>
              <label for='localisation' className="titres-filtrage">Couleur des Yeux</label>
              <Dropdown
              className="resultats-filtrage"
                options={[
                  { label: 'Bleu', value: 'Bleu' },
                  { label: 'Vert', value: 'Vert' },
                  { label: 'Marron', value: 'Marron' },
                  { label: 'Noir', value: 'Noir' },
                  { label: 'Gris', value: 'Gris' },
                  { label: 'Verron', value: 'Verron' },
                ]}
                value={eyeColor}
                onChange={handleEyeChange}
              />
              </div>
              <div>
              <label for='localisation' className="titres-filtrage">Carrure ?</label>
              <Dropdown
                className="resultats-filtrage"
                options={[
                  { label: 'Grand Gaillard', value: 'GrandGaillard' },
                  { label: 'Moyen', value: 'Moyen' },
                  { label: 'Petit Homme', value: 'PetitHomme' },
                  { label: 'Insignifiant', value: 'Insignifiant' },
                ]}
                value={taille}
                onChange={handleTailleChange}
              />
              </div>
        <div>
        <label for='localisation' className="titres-filtrage">Carrure</label>
          <Dropdown
            className="resultats-filtrage"
          options={[
            { label: 'Athléticus', value: 'Athleticus' },
            { label: 'Bien-Portant', value: 'BienPortant' },
            { label: 'Bofus', value: 'Moyen' },
            { label: 'Biscottus', value: 'Biscottus' },
          ]}
          value={carrure}
          onChange={handleCarrureChange}
          />
          </div>
          <div>
          <label for='localisation' className="titres-filtrage">Pilosité</label>
          <Dropdown
            className="resultats-filtrage"
            options={[
              { label: 'Trop, beaucoup trop', value: 'Trop' },
              { label: 'Amazonie', value: 'Amazonie' },
              { label: 'Bofus', value: 'Moyen' },
              { label: 'Bloc de Marbre', value: 'Imberbe' },
            ]}
            value={pilosite}
            onChange={handlePilositeChange}
          />
          </div>
          <div>
          <label for='localisation' className="titres-filtrage">Armé ?</label>
          <Dropdown
            className="resultats-filtrage"
            options={[
              { label: 'Oui, comme un pleutre', value: 'oui' },
              { label: 'Non, comme un loser', value: 'Non' },
              { label: "J'ai fermé les yeux comme une fiole", value: 'Fiole' },
            ]}
            value={arme}
            onChange={handleArmeChange}
          />
          </div>
          <div>
          <label for='localisation' className="titres-filtrage">Où as-tu vu ce gueu?</label>
              <input className="resultats-filtrage" 
              type="text"
              placeholder="Attrapons les tous!!!"
              value={localisation}
              onChange={handleLocalisationChange}/>
          </div>
          <div>
        <button>Confirmer votre délation</button>
      </div>
      </div>
    </div>
    );
  };
export default Balance


