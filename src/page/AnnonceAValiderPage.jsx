import {Header , Footer} from './../component/Header';
import './css/AppAffichage.css';
import {NavBar} from '../component/NavBar';
import {ListeAnnonce} from './../component/AnnonceAValider'

function Affichage(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><ListeAnnonce/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default Affichage;

