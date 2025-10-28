
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-green uppercase tracking-wider">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
      <div className="mt-4 w-24 h-1 bg-brand-yellow mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
