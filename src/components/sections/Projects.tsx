import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1428] to-[#0a0f1e]" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-indigo-600/6 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-cyan-600/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          title="Work I'm"
          highlight="Proud Of"
          subtitle="Real-world applications I've designed, architected, and delivered end-to-end."
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 mb-6 text-sm">
            These are just a few highlights. I've delivered many more projects across various industries.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            Discuss Your Project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
