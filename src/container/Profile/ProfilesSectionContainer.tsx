import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ProfileSection } from "../../components/ProfileSection";
import { Modal } from "../../components/Modal";
import { NewProfileForm } from "../../components/Modal/NewProfileForm";

type ProfileFromApi = {
  id: string;
  name: string;
  progress: number;
  area_interesse: string;
  objetivo_pessoal: string;
  criado_em: string;
  last_access: string;
};

type Recurso = {
  titulo: string;
  tipo: string;
  url: string;
}

type RecommenderFromApi = {
  id: string;
  usuario: string;
  tema: string;
  subtema: string;
  descricao: string;
  recursos: Recurso[];
  data_gerada: string;
  last_access: string;
};

type RecommenderResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: RecommenderFromApi[];
};

type ProfileResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProfileFromApi[]
}

export const ProfilesContainer: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileFromApi[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isBuilding, setIsBuilding] = useState(false);
  const [recommender, setRecommender] = useState<RecommenderFromApi[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get<ProfileResponse>("/perfis/").then((res) => {
      setProfiles(res.data.results);
    });
    api.get<RecommenderResponse>("/recomendacoes/").then((res) => {
      setRecommender(res.data.results);
    })
  }, []);

  const handleCreateProfile = () => {
    setIsCreateOpen(true);
  };

  const handleCloseCreate = () => {
    setIsCreateOpen(false);
  };

  const handleSubmitNewProfile = async (values: {
    area_interesse: string;
    nivel_experiencia: string;
    objetivo_pessoal: string;
  }) => {
    try {
      setIsBuilding(true);
      await api.post<ProfileFromApi>("/perfis/", values);
      const recRes = await api.get<RecommenderResponse>("/recomendacoes/")
      setRecommender(recRes.data.results);

      setIsCreateOpen(false);
    } catch (err) {
      console.error("Error ao criar perfil", err);
    } finally {
      setIsBuilding(false);
      setIsCreateOpen(false);
    }
  };

  const handleContinue = (id: string) => {
    navigate(`/perfis/${id}/roadmap`);
  };

  const handleEdit = (id: string) => {
    navigate(`/perfis/${id}/edit`);
  };

  const handleExport = (id: string) => {
    api.get(`/perfis/${id}/export`, { responseType: "blob" });
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/perfis/${id}/`);
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <ProfileSection
        profiles={recommender.map((r) => ({
          id: r.id,
          title: r.tema,
          progress: 0,
          description: r.descricao,
          createdAt: new Date(r.data_gerada).toLocaleDateString("pt-BR"),
          lastAccess: r.last_access ?? "-",
        }))}
        onCreateProfile={handleCreateProfile}
        onContinue={handleContinue}
        onEdit={handleEdit}
        onExport={handleExport}
        onDelete={handleDelete}
      />
      <Modal
        isOpen= {isCreateOpen}
        onClose={handleCloseCreate}
        title="Criar novo perfil"
      >
        <NewProfileForm
          onSubmit={handleSubmitNewProfile}
          onCancel={handleCloseCreate}
          isBuilding={isBuilding}
        />
      </Modal>
    </>
  );
};
