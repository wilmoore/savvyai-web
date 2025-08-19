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
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text & Benefits */}
            <div>
              <h2 className="text-[36px] md:text-[40px] font-bold text-white mb-6">
                Let's Talk
              </h2>
              <p className="text-xl text-savvy-gray-400 mb-8 leading-relaxed">
                Ready to build AI that actually works? Tell us about your challenge, and we'll show you how to solve it.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-savvy-electric-cyan flex-shrink-0" />
                    <span className="text-savvy-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-savvy-gray-400">
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
                      className="bg-savvy-pure-black border-border text-white placeholder:text-savvy-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className="bg-savvy-pure-black border-border text-white placeholder:text-savvy-gray-400"
                    />
                  </div>
                </div>
                
                <Input
                  placeholder="Work Email"
                  type="email"
                  className="bg-savvy-pure-black border-border text-white placeholder:text-savvy-gray-400"
                />
                
                <Input
                  placeholder="Company"
                  className="bg-savvy-pure-black border-border text-white placeholder:text-savvy-gray-400"
                />
                
                <Textarea
                  placeholder="What's your AI challenge? Tell us about the problem you're trying to solve."
                  rows={5}
                  className="bg-savvy-pure-black border-border text-white placeholder:text-savvy-gray-400 resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-cta border-0 hover:shadow-cyan-glow transition-all duration-300 font-semibold"
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