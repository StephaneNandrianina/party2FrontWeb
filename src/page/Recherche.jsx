import {Header , Footer} from './../component/Header';
import { RechercheFonction } from './../component/RechercheComponent';
import {NavBar} from '../component/NavBar';

function Recheche(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><RechercheFonction/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default Recheche;