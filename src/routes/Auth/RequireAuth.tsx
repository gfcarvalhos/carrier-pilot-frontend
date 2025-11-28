import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/Auth/useAuth"

export const RequireAuth = () => {
  const { access } = useAuth()

  if (!access) {
    return <Navigate to="/login" replace />
  }
}