import './styles.css'
import { Brand } from "../Brand";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-brand">
            <Brand />
          </div>
          <h2>Seu mentor digital para carreira e aprendizado inteligente</h2>
          <p>
            Plataforma de IA que recomenda trilhas de carreira, planos personalizados e oportunidades com base no perfil de cada usuário
          </p>
          <div className="cta-buttons">
            <a href="#demo" className="btn btn-primary">Comece agora</a>
            <a href="#how-it-works" className="btn btn-secondary">Saiba mais</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="dashboard-title">Dashboard CarrierPilot.AI</span>
            </div>
            <div className="dashboard-content">
              <div className="graph"></div>
              <div className="ai-recommendation">
                <div className="ai-icon">🤖</div>
                <div className="ai-text">Recomendando o melhor caminho para você...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
