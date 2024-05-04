import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './error_404.css';

export default function Error() {
    return <>
        <Header />
        <main>
            <div className='error-content'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n’existe pas.</p>
                <Link to="/" className='link'>Retourner sur la page d’accueil</Link>
            </div>
        </main>
        <Footer />
    </>
}