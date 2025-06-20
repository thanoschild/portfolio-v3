import { sections } from '@/constant';
import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section}>
            <button 
              onClick={() => onSectionClick(section)}
              className={`group flex items-center py-3 ${
                activeSection === section ? 'active' : ''
              }`}
            >
              <span className={`nav-indicator mr-4 transition-all ${
                activeSection === section 
                  ? 'w-16 bg-theme-main h-0.5' 
                  : 'w-8 bg-[var(--text-color)] group-hover:w-16 group-hover:bg-[var(--main-color)] h-px group-hover:h-0.5'
              }`}></span>
              <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                activeSection === section
                  ? 'text-theme-main'
                  : 'text-theme-text group-hover:text-[var(--main-color)]'
              }`}>
                {section}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;