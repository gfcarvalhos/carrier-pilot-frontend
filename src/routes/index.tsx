import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import PublicLayout  from "../layouts/PublicLayout";
import { RequireAuth } from "./Auth/RequireAuth";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
      <Routes>
        {/* Rotas com layout público */}
        <Route element={<PublicLayout  />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rotas com layout Dashboard */}
        <Route element={<RequireAuth />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />}/>
          </Route>
        </Route>
      </Routes>
  );
};

export default AppRoutes;
