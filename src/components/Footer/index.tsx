import { Brand } from '../Brand'
import './styles.css'

export const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <Brand className="footer-logo" />
              </div>
              <p>Mentoria digital para o futuro do trabalho</p>
            </div>
            <div className="footer-links">
              <h4>Links</h4>
              <ul>
                <li><a href="#how-it-works">Como funciona</a></li>
                <li><a href="#for-who">Para quem é</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <ul>
                <li><i className="fas fa-envelope"></i> gabrielfelipecarvalho1@gmail.com</li>
                <li><i className="fas fa-phone"></i> (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CarrierPilot.AI. Todos os direitos reservados.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
  )
}