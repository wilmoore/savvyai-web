import { Separator } from '@/components/ui/separator';
import Logo from '@/components/ui/logo';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-savvy-navy border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo variant="white" size="sm" />
            </div>
            <p className="text-[#94A3B8] mb-4 max-w-md">{t('tagline')}</p>
            <p className="text-sm text-[#94A3B8]">
              {'© '}
              {t('copyright')}
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <p className="text-[#94A3B8] text-lg">
              <a href="tel:+17277109318" className="hover:text-[#2563EB] transition-colors">
                {t('phone')}
              </a>
            </p>
          </div>
        </div>

        <Separator className="bg-border/50 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#94A3B8]">{t('madeWith')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
