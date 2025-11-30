import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { ProfilesContainer } from '../../container/Profile/ProfilesSectionContainer';
import { WelcomeSectionContainer } from '../../container/Profile/WelcomeSectionContainer';
import './styles.css'
const Profile = () => {
  return (
    <>
       <Navbar />
    <main className="dashboard-main">
        <div className="container">

            <WelcomeSectionContainer />
            <ProfilesContainer />
            <section className="recommendations-section" id="recommendations">
                <h2>Recomendações para Você</h2>
                <div className="recommendations-grid">
                    <div className="recommendation-card">
                        <div className="recommendation-icon">
                            <i className="fas fa-bolt"></i>
                        </div>
                        <h3>Trilha Rápida de JavaScript</h3>
                        <p>Complete 10 horas de estudo para dominar os fundamentos</p>
                        <a href="#" className="btn btn-sm">Explorar</a>
                    </div>
                    <div className="recommendation-card">
                        <div className="recommendation-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3>Tendência de Mercado</h3>
                        <p>Habilidades em Cloud Computing estão em alta demanda</p>
                        <a href="#" className="btn btn-sm">Saber Mais</a>
                    </div>
                    <div className="recommendation-card">
                        <div className="recommendation-icon">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <h3>Oportunidades</h3>
                        <p>5 vagas alinhadas ao seu perfil de Front-end</p>
                        <a href="#" className="btn btn-sm">Ver Vagas</a>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <Footer />
    </>
  )
}

export default Profile;