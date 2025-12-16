export type Atividade = {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  duracao_minutos: number;
  prioridade: 1 | 2 | 3; // 1=Alta, 2=Média, 3=Baixa
  recomendacao: number | null; // id da Recomendacao ou null
};

export type TipoRecurso = 'youtube' | 'artigo' | 'curso' | 'livro';

export type Recurso = {
  titulo: string;
  tipo: TipoRecurso;
  url: string;
};

export type PayloadIA = unknown;

export type RecomendacaoStatus = "pendente" | "aceita" | "ignorada";

export type Recomendacao = {
  id: number;
  usuario: number;         
  tema: string;
  subtema: string | null;
  descricao: string;
  recursos: Recurso[] | null;
  status: RecomendacaoStatus;
  payload_ia: PayloadIA | null;
  explicacao_ia: string | null;
  score_relevancia: number;
  data_gerada: string;    
};

export type ProgressoStatus = "pendente" | "em_andamento" | "concluida";

export type Progresso = {
  id: number;
  usuario: number;          
  atividade: number | null; 
  data_concluida: string | null;
  status: ProgressoStatus;
};

export type PagedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export interface RoadmapResponse {
  tema: string;
  subtema: string;
  descricao: string;
  recursos: Recurso[];
  atividades: Atividade[];
  progresso_percentual?: number;
  etapa_atual?: number;
  total_etapas?: number;
}