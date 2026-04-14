'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header, Footer, Section, SectionID, CTAButton } from '@/components/marketing';
import { EXTERNAL_LINKS } from '@/lib/constants';

interface AuditForm {
  product: string;
  stuck: string;
  urgency: string;
  contact?: string;
}

export default function AuditPage() {
  const { t } = useTranslation('audit');
  const [form, setForm] = useState<AuditForm>({ product: '', stuck: '', urgency: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleChange =
    (field: keyof AuditForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const linkedInMessage = t('success.message', {
    recipient: 'Will',
    product: form.product || 'our core offer',
    stuck: form.stuck || 'pipeline',
    urgency: form.urgency || 'this quarter',
  });

  const linkedInHref = `${EXTERNAL_LINKS.LINKEDIN}?messageText=${encodeURIComponent(linkedInMessage)}`;

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <Section variant="ink" size="wide" className="pt-32 pb-12">
          <SectionID number="01" name="AUDIT" variant="ink" />
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
              {t('hero.label')}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-white/70 mb-6">{t('hero.description')}</p>
            <CTAButton href="#audit-form" variant="primary-accent" className="w-full sm:w-auto">
              {t('hero.cta')}
            </CTAButton>
          </div>
        </Section>

        <Section variant="paper" size="wide" id="audit-form" className="py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-4">
              {t('form.title')}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="audit-product"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    {t('form.fields.product.label')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.product}
                    onChange={handleChange('product')}
                    placeholder={t('form.fields.product.placeholder')}
                    id="audit-product"
                    className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-base text-black placeholder-black/40 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="audit-stuck"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    {t('form.fields.stuck.label')}
                  </label>
                  <textarea
                    required
                    value={form.stuck}
                    onChange={handleChange('stuck')}
                    placeholder={t('form.fields.stuck.placeholder')}
                    id="audit-stuck"
                    className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-base text-black placeholder-black/40 focus:border-emerald-500 focus:outline-none"
                    rows={3}
                  />
                </div>

                <div>
                  <label
                    htmlFor="audit-urgency"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    {t('form.fields.urgency.label')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.urgency}
                    onChange={handleChange('urgency')}
                    placeholder={t('form.fields.urgency.placeholder')}
                    id="audit-urgency"
                    className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-base text-black placeholder-black/40 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {showContact ? (
                  <div>
                    <label
                      htmlFor="audit-contact"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      {t('form.fields.contact.label')}
                    </label>
                    <input
                      type="text"
                      value={form.contact}
                      onChange={handleChange('contact')}
                      placeholder={t('form.fields.contact.placeholder')}
                      id="audit-contact"
                      className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-base text-black placeholder-black/40 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowContact(true)}
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
                  >
                    {t('form.addContact')}
                  </button>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-base font-medium text-white hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  {t('form.submit')}
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <p className="text-base text-black/70">{t('success.title')}</p>
                <CTAButton
                  href={linkedInHref}
                  variant="primary-accent"
                  className="w-full sm:w-auto"
                  external
                >
                  {t('success.linkedin')}
                </CTAButton>
              </div>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
