import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, MessageSquare, Workflow, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Strategic roadmaps for AI implementation that align with your business objectives and deliver measurable outcomes.",
      features: ["AI Readiness Assessment", "Implementation Roadmap", "ROI Analysis", "Risk Mitigation"]
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Bespoke AI solutions engineered to solve your specific challenges with precision and scalability.",
      features: ["Machine Learning Models", "Computer Vision Systems", "NLP Applications", "Predictive Analytics"]
    },
    {
      icon: MessageSquare,
      title: "Intelligent Agents",
      description: "Autonomous AI agents that handle complex workflows, customer interactions, and business processes.",
      features: ["Conversational AI", "Process Automation", "Decision Support", "Multi-Agent Systems"]
    },
    {
      icon: Database,
      title: "Data Infrastructure",
      description: "Robust data pipelines and infrastructure that power your AI initiatives with clean, accessible data.",
      features: ["Data Pipeline Design", "MLOps Implementation", "Model Monitoring", "Scalable Architecture"]
    },
    {
      icon: Workflow,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing systems and workflows.",
      features: ["API Development", "Legacy System Integration", "Workflow Optimization", "Change Management"]
    },
    {
      icon: Zap,
      title: "AI Training & Education",
      description: "Comprehensive training programs to upskill your team and build internal AI capabilities.",
      features: ["Technical Workshops", "Leadership Training", "Certification Programs", "Ongoing Support"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-savvy-gray-light bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end AI solutions designed to drive real business value and competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-premium transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-savvy-gray-light">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;