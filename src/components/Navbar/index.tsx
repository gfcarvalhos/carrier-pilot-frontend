import "./styles.css";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <h1>
            CarrierPilot<span className="ai-text">.AI</span>
          </h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#how-it-works">Como funciona</a></li>
            <li><a href="#for-who">Para quem é</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <button className="mobile-menu-btn" id="mobileMenuBtn">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};
