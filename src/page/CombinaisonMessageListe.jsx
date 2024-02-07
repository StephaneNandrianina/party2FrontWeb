import { Utilisateur } from './ListeUtilisateurPage';
import { Message } from '../component/MessagePage';
import '../assets/bootstrap/css/bootstrap.min.css';

export const  CombinaisonMessage= () => {
    return(
        <>
            <div className='row'>
                <div className='col-md-4'><Utilisateur></Utilisateur></div>
                <div className='col-md-8'><Message></Message></div>
            </div>
            
        </>
    );
}