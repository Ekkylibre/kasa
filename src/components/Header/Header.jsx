import './header.css';

export default function Header() {
  return (
    <header>
    <div className="header-container">
        <img src="/Logo.png" alt="Logo" />
        <nav>
            <ul>
                <li>Accueil</li>
                <li>A Propos</li>
            </ul>
        </nav>
    </div>
</header>
  )
}
