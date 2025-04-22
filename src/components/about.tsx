'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Solomon James, I&apos;m a Fullstack developer from Nigeria.
          I&apos;ve been coding for the past 5 years with experience across
          various industries. After I gained admission into college , I decided
          to pursue my passion for programming. My favorite part of programming
          is the problem-solving aspect. I love the feeling of finally figuring
          out a solution to a problem. I&apos;ve had the opportunity to work on
          several exciting projects during my coding journey, ranging from
          personal projects to collaborative ventures. My core stack is
          React,React-Native, Next.js, TypeScript, Nodejs, MongoDB and Tailwind
          CSS. I am also familiar with Nest.js and Prisma. I&apos;m always
          looking to learn new technologies.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
