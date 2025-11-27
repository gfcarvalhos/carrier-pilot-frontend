import type React from 'react';
import './styles.css'

type FeatureProps = {
  iconClass: string;
  title: string;
  description: string;
};


export const Feature: React.FC<FeatureProps> = ({ iconClass, title, description }) => {
  return (
    <div className="feature">
      <i className={`${iconClass} feature-icon`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}