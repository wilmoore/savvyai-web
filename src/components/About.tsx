import { CheckCircle, Users, Lightbulb } from "lucide-react";

const About = () => {
  const principles = [
    {
      icon: CheckCircle,
      title: "Speed and Practicality Over Hype",
      description: "We deliver working prototypes the same day; real execution, and a real demo URL.",
    },
    {
      icon: Users,
      title: "True Partnership",
      description: "We work alongside your team, sharing knowledge and building lasting capabilities.",
    },
    {
      icon: Lightbulb,
      title: "Practical Innovation",
      description: "Solution we choose to create serves a clear business purpose and delivers measurable results.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-savvy-pure-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Manifesto Section */}
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[40px] font-bold text-white mb-8">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed">
                <strong className="text-white">The AI industry is flooded with hype.</strong> Every day, new tools pop up; but, only a few deliver real value.
              </p>
              <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed">
                At Savvy AI, we cut through the noise. <strong className="text-[#2563EB]">We build AI that works.</strong> Pragmatic solutions that solve problems that matter and deliver measurable results.
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group bg-gradient-card border border-border rounded-xl p-8 hover:border-[#2563EB]/30 hover:shadow-blue-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;