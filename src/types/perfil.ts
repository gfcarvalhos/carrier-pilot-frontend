export type PerfilFromApi = {
  id: number;
  usuario: number;             
  area_interesse: string;
  nivel_experiencia: "J" | "P" | "S";
  objetivo_pessoal: string | null;
  criado_em: string;          
};
