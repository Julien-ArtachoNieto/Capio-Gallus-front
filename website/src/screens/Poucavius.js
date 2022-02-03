import './Poucavius.css'
const Poucavius =()=>{
    const poucavBtn=()=>{

    }
    return(
        <div className='page-poucavius'>
            <div className='txt-intro'>
                <h2>Ave Poucavius</h2>
                <p>Digne descendant de judas, tu va te plaire ici !</p>
                <p>Donne tout les renseignements que tu peux sur le pleutre Gaulois que tu viens de repérer !</p>
                <p>Sois précis pour aider les dignes Capiatores à traquer ces misérables loques humaines</p>
            </div>
        <div className='filter-selection'>

            <label for='name' className="titres-filtrage"> Nom du vilain</label>
            <input className='input-name' name='name' type='text'/>
            
            <label for='sexe' className="titres-filtrage"> Sexe</label>
            <select name='sexe'className="resultats-filtrage">
                <option value='Femme'>Femme</option>
                <option value='Homme'>Homme</option>
                <option value='Emascule'>Emasculé</option>
                <option value='Inconnue'>Je suis pas sûr</option>
            </select>

            <label for='type' className="titres-filtrage"> Type</label>
            <select name='type'className="resultats-filtrage">
                <option value='Nourrisson'>Nourrisson</option>
                <option value='Enfant'>Enfant</option>
                <option value='Adulte'>Adulte</option>
                <option value='Senior'>Veillard</option>
            </select>
            
            <label for='age' className="titres-filtrage"> Âge du vilain</label>
            <input className='resultats-filtrage' name='age' type='text'/>
            
            <label for='skin_color' className="titres-filtrage"> Couleur de Peau</label>
            <select name='skin_color'className="resultats-filtrage">
                <option value='Blanc'>Blanc</option>
                <option value='Hale'>Halé</option>
                <option value='Noir'>Noir</option>
            </select>
            
            <label for='hair_color'className="titres-filtrage"> Couleur de cheveux</label>
            <select name='hair_color'className="resultats-filtrage">
                <option value='Blond'>Blond</option>
                <option value='Brun'>Brun</option>
                <option value='Noir'>Noir</option>
                <option value='Roux'>Roux</option>
                <option value='Gris'>Gris</option>
                <option value='Blanc'>Blanc</option>
                <option value='Cranedoeuf'>Crâne d'oeuf</option>
            </select>

            <label for='eye_color'className="titres-filtrage"> Couleur des Cheveux</label>
            <select name='eye_color'className="resultats-filtrage">
                <option value='Bleu'>Bleu</option>
                <option value='Vert'>Vert</option>
                <option value='Marron'>Marron</option>
                <option value='Verron'>Verron</option>
                <option value='Gris'>Gris</option>
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
                <option value='Moyen'>Bofus</option>
                <option value='Biscottus'>Biscottus</option>
            </select>

            <label for='pilosite' className="titres-filtrage">Pilosité apparente</label>
            <select name='pilosite'className="resultats-filtrage">
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

            <label for='localisation' className="titres-filtrage"> Où l'as-tu vu ?</label>
            <input className='input-name' name='localisation' type='text'/>
            

            <div className='poucav-btn' onClick={poucavBtn}> 
                JE LE POUCAVE SUR LE CHAMP !
            </div>
    </div>
                
            
</div>
    )
} 

export default Poucavius