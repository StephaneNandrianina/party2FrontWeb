import React, { useEffect, useState} from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import Liste from './Annonce';

export function Liste1() {
  
  const[ListeAnnonce,setListeDesAnnones] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/annonces/listeAnnoncePhoto')
    .then(res=>res.json())
    .then((result)=>{
        setListeDesAnnones(result);
        console.log(result);
    }) 
  }, [])
  
 


return (
  <div className="container">
      <h2 style={{backgrounColor: 'rgb(17, 17, 75)',textAlign:'center'}} > Liste des annonces </h2>
    {ListeAnnonce.map((annonces) => (

    <Liste  nomMarque={annonces.nomMarque}   description={annonces.description}    nomUtilisateur={annonces.nomUtilisateur} 
            idAnnonce={annonces.idAnnonce}   nomModel={annonces.nomModel}          nomCategorie={annonces.nomCategorie}           nomCouleur={annonces.nomCouleur} 
            imatricule={annonces.imatricule} nomCarburant={annonces.nomCarburant}  nomBoiteDeVitesse={annonces.nomBoiteDeVitesse}
            nomLieu={annonces.nomLieu}
    />
    // <div className="container" style={{ display: 'flex', flexDirection: 'column', float:'left',alignItems: 'center', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', backgroundColor: 'rgb(237, 237, 247)', width: 'fit-content', padding: '20px', borderRadius: '10px' }}>
    //       <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', margin: '10px' }} >
    //         <img src="logo.jpg" alt='tsy mandeha'></img>
    //       </div>
          
    //       <div style={{ margin: '10px' }}> 
    //         <ul className="caracteristiques-list">
    //           <li>
    //             <strong style={{color:'green'}}>Marque :</strong><b> {annonces.nomMarque} </b>
    //           </li>
    //           <li>
    //             <strong style={{color:'green'}}>Description : </strong> {annonces.description}
    //           </li>
    //           <li>
    //             <strong style={{color:'green'}}> Createur :</strong>  {annonces.nomUtilisateur} 
    //           </li>
    //         </ul>
    //       </div>  
    //       <button className="btn btn-success" style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}} onClick={toggleComponent}> {showComponent ? 'Voir moins' : 'Voir details'}</button>
    //        {/* Afficher le composant si showComponent est vrai */}
    //       {showComponent && <Liste/>}
          
    //       <div className="row"> 
          
    //           <div className="col">
    //             <button className="btn btn-primary" style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}}> Contacter </button>
    //           </div>
    //           <div className="col">
    //             <button className="btn btn-secondary" style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}}> Mettre favorie</button>
    //           </div>
              
    //           <div className="col">
    //             <button className="btn btn-danger" style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}}> Modifier </button>
    //           </div>
    //       </div>
    // </div>
    
    ))}
  </div>
   
  
  );
}
export default Liste1;
