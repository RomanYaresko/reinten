import type { DataLocaleString } from '@/features/data/data.types';

export interface ProjectDetails<Text = string> {
  slug: string;
  heroSection?: {
    title: Text;
    subtitle: Text;
    cases: {
      title: Text;
      description: Text;
    }[];
  };
  secondarySection?: {
    title: Text;
    bulletPoints: Text[];
  };
  showcaseSection?: {
    title: Text;
    steps?: {
      title: Text;
      description: Text;
    }[];
    images: {
      src: string;
      title: Text;
      ratio: {
        x: number;
        y: number;
      };
    }[];
  };
  additionalSection?: {
    title: Text;
    description: Text;
    bulletPoints: Text[];
  };
  resultsSection?: {
    title: Text;
    metrics: {
      value: Text;
      description: Text;
    }[];
    feedback: {
      quote: Text;
      author: Text;
    };
  };
}

export interface Project<Text = string> {
  id: number;
  title: Text;
  subtitle: Text;
  description: Text;
  image?: string;
  projectDetailsSlug?: string;
}

export type ProjectData = Project<DataLocaleString>;
export type ProjectDetailsData = ProjectDetails<DataLocaleString>;
