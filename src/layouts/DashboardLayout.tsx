import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: "1.5rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
