import { useEffect, useState } from "react";
import { RecommendationsSection } from "../../components/RecomentationSection";
import { Skeleton } from "../../components/Skeleton";
import { api } from "../../services/api";
import type { Recomendacao, PagedResponse, Recurso } from "../../types/carreira";

export const RecommendationsContainer: React.FC = () => {
  const [cards, setCards] = useState<
    { id: number; icon: string; title: string; description: string; ctaLabel: string; onClick: () => void }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get<PagedResponse<Recomendacao>>("/recomendacoes/");
        const primeira = res.data.results[0];
        if (!primeira || !primeira.recursos || primeira.recursos.length === 0) {
          setCards([]);
          return;
        }

        const recursos = primeira.recursos.slice(0, 3); // 3 primeiros

        const mapped = recursos.map((recurso: Recurso, index: number) => ({
          id: index,
          icon: index === 0 ? "fas fa-bolt"
               : index === 1 ? "fas fa-chart-line"
               : "fas fa-briefcase",
          title: recurso.titulo,
          description: recurso.tipo,     
          ctaLabel: "Explorar",
          onClick: () => {
            if (recurso.url) {
              window.open(recurso.url, "_blank");
            }
          },
        }));

        setCards(mapped);
      } catch (err) {
        console.error("Erro ao carregar recomendações", err);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  if (cards.length === 0) {
    return null;
  }

  return <RecommendationsSection cards={cards} />;
};
