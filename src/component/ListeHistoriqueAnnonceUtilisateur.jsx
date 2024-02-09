import React, { useEffect, useState } from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeHistoriqueAnnonceUtilisateur() {
    const [listeHistoriqueAnnonceUtilisateur, setListeHistoriqueAnnonceUtilisateur] = useState([]);

    useEffect(() => {
        const fetchAnnoncesUtilisateur = async () => {
            try {
                const token = localStorage.getItem("token");
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                };
                
                const response = await fetch('http://localhost:8081/annonces/listeAnnoncePhotoParUtilisateur', requestOptions);
                if (response.ok) {
                    const annonces = await response.json();
                    setListeHistoriqueAnnonceUtilisateur(annonces);
                } else {
                    console.error('Erreur lors de la requête HTTP:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de la requête HTTP:', error);
            }
        };

        fetchAnnoncesUtilisateur();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Historique des annonces par utilisateur</h2>
            <div className="table-responsive">
                <table className="table table-striped" border="1px">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID Annonce</th>
                            <th>Date Heure</th>
                            <th>Description</th>
                            <th>IMatricule</th>
                            <th>Catégorie</th>
                            <th>Marque</th>
                            <th>Carburant</th>
                            <th>Modèle</th>
                            <th>Boîte de Vitesse</th>
                            <th>Couleur</th>
                            <th>Utilisateur</th>
                            <th>Lieu</th>
                            <th>Année</th>
                            <th>Prix</th>
                            <th>Pourcentage</th>
                            <th>État Annonce</th>
                            <th>Photo Voiture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listeHistoriqueAnnonceUtilisateur.map(annonce => (
                            <tr key={annonce.idAnnonce}>
                                <td>{annonce.idAnnonce}</td>
                                <td>{annonce.dateHeure}</td>
                                <td>{annonce.description}</td>
                                <td>{annonce.imatricule}</td>
                                <td>{annonce.nomCategorie}</td>
                                <td>{annonce.nomMarque}</td>
                                <td>{annonce.nomCarburant}</td>
                                <td>{annonce.nomModel}</td>
                                <td>{annonce.nomBoiteDeVitesse}</td>
                                <td>{annonce.nomCouleur}</td>
                                <td>{annonce.nomUtilisteur}</td>
                                <td>{annonce.nomLieu}</td>
                                <td>{annonce.annee}</td>
                                <td>{annonce.prix}</td>
                                <td>{annonce.pourcentage}</td>
                                <td>{annonce.etatAnnonce}</td>
                                <td>
                                    {annonce.photoVoiture.map(photo => (
                                        <img key={photo.idPhotoVoiture} src={photo.nomPhotoVoiture} alt="" style={{ maxWidth: '100px', height: 'auto' }} className="img-fluid" />
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListeHistoriqueAnnonceUtilisateur;
