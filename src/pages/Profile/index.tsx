import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { ProfilesContainer } from '../../container/Profile/ProfilesSectionContainer';
import { RecommendationsContainer } from '../../container/Profile/RecomendationSectionContainer';
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
            <RecommendationsContainer />
        </div>
    </main>

    <Footer />
    </>
  )
}

export default Profile;