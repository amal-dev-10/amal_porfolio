import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full Stack JavaScript Developer',
    company: 'Freelance / Independent',
    duration: '2022 — Present',
    location: 'Remote',
    description: [
      'Building enterprise-grade web applications and SaaS platforms for global clients',
      'Developing AI-powered chatbot platforms with LLM integrations',
      'Creating GIS mapping solutions with geospatial API integrations',
      'Delivering mobile apps using React Native Expo for iOS and Android',
      'Managing end-to-end project delivery from architecture to deployment',
    ],
    techStack: ['React', 'Vue.js', 'Node.js', 'React Native', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    role: 'Front-End Developer',
    company: 'Software Development Firm',
    duration: '2020 — 2022',
    location: 'Kerala, India',
    description: [
      'Led front-end development for enterprise CRM and workflow automation platforms',
      'Built dynamic form builders and process automation UIs using Vue.js',
      'Collaborated with backend teams to integrate RESTful APIs',
      'Implemented responsive designs and improved performance metrics',
      'Mentored junior developers and established coding standards',
    ],
    techStack: ['Vue.js', 'JavaScript', 'TypeScript', 'REST APIs', 'CSS3', 'Bootstrap'],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Tech Startup',
    duration: '2018 — 2020',
    location: 'Kerala, India',
    description: [
      'Developed web applications using JavaScript and modern frameworks',
      'Built and maintained RESTful APIs with Node.js and Express',
      'Worked on database design and optimization for PostgreSQL',
      'Participated in agile development workflows and code reviews',
      'Created responsive UI components and improved user experiences',
    ],
    techStack: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'HTML5', 'CSS3'],
  },
];
