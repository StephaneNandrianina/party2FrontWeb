import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { ListeLieu } from '../component/ListeBoiteDeVitesseComponent';
import {NavBar} from '../component/NavBar';

function ListeDesVit(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><ListeLieu/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default ListeDesVit;