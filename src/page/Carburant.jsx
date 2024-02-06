import {Header , Footer} from '../component/Header';
import {NavBar} from '../component/NavBar';
import './css/AppAffichage.css';
import { InsererCarburant } from '../component/InsertCarburant';

function InsertionCarburant(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><InsererCarburant/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionCarburant;