import type React from "react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ProfileWelcomeSection } from "../../components/ProfileWelcomeSection";
import { Skeleton } from "../../components/Skeleton";
import type {
  Recomendacao,
  Progresso,
  PagedResponse,
} from "../../types/carreira";
import type { PerfilFromApi } from "../../types/perfil";

export const WelcomeSectionContainer: React.FC = () => {
  const [profilesCount, setProfilesCount] = useState(0);
  const [activePaths, setActivePaths] = useState(0);
  const [achievements, setAchievements] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [perfisResult, recomResult, progResult] = await Promise.allSettled([
        api.get<PagedResponse<PerfilFromApi>>("/perfis/"),
        api.get<PagedResponse<Recomendacao>>("/recomendacoes/"),
        api.get<PagedResponse<Progresso>>("/progresso/"),
      ]);

      if (perfisResult.status === "fulfilled") {
        const perfis = perfisResult.value.data.results;
        setProfilesCount(perfis.length);
      }

      if (recomResult.status === "fulfilled") {
        const recs = recomResult.value.data.results;
        const filtradas = recs.filter(
          (r) => r.status === "aceita" || r.status === "pendente"
        );
        setActivePaths(filtradas.length);
      }

      if (progResult.status === "fulfilled") {
        const progs = progResult.value.data.results;
        const concluidas = progs.filter(
          (p) => p.status === "concluida"
        );
        setAchievements(concluidas.length);
      }
      } catch (err) {
        console.error("Erro ao carregar dados iniciais", err);
      } finally {
        setIsPageLoading(false);
      }
    };
    load();
  }, []);

return isPageLoading ? (
  <Skeleton />
) : (
  <ProfileWelcomeSection
    userName="Usuário"
    profilesCount={profilesCount}
    activePaths={activePaths}
    achievements={achievements}
  />
);
};