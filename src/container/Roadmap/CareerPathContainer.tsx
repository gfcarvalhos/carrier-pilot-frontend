import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import type { RoadmapResponse, RecomendacaoResponse } from '../../types/carreira';
import { useParams } from 'react-router-dom';
import "./styles.css";

export const CareerRoadmapContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<RoadmapResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError('Perfil não encontrado.');
      return;
    }

    let isMounted = true;

    const fetchRoadmap = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<RecomendacaoResponse>(`/recomendacoes/${id}/`);

        if (!isMounted) return;
        const rec = response.data;

        if (!rec) {
          setData(null);
          return;
        }
        
        const mapped: RoadmapResponse = {
          tema: rec.tema,
          subtema: rec.subtema ?? rec.payload_ia.subtema,
          descricao: rec.descricao ?? rec.payload_ia.descricao,
          recursos: rec.recursos?.length ? rec.recursos : rec.payload_ia.recursos,
          atividades: rec.payload_ia.atividades ?? [],
          progresso_percentual: undefined,
          etapa_atual: undefined,
          total_etapas: undefined,
        };

        setData(mapped);
      } catch (err) {
        if (!isMounted) return;
        setError('Não foi possível carregar seu roadmap no momento.');
        console.error(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRoadmap();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="roadmap-section">
        <div className="roadmap-header">
          <p>Carregando roadmap...</p>
        </div>
      </section>
    );
  }

  if (!id || error || !data) {
    return (
      <section className="roadmap-section">
        <div className="roadmap-header">
          <p>{error ?? 'Nenhum dado de carreira disponível.'}</p>
        </div>
      </section>
    );
  }

  const progressoPercentual = data.progresso_percentual ?? 30;
  const etapaAtual = data.etapa_atual ?? 2;
  const totalEtapas = data.total_etapas ?? 5;

  return (
    <section className="roadmap-section">
      <div className="roadmap-header">
        <h1>{data.tema}</h1>
        <p>{data.descricao}</p>

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

      {/* Trilho de fases - usando atividades do backend */}
      <div className="roadmap-phases-wrapper">
        <div className="roadmap-phases">
          {/* Fase 1 – concluída */}
          <div className="phase-connector phase-completed">
            <div className="phase-card">
              <div className="phase-card-header phase-completed-header">
                <div className="phase-icon phase-icon-completed">✓</div>
                <h3>1. Explorar</h3>
              </div>

              <h4>{data.subtema || 'Fundamentos'}</h4>
              <p>{data.descricao}</p>

              <div className="phase-resources">
                {data.recursos?.slice(0, 2).map((recurso, index) => (
                  <a key={index} href={recurso.url || '#'}>
                    <span>{'📘'}</span> {recurso.titulo }
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Fase 2 – atual */}
          <div className="phase-connector phase-current">
            <div className="phase-card phase-card-current">
              <div className="phase-card-header phase-current-header">
                <div className="phase-icon phase-icon-current">⚡</div>
                <h3>2. Aprender</h3>
              </div>

              <h4>{data.subtema || 'Ferramentas'}</h4>
              <p>{data.descricao}</p>

              <div className="phase-resources">
                {data.recursos?.slice(2, 4).map((recurso, index) => (
                  <a key={index} href={recurso.url || '#'}>
                    <span>{'🎥'}</span> {recurso.titulo}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Fases futuras - estáticas por enquanto */}
          <div className="phase-connector">
            <div className="phase-card phase-card-next">
              <div className="phase-card-header phase-next-header">
                <div className="phase-icon phase-icon-locked">🔒</div>
                <h3>3. Praticar</h3>
              </div>
              <h4>Projetos Práticos</h4>
              <p>Implemente projetos reais.</p>
            </div>
          </div>

          <div className="phase-connector">
            <div className="phase-card phase-card-next">
              <div className="phase-card-header phase-next-header">
                <div className="phase-icon phase-icon-locked">🔒</div>
                <h3>4. Aplicar</h3>
              </div>
              <h4>Portfólio Profissional</h4>
              <p>Construa seu portfólio.</p>
            </div>
          </div>

          <div className="phase-card phase-card-next">
            <div className="phase-card-header phase-next-header">
              <div className="phase-icon phase-icon-locked">🔒</div>
              <h3>5. Avançar</h3>
            </div>
            <h4>Especialização</h4>
            <p>Especialize-se na área.</p>
          </div>
        </div>
      </div>

      {/* Bloco Recomendações da IA - usando atividades */}
      <section className="ai-recommendations">
        <h2>
          <span className="ai-bolt">⚡</span> Recomendações da IA
        </h2>

        <div className="ai-recommendations-grid">
          <div className="ai-card ai-card-indigo">
            <div className="ai-card-header">
              <div className="ai-card-icon">📈</div>
              <h3>Tendência de Mercado</h3>
            </div>
            <p>
              {data.atividades?.[0]?.descricao || 'Habilidades em alta demanda para 2025.'}
            </p>
            <button type="button" className="btn btn-sm">
              Explorar recursos →
            </button>
          </div>

          <div className="ai-card ai-card-green">
            <div className="ai-card-header">
              <div className="ai-card-icon">🔖</div>
              <h3>Próxima Habilidade</h3>
            </div>
            <p>{data.atividades?.[1]?.descricao || 'Foco na próxima etapa do aprendizado.'}</p>
            <button type="button" className="btn btn-sm">
              Ver caminho de aprendizado →
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
