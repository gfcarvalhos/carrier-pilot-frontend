import "./styles.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Step } from "../../components/Step";
import { steps } from "../../components/Step/data"
import { SectionHeader } from "../../components/SectionHeader";
import { AudienceCard } from "../../components/AudienceCard";
import { audCards } from "../../components/AudienceCard/data"
import { Feature } from "../../components/Feature";
import { features } from "../../components/Feature/data";
import { DemoForm } from "../../components/DemoForm";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <SectionHeader
              title="Como funciona"
              subtitle={`Transformamos sua jornada profissional em ${steps.length} etapas simples`}
          />
          <div className="steps-container">
            {steps.map((s, i) => <Step {...s} key={i} />)}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="for-who" id="for-who">
        <div className="container">
          <SectionHeader
              title="Para quem é o CarrierPilot.AI?"
              subtitle={`Soluções personalizadas para diferentes perfis`}
          />
          <div className="audience-cards">
            {audCards.map((c, i) => <AudienceCard {...c} key={i}/>)}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <SectionHeader
              title="Recursos inteligentes"
              subtitle={`Tecnologia avançada para seu desenvolvimento`}
          />
          <div className="audience-cards">
            {features.map((c, i) => <Feature {...c} key={i}/>)}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <DemoForm />
      <Footer />
    </div>
  );
};

export default Home;
