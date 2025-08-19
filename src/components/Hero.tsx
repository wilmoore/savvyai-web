import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonHover, setButtonHover] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-[#0B0F19] to-[#111827] flex items-center relative overflow-hidden pt-20"
    >
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0F141F] to-[#111827] animate-gradient-shift" />
      
      {/* Shield Arc Motif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-96">
          <svg viewBox="0 0 1200 400" className="w-full h-full">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.1)" />
                <stop offset="50%" stopColor="rgba(20, 184, 166, 0.2)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0.1)" />
              </linearGradient>
            </defs>
            <path 
              d="M0 200 Q300 100 600 200 T1200 200" 
              stroke="url(#shieldGradient)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{ animationDuration: '8s' }}
            />
          </svg>
        </div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px'
             }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Headline with Staggered Animation */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-bold leading-[0.9] text-white">
                <span 
                  className={`block transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  Practical AI.
                </span>
                <span className="block relative">
                  <span 
                    className={`bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-semibold transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      transitionDelay: '0.6s',
                      backgroundSize: '200% 100%',
                      animation: 'gradient-shift 8s ease-in-out infinite'
                    }}
                  >
                    Engineered for Impact.
                  </span>
                  {/* Blinking Cursor */}
                  <span 
                    className={`inline-block w-0.5 h-20 bg-cyan-400 ml-2 animate-cursor-blink transition-all duration-1000 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: '1s' }}
                  />
                </span>
              </h1>
            </div>
            
            {/* Subline */}
            <p 
              className={`text-lg md:text-xl lg:text-[20px] text-gray-400 max-w-[500px] leading-relaxed transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.2s' }}
            >
              From strategy to integration, we design AI that works in the real world.
            </p>
            
            {/* CTA Buttons with Magnetic Effect */}
            <div 
              className={`flex flex-col sm:flex-row gap-6 pt-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.4s' }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-16 px-10 text-lg font-bold bg-gradient-to-r from-cyan-400 to-teal-500 border-0 text-white rounded-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
                style={{
                  transform: buttonHover ? `translate(${mousePosition.x * 10 - 5}px, ${mousePosition.y * 10 - 5}px)` : 'translate(0, 0)'
                }}
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto h-16 px-10 text-lg font-semibold border-2 border-white text-white bg-transparent rounded-xl hover:bg-white hover:text-[#0B0F19] transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Button>
            </div>
          </div>
          
          {/* Right Column - Isometric AI Engineering Diagram */}
          <div className="relative">
            <div 
              className="w-full h-[600px] lg:h-[700px] relative overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * 5}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Isometric Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <pattern id="isometricGrid" patternUnits="userSpaceOnUse" width="40" height="40">
                      <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1" fill="none"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#isometricGrid)" />
                </svg>
              </div>

              {/* Data Layer */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded transform rotate-45 relative">
                  <div className="absolute inset-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-300 font-mono">
                    DATA
                  </div>
                </div>
                {/* Data Nodes */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>

              {/* Model Layer */}
              <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                <div className="w-40 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded transform rotate-45 relative">
                  <div className="absolute inset-1 bg-gradient-to-r from-blue-700 to-blue-600 rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-blue-100 font-mono">
                    MODEL
                  </div>
                </div>
                {/* Processing Nodes */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>

              {/* Agent Layer */}
              <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2">
                <div className="w-36 h-12 bg-gradient-to-r from-teal-600 to-teal-500 rounded transform rotate-45 relative">
                  <div className="absolute inset-1 bg-gradient-to-r from-teal-700 to-teal-600 rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-teal-100 font-mono">
                    AGENT
                  </div>
                </div>
                {/* Agent Core */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full animate-pulse" />
              </div>

              {/* App Layer */}
              <div className="absolute bottom-56 left-1/2 transform -translate-x-1/2">
                <div className="w-44 h-14 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded transform rotate-45 relative">
                  <div className="absolute inset-1 bg-gradient-to-r from-cyan-700 to-cyan-600 rounded-sm" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-cyan-100 font-mono">
                    APP
                  </div>
                </div>
                {/* App Interface Elements */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-lg animate-pulse" />
              </div>

              {/* Data Flow Connections */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.6)" />
                    <stop offset="100%" stopColor="rgba(20, 184, 166, 0.6)" />
                  </linearGradient>
                </defs>
                {/* Data to Model */}
                <line x1="50%" y1="75%" x2="50%" y2="65%" stroke="url(#dataFlow)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                {/* Model to Agent */}
                <line x1="50%" y1="60%" x2="50%" y2="50%" stroke="url(#dataFlow)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
                {/* Agent to App */}
                <line x1="50%" y1="45%" x2="50%" y2="35%" stroke="url(#dataFlow)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                </line>
              </svg>

              {/* Floating Particles */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400/60 rounded-full animate-float" />
              <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-400/60 rounded-full animate-float" style={{ animationDelay: '4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;