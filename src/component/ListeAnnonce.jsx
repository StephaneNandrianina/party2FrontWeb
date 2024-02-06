import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeAnnonce() {
    const[ListeAnnonce, setListeAnnonce] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/annonces/listesAnnnonces')
        .then(res=>res.json())
        .then((result)=>{
            setListeAnnonce(result);
        }
        ) 
      }, [])
       
      return (
        <div className="container mt-5">
          <h2>Liste des annonces  </h2>
                <div>
                    <table border='1px'>
                        <tr>
                          
                          <th>description</th>
                          <th>date d'annonce</th>
                          <th>imatricule</th>
                          <th>Couleur</th>
                          <th>nom createur</th>
                          <th>nom lieu</th>
                          <th>annee</th>
                          <th>prix</th>
                          <th>etat annonce</th>
                        </tr>
                        {ListeAnnonce.map(liste => (
                            <tr>
                                <td>{liste.nom}</td> 
                                <td>{liste.date}</td>  
                                <td>{liste.imatricule}</td> 
                                <td>{liste.couleur}</td> 
                                <td>{liste.nomCreateur}</td> 
                                <td>{liste.nomLieu}</td> 
                                <td>{liste.annee}</td> 
                                <td>{liste.prix}</td> 
                                <td>{liste.etatAnnonce}</td>
                            </tr>
                        ))}
                    </table>
                </div>
    
        </div>
        
      );
    }
    
    