import logoImg from '../../assets/carrierPilot.png';
import "./styles.css";

type BrandProps = {
  variant?: "default" | "navbar" | "hero";
};

export const Brand = ({ variant = "default" }: BrandProps) => {
  return (
    <span className={`brand brand--${variant}`}>
      <img src={logoImg} alt="Logo CarrierPilot" className="brand__icon" />
      <h1 className="brand__text">
        CarrierPilot<span className="brand__ai">.AI</span>
      </h1>
    </span>
  );
};
