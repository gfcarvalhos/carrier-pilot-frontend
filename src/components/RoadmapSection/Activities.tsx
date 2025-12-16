import type React from 'react';
import type { Atividade } from '../../types/carreira';
import { Check, Activity, Lock } from 'react-feather';

type ActivitiesProps = {
  atividade: Atividade;
  index: number;      
  etapaAtual: number;
};

export const Activities: React.FC<ActivitiesProps> = ({
  atividade,
  index,
  etapaAtual,
}) => {
  const stepNumber = index + 1;
  const isCompleted = stepNumber < etapaAtual;
  const isCurrent = stepNumber === etapaAtual;

  const connectorClass = isCompleted
    ? 'phase-connector completed'
    : isCurrent
    ? 'phase-connector current'
    : 'phase-connector';

  const cardBase =
    'w-72 bg-white rounded-xl p-6 mr-10 shadow-sm transition-opacity';
  const cardExtra = isCompleted
    ? ''
    : isCurrent
    ? ' glow-card border-2 border-purple-500'
    : ' opacity-60';

  const iconWrapperClass = isCurrent
    ? 'w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3'
    : isCompleted
    ? 'w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3'
    : 'w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3';

  const renderIcon = () => {
    if (isCompleted) return <Check className="text-indigo-600" />;
    if (isCurrent) return <Activity className="text-purple-600" />;
    return <Lock className="text-gray-400" />;
  };

  return (
    <div className={connectorClass}>
      <div className={cardBase + cardExtra}>
        <div className="flex items-center mb-4">
          <div className={iconWrapperClass}>{renderIcon()}</div>
          <h3 className={isCompleted ? 'font-bold text-gray-800' : 'font-medium text-gray-800'}>
            {stepNumber}. {atividade.categoria}
          </h3>
        </div>

        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          {atividade.titulo}
        </h4>

        <p className="text-gray-600 mb-4">{atividade.descricao}</p>

        <p className="text-xs text-gray-500">
          Duração aproximada: {atividade.duracao_minutos} min
        </p>
      </div>
    </div>
  );
};
