import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeHistoriqueAnnonceUtilisateur() {
    const [ListeHistoriqueAnnonceUtilisateur, setListeHistoriqueAnnonceUtilisateur] = useState([]);

    useEffect(() => {
        const fetchDropdownTypeDeVehicule = async () => {
            try {
                const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWRlbnRpZmlhbnQiOiIwIiwiaWF0IjoxNzA3NDYwMzcyLCJleHAiOjE3MDc4NjAzNzJ9.wz8Ko7lHVXBE2vOszUer3FrhIC0rl6aN5tQOAanJ7A7i0vr1TEdVZP03OYvHuWBgrIFb9RBG6bxh5B9bxCUWtA';
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                };

                const response = await fetch('http://localhost:8081/annonces/listeAnnoncePhotoParUtilisateur', requestOptions);
                if (response.ok) {
                    const options = await response.json();
                    setListeHistoriqueAnnonceUtilisateur(options);
                } else {
                    console.error('Erreur lors de la requête HTTP:', response.statusText);
                }
            } catch (error) {
                console.error('Erreur lors de la requête HTTP:', error);
            }
        };

        fetchDropdownTypeDeVehicule();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Historique des annonces par utilisateur</h2>
            <div>
                <table border='1px'>
                    <tr>
                        <th>idAnnonce</th>
                        <th>date heure</th>
                        <th>Description</th>
                        <th>IMatricule</th>
                        <th>nom Categorie</th>
                        <th>nom Marque</th>
                        <th>nom carburant</th>
                        <th>nom model </th>
                        <th>nom BoiteDevitesse</th>
                        <th>nom Couleur</th>
                        <th>nom utilisateur</th>
                        <th>nom Lieu</th>
                        <th>nom BoiteDevitesse</th>
                        <th>Annee</th>
                        <th>Prix</th>
                        <th>Pourcentage</th>
                        {/* <th>Etat annonce </th> */}
                        <th>Photo voiture</th>
                    </tr>
                    {ListeHistoriqueAnnonceUtilisateur.map(liste => (
                        <tr key={liste.idAnnonce}>
                            <td>{liste.idAnnonce}</td>
                            <td>{liste.dateHeure}</td>
                            <td>{liste.description}</td>
                            <td>{liste.imatricule}</td>
                            <td>{liste.nomCategorie}</td>
                            <td>{liste.nomMarque}</td>
                            <td>{liste.nomCarburant}</td>
                            <td>{liste.nomModel}</td>
                            <td>{liste.nomBoiteDeVitesse}</td>
                            <td>{liste.nomCouleur}</td>
                            <td>{liste.nomUtilisteur}</td>
                            <td>{liste.nomLieu}</td>
                            <td>{liste.annee}</td>
                            <td>{liste.prix}</td>
                            <td>{liste.pourcentage}</td>
                            <td>{liste.etatAnnonce}</td>
                            <td>
                                {liste.photoVoiture.map(photo => (
                                    <img key={photo.idPhotoVoiture} src={photo.nomPhotoVoiture} alt="" style={{ width: '100px', height: 'auto' }} />
                                ))}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default ListeHistoriqueAnnonceUtilisateur;
