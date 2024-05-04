import './home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';

export default function Home() {
    const text = "Chez vous, partout et ailleurs";
    const bannerImg = "/img1.jpg";

    return (
        <>
            <Header />
            <Banner text={text} bannerImg={bannerImg}/>
            <Card />
            <Footer />
        </>
    );
}
