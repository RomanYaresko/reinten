import Image from 'next/image';
import { Project } from '@/features/project/project.types';
import Link from 'next/link';

type ProjectCardProps = Readonly<{
  project: Project;
}>;

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full border border-dark-subtle bg-dark-primary">
      <div className="relative aspect-video w-full border-b border-dark-subtle bg-dark-tertiary">
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
        <p className="mb-6 font-code text-[11.5px]/[1] uppercase tracking-[0.18em] text-light-muted">
          {project.title}
        </p>
        <p className="text-[17px]/[1.55] text-light-tertiary">{project.subtitle}</p>
        <div className="w-full border-b border-dark-subtle my-8" />
        <p className="mb-6 text-[17px]/[1.55] text-light-primary font-bold">
          {project.description}
        </p>
        {project.projectDetailsSlug && (
          <Link
            href={`/project/${project.projectDetailsSlug}`}
            className="text-accent text-[14px]/[1]"
          >
            Read case →
          </Link>
        )}
      </div>
    </article>
  );
}
