import type React from 'react';
import './styles.css'

type Props = {
  userName: string;
  profilesCount: number;
  activePaths: number;
  achievements: number;
};

export const ProfileWelcomeSection: React.FC<Props> = ({userName, profilesCount = 0, activePaths = 0, achievements = 0}) => {
  return (
  <section className="welcome-section">
    <h2>Bem-vindo de volta, <span className="user-name">{userName}</span>!</h2>
    <p>Gerencie seus perfis de carreira e continue sua jornada de aprendizado.</p>
    <div className="dashboard-stats">
        <div className="stat-card">
            <i className="fas fa-user-tie"></i>
            <div>
                <h3>Perfis Criados</h3>
                <span className="stat-value" id="profilesCount">{profilesCount}</span>
            </div>
        </div>
        <div className="stat-card">
            <i className="fas fa-road"></i>
            <div>
                <h3>Trilhas Ativas</h3>
                <span className="stat-value" id="activePaths">{activePaths}</span>
            </div>
        </div>
        <div className="stat-card">
            <i className="fas fa-medal"></i>
            <div>
                <h3>Conquistas</h3>
                <span className="stat-value" id="achievements">{achievements}</span>
            </div>
        </div>
    </div>
  </section>
  )
}