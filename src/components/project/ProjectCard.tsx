import Image from 'next/image';
import { Project } from '@/features/project/project.types';
import Link from 'next/link';

type ProjectCardProps = Readonly<{
  project: Project;
}>;

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full border border-dark-secondary bg-dark-primary">
      <div className="relative aspect-video w-full border-b border-dark-secondary bg-dark-secondary/20">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} project image`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            unoptimized
          />
        )}
      </div>

      <div className="flex flex-col p-12">
        <p className="mb-6 font-code text-xs uppercase tracking-[0.18em] text-light-secondary">
          {project.title}
        </p>
        <p className="text-lg text-light-secondary">{project.subtitle}</p>
        <div className="w-full border-b border-dark-secondary my-8" />
        <p className="mb-6 text-lg font-bold text-light-primary">{project.description}</p>
        {project.projectDetailsSlug && (
          <Link href={`/project/${project.projectDetailsSlug}`} className="text-accent text-sm">
            Read case →
          </Link>
        )}
      </div>
    </article>
  );
}
