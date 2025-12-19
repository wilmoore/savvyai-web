'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');
  const [selectedSigns, setSelectedSigns] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const codeRescueSigns = t('codeRescueSigns', { returnObjects: true }) as string[];

  const handleCheckboxChange = (index: number) => {
    setSelectedSigns((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = t('form.validation.nameRequired');
    if (!formData.email.trim()) newErrors.email = t('form.validation.emailRequired');
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t('form.validation.emailInvalid');
    if (!formData.company.trim()) newErrors.company = t('form.validation.companyRequired');
    if (!formData.challenge.trim()) newErrors.challenge = t('form.validation.challengeRequired');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Prepare form data for Supabase
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('company', formData.company);
    formDataToSubmit.append('challenge', formData.challenge);
    formDataToSubmit.append(
      'selectedSigns',
      codeRescueSigns.filter((_, index) => selectedSigns.includes(index)).join(', ')
    );

    try {
      console.log('Submitting form data:', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        challenge: formData.challenge,
        selectedSigns: codeRescueSigns.filter((_, index) => selectedSigns.includes(index)),
      });

      // Submit to Supabase Edge Function
      console.log('Making request to Supabase function...');
      const response = await fetch(
        'https://fdubglolnuychhaptdsb.supabase.co/functions/v1/submit-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            challenge:
              formData.challenge +
              (selectedSigns.length > 0
                ? '\n\nCode Rescue Signs:\n' +
                  codeRescueSigns
                    .filter((_, index) => selectedSigns.includes(index))
                    .map((sign) => `• ${sign}`)
                    .join('\n')
                : ''),
            selectedSigns: codeRescueSigns
              .filter((_, index) => selectedSigns.includes(index))
              .join(', '),
          }),
        }
      );

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitStatus('success');
        setSubmitMessage(t('messages.success'));

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          challenge: '',
        });
        setSelectedSigns([]);
        setErrors({});

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 5000);
      } else {
        const errorMessage = responseData.error || t('messages.error');
        const details = responseData.details ? ` (${responseData.details})` : '';
        throw new Error(`${errorMessage}${details}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : t('messages.error'));

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text & Benefits */}
            <div>
              <h2 className="text-[36px] md:text-[40px] font-bold text-white mb-4">
                {t('sectionTitle')}
              </h2>
              <p className="text-xl text-[#94A3B8] mb-8 leading-relaxed">{t('intro')}</p>

              <div className="space-y-2 mb-8">
                {codeRescueSigns.map((sign, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={`sign-${index}`}
                      checked={selectedSigns.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      className="w-6 h-6 text-[#2563EB] bg-transparent border-2 border-[#475569] rounded focus:ring-[#2563EB] focus:ring-2 focus:ring-offset-0 focus:border-[#2563EB] cursor-pointer"
                    />
                    <label
                      htmlFor={`sign-${index}`}
                      className="text-[#94A3B8] cursor-pointer flex-1"
                    >
                      {sign}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-gradient-card border border-border rounded-xl p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-netlify="true"
                name="contact"
              >
                <div>
                  <Input
                    name="name"
                    placeholder={t('form.placeholders.name')}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8] ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    name="email"
                    placeholder={t('form.placeholders.email')}
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8] ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    name="company"
                    placeholder={t('form.placeholders.company')}
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8] ${errors.company ? 'border-red-500' : ''}`}
                  />
                  {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                </div>

                <div>
                  <Textarea
                    name="challenge"
                    placeholder={t('form.placeholders.challenge')}
                    rows={5}
                    value={formData.challenge}
                    onChange={(e) => handleInputChange('challenge', e.target.value)}
                    className={`bg-savvy-pure-black border-border text-white placeholder:text-[#94A3B8] resize-none ${errors.challenge ? 'border-red-500' : ''}`}
                  />
                  {errors.challenge && (
                    <p className="text-red-400 text-sm mt-1">{errors.challenge}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 border-2 border-white text-white bg-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-200 font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('form.submitting') : t('form.submit')}
                </Button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400 text-sm font-medium">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm font-medium">{submitMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
