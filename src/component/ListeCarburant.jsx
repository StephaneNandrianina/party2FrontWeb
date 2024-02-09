import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function Liste() {
  const[ListeCarburant,setListeCarburant] = useState([])

  useEffect(()=>{
    fetch('https://2emvaguesprojo-production.up.railway.app/carburants')
    .then(res=>res.json())
    .then((result)=>{
      setListeCarburant(result);
    }
    ) 
  }, [])
   
  return (
    <div className="container mt-5 center-container">
    <h2 style={{ backgrounColor: 'rgb(17, 17, 75)'}}>Liste des carburants</h2>
    <div className="table-responsive">
      <table className="table table-bordered" style={{marginTop:'15px'}}>
        <thead>
          <tr>
         
            <th style={{color:'green'}}>Nom du Carburant</th>
          </tr>
        </thead>
        <tbody>
          {ListeCarburant.map((carburant) => (
            <tr key={carburant.id}>
              <td>- {carburant.nomCarburant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    
  );
}
