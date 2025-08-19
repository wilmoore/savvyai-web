import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="white" size="md" />
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-cyan-400 to-teal-500 border-0 shadow-glow hover:shadow-cyan-glow transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;