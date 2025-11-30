import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../context/Auth/useAuth"
import type React from "react"

 export const RequireAuth: React.FC = () => {
  const { access } = useAuth();

  if (!access) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
};