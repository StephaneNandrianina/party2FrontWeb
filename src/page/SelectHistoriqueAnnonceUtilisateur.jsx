import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import {ListeHistoriqueAnnonceUtilisateur} from '../component/ListeHistoriqueAnnonceUtilisateur';
import {NavBar} from '../component/NavBar';

function selectHistoriqueAnnonceUtilisateur(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><ListeHistoriqueAnnonceUtilisateur/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default selectHistoriqueAnnonceUtilisateur;
