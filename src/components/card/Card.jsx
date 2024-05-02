import { useEffect, useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';

export default function Card() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('src/assets/data/data.json');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Erreur lors de la récupération des données JSON :', error);
        }
    };
    
    return (
        <section>
            <ul>
                {data.map(accommodation => (
                    <li key={accommodation.id}>                     
                        <Link to={`/accommodation/${accommodation.id}`}>
                            <div>
                                <img src={accommodation.cover} alt={accommodation.title} />
                                <h2>{accommodation.title}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
