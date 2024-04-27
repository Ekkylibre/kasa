import { useEffect, useState } from 'react';
import './card.css';

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
                {data.map(item => (
                    <li key={item.id}>
                        <a href="">
                            <div>
                                <img src={item.cover} alt={item.title} />
                                <h2>{item.title}</h2>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
  )
}
