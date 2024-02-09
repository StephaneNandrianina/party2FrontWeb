import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

export function RechercheFonction() {
    const [selectedBoiteVitesse, setSelectedBoiteVitesse] = useState("");
    const [selectedCategorie , setSelectedCategorie] = useState("");
    const [SelectedMarque , setSelectedMarque] = useState("");
    const [SelectedLieu , setSelectedLieu] = useState("");
    const [SelectedModel , setSelectedModel] = useState("");
    const [SelectedPrixMin , setSelectedPrixMin] = useState("");
    const [SelectedPrixMax , setSelectedPrixMax] = useState("");
    const [SelectedCarburant , setSelectedCarburant] = useState("");
    const [Data , setData] = useState([]);
    
    const[BoiteVitesse, setBoiteVitesse] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/boiteDeVitesses')
        .then(res=>res.json())
        .then((result)=>{
            setBoiteVitesse(result);
        }
        ) 
    }, [])

    const[Carburant, setCarburant] =useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/carburants')
        .then(res=>res.json())
        .then((result)=>{
            setCarburant(result);
        }
        ) 
    }, [])

    const[Categorie, setCategorie] =useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/categories')
        .then(res=>res.json())
        .then((result)=>{
            setCategorie(result);
        }
        ) 
    }, [])

    const[Lieu, setLieu] =useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/lieux')
        .then(res=>res.json())
        .then((result)=>{
            setLieu(result);
        }
        ) 
    }, [])

    const[Marque, setMarque] =useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/marques')
        .then(res=>res.json())
        .then((result)=>{
            setMarque(result);
        }
        ) 
    }, [])

    const[Model, setModel] =useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/models')
        .then(res=>res.json())
        .then((result)=>{
            setModel(result);
        }
        ) 
    }, [])

    const handleBoiteVitesseChange = (event) => {
        setSelectedBoiteVitesse(event.target.value);
    };

    
    const handleCarburant = (event) => {
        setSelectedCarburant(event.target.value);
    };

    const handleModel = (event) => {
        setSelectedModel(event.target.value);
    };

    const handleMarque = (event) => {
        setSelectedMarque(event.target.value);
    };

    const handleCategorie = (event) => {
        setSelectedCategorie(event.target.value);
    };

    const handleLieu = (event) => {
        setSelectedLieu(event.target.value);
    };

    const handlePrixMin = (event) => {
        setSelectedPrixMin(event.target.value);
    };

    const handlePrixMax = (event) => {
        setSelectedPrixMax(event.target.value);
    };

        const Rechercher = async (e) => {
            e.preventDefault();
            try {
                const params = {
                    prixMin: SelectedPrixMin,
                    prixMax: SelectedPrixMax,
                    idBoitedevitesse : selectedBoiteVitesse ,
                    idCarburant : SelectedCarburant,
                    idCategorie : selectedCategorie,
                    idLieu : SelectedLieu,
                    idMarque : SelectedMarque,
                    idModel : SelectedModel
                };
    
                const queryParams = new URLSearchParams(params).toString();
                const response = await fetch(`http://localhost:8081/annonces/recherche?${queryParams}`);
    
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
    
                const jsonData = await response.json();
                console.log("eto ary", jsonData);
                setData(jsonData);
            } catch (error) {
                console.error('Erreur:', error);
            }
        };
    
   
  return (
    <>
        <form>
            <div className='row'>
                <div className="form-group col-md-6">
                    <label htmlFor="prixMin">Prix Minimum :</label>
                    <input type="number" className="form-control" id="prixMin" placeholder="Entrez le prix Minimum" value={SelectedPrixMin} onChange={handlePrixMin}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="prixMax">Prix Maximum :</label>
                    <input type="number" className="form-control" id="prixMax" placeholder="Entrez le prix Maximum" value={SelectedPrixMax} onChange={handlePrixMax}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="idBoitedevitesse">Boite de vitesse :</label>
                <select className="form-control" id="idBoitedevitesse" value={selectedBoiteVitesse} onChange={handleBoiteVitesseChange}>
                        {BoiteVitesse.map(liste => (
                            <option key={liste.idBoiteDeVitesse} value={liste.idBoiteDeVitesse}>{liste.nomBoiteDeVitesse}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idCarburant">Carburant :</label>
                <select className="form-control" id="idCarburant" value={SelectedCarburant} onChange={handleCarburant}>
                        {Carburant.map(liste => (
                            <option value={liste.idCarburant}>{liste.nomCarburant}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idCategorie">Categorie :</label>
                <select className="form-control" id="idCategorie" value={selectedCategorie} onChange={handleCategorie}>
                        {Categorie.map(liste => (
                            <option value={liste.idCategorie}>{liste.nomCategorie}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idLieu">Lieu :</label>
                <select className="form-control" id="idLieu" value={SelectedLieu} onChange={handleLieu}>
                        {Lieu.map(liste => (
                            <option value={liste.idLieu}>{liste.nomLieu}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idMarque">Marque :</label>
                <select className="form-control" id="idMarque" value={SelectedMarque} onChange={handleMarque}>
                        {Marque.map(liste => (
                            <option value={liste.idMarque}>{liste.nomMarque}</option>
                        ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="idModel">Model :</label>
                <select className="form-control" id="idModel" value={SelectedModel} onChange={handleModel}>
                        {Model.map(liste => (
                            <option value={liste.idModel}>{liste.nomModel}</option>
                        ))}
                </select>
            </div>

            <div className='Valider'>
                <input type="submit" onClick={Rechercher} value="Inserer"/>
            </div>
            
        </form>
        
        {Data !== [] && 
            Data.map(liste => (
                <>
                    <div>
                        <h3>{liste.nomCreateur}</h3>
                        <div>{liste.description}</div>
                        <div>Marque:{liste.nomMarque}</div>
                        <div>Model:{liste.nomModel}</div>
                        <div>Categorie :{liste.nomCategorie}</div>
                        <div>Carburant :{liste.nomCarburant}</div>
                        <div>Boite de vitesse :{liste.boiteVitesse}</div>
                        <div>Lieu :{liste.nomLieu}</div>
                    </div>
                </>
            ))
        }



    </> 
    
  );
}