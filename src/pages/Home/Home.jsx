import './Home.css';

export default function Home() {
    return (<div>
        <header>
            <div className="header-container">
                <img src="../../public/Logo.png" alt="Logo" />
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>A Propos</li>
                    </ul>
                </nav>
            </div>
        </header>
        <footer>
            <div className="footer-container">
                    <img src="../../public/Small_logo.png" alt="Logo" />
                    <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    </div>
    )
}
