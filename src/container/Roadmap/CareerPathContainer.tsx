// src/features/carreira/CareerRoadmapContainer.tsx
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import type { RoadmapResponse } from '../../types/carreira';
import { RoadmapSection } from '../../components/RoadmapSection';
//import { ResourceSection } from './ResourceSection';

export const CareerRoadmapContainer: React.FC = () => {
  const [data, setData] = useState<RoadmapResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchRoadmap = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<RoadmapResponse>('/recomendacoes/');
        if (!isMounted) return;

        setData(response.data);
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
  }, []);

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

  return (
    <main className="career-roadmap-page">
      <RoadmapSection
        tema={data.tema}
        atividades={data.atividades}
        progressoPercentual={progressoPercentual}
        etapaAtual={etapaAtual}
        totalEtapas={totalEtapas}
      />
    </main>
  );
};

//<ResourceSection recursos={data.recursos} />