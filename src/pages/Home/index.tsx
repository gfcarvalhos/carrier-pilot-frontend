import "./styles.css";
import { Navbar } from "../../components/Navbar";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Domine sua evolução profissional com o{" "}
            <span>CarrierPilot</span>
          </h1>

          <p>
            A plataforma que te guia no desenvolvimento da sua carreira através
            de metas, acompanhamento e evolução contínua.
          </p>

          <button className="hero-btn">
            Começar Agora →
          </button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/9068/9068823.png"
          className="hero-image"
          alt="Ícone de destaque"
        />
      </section>

      <section className="benefits">
        <h2>Por que usar o CarrierPilot?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>📌 Organização</h3>
            <p>Mantenha suas metas claras e objetivas.</p>
          </div>

          <div className="benefit-card">
            <h3>📈 Evolução</h3>
            <p>Acompanhe seu crescimento profissional mês a mês.</p>
          </div>

          <div className="benefit-card">
            <h3>🔥 Motivação</h3>
            <p>Receba insights e estímulos para continuar avançando.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
