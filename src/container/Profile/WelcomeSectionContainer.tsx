import type React from "react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ProfileWelcomeSection } from "../../components/ProfileWelcomeSection";

export const WelcomeSectionContainer: React.FC = () => {
  const [profilesCount, setProfilesCount] = useState(0);
  const [activePaths, setActivePaths] = useState(0);
  const [achievements, setAchievements] = useState(0);

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/perfis");
      const profiles = res.data;
      setProfilesCount(profiles.length);
      setActivePaths(1);
      setAchievements(1);
    };
    load();
  }, []);

  return (
    <ProfileWelcomeSection
      userName="Usuário"
      profilesCount={profilesCount}
      activePaths={activePaths}
      achievements={achievements}
    />
  )
}