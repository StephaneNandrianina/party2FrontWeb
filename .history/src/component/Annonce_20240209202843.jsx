import React, { useEffect, useState } from 'react';
import './css/TousAnnonceCss.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function TousAnnonces(props) {
    const [listeAnnonce, setListeAnnonce] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/annonces/listeAnnoncePhoto')
            .then(res => res.json())
            .then((result) => {
                setListeAnnonce(result);
            });
    }, []);

    const handleClick = (id) => {
        console.log(id);
        localStorage.setItem("idReceive", id);
    }

    const mettreFavorie = (id) => { 
        fetch('http://localhost:8081/favories/mettreFavorie/'+id+'/1' , {
            method:"POST"
        })
    };

    return (
        <div className="container mt-5">
            <h2>Liste des annonces</h2>
            <div>
                {listeAnnonce.map(liste => (
                    liste.etatAnnonce === 0 && (
                        <div key={liste.idAnnonce}>
                            <ul>
                                <div>
                                    <li> <h4>{liste.nomcreateur}</h4> </li>
                                </div>
                                <div>
                                    <li>{liste.description}</li>
                                </div>
                                <div>
                                    <li> en {liste.nomLieu}</li>
                                    <li> de l'annee : {liste.annee}</li>
                                </div>
                                <div>
                                    <li><h6>{liste.prix}Ariary</h6></li>
                                </div>
                                <div>
                                    {liste.photoVoiture.map((listeImage) => (
                                        <img alt="" src={listeImage.nomPhotoVoiture}/>
                                    ))}
                                </div> 

                                <div>
                                    <li> <h4>{liste.nomcreateur}</h4> </li>
                                </div>
                                <div>
                                    <li>{liste.description}</li>
                                </div>
                                <div>
                                    <li> en {liste.nomLieu}</li>
                                    <li> de l'annee : {liste.annee}</li>
                                </div>
                                <div>
                                    <li><h6>{liste.prix}Ariary</h6></li>
                                </div>
                                <div>
                                    <li>{liste.nomMarque}</li>
                                </div>
                                <div>
                                    <li>{liste.nomModel}</li>
                                </div>
                                
                                <Link to="/Message">
                                    <div className='BoutonVert'>
                                        <button class="btn btn-success" onClick={() => handleClick(liste.idCreateur)} >
                                            Contacter
                                        </button>
                                    </div>
                                </Link>
                                <div className='BoutonBleu'>
                                    <button className="btn btn-secondary" onClick={() => mettreFavorie(liste.idAnnonce)} style={{ margin: '10px', borderRadius: '5px' ,marginLeft:'-15px'}}> Mettre favorie</button>
                                </div>
                            </ul>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
