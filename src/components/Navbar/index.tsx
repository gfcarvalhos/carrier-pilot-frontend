import "./styles.css";
import { Brand } from "../Brand";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { useAuth } from "../../context/Auth/useAuth";

export const Navbar = () => {
  const { access, logout } = useAuth();
  const isLoggedIn = !!access;
  return (
    <header className="header">
      <div className="container">
        <div className="logo"> 
          <Link to="/" className="brand-link"> 
            <Brand className="navbar-logo" /> 
          </Link> 
        </div>
        <nav className="nav">
          {isLoggedIn ? (
            <>
            <ul>
              <li><Link to="/profile">Meus Perfis</Link></li>
              <li><Link to="/settings">Configurações</Link></li>
              <li><a className="logout-btn"><i className="fas fa-sign-out-alt" onClick={logout}></i> Sair</a></li>
            </ul>
              <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={logout}>
                    <i className="fas fa-bars"></i>
                </button>
            </>
          ) : (
            <>
              <ul>
                <li><HashLink smooth to="/#how-it-works">Como funciona</HashLink></li>
                <li><HashLink smooth to="/#for-who">Para quem é</HashLink></li>
                <li><a href="#contact">Contato</a></li>
                <li><Link to="/login" className="btn-login">Login</Link></li>
                <li><HashLink smooth to="/#demo" className="btn-signup">Sign up</HashLink></li>
              </ul>
              <button className="mobile-menu-btn" id="mobileMenuBtn">
                <i className="fas fa-bars"></i>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
