import { useState } from "react";
import Dropdown from "./Dropdow";

const Balance = () => {
    const [food, setFood] = useState('fruit');
    const [drink, setDrink] = useState('water');
  
    const handleFoodChange = (event) => {
      setFood(event.target.value);
    };
  
    const handleDrinkChange = (event) => {
      setDrink(event.target.value);
    };
  
    return (
      <div>
        <div>
            <h2>Nom</h2>
            <input type="text" placeholder="Quel est le nom de ce gueu?"/>
        </div>
        <div>  
        <h2>SEXE</h2>
        <Dropdown
        
          options={[
            { label: 'Féminin', value: 'Feminin' },
            { label: 'Masculin', value: 'Masculin' },
            { label: 'Inconnu', value: 'Inconnu' },
            { label: 'Emasculé', value: 'Emasculé' },
          ]}
          value={food}
          onChange={handleFoodChange}
        />
        </div>
        <div>  
        <h2>TYPE</h2>
        <Dropdown
          options={[
            { label: 'Nourrisson', value: 'Nourrisson' },
            { label: 'Enfant', value: 'Enfant' },
            { label: 'Adulte', value: 'Adulte' },
            { label: 'Sénior', value: 'Senior' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
            <h2>AGE</h2>
            <input type="text" placeholder="Quel est l'âge de ce gueu?"/>
        </div>
        <div>
        <h2>Couleur de Peau</h2>
        <Dropdown
          options={[
            { label: 'Blanc', value: 'Blanc' },
            { label: 'Halé', value: 'Hale' },
            { label: 'Noir', value: 'Noir' },
            { label: 'Déguelasse', value: 'Deguelasse' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
            <h2>AGE</h2>
            <input type="text" placeholder="Quel est l'âge de ce gueu?"/>
        </div>
        <div>
        <h2>Couleur de Cheveux</h2>
        <Dropdown
          options={[

            { label: 'Blond', value: 'Blond' },
            { label: 'Brun', value: 'Brun' },
            { label: 'Roux', value: 'Roux' },
            { label: 'Gris', value: 'Gris' },
            { label: 'Blanc', value: 'Blanc' },
            { label: "Crâne d'oeuf", value: 'Cranedoeuf' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
        <h2>Couleur des Yeux</h2>
        <Dropdown
          options={[
            { label: 'Bleu', value: 'Bleu' },
            { label: 'Vert', value: 'Vert' },
            { label: 'Marron', value: 'Marron' },
            { label: 'Noir', value: 'Noir' },
            { label: 'Gris', value: 'Gris' },
            { label: 'Verron', value: 'Verron' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
        <h2>Taille</h2>
        <Dropdown
          options={[
            { label: 'Grand Gaillard', value: 'GrandGaillard' },
            { label: 'Moyen', value: 'Moyen' },
            { label: 'Petit Homme', value: 'PetitHomme' },
            { label: 'Insignifiant', value: 'Insignifiant' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
        <h2>Carrure</h2>
        <Dropdown
          options={[
            { label: 'Athléticus', value: 'Athleticus' },
            { label: 'Bien-Portant', value: 'BienPortant' },
            { label: 'Bofus', value: 'Moyen' },
            { label: 'Biscottus', value: 'Biscottus' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
        <h2>Pilosité</h2>
        <Dropdown
          options={[
            { label: 'Trop, beaucoup trop', value: 'Trop' },
            { label: 'Amazonie', value: 'Amazonie' },
            { label: 'Bofus', value: 'Moyen' },
            { label: 'Bloc de Marbre', value: 'Imberbe' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
        <h2>Armé</h2>
        <Dropdown
          options={[
            { label: 'Oui, comme un pleutre', value: 'oui' },
            { label: 'Non, comme un loser', value: 'Non' },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />
        </div>
        <div>
            <h2>Localisation</h2>
            <input type="text" placeholder="Où se trouve ce misérable?"/>
        </div>
        <div>
        <button>Confirmer votre délation</button>
      </div>
      </div>
    );
  };
export default Balance