'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/contact/ContactForm';
import Modal from '@/components/ui/Modal';

export default function BookingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('BookingButton');

  return (
    <>
      <button
        type="button"
        className="cursor-pointer rounded-xs bg-accent px-8 py-6 text-[16px] font-bold text-light-primary duration-300 ease-in hover:bg-dark-subtle"
        onClick={() => setIsOpen(true)}
      >
        {t('label')}
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {isOpen && (
          <>
            <h2 className="mb-4 pr-6 text-xl font-bold">{t('formTitle')}</h2>
            <ContactForm />
          </>
        )}
      </Modal>
    </>
  );
}
