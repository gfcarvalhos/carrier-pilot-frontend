export type User = { id: string; name: string; email: string };
export type LoginPayload = { email: string; password: string };
export type LoginResponse = {
  access: string;
  refresh: string;
};
export type AuthContextData = {
  access: string | null;
  refresh: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
};
