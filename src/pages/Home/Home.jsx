import './home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Card />
            <Footer />
        </div>

    );
}
