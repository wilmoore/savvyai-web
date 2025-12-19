"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonHover, setButtonHover] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const words = t('rotatingWords', { returnObjects: true }) as string[];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

    // Word cycling effect with typewriter animation
    const wordInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 1000); // Wait 1 second before starting next word
    }, 4000); // Total 4 seconds per word (3 seconds typing + 1 second pause)

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(wordInterval);
    };
  }, [words.length]);

  // Typewriter effect for current word
  useEffect(() => {
    if (!isTyping) return;

    const currentWord = words[currentWordIndex];
    if (currentCharIndex < currentWord.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, 150); // Type each character every 150ms

      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentWordIndex, isTyping, words]);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-[#0B1120] to-[#111827] flex items-center relative overflow-hidden pt-20"
    >
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F141F] to-[#111827] animate-gradient-shift" />

      {/* Shield Arc Motif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-96">
          <svg viewBox="0 0 1200 400" className="w-full h-full">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.1)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
                <stop offset="100%" stopColor="rgba(37, 99, 235, 0.1)" />
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Headline with Staggered Animation */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-bold leading-[1.1] text-white">
                <span
                  className={`block transition-all duration-1000 text-white ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  {t('headline.line1')}
                </span>
                <span className="block relative">
                  <span
                    className={`bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#3B82F6] bg-clip-text text-transparent font-semibold transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: '0.6s',
                      backgroundSize: '200% 100%',
                      animation: 'text-gradient-shift 8s ease-in-out infinite',
                    }}
                  >
                    {t('headline.line2')}
                  </span>
                  <br />
                  <span className="inline-block transition-all duration-500 ease-in-out bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#3B82F6] bg-clip-text text-transparent font-semibold mb-6 pb-2 leading-[1.1]">
                    {words[currentWordIndex].slice(0, currentCharIndex)}
                    {isTyping && currentCharIndex < words[currentWordIndex].length && (
                      <span className="animate-pulse">{'|'}</span>
                    )}
                  </span>
                  {'.'}
                  {/* Blinking Cursor */}
                  <span
                    className={`inline-block w-0.5 h-20 bg-[#2563EB] ml-2 animate-cursor-blink transition-all duration-1000 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: '1s' }}
                  />
                </span>
              </h1>
            </div>

            {/* Subline */}
            <p
              className={`text-lg md:text-xl lg:text-[20px] text-[#94A3B8] max-w-[500px] leading-relaxed transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.2s' }}
            >
              {t('subline')}
            </p>

            {/* CTA Button with Magnetic Effect */}
            <div
              className={`flex flex-col sm:flex-row gap-6 pt-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.4s' }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-16 px-10 text-lg font-bold bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] border-0 text-white rounded-xl hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
                style={{
                  transform: buttonHover
                    ? `translate(${mousePosition.x * 3 - 1.5}px, ${mousePosition.y * 3 - 1.5}px)`
                    : 'translate(0, 0)',
                }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">{t('cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>

          {/* Right Column - Premium AI Literate Book Visual */}
          <div className="relative">
            <div
              className="w-full h-[600px] lg:h-[700px] relative overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 1.5}deg) rotateX(${(mousePosition.y - 0.5) * 1.5}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Central AI Literate Book */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Book Shadow */}
                  <div className="absolute inset-0 bg-black/20 blur-xl rounded-lg transform rotate-12 translate-y-4" />

                  {/* Book Cover */}
                  <div className="w-64 h-80 bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#475569] rounded-lg border border-[#64748B] shadow-2xl relative transform rotate-12 overflow-hidden">
                    {/* Spotlight Sweep Effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"
                      style={{ animationDuration: '4s', animationTimingFunction: 'ease-in-out' }}
                    />

                    {/* Book Spine Texture */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#2563EB]/30 to-[#3B82F6]/30" />

                    {/* Book Cover Content */}
                    <div className="p-8 h-full flex flex-col justify-center">
                      {/* Shield Arc Motif */}
                      <div className="absolute top-4 right-4 opacity-20">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <path
                            d="M8 20 A12 12 0 0 1 32 20"
                            stroke="rgba(37, 99, 235, 0.6)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <line
                            x1="12"
                            y1="24"
                            x2="28"
                            y2="8"
                            stroke="rgba(37, 99, 235, 0.6)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Book Title */}
                      <div className="text-center space-y-2">
                        <div className="text-[#94A3B8] text-sm font-medium tracking-wider">
                          {t('book.subtitle')}
                        </div>
                        <div className="text-white text-3xl font-bold tracking-tight">
                          {t('book.title')}
                        </div>
                        <div className="text-black text-sm font-playfair font-semibold">
                          {t('book.author')}
                        </div>
                      </div>

                      {/* Subtle Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-lg" />
                    </div>
                  </div>

                  {/* Book Glow Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#3B82F6]/20 blur-2xl rounded-lg transform rotate-12 animate-pulse"
                    style={{ animationDuration: '3s' }}
                  />
                </div>
              </div>

              {/* Floating Content Cards */}
              <div className="absolute top-8 left-8 w-40 h-24 bg-[#1E293B]/90 backdrop-blur-sm border border-[#475569] rounded-lg p-3 flex items-center space-x-2 animate-float">
                <div className="w-8 h-8 bg-[#2563EB]/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#2563EB] rounded-full" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">
                    {t('cards.fineTuning.title')}
                  </div>
                  <div className="text-[#94A3B8] text-xs">{t('cards.fineTuning.subtitle')}</div>
                </div>
              </div>

              <div
                className="absolute top-8 right-8 w-40 h-24 bg-[#1E293B]/90 backdrop-blur-sm border border-[#475569] rounded-lg p-3 flex items-center space-x-2 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-8 h-8 bg-[#10B981]/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#10B981] rounded-full" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">
                    {t('cards.promptEngineering.title')}
                  </div>
                  <div className="text-[#94A3B8] text-xs">
                    {t('cards.promptEngineering.subtitle')}
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-8 right-8 w-40 h-24 bg-[#1E293B]/90 backdrop-blur-sm border border-[#475569] rounded-lg p-3 flex items-center space-x-2 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="w-8 h-8 bg-[#F59E0B]/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#F59E0B] rounded-full" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">{t('cards.agents.title')}</div>
                  <div className="text-[#94A3B8] text-xs">{t('cards.agents.subtitle')}</div>
                </div>
              </div>

              <div
                className="absolute bottom-8 left-8 w-40 h-24 bg-[#1E293B]/90 backdrop-blur-sm border border-[#475569] rounded-lg p-3 flex items-center space-x-2 animate-float"
                style={{ animationDelay: '3s' }}
              >
                <div className="w-8 h-8 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#8B5CF6] rounded-full" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">{t('cards.voice.title')}</div>
                  <div className="text-[#94A3B8] text-xs">{t('cards.voice.subtitle')}</div>
                </div>
              </div>

              <div
                className="absolute top-1/2 left-2 w-40 h-24 bg-[#1E293B]/90 backdrop-blur-sm border border-[#475569] rounded-lg p-3 flex items-center space-x-2 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="w-8 h-8 bg-[#EF4444]/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#EF4444] rounded-full" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">{t('cards.llmops.title')}</div>
                  <div className="text-[#94A3B8] text-xs">{t('cards.llmops.subtitle')}</div>
                </div>
              </div>

              <div
                className="absolute top-1/2 right-2 w-40 h-24 bg-[#1E293B]/90 backdrop-blur-sm border border-[#475569] rounded-lg p-3 flex items-center space-x-2 animate-float"
                style={{ animationDelay: '2.5s' }}
              >
                <div className="w-8 h-8 bg-[#06B6D4]/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#06B6D4] rounded-full" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">{t('cards.rag.title')}</div>
                  <div className="text-[#94A3B8] text-xs">{t('cards.rag.subtitle')}</div>
                </div>
              </div>

              {/* Ambient Particles */}
              <div className="absolute top-24 left-1/4 w-1.5 h-1.5 bg-[#2563EB]/40 rounded-full animate-float" />
              <div
                className="absolute top-32 right-1/3 w-1 h-1 bg-[#3B82F6]/40 rounded-full animate-float"
                style={{ animationDelay: '2s' }}
              />
              <div
                className="absolute bottom-28 left-1/3 w-1.5 h-1.5 bg-[#6366F1]/40 rounded-full animate-float"
                style={{ animationDelay: '4s' }}
              />
              <div
                className="absolute bottom-24 right-1/4 w-1 h-1 bg-[#10B981]/40 rounded-full animate-float"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
