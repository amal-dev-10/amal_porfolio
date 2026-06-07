import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Full-stack web applications built with React, Vue.js, and Node.js. From MVPs to enterprise-scale platforms.',
    icon: 'web',
    features: ['React / Vue.js Frontend', 'Node.js Backend', 'REST API Development', 'SaaS Platforms', 'Performance Optimization'],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native Expo for both iOS and Android.',
    icon: 'mobile',
    features: ['React Native Expo', 'iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Deployment'],
  },
  {
    id: 3,
    title: 'API Development & Integration',
    description: 'Robust RESTful APIs and seamless third-party integrations. Secure, scalable, and well-documented.',
    icon: 'api',
    features: ['RESTful API Design', 'Third-party Integrations', 'API Documentation', 'Authentication & Security', 'WebSocket Support'],
  },
  {
    id: 4,
    title: 'GIS & Mapping Solutions',
    description: 'Advanced geospatial applications with interactive maps, satellite imagery, and location-based services.',
    icon: 'gis',
    features: ['Interactive Maps', 'Geospatial APIs', 'Satellite Imagery', 'Parcel Mapping', 'Location Services'],
  },
  {
    id: 5,
    title: 'AI Integration & Chatbots',
    description: 'Intelligent AI-powered systems, voice chatbots, and LLM integrations for modern business automation.',
    icon: 'ai',
    features: ['LLM Integration', 'Voice Chatbots', 'Workflow Automation', 'Real-time Chat', 'Custom AI Solutions'],
  },
  {
    id: 6,
    title: 'Technical Consulting',
    description: 'Architecture reviews, technology stack guidance, code reviews, and technical mentoring.',
    icon: 'consulting',
    features: ['Architecture Design', 'Tech Stack Selection', 'Code Reviews', 'Performance Audits', 'Team Mentoring'],
  },
];
