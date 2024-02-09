// MyChartComponent.jsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const MyChartComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://2emvaguesprojo-production.up.railway.app/vente-par-mois')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Erreur lors de la récupération des données', error));
    }, []);

    return (
        <div>
            <h2>Statistique des Ventes par Mois</h2>
            <Bar
                data={{
                    labels: data.map(entry => entry.mois_lettre),
                    datasets: [{
                        label: 'Nombre de Ventes par Mois',
                        data: data.map(entry => entry.nombreVentes),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }],
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    );
};

export default MyChartComponent;
