import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { skillCategories, specializations } from '../../data/skills';

const categoryIcons: Record<string, string> = {
  frontend: '🎨',
  mobile: '📱',
  backend: '⚙️',
  database: '🗄️',
  devops: '🚀',
};

const categoryColors: Record<string, { border: string; glow: string; badge: string; text: string }> = {
  frontend: { border: 'hover:border-indigo-500/30', glow: 'group-hover:bg-indigo-500/5', badge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300', text: 'text-indigo-400' },
  mobile: { border: 'hover:border-cyan-500/30', glow: 'group-hover:bg-cyan-500/5', badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300', text: 'text-cyan-400' },
  backend: { border: 'hover:border-emerald-500/30', glow: 'group-hover:bg-emerald-500/5', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300', text: 'text-emerald-400' },
  database: { border: 'hover:border-amber-500/30', glow: 'group-hover:bg-amber-500/5', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-300', text: 'text-amber-400' },
  devops: { border: 'hover:border-purple-500/30', glow: 'group-hover:bg-purple-500/5', badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300', text: 'text-purple-400' },
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-[#080c18]">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Skills"
          title="My Tech"
          highlight="Stack"
          subtitle="Technologies and tools I use to build remarkable products."
        />

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => {
            const colors = categoryColors[category.key];
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`group glass-card rounded-2xl p-6 transition-all duration-300 ${colors.border} hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl transition-colors duration-300 flex items-center justify-center text-xl ${colors.glow} bg-white/3`}>
                    {categoryIcons[category.key]}
                  </div>
                  <div>
                    <h3 className={`font-bold font-display text-base ${colors.text}`}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-xs font-mono">{category.skills.length} technologies</p>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className={`skill-tag text-xs px-3 py-1.5 rounded-lg border ${colors.badge}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm font-mono tracking-widest uppercase mb-6">Domain Specializations</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {specializations.map((spec, i) => (
              <motion.span
                key={spec}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full glass-card border border-white/8 text-gray-300 text-sm font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-200 cursor-default"
              >
                {spec}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
