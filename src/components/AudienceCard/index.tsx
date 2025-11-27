import type React from 'react';
import './styles.css'

type AudienceCardProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

export const AudienceCard: React.FC<AudienceCardProps> = ({ icon, title, items }) => {
  return (
    <div className="audience-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <ul>
        {items.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
