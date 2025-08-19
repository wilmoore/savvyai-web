import { Target, Code, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "AI Readiness",
      description: "We prepare your organization for AI.",
      bullets: [
        "AI readiness assessment and roadmap development.",
        "Technology stack recommendations and architecture planning.",
        "Data strategy, security, and compliance frameworks."
      ]
    },
    {
      icon: Code,
      title: "LLM/MLops",
      description: "Custom models, fine-tuning, inference.",
      bullets: [
        "Custom model development and fine-tuning",
        "Scalable AI infrastructure and MLOps pipelines",
        "API, RAG and platform integrations"
      ]
    },
    {
      icon: Zap,
      title: "Integrate",
      description: "APIs, workflows, system integrations.",
      bullets: [
        "API integration and workflow automation",
        "System modernization with AI capabilities",
        "Real-time data processing and intelligent decisioning"
      ]
    },
    {
      icon: Users,
      title: "Educate",
      description: "Training, mentorship, support.",
      bullets: [
        "Team training and AI literacy",
        "Best practices documentation and guides",
        "Ongoing support and capability development"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[40px] font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              From strategy to execution, we deliver AI solutions that create real business value.
            </p>
          </div>

          {/* Service Blocks */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-gradient-card border border-border rounded-xl p-8 hover:border-[#2563EB]/30 hover:shadow-blue-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
                      <service.icon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <div>
                      <h3 className="text-[24px] md:text-[28px] font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-[#94A3B8] mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="md:w-2/3">
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#94A3B8] leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;