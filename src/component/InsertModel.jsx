import React, { useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function InsererModel() {
  const[nomModel ,setModel] = useState('')
  const Inserer=(e)=>{
    e.preventDefault()
    const lieu = {nomModel}
    console.log(lieu)
    fetch('https://projsbmrrj1-production.up.railway.app/models/create' ,{
      method:"POST",
      headers : {"Content-Type":"application/json"},
      body : JSON.stringify(lieu)
    }).then(()=>{
      setModel('')
      console.log('Inserer avec succes')
    })
  }
  return (
    <div className="container mt-5">
      <h2>Inserer un model de voiture</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom du model de voiture :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom du model" 
                    value={nomModel} onChange={(e)=> setModel(e.target.value)}/>
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" onClick={Inserer}/>
                </div>
            </form>
    </div>
  );
}
