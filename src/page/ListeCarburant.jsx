import {Header , Footer} from '../component/Header';
import {NavBar} from '../component/NavBar';
import './css/ListeCss.css';
import { Liste } from '../component/ListeCarburant';

function InsertionCarburant(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><Liste/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default InsertionCarburant;