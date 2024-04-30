import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import './accommodation.css';

// Importer la bibliothèque Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Tag from "../../components/tag/Tag";


export default function Accommodation() {
    const { id } = useParams();
    const [accommodation, setAccommodation] = useState(null);
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const handleNextImage = () => {
        setCurrentIndex((currentIndex + 1) % accommodation.pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((currentIndex - 1 + accommodation.pictures.length) % accommodation.pictures.length);
    };

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
                    <div className="carrousel">
                        <div className="counter">{currentIndex + 1}/{accommodation.pictures.length}</div>
                        <img className="accommodation-img" src={accommodation.pictures[currentIndex]} alt={accommodation.title} />
                        <svg className="chevron-left" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handlePrevImage}>
                            {<svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                            </svg>
                            }
                        </svg>
                        <svg className="chevron-right" width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNextImage}>
                            {<svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                            </svg>
                            }
                        </svg>
                    </div>
                    <div className="accommodation-info">
                        <div>
                            <h2>{accommodation.title}</h2>
                            <p>{accommodation.location}</p>
                            <Tag tags={accommodation.tags} />
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