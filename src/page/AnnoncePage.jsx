import {Header , Footer} from './../component/Header';
import './css/AppAffichage.css';
import {NavBar} from '../component/NavBar';
import { TousAnnonces } from '../component/Annonce';

export function AffichageAnnonce(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><TousAnnonces/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

