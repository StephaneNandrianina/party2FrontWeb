import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function Liste() {
  const[ListeCategorie,setListeCategorie] = useState([])

  useEffect(()=>{
    fetch('https://projsbmrrj1-production.up.railway.app/categories')
    .then(res=>res.json())
    .then((result)=>{
      setListeCategorie(result);
    }
    ) 
  }, [])
   
  return (
    <div className="container mt-5">
      <h2 style={{backgrounColor: 'rgb(17, 17, 75)'}} >Liste des catégories</h2>
      <div className="table-responsive"  >
        <table className="table table-bordered" style={{marginTop:'15px'}}>
          <thead>
            <tr>
              <th style={{color:'green'}}>Nom de la catégorie</th>
            </tr>
          </thead>
          <tbody>
            {ListeCategorie.map((liste) => (
              <tr key={liste.id}>
                <td>- {liste.nomCategorie}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}
