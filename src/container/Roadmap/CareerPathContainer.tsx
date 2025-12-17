import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import type { RoadmapResponse, RecomendacaoResponse } from '../../types/carreira';
import { RoadmapSection } from '../../components/RoadmapSection';
import { useParams } from 'react-router-dom';

export const CareerRoadmapContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<RoadmapResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

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

  if (!id) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>Perfil não encontrado.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>Carregando roadmap...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p>{error ?? 'Nenhum dado de carreira disponível.'}</p>
      </div>
    );
  }

  const progressoPercentual = data.progresso_percentual ?? 0;
  const etapaAtual = data.etapa_atual ?? 1;
  const totalEtapas =
    data.total_etapas ?? (data.atividades.length > 0 ? data.atividades.length : 1);

  console.log(data);
  return (
    <main className="gradient-bg min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12">
        <RoadmapSection
          tema={data.tema}
          atividades={data.atividades}
          progressoPercentual={progressoPercentual}
          etapaAtual={etapaAtual}
          totalEtapas={totalEtapas}
        />
      </div>
  </main>
  );
};
