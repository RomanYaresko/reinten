import { Project } from './project.types';
import { projects } from '@/data/project';

export async function getProjects(): Promise<Project[]> {
  return projects;
}
