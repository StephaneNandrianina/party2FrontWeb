import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeBoiteDevitesse() {
    const[ListeBoiteDevitesse, setListeBoiteDevitesse] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/boiteDeVitesses')
        .then(res=>res.json())
        .then((result)=>{
            setListeBoiteDevitesse(result);
        }
        ) 
      }, [])
       
      return (
        <div className="container mt-5">
          <h2>Liste des boites de vitesses  </h2>
                <div>
                    <table border='1px'>
                        <tr>
                          
                          <th>Id</th>
                          <th>nom boite de vitesse</th>
                          <th>etat</th>
                          
                        </tr>
                        {ListeBoiteDevitesse.map(liste => (
                            <tr>
                                <td>{liste.idBoiteDeVitesse}</td> 
                                <td>{liste.nomBoiteDeVitesse}</td>  
                                <td>{liste.etat}</td> 
                                
                            </tr>
                        ))}
                    </table>
                </div>
    
        </div>
        
      );
    }
    
    