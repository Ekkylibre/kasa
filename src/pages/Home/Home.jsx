import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
    return (<div>
        <Header />
        <footer>
            <div className="footer-container">
                    <img src="../../public/Small_logo.png" alt="Logo" />
                    <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    </div>
    )
}
