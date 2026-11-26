import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = Readonly<{
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  autoComplete?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  hint?: string;
  error?: string;
}>;

export default function InputField({
  id,
  label,
  register,
  type = 'text',
  autoComplete,
  required = false,
  multiline = false,
  rows = 4,
  hint,
  error,
}: InputFieldProps) {
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined;
  const className =
    'outline-none focus:outline-none focus:ring-0 focus:bg-transparent focus:border-accent border border-dark-subtle bg-dark-primary px-3 py-2 transition-colors duration-300';

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-code text-sm">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={`resize-y ${className}`}
          {...register}
        />
      ) : (
        <input
          id={id}
          type={type}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={className}
          {...register}
        />
      )}
      {hint && <p className="font-code text-sm text-light-tertiary">{hint}</p>}
      {error && (
        <p className="font-code text-sm" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
