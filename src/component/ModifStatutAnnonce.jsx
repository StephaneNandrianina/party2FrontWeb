import React, { useEffect, useState } from 'react';
import './css/Model.css';
import '../assets/bootstrap/css/bootstrap.min.css';

export function ListeLieu() {
  const[ListeLieu,setListeLieu] = useState([])

  useEffect(()=>{
    fetch('https://projsbmrrj1-production.up.railway.app/lieux')
    .then(res=>res.json())
    .then((result)=>{
      setListeLieu(result);
    }
    ) 
  }, [])
   
  return (
    <div className="container mt-5" style={{marginLeft:'-40px'}}>
            <h2 style={{ marginBottom: '1rem', fontSize: '2rem',textAlign:'center' }}>Statut Annonce</h2>
            <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
    <thead>
        <tr>
            <th style={{ backgroundColor: 'darkGray', padding: '0.5rem', textAlign: 'center', color: 'rgb(237, 237, 247)', borderBottom: '1px solid white' }}>Numero</th>
            <th style={{ backgroundColor: 'darkGray', padding: '0.5rem', textAlign: 'center', color: 'rgb(237, 237, 247)', borderBottom: '1px solid white' }}>Date Annonce </th>
            <th style={{ backgroundColor: 'darkGray', padding: '0.5rem', textAlign: 'center', color: 'rgb(237, 237, 247)', borderBottom: '1px solid white' }}>Vendu </th>
            <th style={{ backgroundColor: 'darkGray', padding: '0.5rem', textAlign: 'center', color: 'rgb(237, 237, 247)', borderBottom: '1px solid white' }}>Delete</th>
        </tr>
    </thead>
    <tbody>
        <tr style={{ backgroundColor: 'white', textAlign: 'center', padding: '40px' }}>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}> 1 </td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>23-11-2024</td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}><button type="button" className="btn btn-success"> OK </button></td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}><button type="button" className="btn btn-danger">Supprimer</button></td>
        </tr>
        <tr style={{ backgroundColor: 'white', textAlign: 'center', padding: '40px' }}>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}> 2 </td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>23-11-2024</td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}><button type="button" className="btn btn-success"> OK </button></td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}><button type="button" className="btn btn-danger">Supprimer</button></td>
        </tr>
        <tr style={{ backgroundColor: 'white', textAlign: 'center', padding: '40px' }}>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}> 3 </td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>23-11-2024</td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}><button type="button" className="btn btn-success"> OK </button></td>
            <td style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}><button type="button" className="btn btn-danger">Supprimer</button></td>
        </tr>
    </tbody>
</table>



            </div>
    </div>
    
  );
}
