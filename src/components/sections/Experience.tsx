import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { experiences } from '../../data/experience';
import { FiMapPin, FiCalendar, FiCheck } from 'react-icons/fi';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-[#080c18]">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Experience"
          title="My Professional"
          highlight="Journey"
          subtitle="A track record of delivering impactful software across industries."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-5 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 z-10">
                  <span className="text-white font-bold font-mono text-xs">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold font-display text-lg md:text-xl mb-1">{exp.role}</h3>
                      <p className="gradient-text font-semibold font-display">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-right sm:text-right">
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:justify-end">
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span className="font-mono">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:justify-end">
                        <FiMapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="flex flex-col gap-2.5 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <FiCheck className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
