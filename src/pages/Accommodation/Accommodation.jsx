import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import './accommodation.css';
import Tag from "../../components/tag/Tag";
import Collapse from "../../components/collapse/Collapse";
import Stars from "../../components/stars/Stars";

export default function Accommodation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accommodation, setAccommodation] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../src/assets/data/data.json');
                const jsonData = await response.json();
                const selectedAccommodation = jsonData.find(item => item.id === id);
                if (!selectedAccommodation) {
                    navigate('/error');
                    return;
                }
                setAccommodation(selectedAccommodation);
            } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
            }
        };

        fetchData();
    }, [id, navigate]);

    const handleNextImage = () => {
        setCurrentIndex((currentIndex + 1) % accommodation.pictures.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((currentIndex - 1 + accommodation.pictures.length) % accommodation.pictures.length);
    };

    return (
        <>
            <Header />
            {accommodation && (
                <main>
                    <div className="main-container">
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
                                <Stars rating={accommodation.rating} />
                            </div>
                        </div>
                        <div className="collapse-container">
                            <Collapse title="Description">
                                <p>{accommodation.description}</p>
                            </Collapse>
                            <Collapse title="Équipements">
                                <ul className="equipment">
                                    {accommodation.equipments.map(equipment => (
                                        <li key={equipment}>{equipment}</li>
                                    ))}
                                </ul>
                            </Collapse>
                        </div>
                    </div>
                </main>
            )}
            <Footer />
        </>
    );
}