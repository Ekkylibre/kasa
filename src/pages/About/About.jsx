import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './about.css';
import fetchCollapse from '../../fetch/fetchCollapse';

export default function About() {
    const text = "";
    const bannerImg = "/img2.jpg";
    const [data, setData] = useState([]);

    fetchCollapse(setData, setIsOpenMap);

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
