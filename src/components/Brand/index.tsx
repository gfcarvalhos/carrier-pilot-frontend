import logoImg from '../../assets/carrierPilot.png';
import './styles.css';

export const Brand = ({ className = '' }) => {
  return (
    <span className={`hero-brand ${className}`}>
      <img src={logoImg} alt="Logo CarrierPilot" className="logo-icon" />
      <h1>
        CarrierPilot<span className="ai-text">.AI</span>
      </h1>
    </span>
  );
};
