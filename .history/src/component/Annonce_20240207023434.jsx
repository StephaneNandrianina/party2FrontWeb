import React, { useState} from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';


export function Liste1(props) {

    const [popupOpen, setPopupOpen] = useState(false);

    // Fonction pour ouvrir le pop-up
    const openPopup = () => {
      setPopupOpen(true);
    };
  
    // Fonction pour fermer le pop-up
    const closePopup = () => {
      setPopupOpen(false);
    };
    const mettreFavorie = () => { 

        fetch('https://projsbmrrj1-production.up.railway.app/favories/mettreFavorie/'+props.idAnnonce+'?idUtilisateur=1', {
            method:"POST",
             
          })
    };
  

  return (
    <div className="container" >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', float:'left',alignItems: 'center', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'rgb(237, 237, 247)', width: 'fit-content', padding: '20px', borderRadius: '10px' }}>
                <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', margin: '10px' }} >
                    <img src="./image/logo.png" alt='tsy mandeha' style={{width:'350px', height:'350px'}}></img>
                </div>
                
                <div style={{ margin: '10px' }}> 
                    <ul className="caracteristiques-list">
                    <li>
                    <strong style={{color:'green'}}>Marque :</strong><b> {props.nomMarque} </b>
                    </li>
                    <li>
                    <strong style={{color:'green'}}>Description : </strong> {props.description}
                    </li>
                    <li>
                    <strong style={{color:'green'}}> Createur :</strong>  {props.nomUtilisateur} 
                    </li>
                
                    </ul>
                </div>  
                <div className="row">
                        <button className="btn btn-success"  onClick={openPopup}> Voir details </button>
                    </div>
            
                <div className="row" style={{marginTop:'20px',marginLeft:'20px'}}> 
                    <div className="col">
                        <button className="btn btn-primary" style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}}> Contacter </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary"   onClick={mettreFavorie} style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}}> Mettre favorie</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger" style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}}> Modifier </button>
                    </div>
                </div>
            </div>

    {/* Pop-up */}
    {popupOpen && (
        <div className="popup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
            <div className="popup-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', position: 'relative' }}>
            <button className="close" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', border: 'none', background: 'none', fontSize: '20px' }} onClick={closePopup}>&times;</button>
            <h2 style={{textAlign:'center'}}>Détails</h2>
            <li>
                    <strong style={{color:'green'}}>Marque :</strong> {props.nomMarque}
            </li>
            <li>
                    <strong style={{color:'green'}}>Description :</strong> {props.description}
            </li>
                <li>
                    <strong style={{color:'green'}}>Createur :</strong> {props.nomUtilisateur} 
                </li>
            <li>
                    <strong style={{color:'green'}}>Model :</strong> {props.nomModel}
                </li>
                <li>
                    <strong style={{color:'green'}}>Categorie :</strong> {props.nomCategorie}
                </li>
                <li>
                    <strong style={{color:'green'}}>Couleur : </strong> {props.nomCouleur}
                </li>
                <li>
                    <strong style={{color:'green'}}>Immatriculation :</strong> {props.imatricule}
                </li>
                <li>
                    <strong style={{color:'green'}}>Carburant :</strong> {props.nomCarburant}
                </li>
                <li>
                    <strong style={{color:'green'}}>Boite de vitesse :</strong> {props.nomBoiteDeVitesse}
                </li>
                <li>
                    <strong style={{color:'green'}}>Lieu :</strong> {props.nomLieu}
            </li>
            </div>
        </div>
        )}
    </div>
   
  
  );
}
export default Liste1;
