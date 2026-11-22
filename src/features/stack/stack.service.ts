import { stacks } from '@/data/stack';
import type { Stack } from '@/features/stack/stack.types';

export async function getStacks(): Promise<Stack[]> {
  return stacks;
}
