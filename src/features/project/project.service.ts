import { Project } from '@/features/project/project.types';
import { selectedProjectsImages, projects } from '@/data/project';

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getSelectedProjectsImages(): Promise<string[]> {
  return selectedProjectsImages;
}
