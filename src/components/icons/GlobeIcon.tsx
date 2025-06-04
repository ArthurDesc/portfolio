import React from 'react';

interface GlobeIconProps {
  className?: string;
  isHovered?: boolean;
}

export const GlobeIcon: React.FC<GlobeIconProps> = ({ className, isHovered }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{
        transformOrigin: 'center',
        transform: isHovered ? 'rotate(20deg)' : 'rotate(0deg)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {/* Globe circle */}
      <circle 
        cx="12" 
        cy="12" 
        r="10"
        className="transition-all duration-300"
        style={{
          transformOrigin: 'center',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      />
      
      {/* Main horizontal line (equator) */}
      <path
        d="M2 12h20"
        className="transition-all duration-300"
      />
      
      {/* Main curved vertical line */}
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        className="transition-all duration-300"
      />
    </svg>
  );
}; 