import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './about.css';

export default function About() {
    const text = "";
    const bannerImg = "/img2.jpg";
    
    
    return <div>
        <Header />
        <Banner text={text} bannerImg={bannerImg}/>
        <Collapse />
        <Footer />
    </div>
}