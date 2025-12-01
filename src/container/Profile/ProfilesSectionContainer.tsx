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
  const navigate = useNavigate();

  useEffect(() => {
    api.get<ProfileResponse>("/perfis/").then((res) => {
      setProfiles(res.data.results);
    });
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
      const res = await api.post<ProfileFromApi>("/perfis/", values);
      setProfiles((prev) => [...prev, res.data]);
      //Criar roadmap aqui
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
        profiles={profiles.map((p) => ({
          id: p.id,
          title: p.name,
          progress: p.progress,
          description: p.objetivo_pessoal,
          createdAt: new Date(p.criado_em).toLocaleDateString("pt-BR"),
          lastAccess: p.last_access ?? "-",
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
