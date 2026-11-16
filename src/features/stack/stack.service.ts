import { stacks } from '@/data/stack';
import { Stack } from '@/features/stack/stack.types';

export async function getStacks(): Promise<Stack[]> {
  return stacks;
}
