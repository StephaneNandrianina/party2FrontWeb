import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

export function RechercheFonction() {
    const[BoiteVitesse, setBoiteVitesse] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/boiteDeVitesses')
        .then(res=>res.json())
        .then((result)=>{
            setBoiteVitesse(result);
        }
        ) 
    }, [])

    const[Carburant, setCarburant] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/carburants')
        .then(res=>res.json())
        .then((result)=>{
            setCarburant(result);
        }
        ) 
    }, [])

    const[Categorie, setCategorie] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/categories')
        .then(res=>res.json())
        .then((result)=>{
            setCategorie(result);
        }
        ) 
    }, [])

    const[Lieu, setLieu] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/lieux')
        .then(res=>res.json())
        .then((result)=>{
            setLieu(result);
        }
        ) 
    }, [])

    const[Marque, setMarque] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/marques')
        .then(res=>res.json())
        .then((result)=>{
            setMarque(result);
        }
        ) 
    }, [])

    const[Model, setModel] =useState([])
    useEffect(()=>{
        fetch('https://projsbmrrj1-production.up.railway.app/models')
        .then(res=>res.json())
        .then((result)=>{
            setModel(result);
        }
        ) 
    }, [])
   
  return (
    <>
        <form>
            <div className='row'>
                <div className="form-group col-md-6">
                    <label htmlFor="prixMin">Prix Minimum :</label>
                    <input type="number" className="form-control" id="prixMin" placeholder="Entrez le prix Minimum" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="prixMax">Prix Maximum :</label>
                    <input type="number" className="form-control" id="prixMax" placeholder="Entrez le prix Maximum" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="idBoitedevitesse">Boite de vitesse :</label>
                <select className="form-control" id="idBoitedevitesse">
                        {BoiteVitesse.map(liste => (
                            <option value="{liste.idBoiteDeVitesse}">{liste.nomBoiteDeVitesse}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idCarburant">Carburant :</label>
                <select className="form-control" id="idCarburant">
                        {Carburant.map(liste => (
                            <option value="{liste.idCarburant}">{liste.nomCarburant}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idCategorie">Categorie :</label>
                <select className="form-control" id="idCategorie">
                        {Categorie.map(liste => (
                            <option value="{liste.idCategorie}">{liste.nomCategorie}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idLieu">Lieu :</label>
                <select className="form-control" id="idLieu">
                        {Lieu.map(liste => (
                            <option value="{liste.idLieu}">{liste.nomLieu}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idMarque">Marque :</label>
                <select className="form-control" id="idMarque">
                        {Marque.map(liste => (
                            <option value="{liste.idMarque}">{liste.nomMarque}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idModel">Model :</label>
                <select className="form-control" id="idModel">
                        {Model.map(liste => (
                            <option value="{liste.idModel}">{liste.nomModel}</option>
                        ))}
                </select>
            </div>

            <div className='Valider'>
                <input type="submit" value="Inserer"/>
            </div>
            
        </form>
    </> 
    
  );
}
