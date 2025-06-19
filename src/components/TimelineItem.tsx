
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItemProps {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  details?: string[];
  type?: 'experience' | 'achievement';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  id,
  title,
  subtitle,
  date,
  description,
  details,
  type = 'experience'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8 pb-8 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 -ml-1.5 bg-primary rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
      
      {/* Content */}
      <div 
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer border-l-4 border-primary"
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details for ${title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-neutral-dark">{title}</h3>
            <p className="text-primary font-medium">{subtitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{date}</span>
            {details && (
              <div className="text-primary">
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-3">{description}</p>
        
        {details && isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-sm text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
