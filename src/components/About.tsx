import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Execution Over Hype",
      description: "We focus on delivering practical solutions that solve real business problems, not just impressive demos."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work alongside your team as strategic partners, ensuring knowledge transfer and sustainable growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "Every innovation we pursue is driven by clear business value and measurable impact."
    }
  ];

  const expertise = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning",
    "MLOps & Model Deployment",
    "Data Engineering",
    "AI Strategy & Governance",
    "Conversational AI"
  ];

  return (
    <section id="about" className="py-24 bg-savvy-navy/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-savvy-gray-light bg-clip-text text-transparent">
              About Śavvy AI
            </h2>
            <p className="text-xl text-muted-foreground">
              Bridging the gap between AI potential and business reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe artificial intelligence should enhance human capabilities, not replace them. Our mission is to make AI accessible, practical, and transformative for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By focusing on execution over experimentation, we help organizations navigate the complex landscape of AI implementation with confidence and clarity.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Our Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-savvy-gray-light">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-background" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;