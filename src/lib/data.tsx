import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/eloquentExchange.webp',
    title: 'Eloquent Exchange',
    description: 'A modern business site for a financial exchange platform.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    links: {
      preview: 'https://www.eloquent-exchange.com/',
    },
  },
  {
    image: '/images/zeecontest.webp',
    title: 'Zee Contest',
    description:
      'A contest platform for campaign discovery, participant engagement, and online competition experiences.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    links: {
      preview: 'https://zeecontest.com/',
    },
  },
  {
    image: '/images/uzzina.webp',
    title: 'Uzzina',
    description:
      'A modern web platform with a polished interface for product discovery and customer engagement.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    links: {
      preview: 'https://uzzina.com/',
    },
  },
  {
    image: '/images/repsense.webp',
    title: 'Repsense',
    description:
      'A modern landing page designed to introduce the app, communicate its value, and drive early user interest.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    links: {
      preview: 'https://www.repsense.site/',
    },
  },
  {
    image: '/images/fitnessSpace.webp',
    title: 'Fitness Space',
    description:
      'A polished landing page for the Fitness Space web and mobile product.',
    technologies: ['React.js', 'Node.js'],
    links: {
      preview: 'https://fitness-space-ng.netlify.app/',
    },
  },
  {
    image: '/images/fitness-space.webp',
    title: 'Fitness Space Mobile App',
    description:
      'A mobile fitness application for workouts, wellness tracking, and healthier lifestyle routines.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    links: {
      preview:
        'https://play.google.com/store/apps/details?id=com.fitnessspace.app',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Full-stack Developer',
    company: 'Fitness Space, remote',
    description:
      'I build frontend and backend features for the Fitness Space landing page and mobile application using React Native, React.js, Node.js, and MongoDB.',
    period: 'November 2023 - Present',
    technologies: ['React Native', 'React.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Eloquent Exchange, remote',
    description:
      'I created a business website for a financial exchange client using Next.js, Tailwind CSS, and TypeScript.',
    period: 'February 2025 - April 2025',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Cyberverdict, remote',
    description:
      'I implemented frontend and backend features for the Cyberverdict web application using React.js, Tailwind CSS, TypeScript, Node.js, and MongoDB.',
    period: 'October 2023 - June 2024',
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
    ],
  },
  {
    title: 'Full-stack Developer Intern',
    company: 'Greenie Web, Singapore (remote)',
    description:
      'I worked on frontend and backend tasks for Greenie Web desktop software using Electron.js, Node.js, TypeScript, and advanced regular expressions.',
    period: 'August 2023 - November 2023',
    technologies: ['Electron.js', 'TypeScript', 'Node.js', 'Regex'],
  },
  {
    title: 'Full-stack Developer',
    company: 'Greenie Web, India (remote)',
    description:
      'In my first developer role, I contributed frontend and backend features across several products using React.js, Node.js, and MongoDB.',
    period: 'June 2023 - August 2023',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
