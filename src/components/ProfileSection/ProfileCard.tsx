import type React from 'react';
import './styles.css'

type ProfileCardsProps = {
    title: string;
    progress: number;
    description: string;
    createdAt: string;
    lastAccess: string;
    ctaLabel: string;
    onContinue?: () => void;
    onEdit?: () => void;
    onExport?: () => void;
    onDelete?: () => void;
}

export const ProfileCard: React.FC<ProfileCardsProps> = ({
  title,
  progress,
  description,
  createdAt,
  lastAccess,
  ctaLabel,
  onContinue,
  onEdit,
  onExport,
  onDelete,
}) => {
  return (
      <div className="profile-card">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="progress-badge">
          <span>{progress}%</span>
        </div>
      </div>

      <div className="card-body">
        <p className="profile-description">{description}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="profile-meta">
          <span>
            <i className="fas fa-calendar-alt" /> Criado em: {createdAt}
          </span>
          <span>
            <i className="fas fa-clock" /> Último acesso: {lastAccess}
          </span>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn btn-outline" onClick={onContinue}>
          {ctaLabel}
        </button>
        <div className="card-actions">
          <button className="action-btn" title="Editar" onClick={onEdit}>
            <i className="fas fa-edit" />
          </button>
          <button className="action-btn" title="Exportar" onClick={onExport}>
            <i className="fas fa-download" />
          </button>
          <button className="action-btn" title="Excluir" onClick={onDelete}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
    </div>
  )
}