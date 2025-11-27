export type StepType = {
  icon: string;
  title: string;
  items: string[];
};

export const audCards: StepType[] =  [
  { 
    icon: "🎓", 
    title: "Universidades", 
    items: ["Orientar alunos em transição para o mercado", "Alinhar currículos às demandas atuais"]
  },
  {
    icon: "🏢", 
    title: "Empresas", 
    items: ["Desenvolver talentos internamente", "Mapear competências da equipe"]
  },
    {
    icon: "👤", 
    title: "Indivíduos", 
    items: ["Planejar mudanças de carreira", "Identificar habilidades em alta"]
  }
];
