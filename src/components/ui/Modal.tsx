'use client';

import CloseIcon from '@/assets/icons/cross.svg';
import { useTranslations } from 'next-intl';

type ModalProps = Readonly<{
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}>;

export default function Modal({ open, onClose, children }: ModalProps) {
  const t = useTranslations('Modal');

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        bg-dark-primary/80
        transition-all duration-200
        ${open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}
      `}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`
          relative min-w-72 rounded-sm
          bg-dark-primary text-light-primary
          border border-dark-subtle
          px-5 pb-5 pt-10
          transition-transform duration-200
          ${open ? 'scale-100' : 'scale-95'}
        `}
      >
        {onClose && (
          <button
            type="button"
            aria-label={t('closeLabel')}
            className="
              absolute right-2 top-2
              flex h-4 w-4 items-center justify-center
              cursor-pointer text-light-primary
              transition-colors duration-200
              hover:text-light-tertiary
            "
            onClick={onClose}
          >
            <CloseIcon className="h-full w-full" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
