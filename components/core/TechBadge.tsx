import React from 'react';

interface TechBadgeProps {
  technology: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ technology }) => {
  return (
    <div className="flex items-center rounded-full bg-[var(--main-color)]/10 px-3 py-1 text-xs font-medium leading-5 text-theme-main">
      {technology}
    </div>
  );
};

export default TechBadge;