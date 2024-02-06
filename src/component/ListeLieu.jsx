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
    <h2 style={{ marginBottom: '1rem', fontSize: '2rem',textAlign:'center' }}>Inserer votre lieu</h2>
    <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
            <thead>
                <tr>
                    <th style={{ backgroundColor: 'darkGray', padding: '0.5rem', textAlign: 'center',color:'rgb(237, 237, 247)' }}>Nom du lieu</th>
                </tr>
            </thead>
            <tbody>
                {ListeLieu.map(liste => (
                    <tr key={liste.id} style={{ backgroundColor: (ListeLieu.indexOf(liste) % 2 === 0) ? '#f2f2f2' : 'white' }}>
                        <td style={{ padding: '0.5rem', textAlign: 'left' }}> ...   {liste.nomLieu}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
    
  );
}
