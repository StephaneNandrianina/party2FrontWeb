import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeDesMarque() {
    const[ListeDesMarque, setListeDesMarque] =useState([])
    useEffect(()=>{
        fetch('https://2emvaguesprojo-production.up.railway.app/marques')
        .then(res=>res.json())
        .then((result)=>{
            setListeDesMarque(result);
        }
        ) 
      }, [])
       
      return (
        <div className="container mt-5">
          <h2>Liste des marques  </h2>
                <div>
                    <table border='1px'>
                        <tr>
                          
                          <th>Id</th>
                          <th>nom de la marque</th>
                          <th>etat</th>
                          
                        </tr>
                        {ListeDesMarque.map(liste => (
                            <tr>
                                <td>{liste.idMarque}</td> 
                                <td>{liste.nomMarque}</td>  
                                <td>{liste.etat}</td> 
                                
                            </tr>
                        ))}
                    </table>
                </div>
    
        </div>
        
      );
    }
    
    