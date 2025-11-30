import type React from 'react';
import './styles.css'
import { ProfileCard } from './ProfileCard';

type Profile = {
  id: string;
  title: string;
  progress: number;
  description: string;
  createdAt: string;
  lastAccess: string;
};

type ProfilesSectionProps = {
  profiles: Profile[];
  onCreateProfile: () => void;
  onContinue: (id: string) => void;
  onEdit: (id: string) => void;
  onExport: (id: string) => void;
  onDelete: (id: string) => void;
};

export const ProfileSection: React.FC<ProfilesSectionProps> = ({
  profiles,
  onCreateProfile,
  onContinue,
  onEdit,
  onExport,
  onDelete,
}) => {
  return (
    <section className="profiles-section" id="my-profiles">
      <div className="section-header-profile">
        <h2>Meus Perfis de Carreira</h2>
        <button className="btn btn-primary" onClick={onCreateProfile}>
          <i className="fas fa-plus" /> Criar Novo Perfil
        </button>
      </div>

      {profiles.length === 0 ? (
        <p className='profiles-not-created'>Você ainda não criou nenhum perfil. Clique em "Criar Novo Perfil".</p>
      ) : (
      <div className="profiles-grid">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            title={profile.title}
            progress={profile.progress}
            description={profile.description}
            createdAt={profile.createdAt}
            lastAccess={profile.lastAccess}
            ctaLabel={profile.progress > 0 ? "Continuar" : "Iniciar"}
            onContinue={() => onContinue(profile.id)}
            onEdit={() => onEdit(profile.id)}
            onExport={() => onExport(profile.id)}
            onDelete={() => onDelete(profile.id)}
          />
        ))}
      </div>
      )}
    </section>
  )
}