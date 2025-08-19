import { Target, Code, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Strategy",
      description: "Roadmap, governance, and AI implementation strategy.",
      bullets: [
        "AI readiness assessment and roadmap development",
        "Governance frameworks and ethical AI guidelines",
        "Technology stack recommendations and architecture planning"
      ]
    },
    {
      icon: Code,
      title: "Build",
      description: "Custom models, infrastructure, and AI solutions.",
      bullets: [
        "Custom model development and fine-tuning",
        "Scalable AI infrastructure and MLOps pipelines",
        "Production-ready AI applications and services"
      ]
    },
    {
      icon: Zap,
      title: "Integrate",
      description: "APIs, workflows, and legacy system integration.",
      bullets: [
        "Seamless API integration and workflow automation",
        "Legacy system modernization with AI capabilities",
        "Real-time data processing and intelligent decisioning"
      ]
    },
    {
      icon: Users,
      title: "Educate",
      description: "Training, scaling, and knowledge transfer.",
      bullets: [
        "Team training and AI literacy programs",
        "Best practices documentation and knowledge transfer",
        "Ongoing support and capability development"
      ]
    }
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[40px] font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-savvy-gray-400 max-w-3xl mx-auto">
              From strategy to execution, we deliver AI solutions that create real business value.
            </p>
          </div>

          {/* Service Blocks */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-gradient-card border border-border rounded-xl p-8 hover:border-savvy-electric-cyan/30 hover:shadow-cyan-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="w-12 h-12 bg-savvy-electric-cyan/10 rounded-lg flex items-center justify-center group-hover:bg-savvy-electric-cyan/20 transition-colors">
                      <service.icon className="w-6 h-6 text-savvy-electric-cyan" />
                    </div>
                    <div>
                      <h3 className="text-[24px] md:text-[28px] font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-savvy-gray-400 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="md:w-2/3">
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-savvy-electric-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-savvy-gray-400 leading-relaxed">
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