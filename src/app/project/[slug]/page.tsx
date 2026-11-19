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
              <h1 className="text-[36px]/[1] md:text-[56px]/[1] font-bold text-light-primary">
                {heroSection.title}
              </h1>
              <p className="text-[19px]/[1.55] max-w-[62ch] text-light-tertiary">
                {heroSection.subtitle}
              </p>
            </div>

            <div className="w-full border-b border-dark-subtle" />

            <dl className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
              {heroSection.cases.map((item, index) => (
                <div key={`${index}-${item.title}`} className="flex flex-col gap-2">
                  <dt className="font-code text-[11.5px]/[1] uppercase tracking-[0.18em] text-light-muted">
                    {item.title}
                  </dt>
                  <dd className="text-[15px]/[1.55] text-light-primary">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      )}

      {secondarySection && (
        <Section mode="secondary">
          <div className="flex w-full flex-col items-start gap-12">
            <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
              {secondarySection.title}
            </h2>
            <BulletPoints bulletPoints={secondarySection.bulletPoints} />
          </div>
        </Section>
      )}

      {showcaseSection && (
        <Section mode="white" viewportAmount={0.1}>
          <div className="flex w-full flex-col items-start gap-12">
            <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-dark-primary">
              {showcaseSection.title}
            </h2>
            {showcaseSection.steps && (
              <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
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
            <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
              {additionalSection.title}
            </h2>
            <p className="max-w-[62ch] text-[17px]/[1.55] text-light-tertiary">
              {additionalSection.description}
            </p>
            <BulletPoints bulletPoints={additionalSection.bulletPoints} />
          </div>
        </Section>
      )}

      {resultsSection && (
        <Section mode="secondary">
          <div className="flex w-full flex-col items-start gap-12">
            <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
              {resultsSection.title}
            </h2>
            <dl className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
              {resultsSection.metrics.map((metric, index) => (
                <div key={`${index}-${metric.value}`} className="flex flex-col gap-4">
                  <dt className="text-[40px]/[1] md:text-[56px]/[1] font-bold text-light-primary">
                    {metric.value}
                  </dt>
                  <dd className="text-[15px]/[1.55] text-light-tertiary">{metric.description}</dd>
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
          <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
            No system yet? Let&apos;s talk.
          </h2>
          <BookingButton />
          {founder && <EmployeeBlock employee={founder} />}
        </div>
      </Section>
    </>
  );
}
