import { Project, ProjectDetails } from '@/features/project/project.types';
import { selectedProjectsImages, projects, projectDetails } from '@/data/project';

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectDetailsBySlug(slug: string): Promise<ProjectDetails | undefined> {
  return projectDetails.find((projectDetails) => projectDetails.slug === slug);
}

export async function getSelectedProjectsImages(): Promise<string[]> {
  return selectedProjectsImages;
}
