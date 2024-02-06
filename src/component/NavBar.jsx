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
                    <li className='Chaque'><Link to="/insertionModel">Inserer Model</Link></li>
                    <li className='Chaque'><Link to="/InsertionCarburant">Inserer Carburant</Link></li>
                    <li className='Chaque'><Link to="/InsertionBoiteDeVitesse">Inserer Boite de vitesse</Link></li>
                    <li className='Chaque'><Link to="/InsertionLieu">Inserer Lieu</Link></li>
                    <li className='Chaque'><Link to="/InsertionMarque">Inserer Marque</Link></li>
                    <li className='Chaque'><Link to="/insertionCategorie">Inserer Categorie</Link></li>
                    <li className='Chaque'><Link to="/statistic">Statistic</Link></li>
                </ul>
            </div>
        </>
    );
}