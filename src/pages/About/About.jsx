import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './about.css';

export default function About() {
    const text = "";
    const bannerImg = "/img2.jpg";
    const [data, setData] = useState([]);
    const [isOpenMap, setIsOpenMap] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('src/assets/data/collapse.json');
            const jsonData = await response.json();
            setData(jsonData);
            // Initialiser l'état d'ouverture de chaque collapse à false
            const initialIsOpenMap = {};
            jsonData.forEach(item => {
                initialIsOpenMap[item.id] = false;
            });
            setIsOpenMap(initialIsOpenMap);
        } catch (error) {
            console.error('Erreur lors de la récupération des données JSON :', error);
        }
    };

    const toggleCollapse = (collapseId) => {
        // Inverser l'état d'ouverture du collapse avec l'id donné
        setIsOpenMap(prevState => ({
            ...prevState,
            [collapseId]: !prevState[collapseId]
        }));
    };

    return (
        <>
            <Header />
            <Banner text={text} bannerImg={bannerImg} />
            <main>
                <div className="collapse">
                    {data.map(item => (
                        <Collapse
                            key={item.id}
                            title={item.title}
                            isOpen={isOpenMap[item.id]}
                            toggleCollapse={() => toggleCollapse(item.id)}
                        >
                            <p>{item.content}</p>
                        </Collapse>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}