import React, { useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function InsererBoiteDeVitesse() {
  const[nomBoiteDeVitesse,setName]=useState('')
  const Inserer=(e)=>{
    e.preventDefault()
    const boiteVitesse = {nomBoiteDeVitesse}
    console.log(boiteVitesse)
    fetch('https://2emvaguesprojo-production.up.railway.app/boiteDeVitesses/create' , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body : JSON.stringify(boiteVitesse)
    }).then(()=>{
      setName('')
      console.log('Inserer avec succes')
    })

    }
  return (
    <div className="container mt-5">
      
      <h2>Inserer une boite de vitesse</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom de la boite de vitesse :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom de la boite de vitesse" 
                    value={nomBoiteDeVitesse} onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" onClick={Inserer}/>
                </div>
            </form>
            <button className='Valider' style={{backgroundColor:'white'}}>
              <Link to="/ListeBoiteVitesse">Voir les Boites de vitesse</Link>
            </button>
    </div>
  );
}
