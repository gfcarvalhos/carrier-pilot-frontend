import "./styles.css";
import logoImg from '../../assets/carrierPilot.png'

export const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logoImg} alt="CarrierPilot Logo" className="logo-icon" />
          <h1>
            CarrierPilot<span className="ai-text">.AI</span>
          </h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#how-it-works">Como funciona</a></li>
            <li><a href="#for-who">Para quem é</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#login" className="btn-login">Login</a></li>
            <li><a href="#signup" className="btn-signup">Sign up</a></li>
          </ul>
          <button className="mobile-menu-btn" id="mobileMenuBtn">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};
