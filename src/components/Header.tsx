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
            <a 
              href="https://book.savvyai.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#2563EB] transition-colors font-medium"
            >
              Book
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button 
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-transparent hover:text-white hover:border-white hover:scale-105 transition-all duration-200"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;