import "./styles.css";
import { Brand } from "../Brand";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../../context/Auth/useAuth";
import { useState } from "react";

export const Navbar = () => {
  const { access, logout } = useAuth();
  const isLoggedIn = !!access;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="brand-link" onClick={closeMenu}>
            <Brand variant="navbar" />
          </Link>
        </div>

        <nav className="nav">
          {isLoggedIn ? (
            <>
              <ul className={isMenuOpen ? "show" : ""}>
                <li>
                  <Link to="/profile" onClick={closeMenu}>
                    Meus Perfis
                  </Link>
                </li>
                <li>
                  <Link to="/settings" onClick={closeMenu}>
                    Configurações
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="logout-btn"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i> Sair
                  </button>
                </li>
              </ul>

              <button
                className="mobile-menu-btn"
                type="button"
                onClick={toggleMenu}
              >
                <i className="fas fa-bars"></i>
              </button>
            </>
          ) : (
            <>
              <ul className={isMenuOpen ? "show" : ""}>
                <li>
                  <HashLink smooth to="/#how-it-works" onClick={closeMenu}>
                    Como funciona
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#for-who" onClick={closeMenu}>
                    Para quem é
                  </HashLink>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>
                    Contato
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="btn-login"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#demo"
                    className="btn-signup"
                    onClick={closeMenu}
                  >
                    Sign up
                  </HashLink>
                </li>
              </ul>

              <button
                className="mobile-menu-btn"
                type="button"
                onClick={toggleMenu}
              >
                <i className="fas fa-bars"></i>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
