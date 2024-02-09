import { Message } from "../component/MessagePage";
import './css/AppAffichage.css';
import {NavBar} from '../component/NavBarFront';
import {Header , Footer} from '../component/HeaderFront';

export const MessagePar = () => {
    return(
        <>
            <Header/>
            <div className='row'>
                <div className='col-md-4'><NavBar/></div>
                <div className='col-md-8'><Message/></div>
            </div>
            <Footer/>
        </>
    );
}