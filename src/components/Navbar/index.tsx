import "./styles.css";
import { Brand } from "../Brand";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo"> 
          <Link to="/" className="brand-link"> 
            <Brand className="navbar-logo" /> 
          </Link> 
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#how-it-works">Como funciona</a></li>
            <li><a href="#for-who">Para quem é</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><Link to="/login" className="btn-login">Login</Link></li>
            <li><a href="#demo" className="btn-signup">Sign up</a></li>
          </ul>
          <button className="mobile-menu-btn" id="mobileMenuBtn">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};
