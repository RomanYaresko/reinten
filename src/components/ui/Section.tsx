'use client';

import { motion } from 'motion/react';

const modeClasses = {
  grid: 'bg-grid bg-dark-primary',
  secondary: 'bg-grid bg-[#0E131C]',
  accent: 'bg-grid-accent bg-dark-primary',
  white: 'bg-light-primary',
} as const;

type SectionProps = Readonly<{
  children: React.ReactNode;
  mode?: keyof typeof modeClasses;
  className?: string;
  viewportAmount?: number;
}>;

export default function Section({
  children,
  mode = 'grid',
  className = '',
  viewportAmount = 0.2,
}: SectionProps) {
  return (
    <section
      className={`w-full flex items-center justify-center px-8 py-32 border-b border-dark-subtle ${modeClasses[mode]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: viewportAmount }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className="w-full max-w-244 flex items-center justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
}
