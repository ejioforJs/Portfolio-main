import { env } from '@/env.mjs';

const siteUrl =
  env.SITE_URL ||
  (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : 'http://localhost:3000');

export const siteConfig = {
  title: 'Solomon James | Software Developer',
  description:
    "Hello, I'm Solomon James, a full-stack software developer from Nigeria. I build modern web and mobile applications with React, Next.js, React Native, Node.js, and MongoDB.",
  keywords: [
    'Solomon James',
    'Full-stack developer',
    'Nigeria',
    'React',
    'Next.js',
    'React Native',
    'Node.js',
    'MongoDB',
    'Web development',
    'Mobile development',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: siteUrl.replace(/\/$/, ''),
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
