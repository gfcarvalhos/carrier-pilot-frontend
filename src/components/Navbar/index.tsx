import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">CarrierPilot</div>

      <nav className="nav-links">
        <Link to="/">Início</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>

      <button className="cta-btn">
        Começar Agora
      </button>
    </header>
  );
};
