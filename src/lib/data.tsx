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
    image: '/images/eloquentExchange.png',
    title: 'Eloquent Exchange',
    description: 'A modern looking business site for a financial exchange',
    technologies: ['Next.js', 'Tailwind', 'Typescript'],
    links: {
      preview: 'www.eloquent-exchange.com',
    },
  },
  {
    image: '/images/fitnessSpace.png',
    title: 'Fitness Space',
    description:
      'A modern looking landing page for the fitness space application',
    technologies: ['React.js', 'Nodejs'],
    links: {
      preview: 'https://fitness-space-ng.netlify.app/',
    },
  },
  {
    image: '/images/chat-app.png',
    title: 'Talk-A-Tive Chat app',
    description:
      'A full-stack chat application featuring real-time communication with Socket.io, user authentication, and group chat functionalities.',
    technologies: ['React.js', 'Chakra-ui', 'Nodejs', 'Mongodb'],
    links: {
      preview: 'https://jweb-chat-app.onrender.com/',
    },
  },
  {
    image: '/images/tokyo-ecommerce.png',
    title: 'Tokyo Ecommerce Website',
    description:
      'A comprehensive e-commerce platform built with React.js and Node.js.',
    technologies: ['React.js', 'Nodejs', 'Mongodb'],
    links: {
      preview: 'https://tokyoecommerce.onrender.com/',
    },
  },
  {
    image: '/images/corek-project.png',
    title: 'Corek E-learning Website',
    description:
      'A comprehensive e-learning platform built with React.js and Node.js.',
    technologies: ['React.js', 'Nodejs', 'Mongodb'],
    links: {
      preview: 'https://corek-project.onrender.com/',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Fullstack developer',
    company: 'Fitness Space, remote',
    description:
      'In this role, my tasks revolved around creating frontend and backend features for the landing page site and mobile application of Fitness Space with technologies like React-native,Reactjs,Nodejs and MongoDb',
    period: 'November 2023 - present',
    technologies: ['React-Native', 'Reactjs', 'Nodejs', 'MongoDB'],
  },
  {
    title: 'Fullstack developer',
    company: 'Eloquent Exchange, remote',
    description:
      'In this role, i was tasked with creating a business website application for a client using technologies like Nextjs, TailwindCss, Typescript.',
    period: 'Febuary 2025 - April 2025',
    technologies: ['Nextjs', 'Typescript', 'Tailwind'],
  },
  {
    title: 'Fullstack developer',
    company: 'Cyberverdict, remote',
    description:
      'In this role, i was tasked with implementing both frontend and backend features for the web application for Cyberverdict using technologies like Reactjs, TailwindCss, Typescript, Nodejs, MongoDB.',
    period: 'October 2023 - June 2024',
    technologies: ['ReactJs', 'Typescript', 'Tailwind', 'Nodejs', 'MongoDB'],
  },
  {
    title: 'fullstack developer intern',
    company: 'Greenie Web,Singapore(remote)',
    description:
      'In this role, i was tasked with various frontend and backend tasks for the greenie web desktop software where i had to work with technologies like electronjs,Nodejs,complex regex classes,typescript',
    period: 'August 2023 - November 2023',
    technologies: ['Electronjs', 'TypeScript', 'Nodejs', 'regex'],
  },
  {
    title: 'fullstack developer',
    company: 'Greenie Web,India(remote)',
    description:
      'In this role which was my first, i was tasked with various frontend and backend tasks across diverse products where i had to work with technologies like Reactjs,Nodejs,Mongodb',
    period: 'June 2023 - August 2023',
    technologies: ['Reactjs', 'Nodejs', 'MongoDB'],
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
