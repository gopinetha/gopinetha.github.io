
import React, { useState } from 'react';

interface SkillTagProps {
  skill: string;
  proficiency: string;
  category: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, proficiency, category }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return 'bg-primary text-white';
      case 'frameworks':
        return 'bg-secondary text-white';
      case 'tools':
        return 'bg-accent text-white';
      case 'concepts':
        return 'bg-neutral-dark text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-transform hover:scale-105 cursor-pointer ${getCategoryColor(category)}`}>
        {skill}
      </span>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded shadow-lg whitespace-nowrap z-10">
          {skill}: {proficiency}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

export default SkillTag;
