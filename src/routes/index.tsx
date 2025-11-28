import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import PublicLayout  from "../layouts/PublicLayout";
import { RequireAuth } from "./Auth/RequireAuth";

const AppRoutes = () => {
  return (
    <BrowserRouter>
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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
