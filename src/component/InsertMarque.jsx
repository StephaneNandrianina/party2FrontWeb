import React, { useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function InsererMarque() {
  const[nomMarque ,setMarque] = useState('')
  const Inserer=(e)=>{
    e.preventDefault()
    const lieu = {nomMarque}
    console.log(lieu)
    fetch('https://projsbmrrj1-production.up.railway.app/marques/create' ,{
      method:"POST",
      headers : {"Content-Type":"application/json"},
      body : JSON.stringify(lieu)
    }).then(()=>{
      setMarque('')
      console.log('Inserer avec succes')
    })
  }
  return (
    <div className="container mt-5">
      <h2>Inserer votre Marque</h2>
      <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="nom">Nom de la marque :</label>
                    <input type="text" className="form-control" id="nom" placeholder="Entrez le nom de la marque" 
                    value={nomMarque} onChange={(e)=> setMarque(e.target.value)}/>
                </div>

                <div className='Valider'>
                    <input type="submit" value="Inserer" onClick={Inserer}/>
                </div>
            </form>
            <button className='Valider' style={{backgroundColor:'white'}}>
                  <Link to="/ListeMarque">Voir les Marques</Link>
              </button>
    </div>
  );
}
