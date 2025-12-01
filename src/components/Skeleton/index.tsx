import type React from "react";
import './styles.css'


export const Skeleton: React.FC = () => {
  return (
    <section className="skeleton-section">
      <div className="section-header-skeleton">
        <div className="skeleton skeleton-title"/>
        <div className="skeleton skeleton-button"/>
      </div>

      <div className="skeleton-grid">
        <div className="skeleton-card"/>
        <div className="skeleton-card"/>
        <div className="skeleton-card"/>        
      </div>
    </section>
  )
}