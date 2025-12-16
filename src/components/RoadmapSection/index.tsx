import type React from 'react';
import type { Atividade } from '../../types/carreira';
import { Activities } from './Activities';
import './styles.css';

type RoadmapProps = {
  tema: string;
  atividades: Atividade[];
  progressoPercentual: number; 
  etapaAtual: number;          
  totalEtapas: number;         
};

export const RoadmapSection: React.FC<RoadmapProps> = ({
  tema,
  atividades,
  progressoPercentual,
  etapaAtual,
  totalEtapas,
}) => {
  const progressoNormalizado = Math.min(Math.max(progressoPercentual, 0), 100);
  const atividadesOrdenadas = [...atividades].sort(
    (a, b) => a.prioridade - b.prioridade
  );
  return (
    <section className="roadmap-section">
      <header className="roadmap-header">
        <h2>Carreira em {tema}</h2>
        <p>
          Sua jornada estratégica para dominar os fundamentos e avançar na carreira.
        </p>

        <div className="roadmap-progress">
          <div className="roadmap-progress-header">
            <span className="roadmap-progress-label">
              {progressoNormalizado}% completo
            </span>
            <span className="roadmap-progress-step">
              Etapa {etapaAtual} de {totalEtapas}
            </span>
          </div>

          <div className="roadmap-progress-bar">
            <div
              className="roadmap-progress-fill"
              style={{ width: `${progressoNormalizado}%` }}
            />
          </div>
        </div>
      </header>

      <div className="dashboard-roadmap">
        {atividadesOrdenadas.map((atividade, index) => (
          <Activities
            key={atividade.titulo ?? `${atividade.prioridade}-${index}`}
            atividade={atividade}
            index={index}
            etapaAtual={etapaAtual}
          />
        ))}
      </div>
    </section>
  );
};
