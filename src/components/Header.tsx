import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="white" size="md" />
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-muted-foreground hover:text-[#2563EB] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-[#2563EB] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-[#2563EB] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
          
          {/* CTA Button */}
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] border-0 shadow-glow hover:shadow-blue-glow transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;