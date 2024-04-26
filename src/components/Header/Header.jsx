import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
    <div className="header-container">
        <img src="/Logo.png" alt="Logo" />
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A Propos</Link></li>
            </ul>
        </nav>
    </div>
</header>
  )
}
