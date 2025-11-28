import "./styles.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { DemoForm } from "../../components/DemoForm";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { ForWhoSection } from "./sections/ForWhoSection";
import { FeatureSection } from "./sections/FeatureSection";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <HowItWorksSection />
      <ForWhoSection />
      <FeatureSection />
      <DemoForm />
      <Footer />
    </div>
  );
};

export default Home;
