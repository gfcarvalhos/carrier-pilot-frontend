import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthContextData } from "./types";

export const useAuth = (): AuthContextData => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
};
