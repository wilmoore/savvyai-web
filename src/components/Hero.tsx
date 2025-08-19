import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden pt-20 pb-40">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-secondary animate-wave-motion" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-accent animate-wave-motion" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-secondary animate-wave-motion" style={{animationDelay: '4s'}} />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-[56px] md:text-[64px] font-bold leading-[1.1] mb-6 text-white">
            Practical AI.{" "}
            <span className="relative">
              <span className="bg-gradient-cta bg-clip-text text-transparent">
                Engineered for Impact
              </span>
              {isVisible && (
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-cta transform origin-left animate-underline-grow"
                  style={{ animationDelay: '1s' }}
                />
              )}
            </span>
            <span className="animate-cursor-blink text-savvy-electric-cyan ml-1">|</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-[20px] md:text-[22px] font-medium text-savvy-gray-400 mb-12 max-w-2xl mx-auto">
            We don't chase demos. We build systems that deliver measurable results.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="w-full sm:w-[280px] h-16 text-lg font-semibold bg-gradient-cta border-0 hover:shadow-cyan-glow transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-[280px] h-16 text-lg font-semibold border-savvy-electric-cyan text-savvy-electric-cyan hover:bg-savvy-electric-cyan/10 hover:shadow-cyan-glow transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;