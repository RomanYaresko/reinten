import { ProjectGalleryImage } from '@/components/project/ProjectGallery';

export interface ProjectDetails {
  slug: string;
  heroSection?: {
    title: string;
    subtitle: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  secondarySection?: {
    title: string;
    bulletPoints: string[];
  };
  showcaseSection?: {
    title: string;
    steps?: {
      title: string;
      description: string;
    }[];
    images: ProjectGalleryImage[];
  };
  additionalSection?: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
  resultsSection?: {
    title: string;
    metrics: {
      value: string;
      description: string;
    }[];
    feedback: {
      quote: string;
      author: string;
    };
  };
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  projectDetailsSlug?: string;
}
