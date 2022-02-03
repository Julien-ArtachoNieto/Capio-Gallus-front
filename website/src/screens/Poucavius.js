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
                <option value='Emasculé'>Emasculé</option>
            </select>
            
            <label for='hair_color'className="titres-filtrage"> Couleur de cheveux</label>
            <select name='hair_color'className="resultats-filtrage">
                <option value='Noir'>Noir</option>
                <option value='Brun'>Brun</option>
                <option value='Roux'>Roux</option>
                <option value='Blond'>Blond</option>
                <option value='Blanc'>Blanc</option>
                <option value='Gris'>Gris</option>
                <option value='Cranedoeuf'>Crane d'oeûf</option>
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
                <option value='Insignifiant'>Biscottus</option>
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
            <div className='poucav-btn' onClick={poucavBtn}> 
                Poucave Le
            </div>
    </div>
                
            
</div>
    )
} 

export default Poucavius