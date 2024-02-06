import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


 /* Login.css */
 const loginContainer = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'rgb(237, 237, 247)',
};  

  
const loginForm = {
    width: '600px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius:'10px',
    backgroundColor: 'rgb(213, 213, 219)',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    
    
};

const Login = () => {
    const [nomUtilisateur, setnomUtilisateur] = useState('admin@gmail.com');
    const [mdp, setmdp] = useState('0000'); 
    const navigate = useNavigate();

    const Inserer = async (e) => {
        e.preventDefault();
        const lieu = { nomUtilisateur, mdp }; 
    
        try {
            const response = await fetch('http://projsbmrrj1-production.up.railway.app/utilisateurs/verifierUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(lieu),
            });
    
            if (!response.ok) {
                throw new Error(`Erreur lors de la requête : ${response.status}`);
            } else {
                const responseData = await response.text();
                
                localStorage.setItem("token", responseData);
                console.log(localStorage.getItem("token"));
                navigate('/InsertionBoiteDeVitesse');
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la requête :', error.message);
            // Vous pouvez ajouter ici la gestion de l'erreur, par exemple afficher un message à l'utilisateur.
        }
    };
    

    return (
       
           <div style={loginContainer}>
                    <form style={loginForm} onSubmit={Inserer}>
                        <div style={{ fontSize: '30px', marginBottom: '20px' ,color:'rgb(17, 17, 75)',marginLeft:'40%'}}><b>Login</b></div>
                        <div className="mb-3"> 
                            <input type="text" className="form-control" placeholder="Entrer votre Email" value={nomUtilisateur} onChange={(e) => setnomUtilisateur(e.target.value)} />
                        </div>
                        <div className="mb-3" style={{marginTop:'40px'}}>
                            <input type="password" className="form-control" placeholder="Entrer votre de passe" value={mdp} onChange={(e) => setmdp(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success" style={{width:'300px',marginTop:'30px',marginLeft:'20%'}}>
                            Connexion 
                        </button>
                    </form>
                   
             </div>
      
    );
};
export default Login;

 