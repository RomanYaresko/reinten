import { projectDetails, projects, selectedProjectsImages } from '@/data/project';
import type {
  Project,
  ProjectData,
  ProjectDetails,
  ProjectDetailsData,
} from '@/features/project/project.types';
import type { Locale } from '@/i18n/routing';

function localizeProject(project: ProjectData, locale: Locale): Project {
  return {
    ...project,
    title: project.title[locale],
    subtitle: project.subtitle[locale],
    description: project.description[locale],
  };
}

function localizeProjectDetails(details: ProjectDetailsData, locale: Locale): ProjectDetails {
  return {
    slug: details.slug,
    heroSection: details.heroSection && {
      title: details.heroSection.title[locale],
      subtitle: details.heroSection.subtitle[locale],
      cases: details.heroSection.cases.map((item) => ({
        title: item.title[locale],
        description: item.description[locale],
      })),
    },
    secondarySection: details.secondarySection && {
      title: details.secondarySection.title[locale],
      bulletPoints: details.secondarySection.bulletPoints.map((bulletPoint) => bulletPoint[locale]),
    },
    showcaseSection: details.showcaseSection && {
      title: details.showcaseSection.title[locale],
      steps: details.showcaseSection.steps?.map((step) => ({
        title: step.title[locale],
        description: step.description[locale],
      })),
      images: details.showcaseSection.images.map((image) => ({
        ...image,
        title: image.title[locale],
      })),
    },
    additionalSection: details.additionalSection && {
      title: details.additionalSection.title[locale],
      description: details.additionalSection.description[locale],
      bulletPoints: details.additionalSection.bulletPoints.map(
        (bulletPoint) => bulletPoint[locale],
      ),
    },
    resultsSection: details.resultsSection && {
      title: details.resultsSection.title[locale],
      metrics: details.resultsSection.metrics.map((metric) => ({
        value: metric.value[locale],
        description: metric.description[locale],
      })),
      feedback: {
        quote: details.resultsSection.feedback.quote[locale],
        author: details.resultsSection.feedback.author[locale],
      },
    },
  };
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  return projects.map((project) => localizeProject(project, locale));
}

export async function getProjectDetailsBySlug(
  slug: string,
  locale: Locale,
): Promise<ProjectDetails | undefined> {
  const details = projectDetails.find((projectDetails) => projectDetails.slug === slug);

  return details ? localizeProjectDetails(details, locale) : undefined;
}

export async function getSelectedProjectsImages(): Promise<string[]> {
  return selectedProjectsImages;
}
