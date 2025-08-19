import { Separator } from "@/components/ui/separator";
import Logo from "@/components/ui/logo";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-savvy-navy border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo variant="white" size="sm" />
            </div>
            <p className="text-[#94A3B8] mb-4 max-w-md">
              Making artificial intelligence practical, accessible, and transformative for modern businesses.
            </p>
            <p className="text-sm text-[#94A3B8]">
              © 2024 ŚAVVY AI. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-[#94A3B8] text-lg">
              <a href="tel:+17277109318" className="hover:text-[#2563EB] transition-colors">
                (727) 710-9318
              </a>
            </p>
          </div>
        </div>
        
        <Separator className="bg-border/50 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#94A3B8]">
            Made with 💜 by Polyglot.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;