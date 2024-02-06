import { ListeUtilisateur } from "../component/ListeUtilisateur";
import './css/AppAffichage.css';
import {NavBar} from '../component/NavBarFront';
import {Header , Footer} from '../component/Header';

export const Utilisateur = () => {
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><ListeUtilisateur/></div>
            </div>
            <Footer/>
        </>
    );
}