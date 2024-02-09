import React, { useEffect, useState } from 'react';
import './css/TousAnnonceCss.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function TousAnnonces({ liste }) {
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
        fetch('http://localhost:8081/favories/mettreFavorie/' + id + '/1', {
            method: "POST"
        })
    };

    const [accordeonOuvert, setAccordeonOuvert] = useState({});

    const toggleAccordeon = (idAnnonce) => {
        setAccordeonOuvert(prevState => ({
            ...prevState,
            [idAnnonce]: !prevState[idAnnonce]
        }));
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
                                        <img alt="" src={listeImage.nomPhotoVoiture} style={{ width: '40%', height: 'auto', marginLeft: '30px', marginTop: '30px' }} />
                                    ))}
                                </div>
                                <div style={{ position: 'relative' }}>
    <button
        onClick={() => toggleAccordeon(liste.idAnnonce)}
        style={{ 
            marginTop:'20px',
            marginBottom: '10px', // Ajoute un espace en bas du bouton
            backgroundColor: '#007bff', // Couleur de fond du bouton
            color: '#fff', // Couleur du texte du bouton
            border: 'none', // Supprime la bordure du bouton
            padding: '5px 10px', // Ajoute un espace autour du texte du bouton
            borderRadius: '5px', // Ajoute des coins arrondis au bouton
            cursor: 'pointer' // Change le curseur en main au survol du bouton
        }}
    >
        {accordeonOuvert[liste.idAnnonce] ? 'Fermer' : 'Voir'} Détail
    </button>
    {/* Contenu de l'accordéon */}
    {accordeonOuvert[liste.idAnnonce] && (
        <div
            style={{
                position: 'absolute', // Position absolue par rapport au parent
                top: '100%', // Positionné juste en dessous du bouton
                left: 0, // Aligné sur la gauche du parent
                backgroundColor: '#fff', // Couleur de fond de l'accordéon
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Ombre légère
                borderRadius: '5px', // Coins arrondis
                padding: '10px', // Espacement interne
                zIndex: 1000 // Assure que l'accordéon est au-dessus du contenu
            }}
        >
            <li>Createur : <h4>{liste.nomcreateur}</h4> </li>
            <li>Description : {liste.description}</li>
            <li>Lieu :{liste.nomLieu}</li>
            <li>Année : {liste.annee}</li>
            <li>Prix :<h6>{liste.prix} Ariary</h6></li>
            <li>Marque :{liste.nomMarque}</li>
            <li>Model :{liste.nomModel}</li>
            <li>Categorie :{liste.nomCategorie}</li>
            <li>Couleur :{liste.nomCouleur}</li>
            <li>Matricule :{liste.imatricule}</li>
            <li>Carburant :{liste.nomCarburant}</li>
            <li>Boite de vitesse :{liste.nomBoiteDeVitesse}</li>
        </div>
    )}
</div>
                                <Link to="/Message">
                                    <div className='BoutonVert'>
                                        <button class="btn btn-success" onClick={() => handleClick(liste.idCreateur)} >
                                            Contacter
                                        </button>
                                    </div>
                                </Link>
                                <div className='BoutonBleu'>
                                    <button className="btn btn-secondary" onClick={() => mettreFavorie(liste.idAnnonce)} style={{ margin: '10px', borderRadius: '5px', marginLeft: '-15px' }}> Mettre favorie</button>
                                </div>
                            </ul>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
