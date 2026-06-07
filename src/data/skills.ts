import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    key: 'frontend',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Mobile',
    key: 'mobile',
    skills: ['React Native', 'Expo', 'Mobile UI/UX', 'Push Notifications'],
  },
  {
    name: 'Backend',
    key: 'backend',
    skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'WebSockets', 'Authentication'],
  },
  {
    name: 'Database',
    key: 'database',
    skills: ['PostgreSQL', 'MySQL', 'Database Design', 'Query Optimization'],
  },
  {
    name: 'DevOps & Tools',
    key: 'devops',
    skills: ['Docker', 'Git', 'Linux (Ubuntu)', 'VS Code', 'CI/CD', 'Server Management'],
  },
];

export const specializations = [
  'Enterprise Applications',
  'GIS & Mapping Solutions',
  'Mobile App Development',
  'SaaS Platforms',
  'AI-powered Chatbots',
  'CRM & Workflow Systems',
  'API Integrations',
];
