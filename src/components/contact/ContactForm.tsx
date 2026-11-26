'use client';

import { useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { createContactFormSchema, type ContactFormValues } from '@/features/contact/contact.schema';
import InputField from '@/components/fields/InputField';
import DoneIcon from '@/assets/icons/done.svg';
import CrossIcon from '@/assets/icons/cross.svg';

type SubmissionStatus = 'idle' | 'sent' | 'failed' | 'not-configured';

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const schema = createContactFormSchema({
    fullNameRequired: t('validation.fullNameRequired'),
    emailInvalid: t('validation.emailInvalid'),
    emailOrPhoneRequired: t('validation.emailOrPhoneRequired'),
    phoneInvalid: t('validation.phoneInvalid'),
    messageTooLong: t('validation.messageTooLong'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const [status, setStatus] = useState<SubmissionStatus>('idle');

  async function submitForm(values: ContactFormValues) {
    const recipientEmail = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim();

    if (!recipientEmail) {
      setStatus('not-configured');
      return;
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.fullName,
            email: values.email,
            phone: values.phone,
            message: values.message,
            _subject: t('emailSubject'),
            _template: 'table',
            ...(values.email ? { _replyto: values.email } : {}),
          }),
        },
      );
      const result: unknown = await response.json();
      const succeeded =
        typeof result === 'object' &&
        result !== null &&
        'success' in result &&
        (result.success === true || result.success === 'true');

      if (!response.ok || !succeeded) {
        const message =
          typeof result === 'object' &&
          result !== null &&
          'message' in result &&
          typeof result.message === 'string'
            ? result.message
            : `FormSubmit returned HTTP ${response.status}.`;
        throw new Error(message);
      }

      setStatus('sent');
      reset();
    } catch (error) {
      console.error('FormSubmit contact form submission failed:', error);
      setStatus('failed');
    }
  }

  const statusMessage = useMemo(() => {
    switch (status) {
      case 'sent':
        return t('success');
      case 'failed':
        return t('failure');
      case 'not-configured':
        return t('notConfigured');
      case 'idle':
        return null;
    }
  }, [status, t]);

  return (
    <form
      className="relative flex w-full flex-col gap-4"
      noValidate
      onSubmit={handleSubmit(submitForm)}
    >
      <InputField
        id="contact-full-name"
        label={t('fullName')}
        autoComplete="name"
        required
        register={register('fullName')}
        error={errors.fullName?.message}
      />
      <InputField
        id="contact-email"
        label={t('email')}
        type="email"
        autoComplete="email"
        register={register('email')}
        error={errors.email?.message}
      />
      <InputField
        id="contact-phone"
        label={t('phone')}
        type="tel"
        autoComplete="tel"
        register={register('phone')}
        hint={t('contactHint')}
        error={errors.phone?.message}
      />
      <InputField
        id="contact-message"
        label={t('message')}
        multiline
        register={register('message')}
        error={errors.message?.message}
      />

      <div
        className={`
          flex flex-col gap-2 items-center justify-center
          text-3xl font-bold p-5 bg-dark-primary
          w-full h-full absolute top-0 left-0
          transition-all duration-200 z-10
          ${statusMessage ? 'scale-100 visible opacity-100' : 'scale-95 invisible opacity-0 pointer-events-none'}
        `}
      >
        {status === 'sent' ? (
          <DoneIcon className="w-50 h-50" />
        ) : (
          <CrossIcon className="w-50 h-50" />
        )}
        {statusMessage}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          cursor-pointer rounded-xs bg-accent
          px-6 py-3 font-bold
          text-light-primary duration-200 ease-in hover:bg-dark-subtle
          disabled:cursor-not-allowed disabled:opacity-60
        "
      >
        {isSubmitting ? t('sending') : t('submit')}
      </button>
    </form>
  );
}
