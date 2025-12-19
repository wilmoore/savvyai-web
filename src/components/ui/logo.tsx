import React from 'react';

interface LogoProps {
  variant?: 'white' | 'black';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'white', className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
  };

  const color = variant === 'white' ? '#FFFFFF' : '#000000';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`flex items-center space-x-0.5 ${className} cursor-pointer hover:opacity-80 transition-opacity duration-200`}
      onClick={scrollToTop}
    >
      {/* Logo Icon */}
      <img
        src="/logomark.png"
        alt="ŚAVVY AI Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
        style={{
          transform: 'translateY(-4px)',
          verticalAlign: 'middle',
        }}
      />

      {/* Text */}
      <span
        className={`font-playfair font-semibold tracking-wide ${
          size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
        } ${variant === 'white' ? 'text-white' : 'text-black'}`}
      >
        ŚAVVY AI
      </span>
    </div>
  );
};

export default Logo;
