import type React from 'react';
import './styles.css'

type StepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Step: React.FC<StepProps> = ({ icon, title, description }) => {
  return (
    <div className="step">
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
