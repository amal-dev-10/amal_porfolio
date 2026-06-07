import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  'AI / SaaS': { bg: 'bg-purple-500/10', text: 'text-purple-400', dot: 'bg-purple-400' },
  'Enterprise': { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-400' },
  'GIS': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  'AI': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', dot: 'bg-cyan-400' },
};

const projectIcons: Record<number, string> = {
  1: '🥗',
  2: '💪',
  3: '🏢',
  4: '🗺️',
  5: '🤖',
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const colors = categoryColors[project.category] || { bg: 'bg-indigo-500/10', text: 'text-indigo-400', dot: 'bg-indigo-400' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-400 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/20 h-full flex flex-col">
        {/* Project Visual Header */}
        <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden flex items-center justify-center">
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-50" />
          
          {/* Glow orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />
          </div>

          {/* Icon */}
          <div className="relative z-10 text-6xl float-animation" style={{ animationDelay: `${index * 0.5}s` }}>
            {projectIcons[project.id]}
          </div>

          {/* Category badge */}
          <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono ${colors.bg} ${colors.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {project.category}
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-indigo-300 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="tech-badge">+{project.techStack.length - 5}</span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-4 border-t border-white/5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/link"
                aria-label={`View live demo of ${project.title}`}
              >
                <FiExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-200" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-200 transition-colors duration-200 group/link ml-auto"
                aria-label={`View GitHub repo of ${project.title}`}
              >
                <FiGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
