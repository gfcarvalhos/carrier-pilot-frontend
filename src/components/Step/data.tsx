export type StepType = {
  icon: string;
  title: string;
  description: string;
};

export const steps: StepType[] =  [
  {
    icon: '🔍',
    title: 'Mapear perfil',
    description: 'Análise completa de suas habilidades, interesses e objetivos',
  },
  {
    icon: '📊',
    title: 'Analisar competências',
    description: 'Diagnóstico de gaps e pontos fortes em relação ao mercado',
  },
  {
    icon: '🛣️',
    title: 'Recomendar trilhas',
    description: 'Planos personalizados com cursos, habilidades e metas',
  },
  {
    icon: '📈',
    title: 'Acompanhar progresso',
    description: 'Ajustes contínuos com feedback da IA e mentores',
  },
];
