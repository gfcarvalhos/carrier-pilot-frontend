import type React from "react";
import { Brand } from "../../components/Brand";


const LoadingPage: React.FC = () => {
  return (
    <div className="loading-page">
      <Brand />
      <div className="loading-spinner"/>
      <div className="loading-text">Carregando...</div>
    </div>
  );
}

export default LoadingPage;