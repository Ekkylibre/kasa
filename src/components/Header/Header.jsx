import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="/Logo.png" alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">A Propos</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
