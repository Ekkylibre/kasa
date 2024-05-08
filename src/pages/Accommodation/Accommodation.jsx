import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AccommodationInfo from "../../components/accommodationInfo/AccommodationInfo";
import Carousel from "../../components/carousel/Carousel";
import Tag from "../../components/tag/Tag";
import Profile from "../../components/profile/Profile";
import Collapse from "../../components/collapse/Collapse";
import Stars from "../../components/stars/Stars";
import './accommodation.css';
import fetchDataId from "../../fetch/fetchDataId";

export default function Accommodation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accommodation, setAccommodation] = useState(null);

    fetchDataId(id, navigate, setAccommodation);

    return (
        <>
            <Header />
            {accommodation && (
                <main>
                    <div className="main-container">
                        <Carousel
                            pictures={accommodation.pictures}
                        />
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
