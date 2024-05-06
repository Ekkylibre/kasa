import { useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import useFetchData from '../../fetch/fetchData';

export default function Card() {
    const [data, setData] = useState([]);

    useFetchData(setData);
    
    return (
        <main>
            <div className='main-content'>
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
            </div>
        </main>
    );
}
