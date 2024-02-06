import {Header , Footer} from '../component/Header';
import './css/AppAffichage.css';
import {ListeDesMarques} from '../component/ListeDesMarques';
import {NavBar} from '../component/NavBar';

function selectMarques(){
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><ListeDesMarques/></div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default selectBoiteDeVitesse;