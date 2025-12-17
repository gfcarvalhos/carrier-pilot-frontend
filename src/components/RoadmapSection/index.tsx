// src/components/RoadmapTrail/index.tsx
import type React from "react";
import type { Atividade } from "../../types/carreira";
import "./styles.css";

type RoadmapTrailProps = {
  tema: string;
  subtema?: string;
  descricao: string;
  atividades: Atividade[];
  progressoPercentual: number;
  etapaAtual: number;
  totalEtapas: number;
};

export const RoadmapTrail: React.FC<RoadmapTrailProps> = ({
  tema,
  subtema,
  descricao,
  atividades,
  progressoPercentual,
  etapaAtual,
  totalEtapas,
}) => {
  const atividadesOrdenadas = [...atividades].sort(
    (a, b) => a.prioridade - b.prioridade
  );

  return (
    <section className="roadmap-section">
      <div className="roadmap-header">
        <h1>{tema}</h1>
        <p>{descricao}</p>

        <div className="roadmap-progress">
          <div className="roadmap-progress-header">
            <span className="roadmap-progress-label">
              {progressoPercentual}% completo
            </span>
            <span className="roadmap-progress-step">
              Etapa {etapaAtual} de {totalEtapas}
            </span>
          </div>

          <div className="roadmap-progress-bar">
            <div
              className="roadmap-progress-fill"
              style={{ width: `${progressoPercentual}%` }}
            />
          </div>
        </div>
      </div>

      <div className="roadmap-phases-wrapper">
        <div className="roadmap-phases">
          {atividadesOrdenadas.map((atividade, index) => {
            const faseNumero = index + 1;
            const isCompleted = faseNumero < etapaAtual;
            const isCurrent = faseNumero === etapaAtual;

            const connectorClass = [
              "phase-connector",
              isCompleted && "phase-completed",
              isCurrent && "phase-current",
            ]
              .filter(Boolean)
              .join(" ");

            const cardClass = [
              "phase-card",
              isCurrent && "phase-card-current",
              !isCompleted && !isCurrent && "phase-card-next",
            ]
              .filter(Boolean)
              .join(" ");

            const headerClass = [
              "phase-card-header",
              isCompleted && "phase-completed-header",
              isCurrent && "phase-current-header",
              !isCompleted && !isCurrent && "phase-next-header",
            ]
              .filter(Boolean)
              .join(" ");

            const icon =
              isCompleted ? "✓" : isCurrent ? "⚡" : "🔒";
            const iconClass = [
              "phase-icon",
              isCompleted && "phase-icon-completed",
              isCurrent && "phase-icon-current",
              !isCompleted && !isCurrent && "phase-icon-locked",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div key={index} className={connectorClass}>
                <div className={cardClass}>
                  <div className={headerClass}>
                    <div className={iconClass}>{icon}</div>
                    <h3>
                      {faseNumero}. {atividade.titulo}
                    </h3>
                  </div>
                  <h4>{subtema ?? atividade.categoria}</h4>
                  <p>{atividade.descricao}</p>
                  <p className="phase-duration">
                    Duração aproximada: {atividade.duracao_minutos} min
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
