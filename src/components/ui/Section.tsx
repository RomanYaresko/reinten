'use client';

import { motion } from 'motion/react';

const modeClasses = {
  grid: 'bg-grid bg-dark-primary',
  accent: 'bg-grid-accent bg-dark-primary',
  white: 'bg-light-primary',
} as const;

export default function Section({
  children,
  mode = 'grid',
  className = '',
}: Readonly<{
  children: React.ReactNode;
  mode?: keyof typeof modeClasses;
  className?: string;
}>) {
  return (
    <section
      className={`w-full flex items-center justify-center px-8 py-32 border-b border-solid border-dark-secondary ${modeClasses[mode]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
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
