import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeFavorie() {
  const[ListeLieu,setListeLieu] = useState([])

  useEffect(()=>{
    fetch('https://2emvaguesprojo-production.up.railway.app/listeAnnonceFavorie')
    .then(res=>res.json())
    .then((result)=>{
      setListeLieu(result);
    }
    ) 
  }, [])
   
  return (
    <div className="container mt-5">
      <h2>Liste des annonces favories </h2>
            <div>
                <table border='1px'>
                    <tr>
                      <th>dateheureannonce</th>
                      <th>description</th>
                      <th>annee</th>
                      <th>prix</th>
                      <th>imatricule</th>
                      <th>nomutilisateur</th>
                      <th>nomlieu</th>
                      <th>idfavorie</th>
                    </tr>
                    {ListeLieu.map(liste => (
                        <tr>
                            <td>{liste.dateHeureAnnonce}</td> 
                            <td>{liste.description}</td>  
                            <td>{liste.annee}</td> 
                            <td>{liste.prix}</td> 
                            <td>{liste.imatricule}</td> 
                            <td>{liste.nomUtilisateur}</td> 
                            <td>{liste.nomLieu}</td> 
                            <td>{liste.idFavorie}</td> 
                            
                        </tr>
                    ))}
                </table>
            </div>

    </div>
    
  );
}

