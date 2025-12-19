import { useTranslation } from 'react-i18next';

const Proof = () => {
  const { t } = useTranslation('proof');

  return (
    <section className="py-24 bg-savvy-pure-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-savvy-electric-cyan">
                {t('stats.prototypeDelivery.value')}
              </div>
              <div className="text-lg text-savvy-gray-400 font-medium">
                {t('stats.prototypeDelivery.label')}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-savvy-electric-cyan">
                {t('stats.experience.value')}
              </div>
              <div className="text-lg text-savvy-gray-400 font-medium">
                {t('stats.experience.label')}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-savvy-electric-cyan">
                {t('stats.rescues.value')}
              </div>
              <div className="text-lg text-savvy-gray-400 font-medium">
                {t('stats.rescues.label')}
              </div>
            </div>
          </div>

          {/* Separator Line with Gradient */}
          <div className="mt-16 w-full h-px bg-gradient-secondary opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
