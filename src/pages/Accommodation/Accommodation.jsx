import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import './accommodation.css';
import Tag from "../../components/tag/Tag";
import Collapse from "../../components/collapse/Collapse";
import Stars from "../../components/stars/Stars";
import Profile from "../../components/profile/Profile";
import AccommodationInfo from "../../components/accommodationInfo/AccommodationInfo";
import Carousel from "../../components/carousel/Carousel";

export default function Accommodation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accommodation, setAccommodation] = useState(null);

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

    return (
        <>
            <Header />
            {accommodation && (
                <main>
                    <div className="main-container">
                        <Carousel accommodation={accommodation} />
                        <div className="accommodation-info">
                            <div>
                                <AccommodationInfo title={accommodation.title} location={accommodation.location} />
                                <Tag tags={accommodation.tags} />
                            </div>
                            <div className="host">
                                <Profile host={accommodation.host} />
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