import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-savvy-navy border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/3ee527e3-0cfd-4a9c-9188-1790faa93d15.png" 
                alt="Śavvy AI Logo" 
                className="h-6 w-auto"
              />
              <span className="text-lg font-bold text-foreground">Śavvy AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Making artificial intelligence practical, accessible, and transformative for modern businesses.
            </p>
            <p className="text-sm text-savvy-gray-light">
              © 2024 Śavvy AI. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">AI Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Intelligent Agents</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-border/50 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-savvy-gray-light">
            Built with precision. Powered by intelligence.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;