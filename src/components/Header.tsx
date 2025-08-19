import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3ee527e3-0cfd-4a9c-9188-1790faa93d15.png" 
              alt="Śavvy AI Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-foreground">Śavvy AI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="default" className="bg-gradient-accent border-0 shadow-glow">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;