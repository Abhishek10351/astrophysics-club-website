import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navigation">
            <picture className="nav-logo">
                <img
                    src=""
                    alt="Astrophysics Club Logo"
                />
            </picture>
            <ul className="nav-links">
                <li className="nav-link">
                    <a href="/">Home</a>
                </li>
                <li className="nav-link">
                    <a href="/">Projects</a>
                </li>
                <li className="nav-link">
                    <a href="/">Crew</a>
                </li>
            </ul>
        </nav>
    );
}
