import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Área Pública</h2>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
