import { stacks } from '@/data/stack';
import type { Locale } from '@/i18n/routing';
import type { Stack, StackData } from '@/features/stack/stack.types';

export async function getStacks(locale: Locale): Promise<Stack[]> {
  return stacks.map((stack: StackData) => ({
    id: stack.id,
    title: stack.title[locale],
    technologies: stack.technologies,
  }));
}
