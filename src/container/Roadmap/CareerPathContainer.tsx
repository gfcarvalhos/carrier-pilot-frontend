import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import type { RoadmapResponse, RecomendacaoResponse } from '../../types/carreira';
import { useParams } from 'react-router-dom';
import "./styles.css";
import { RoadmapTrail } from '../../components/RoadmapSection';

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
        console.log(response)
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
  <>
    <RoadmapTrail
      tema={data.tema}
      subtema={data.subtema}
      descricao={data.descricao}
      atividades={data.atividades}
      progressoPercentual={progressoPercentual}
      etapaAtual={etapaAtual}
      totalEtapas={totalEtapas}
    />

    {/* Bloco Recomendações da IA continua aqui, se você quiser manter fora do RoadmapTrail */}
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
            {data.atividades?.[0]?.descricao ||
              "Habilidades em alta demanda para 2025."}
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
          <p>
            {data.atividades?.[1]?.descricao ||
              "Foco na próxima etapa do aprendizado."}
          </p>
          <button type="button" className="btn btn-sm">
            Ver caminho de aprendizado →
          </button>
        </div>
      </div>
    </section>
  </>
);
};
