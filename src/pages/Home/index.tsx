import "./styles.css";
import { Navbar } from "../../components/Navbar";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
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

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title">Como funciona</h2>
          <p className="section-subtitle">Transformamos sua jornada profissional em 4 etapas simples</p>

          <div className="steps-container">
            <div className="step">
              <div className="step-icon">🔍</div>
              <h3>Mapear perfil</h3>
              <p>Análise completa de suas habilidades, interesses e objetivos</p>
            </div>

            <div className="step">
              <div className="step-icon">📊</div>
              <h3>Analisar competências</h3>
              <p>Diagnóstico de gaps e pontos fortes em relação ao mercado</p>
            </div>

            <div className="step">
              <div className="step-icon">🛣️</div>
              <h3>Recomendar trilhas</h3>
              <p>Planos personalizados com cursos, habilidades e metas</p>
            </div>

            <div className="step">
              <div className="step-icon">📈</div>
              <h3>Acompanhar progresso</h3>
              <p>Ajustes contínuos com feedback da IA e mentores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="for-who" id="for-who">
        <div className="container">
          <h2 className="section-title">Para quem é o CarrierPilot.AI?</h2>
          <p className="section-subtitle">Soluções personalizadas para diferentes perfis</p>

          <div className="audience-cards">
            <div className="audience-card">
              <div className="card-icon">🎓</div>
              <h3>Universidades</h3>
              <ul>
                <li>Orientar alunos em transição para o mercado</li>
                <li>Alinhar currículos às demandas atuais</li>
              </ul>
            </div>
            <div className="audience-card">
              <div className="card-icon">🏢</div>
              <h3>Empresas</h3>
              <ul>
                <li>Desenvolver talentos internamente</li>
                <li>Mapear competências da equipe</li>
              </ul>
            </div>
            <div className="audience-card">
              <div className="card-icon">👤</div>
              <h3>Indivíduos</h3>
              <ul>
                <li>Planejar mudanças de carreira</li>
                <li>Identificar habilidades em alta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Recursos inteligentes</h2>
          <p className="section-subtitle">Tecnologia avançada para seu desenvolvimento</p>

          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-brain feature-icon"></i>
              <h3>Análise de perfil por IA</h3>
              <p>Diagnóstico completo de habilidades e recomendações personalizadas</p>
            </div>
            <div className="feature">
              <i className="fas fa-project-diagram feature-icon"></i>
              <h3>Planos inteligentes</h3>
              <p>Trilhas de aprendizado adaptáveis ao seu ritmo e objetivos</p>
            </div>
            <div className="feature">
              <i className="fas fa-chart-line feature-icon"></i>
              <h3>Dashboard de progresso</h3>
              <p>Acompanhamento visual de evolução e conquistas</p>
            </div>
            <div className="feature">
              <i className="fas fa-bullseye feature-icon"></i>
              <h3>Recomendações em tempo real</h3>
              <p>Atualizações baseadas nas últimas tendências do mercado</p>
            </div>
            <div className="feature">
              <i className="fas fa-comments feature-icon"></i>
              <h3>Mentoria integrada</h3>
              <p>Orientadores especialistas disponíveis para consultoria</p>
            </div>
            <div className="feature">
              <i className="fas fa-briefcase feature-icon"></i>
              <h3>Oportunidades personalizadas</h3>
              <p>Match com vagas e projetos alinhados ao seu perfil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section className="demo-form" id="demo">
        <div className="container">
          <div className="form-container">
            <h2>Pronto para transformar sua carreira?</h2>
            <p>Solicite uma demonstração gratuita e descubra como podemos ajudar.</p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu melhor e-mail" required />
              </div>
              <div className="form-group">
                <select required defaultValue="">
                  <option value="" disabled>Eu sou...</option>
                  <option value="student">Estudante</option>
                  <option value="professional">Profissional</option>
                  <option value="company">Empresa</option>
                  <option value="university">Universidade</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Solicitar demonstração</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🚀</span>
                <h1>CarrierPilot<span className="ai-text">.AI</span></h1>
              </div>
              <p>Mentoria digital para o futuro do trabalho</p>
            </div>
            <div className="footer-links">
              <h4>Links</h4>
              <ul>
                <li><a href="#how-it-works">Como funciona</a></li>
                <li><a href="#for-who">Para quem é</a></li>
                <li><a href="#features">Recursos</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <ul>
                <li><i className="fas fa-envelope"></i> contato@carrierpilot.ai</li>
                <li><i className="fas fa-phone"></i> (11) 99999-9999</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 CarrierPilot.AI. Todos os direitos reservados.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
