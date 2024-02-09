import React, { useEffect, useState } from 'react';
import './css/AnnonceCss.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeAnnonce() {
    const [listeAnnonce, setListeAnnonce] = useState([]);
    const [nomMarque, setMarque] = useState('');

    useEffect(() => {
        fetch('https://2emvaguesprojo-production.up.railway.app/annonces/listeAnnonceAModifier')
            .then(res => res.json())
            .then((result) => {
                setListeAnnonce(result);
            });
    }, []);

    const validerAnnonce = (idAnnonce) => {
        fetch(`https://2emvaguesprojo-production.up.railway.app/validationAnnonce/validerAnnonce/${idAnnonce}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nomMarque })
        })
            .then(() => {
                setMarque('');
                console.log('Valider avec succès');
                // Mettez à jour l'état pour refléter les annonces modifiées
                setListeAnnonce(prevListeAnnonce => prevListeAnnonce.map(annonce => {
                    if (annonce.idAnnonce === idAnnonce) {
                        return { ...annonce, etatAnnonce: 1 };
                    }
                    return annonce;
                }));
            })
            .catch(error => console.error('Erreur lors de la validation de l\'annonce', error));
    };

    return (
        <div className="container mt-5">
            <h2>Liste des annonces</h2>
            <div >
                        {listeAnnonce.map(liste => (
                            // Ajoutez une condition pour ne rendre que les annonces avec etatAnnonce égal à 0
                            liste.etatAnnonce === 0 && (
                                <div className='ChaqueDiv' key={liste.idAnnonce}>
                                    <ul>
                                        <div className='DivList'>
                                            <li> <h4>{liste.nomCreateur}</h4> </li>
                                        </div>
                                        <div className='DivList'>
                                            <li>{liste.description}</li>
                                        </div>
                                        <div className='DivList'>
                                            <li> à {liste.nomLieu}</li>
                                            <li> de l'annee : {liste.annee}</li>
                                        </div >
                                        <div className='DivList'>
                                            <li><h6>{liste.prix}Ariary</h6></li>
                                        </div>
                                        <li className='Val'>
                                            <input type="submit" value="Valider" onClick={() => validerAnnonce(liste.idAnnonce)} />
                                        </li>
                                    </ul>
                                </div>
                            )
                        ))}
                 
            </div>
        </div>
    );
}

