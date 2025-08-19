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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo variant="white" size="sm" />
            </div>
            <p className="text-[#94A3B8] mb-4 max-w-md">
              Making artificial intelligence practical, accessible, and transformative for modern businesses.
            </p>
            <p className="text-sm text-[#94A3B8]">
              © 2024 ŠAVVY AI. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">AI Strategy</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Intelligent Agents</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Data Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-[#2563EB] transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#2563EB] transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-border/50 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#94A3B8]">
            Built with precision. Powered by intelligence.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-[#94A3B8] hover:text-[#2563EB] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;