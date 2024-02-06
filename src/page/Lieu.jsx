import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import { InsererLieu } from '../component/InsertLieu';
import {NavBar} from '../component/NavBar';

function InsertionLieu(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><InsererLieu/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionLieu;