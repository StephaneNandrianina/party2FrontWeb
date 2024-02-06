import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { InsererMarque } from '../component/InsertMarque';
import {NavBar} from '../component/NavBar';

function InsertionMarque(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><InsererMarque/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionMarque;