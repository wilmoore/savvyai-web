import React from 'react';

interface LogoProps {
  variant?: 'white' | 'black';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'white', 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  };

  const color = variant === 'white' ? '#FFFFFF' : '#000000';

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <svg 
        width={size === 'sm' ? 24 : size === 'md' ? 32 : 48} 
        height={size === 'sm' ? 24 : size === 'md' ? 32 : 48} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={sizeClasses[size]}
      >
        {/* Gauge Arc - thicker and more prominent */}
        <path 
          d="M4 22 A12 12 0 0 1 28 22" 
          stroke={color} 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none"
        />
        {/* Diagonal Line - thinner and more dynamic */}
        <line 
          x1="6" 
          y1="24" 
          x2="26" 
          y2="8" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
      
      {/* Text */}
      <span className={`font-serif font-bold tracking-wide ${
        size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
      } ${variant === 'white' ? 'text-white' : 'text-black'}`}>
        ŠAVVY AI
      </span>
    </div>
  );
};

export default Logo;
