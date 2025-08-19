import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute inset-0 bg-gradient-hero-spotlight animate-spotlight-shift" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-[56px] md:text-[64px] font-bold leading-[1.1] mb-6 text-white">
            AI That Works in the{" "}
            <span className="relative">
              <span className="bg-gradient-cta bg-clip-text text-transparent">
                Real World
              </span>
              {isVisible && (
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-cta transform origin-left animate-underline-grow"
                  style={{ animationDelay: '1s' }}
                />
              )}
            </span>
            <span className="animate-cursor-blink text-cyan-400 ml-1">|</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-[20px] md:text-[22px] font-medium mb-12 max-w-2xl mx-auto"
            style={{ color: '#9CA3AF' }}
          >
            We don't chase demos. We build systems that deliver measurable results.
          </p>
          
          {/* Single CTA */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="w-full md:w-[280px] h-16 text-lg font-semibold bg-gradient-cta border-0 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;