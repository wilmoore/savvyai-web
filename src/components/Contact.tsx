import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const benefits = [
    "Free initial consultation and AI readiness assessment",
    "Custom roadmap and implementation timeline",
    "Direct access to our engineering team",
    "Transparent pricing with no hidden costs"
  ];

  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text & Benefits */}
            <div>
              <h2 className="text-[36px] md:text-[40px] font-bold text-white mb-6">
                Let's Talk
              </h2>
              <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">
                Ready to build AI that actually works? Tell us about your challenge, and we'll show you how to solve it.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                    <span className="text-[#94A3B8]">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-[#94A3B8]">
                <strong className="text-white">No sales pitches.</strong> Just a honest conversation about what's possible and what it takes to get there.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-gradient-card border border-border rounded-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name"
                      className="bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8]"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className="bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8]"
                    />
                  </div>
                </div>
                
                <Input
                  placeholder="Work Email"
                  type="email"
                  className="bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8]"
                />
                
                <Input
                  placeholder="Company"
                  className="bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8]"
                />
                
                <Textarea
                  placeholder="What's your AI challenge? Tell us about the problem you're trying to solve."
                  rows={5}
                  className="bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8] resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-12 border-2 border-white text-white bg-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-200 font-semibold hover:scale-105"
                >
                  Start the Conversation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;