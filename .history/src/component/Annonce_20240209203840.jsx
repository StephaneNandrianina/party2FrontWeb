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
    
    function Accordion({ liste }) {
        const [isActive, setIsActive] = useState(false);
    
        const toggleAccordion = () => {
            setIsActive(!isActive);
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
                                        <img alt="" src={listeImage.nomPhotoVoiture} style={{width:'40%', height:'auto'}}/>
                                    ))}
                                </div> 

                                
                                
                                <div>
            <style>
                {`
                    .accordion-btn {
                        background-color: #eee;
                        color: #444;
                        cursor: pointer;
                        padding: 18px;
                        width: 100%;
                        text-align: left;
                        border: none;
                        outline: none;
                        transition: 0.4s;
                    }

                    .accordion-content {
                        display: ${isActive ? 'block' : 'none'};
                        padding: 0 18px;
                        overflow: hidden;
                        background-color: #f1f1f1;
                    }

                    .accordion {
                        margin-bottom: 12px;
                    }

                    .accordion-btn.active,
                    .accordion-btn:hover {
                        background-color: #ccc;
                    }

                    .accordion-btn:after {
                        content: '\002B';
                        color: #777;
                        font-weight: bold;
                        float: right;
                        margin-left: 5px;
                    }

                    .accordion-btn.active:after {
                        content: "\2212";
                    }
                `}
            </style>

            <div className="accordion">
                <button className={`accordion-btn ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
                    Voir détail
                </button>
                <div className="accordion-content">
                    <div>
                        <li> <h4>{liste.nomcreateur}</h4> </li>
                    </div>
                    <div>
                        <li>{liste.description}</li>
                    </div>
                    <div>
                        <li> en {liste.nomLieu}</li>
                        <li> de l'année : {liste.annee}</li>
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
                    <div>
                        <li>{liste.nomCategorie}</li>
                    </div>
                    <div>
                        <li>{liste.nomCouleur}</li>
                    </div>
                    <div>
                        <li>{liste.imatricule}</li>
                    </div>
                    <div>
                        <li>{liste.nomCarburant}</li>
                    </div>
                    <div>
                        <li>{liste.nomBoiteDeVitesse}</li>
                    </div> 
                </div>
            </div>
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