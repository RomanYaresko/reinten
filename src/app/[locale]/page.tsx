import BookingButton from '@/components/booking/BookingButton';
import EmployeeBlock from '@/components/employee/EmployeeBlock';
import ProjectCard from '@/components/project/ProjectCard';
import ImageBlock from '@/components/ui/ImageBlock';
import Marquee from '@/components/ui/Marquee';
import ObjectionBlock from '@/components/ui/ObjectionBlock';
import Section from '@/components/ui/Section';
import StepBlock from '@/components/ui/StepBlock';
import Table from '@/components/ui/Table';
import TextBlocks from '@/components/ui/TextBlocks';
import { getEmployees, getFounder } from '@/features/employee/employee.service';
import { getOffers } from '@/features/offer/offer.service';
import { getProjects, getSelectedProjectsImages } from '@/features/project/project.service';
import { getStacks } from '@/features/stack/stack.service';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

type MainPageProps = Readonly<{
  params: Promise<{
    locale: Locale;
  }>;
}>;

export default async function MainPage({ params }: MainPageProps) {
  const [{ locale }, t] = await Promise.all([params, getTranslations('HomePage')]);
  const [offers, employees, stacks, projects, selectedProjectsImages, founder] = await Promise.all([
    getOffers(locale),
    getEmployees(locale),
    getStacks(),
    getProjects(locale),
    getSelectedProjectsImages(),
    getFounder(locale),
  ]);

  return (
    <>
      <Section className="min-h-[calc(100vh-85px)]">
        <div className="w-full flex flex-col items-start justify-center gap-8">
          <h1 className="text-[36px]/[1] md:text-[56px]/[1] font-bold text-light-primary">
            {t('hero.title')}
          </h1>
          <p className="text-[19px]/[1.55] max-w-[62ch] text-light-tertiary">
            {t('hero.description')}
          </p>
          <BookingButton />
          <div className="w-full border-b border-dark-subtle mx-4" />
          <Marquee images={selectedProjectsImages} />
        </div>
      </Section>

      <Section mode="accent">
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
            {t('offers.title')}
          </h2>
          <Table items={offers} />
          <div className="text-[17px]/[1]">
            <b className="text-light-primary">{t('offers.bothLabel')}</b>
            <span className="text-light-tertiary"> {t('offers.bothDescription')}</span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
            {t('stack.title')}
          </h2>
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
            {stacks.map((stack) => (
              <TextBlocks key={stack.id} title={stack.title} list={stack.technologies} />
            ))}
          </div>
        </div>
      </Section>

      <Section mode="white">
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-dark-primary">
            {t('team.title')}
          </h2>
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-12">
            {employees.map((employee) => (
              <ImageBlock
                key={employee.id}
                src={employee.image}
                title={`${employee.firstName} ${employee.lastName}`}
                subtitle={employee.description}
                linkTitle={t('team.profileLink')}
                link={employee.linkedInLink}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
            {t('process.title')}
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepBlock
              tag="01"
              title={t('process.call.title')}
              description={t('process.call.description')}
              subtitle={t('process.call.subtitle')}
            />
            <StepBlock
              tag="02"
              title={t('process.scope.title')}
              description={t('process.scope.description')}
              subtitle={t('process.scope.subtitle')}
            />
            <StepBlock
              tag="03"
              title={t('process.build.title')}
              description={t('process.build.description')}
              subtitle={t('process.build.subtitle')}
            />
            <StepBlock
              tag="04"
              title={t('process.support.title')}
              description={t('process.support.description')}
              subtitle={t('process.support.subtitle')}
            />
          </div>
          <div className="w-full border-b border-dark-subtle" />
          <div className="w-full flex items-center justify-center">
            <BookingButton />
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
            {t('projects.title')}
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-[26px]/[1] md:text-[34px]/[1] font-bold text-light-primary">
            {t('objections.title')}
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <ObjectionBlock
              title={t('objections.cost.title')}
              description={t('objections.cost.description')}
            />
            <ObjectionBlock
              title={t('objections.developer.title')}
              description={t('objections.developer.description')}
            />
            <ObjectionBlock
              title={t('objections.availability.title')}
              description={t('objections.availability.description')}
            />
          </div>
          <div className="w-full mt-12 mb-4 border-b border-dark-subtle" />
          <div className="w-full flex items-center justify-center">
            <BookingButton />
          </div>
          <div className="w-full flex items-center justify-center">
            {founder && <EmployeeBlock employee={founder} />}
          </div>
        </div>
      </Section>
    </>
  );
}
