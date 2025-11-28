// AuthContext.tsx
import React, { createContext, useState, type ReactNode } from "react";
import axios from "axios";
import type { LoginPayload, LoginResponse, AuthContextData } from "./types";

const API_URL_LOGIN = `${import.meta.env.VITE_API_URL}/auth/login/`;
export const AuthContext = createContext<AuthContextData | undefined>(undefined);

type AuthProviderProps = { children: ReactNode };

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [access, setAccess] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<string | null>(
    localStorage.getItem("refresh")
  );

  const login = async ({ email, password }: LoginPayload) => {
    console.log({username: email, password})
    const res = await axios.post<LoginResponse>(
      API_URL_LOGIN,
      { username: email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(res)

    if (res.status !== 200) throw new Error("Credenciais inválidas");

    const data = res.data;
    setAccess(data.access);
    setRefresh(data.refresh);
    localStorage.setItem("refresh", data.refresh);
  };

  const logout = () => {
    setAccess(null);
    setRefresh(null);
    localStorage.removeItem("refresh");
  };

  return (
    <AuthContext.Provider value={{ access, refresh, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
