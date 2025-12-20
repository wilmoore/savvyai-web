'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Section from './Section';
import SectionID from './SectionID';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

/**
 * BookingForm - Ink background institutional close
 *
 * Premium black background with glass card form.
 * Emerald focus rings and submit button.
 * The "Institutional" close on premium black.
 */
export default function BookingForm() {
  const { t } = useTranslation('homepage');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add backend wiring for form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const inputClasses =
    'w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors backdrop-blur-sm';

  if (isSubmitted) {
    return (
      <Section id="book" variant="ink" size="wide">
        <SectionID number="15" name="CONTACT" variant="ink" />

        <div className="max-w-xl mx-auto text-center bg-white/5 border border-white/10 rounded-md p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold tracking-tighter leading-[1.1] text-white mb-4">
            Thank you
          </h2>
          <p className="text-base text-white/60">We will be in touch soon.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="book" variant="ink" size="wide">
      <SectionID number="15" name="CONTACT" variant="ink" />

      <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-md p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold tracking-tighter leading-[1.1] text-white text-center mb-2">
          {t('booking.title')}
        </h2>
        <p className="text-base text-white/60 text-center mb-8">{t('booking.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              {t('booking.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t('booking.form.namePlaceholder')}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              {t('booking.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t('booking.form.emailPlaceholder')}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
              {t('booking.form.company')}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t('booking.form.companyPlaceholder')}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              {t('booking.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={t('booking.form.messagePlaceholder')}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-emerald-500 px-6 py-3 text-base font-medium text-white hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : t('booking.form.submit')}
          </button>
        </form>
      </div>
    </Section>
  );
}
