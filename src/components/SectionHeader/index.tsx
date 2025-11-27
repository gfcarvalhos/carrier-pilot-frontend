import type React from "react";

type SectionHeaderProp = {
  title: string,
  subtitle: string
}

export const SectionHeader: React.FC<SectionHeaderProp>  = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}
