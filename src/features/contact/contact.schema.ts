import { z } from 'zod';

export type ContactFormValidationMessages = Readonly<{
  fullNameRequired: string;
  emailInvalid: string;
  emailOrPhoneRequired: string;
  phoneInvalid: string;
  messageTooLong: string;
}>;

export function createContactFormSchema(messages: ContactFormValidationMessages) {
  return z
    .object({
      fullName: z.string().trim().min(1, messages.fullNameRequired),
      email: z
        .string()
        .trim()
        .refine(
          (value) => value === '' || z.email().safeParse(value).success,
          messages.emailInvalid,
        ),
      phone: z
        .string()
        .trim()
        .refine((value) => {
          if (value === '') {
            return true;
          }

          const digits = value.replace(/\D/g, '');
          return /^\+?[\d\s().-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
        }, messages.phoneInvalid),
      message: z.string().trim().max(5000, messages.messageTooLong),
    })
    .superRefine(({ email, phone }, context) => {
      if (!email && !phone) {
        context.addIssue({
          code: 'custom',
          path: ['email'],
          message: messages.emailOrPhoneRequired,
        });
      }
    });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;
