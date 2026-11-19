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

export default async function MainPage() {
  const offers = await getOffers();
  const employees = await getEmployees();
  const stacks = await getStacks();
  const projects = await getProjects();
  const selectedProjectsImages = await getSelectedProjectsImages();
  const founder = await getFounder();

  return (
    <>
      <Section className="min-h-[calc(100vh-85px)]">
        <div className="w-full flex flex-col items-start justify-center gap-8">
          <h1 className="text-4xl md:text-5xl font-bold text-light-primary">
            Custom Software. Reliable Infrastructure. One Expert Team.
          </h1>
          <p className="text-base md:text-lg max-w-3xl text-light-secondary">
            We build custom software, manage the infrastructure behind it, and keep everything
            running. One team, direct communication, no handoffs.
          </p>
          <BookingButton />
          <div className="w-full border-b border-dark-secondary mx-4" />
          <Marquee images={selectedProjectsImages} />
        </div>
      </Section>

      <Section mode="accent">
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-4xl font-bold text-light-primary">What we offer.</h2>
          <Table items={offers} />
          <div className="text-lg">
            <b className="text-light-primary">Or both</b>
            <span className="text-light-secondary">
              {' '}
              — one team writes it, ships it and keeps it running. No handoffs.
            </span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-4xl font-bold text-light-primary">The stack we actually work in.</h2>
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3">
            {stacks.map((stack) => (
              <TextBlocks key={stack.id} title={stack.title} list={stack.technologies} />
            ))}
          </div>
        </div>
      </Section>

      <Section mode="white">
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-4xl font-bold text-dark-primary">
            The people you&apos;ll actually work with.
          </h2>
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-12">
            {employees.map((employee) => (
              <ImageBlock
                key={employee.id}
                src={employee.image}
                title={`${employee.firstName} ${employee.lastName}`}
                subtitle={employee.description}
                linkTitle="LinkedIn →"
                link={employee.linkedInLink}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-4xl font-bold text-light-primary">Start small. Decide with facts.</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepBlock
              tag="01"
              title="Call"
              description="30 minutes with the founder about what you need."
              subtitle="30 minutes"
            />
            <StepBlock
              tag="02"
              title="Scope / Audit"
              description="We map what to build — or what's at risk. Fixed price, agreed upfront."
              subtitle="1–4 weeks"
            />
            <StepBlock
              tag="03"
              title="Build / Fix"
              description="Working results every two weeks, not a reveal at the end."
              subtitle="Depends on scope"
            />
            <StepBlock
              tag="04"
              title="Support"
              description="We stay on monthly — or hand everything over, documented."
              subtitle="Ongoing"
            />
          </div>
          <div className="w-full border-b border-dark-secondary" />
          <div className="w-full flex items-center justify-center">
            <BookingButton />
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-4xl font-bold text-light-primary">Selected work.</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full flex flex-col items-start justify-center gap-12">
          <h2 className="text-4xl font-bold text-light-primary">Before you book.</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            <ObjectionBlock
              title="How much does it cost?"
              description="Projects and audits are fixed price, agreed before we start. Ongoing work is billed monthly. No surprises on the invoice."
            />
            <ObjectionBlock
              title="We already have a developer doing this."
              description="That's usually how it starts — until they're stuck between shipping features and fixing fires. We take infrastructure off their plate and leave it documented, so they're never the only one who knows how it works."
            />
            <ObjectionBlock
              title="You're a small team. What if someone's out?"
              description="Everything we build is automated and documented — nothing lives in one person's head. And we're upfront about limits: we don't sell 24/7 on-call."
            />
          </div>
          <div className="w-full mt-8 mb-6 border-b border-dark-secondary" />
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
