import React, { useEffect, useState } from 'react';
import './css/ListeUtilisateurCss.css';
import { Link } from 'react-router-dom';

export const ListeUtilisateur = () => {
    const [ListeUtile, setListeUtile] = useState([]);

    useEffect(() => {
        fetch('https://2emvaguesprojo-production.up.railway.app/utilisateurs/')
            .then(res => res.json())
            .then((result) => {
                setListeUtile(result);
            });
    }, []);

    const handleClick = (id) => {
        console.log(id);
        localStorage.setItem("idReceive", id);
    }

    return (
        <div className='Mere'>
            <h4 className='h4'>Message</h4>
            <div className="mere">
                    {ListeUtile.map(liste => (
                        <div key={liste.idUtilisateur}>
                                <Link to="/Message">
                                    <div onClick={() => handleClick(liste.idUtilisateur)} className='BlockUtilisateur'>
                                    
                                        <div class="PhotoProfil"></div>
                                        <p class="nomUtilisateur">{liste.nomUtilisateur}</p>
                                    
                                    </div>
                                </Link>
                        </div>
                    ))}
                
            </div>
        </div>
    );
};
