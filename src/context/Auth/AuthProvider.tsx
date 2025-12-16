import React, { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { LoginPayload, LoginResponse } from "./types";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


type AuthProviderProps = { children: ReactNode };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [access, setAccess] = useState<string | null>(localStorage.getItem("access"));
  const [refresh, setRefresh] = useState<string | null>(localStorage.getItem("refresh"));

  const navigate = useNavigate();

  const login = async ({ email, password }: LoginPayload) => {
    const res = await api.post<LoginResponse>(
      "/auth/login/",
      { username: email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (res.status !== 200) throw new Error("Credenciais inválidas");

    const data = res.data;
    setAccess(data.access);
    setRefresh(data.refresh);
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
  };

  const logout = () => {
    setAccess(null);
    setRefresh(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ access, refresh, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
