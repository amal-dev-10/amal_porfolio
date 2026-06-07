import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    key: 'frontend',
    skills: ['Vue.js', 'React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
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
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    name: 'DevOps & Tools',
    key: 'devops',
    skills: ['Docker', 'Git', 'Linux (Ubuntu)', 'VS Code', 'Firebase', 'Server Management'],
  },
];

export const specializations = [
  'E-commerce Solutions',
  'GIS & Mapping Solutions',
  'Mobile App Development',
  'SaaS Platforms',
  'CRM & Workflow Systems',
  'API Integrations',
];
