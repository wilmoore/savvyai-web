import { CheckCircle, Users, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');

  const principles = [
    {
      icon: CheckCircle,
      titleKey: 'principles.speed.title',
      descriptionKey: 'principles.speed.description',
    },
    {
      icon: Users,
      titleKey: 'principles.partnership.title',
      descriptionKey: 'principles.partnership.description',
    },
    {
      icon: Lightbulb,
      titleKey: 'principles.innovation.title',
      descriptionKey: 'principles.innovation.description',
    },
  ];

  return (
    <section id="about" className="py-32 bg-savvy-pure-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Manifesto Section */}
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[40px] font-bold text-white mb-8">
              {t('sectionTitle')}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-[#94A3B8] leading-relaxed">
                {t('manifesto.prefix')}{' '}
                <strong className="text-[#2563EB]">{t('manifesto.highlight')}</strong>{' '}
                {t('manifesto.suffix')}
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.titleKey}
                className="group bg-gradient-card border border-border rounded-xl p-8 hover:border-[#2563EB]/30 hover:shadow-blue-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-4">{t(principle.titleKey)}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{t(principle.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
