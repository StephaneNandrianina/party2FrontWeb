import React from 'react';
import './css/NavBar.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export function NavBar() {
    return(
        <>
            <div className="conteneur">
                <ul className="NavListe">
                    <li className='EnTeteMenu'>Menu</li>
                    <li className='Chaque'><Link to="#">Accueil</Link></li>
                    <li className='Chaque'><Link to="/ListeUtilisateurMessage">Message</Link></li>
                    <li className='Chaque'><Link to="#">Recherche avancé</Link></li>
                    <li className='Chaque'><Link to="#">Historique des annonces</Link></li>
                </ul>
            </div>
        </>
    );
}