import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="/Logo.png" alt="Logo"/>
        <nav>
          <ul>
            <li><NavLink to="/" activeclassname="active">Accueil</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">A Propos</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
