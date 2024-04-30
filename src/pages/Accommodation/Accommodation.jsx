import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import './accommodation.css';

// Importer la bibliothèque Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function Accommodation() {
    const { id } = useParams();
    const [accommodation, setAccommodation] = useState(null);
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../src/assets/data/data.json');
                const jsonData = await response.json();
                const selectedAccommodation = jsonData.find(item => item.id === id);
                setAccommodation(selectedAccommodation);
            } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
            }
        };

        fetchData();
    }, [id]);

    const toggleCollapse = (collapseType, direction) => {
        if (collapseType === 'description') {
            setDescriptionOpen(!isDescriptionOpen);
        } else if (collapseType === 'equipments') {
            setEquipmentsOpen(!isEquipmentsOpen);
        }
        
        const icon = document.querySelector(`.fa-chevron-up.${collapseType}`);
        if (icon) {
            if (direction === 'up') {
                icon.classList.remove('rotate-down');
                icon.classList.add('rotate-up');
            } else {
                icon.classList.remove('rotate-up');
                icon.classList.add('rotate-down');
            }
        }
    };


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: '#FF6060' }} />);
            } else {
                stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: '#E3E3E3' }} />);
            }
        }
        return stars;
    };

    return (
        <div>
            <Header />
            {accommodation && (
                <main>
                    <img className="accommodation-img" src={accommodation.cover} alt={accommodation.title} />
                    <div className="accommodation-info">
                        <div>
                            <h2>{accommodation.title}</h2>
                            <p>{accommodation.location}</p>
                            <ul className="tag">
                                {accommodation.tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="host">
                            <div className="profile">
                                <p>{accommodation.host.name}</p>
                                <img src={accommodation.host.picture} alt={accommodation.host.name} />
                            </div>
                            <p className="stars">
                                {renderStars(accommodation.rating)}
                            </p>
                        </div>
                    </div>
                    <div className="collapse">
                        <div className="dropdown">
                            <div className="collapse-title">
                                <p>Description</p>
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    onClick={() => toggleCollapse('description', isDescriptionOpen ? 'down' : 'up')}
                                    className={`fa-chevron-up description ${isDescriptionOpen ? 'rotate-down' : 'rotate-up'}`}
                                />

                            </div>
                            {isDescriptionOpen && <p>{accommodation.description}</p>}
                        </div>
                        <div className="dropdown">
                            <div className="collapse-title">
                                <p>Équipements</p>
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    onClick={() => toggleCollapse('equipments', isEquipmentsOpen ? 'down' : 'up')}
                                    className={`fa-chevron-up equipments ${isEquipmentsOpen ? 'rotate-down' : 'rotate-up'}`}
                                />

                            </div>
                            {isEquipmentsOpen && (
                                <ul className="equipment">
                                    {accommodation.equipments.map(equipment => (
                                        <li key={equipment}>{equipment}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                </main>
            )}
            <Footer />
        </div>
    );
}