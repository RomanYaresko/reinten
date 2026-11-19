import { getProjectDetailsBySlug, getProjects } from '@/features/project/project.service';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import StepBlock from '@/components/ui/StepBlock';
import ProjectGallery from '@/components/project/ProjectGallery';
import BulletPoints from '@/components/ui/BulletPoints';
import QuoteBlock from '@/components/ui/QuoteBlock';
import EmployeeBlock from '@/components/employee/EmployeeBlock';
import BookingButton from '@/components/booking/BookingButton';
import { getFounder } from '@/features/employee/employee.service';

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects
    .filter((project) => project.projectDetailsSlug)
    .map((project) => ({
      slug: project.projectDetailsSlug,
    }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectDetails = await getProjectDetailsBySlug(slug);

  if (!projectDetails) {
    notFound();
  }

  const founder = await getFounder();
  const { heroSection, secondarySection, showcaseSection, additionalSection, resultsSection } =
    projectDetails;

  return (
    <>
      {heroSection && (
        <Section>
          <div className="flex w-full flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-8">
              <h1 className="text-4xl font-bold text-light-primary md:text-6xl">
                {heroSection.title}
              </h1>
              <p className="max-w-3xl text-base text-light-secondary md:text-lg">
                {heroSection.subtitle}
              </p>
            </div>

            <div className="w-full mt-12 border-b border-dark-secondary" />

            <dl className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
              {heroSection.cases.map((item, index) => (
                <div key={`${index}-${item.title}`} className="flex flex-col gap-2">
                  <dt className="font-code text-xs uppercase tracking-[0.18em] text-light-secondary">
                    {item.title}
                  </dt>
                  <dd className="text-base text-light-primary">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      )}

      {secondarySection && (
        <Section mode="secondary">
          <div className="flex w-full flex-col items-start gap-12">
            <h2 className="text-2xl font-bold text-light-primary md:text-3xl">
              {secondarySection.title}
            </h2>
            <BulletPoints bulletPoints={secondarySection.bulletPoints} />
          </div>
        </Section>
      )}

      {showcaseSection && (
        <Section mode="white">
          <div className="flex w-full flex-col items-start gap-12">
            <h2 className="text-2xl font-bold text-dark-primary md:text-3xl">
              {showcaseSection.title}
            </h2>
            {showcaseSection.steps && (
              <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
                {showcaseSection.steps.map((step, index) => (
                  <StepBlock
                    key={`${index}-${step.title}`}
                    mode="white"
                    tag={String(index + 1).padStart(2, '0')}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            )}
            {showcaseSection.images.length > 0 && (
              <ProjectGallery images={showcaseSection.images} />
            )}
          </div>
        </Section>
      )}

      {additionalSection && (
        <Section>
          <div className="flex w-full flex-col items-start gap-8">
            <h2 className="text-3xl font-bold text-light-primary md:text-4xl">
              {additionalSection.title}
            </h2>
            <p className="mb-8 max-w-3xl text-base text-light-secondary md:text-lg">
              {additionalSection.description}
            </p>
            <BulletPoints bulletPoints={additionalSection.bulletPoints} />
          </div>
        </Section>
      )}

      {resultsSection && (
        <Section mode="secondary">
          <div className="flex w-full flex-col items-start gap-12">
            <h2 className="text-3xl font-bold text-light-primary md:text-4xl">
              {resultsSection.title}
            </h2>
            <dl className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
              {resultsSection.metrics.map((metric, index) => (
                <div key={`${index}-${metric.value}`} className="flex flex-col gap-2">
                  <dt className="text-5xl font-bold text-light-primary md:text-6xl">
                    {metric.value}
                  </dt>
                  <dd className="text-base text-light-secondary">{metric.description}</dd>
                </div>
              ))}
            </dl>
            <QuoteBlock
              quote={resultsSection.feedback.quote}
              author={resultsSection.feedback.author}
            />
          </div>
        </Section>
      )}

      <Section>
        <div className="flex w-full flex-col items-center gap-12 text-center">
          <h2 className="text-3xl font-bold text-light-primary md:text-4xl">
            No system yet? Let&apos;s talk.
          </h2>
          <BookingButton />
          {founder && <EmployeeBlock employee={founder} />}
        </div>
      </Section>
    </>
  );
}
