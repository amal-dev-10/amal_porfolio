export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  key: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile';
  skills: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}
