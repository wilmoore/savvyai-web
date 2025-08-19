import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Cog } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--savvy-blue)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--savvy-blue)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <div className="inline-flex items-center space-x-2 bg-accent/50 border border-border rounded-full px-4 py-2 text-sm text-savvy-gray-light">
              <Zap className="w-4 h-4 text-primary" />
              <span>Practical AI Solutions</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-savvy-gray-light bg-clip-text text-transparent leading-tight">
            AI Engineering
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Without the Hype
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-savvy-gray-light mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a team of AI engineers, strategists, and educators building solutions that make artificial intelligence practical, accessible, and transformative for modern businesses.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Rather than chasing hype, we focus on execution. Every tool, server, agent, or workflow we build is designed to solve real problems with real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-accent border-0 shadow-glow text-lg px-8 py-4 h-auto">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-border/50 hover:bg-accent/30">
              View Our Work
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-card/50 border border-border rounded-full px-4 py-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Real-World Focus</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 border border-border rounded-full px-4 py-2">
              <Cog className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Custom Solutions</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 border border-border rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;