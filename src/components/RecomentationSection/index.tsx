import type React from "react";
import "./styles.css";

export type RecommendationCard = {
  id: number;
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
  onClick: () => void;
};

type RecommendationsSectionProps = {
  cards: RecommendationCard[];
};

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({
  cards,
}) => {
  return (
    <section className="recommendations-section" id="recommendations">
      <h2>Recomendações para Você</h2>
      <div className="recommendations-grid">
        {cards.map((card) => (
          <div className="recommendation-card" key={card.id}>
            <div className="recommendation-icon">
              <i className={card.icon} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button
              type="button"
              className="btn btn-sm"
              onClick={card.onClick}
            >
              {card.ctaLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
