import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { FiCode, FiZap, FiTarget, FiUsers } from 'react-icons/fi';

const focusAreas = [
  { icon: FiCode, title: 'Clean Code', desc: 'Maintainable, scalable architecture' },
  { icon: FiZap, title: 'Performance', desc: 'Fast, optimized user experiences' },
  { icon: FiTarget, title: 'Precision', desc: 'Pixel-perfect implementation' },
  { icon: FiUsers, title: 'Collaboration', desc: 'Clear communication & delivery' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Passionate About Building"
          highlight="Great Software"
          subtitle="I turn complex ideas into elegant, production-ready solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Code-style card */}
            <div className="glass-card rounded-2xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-gray-600 text-xs ml-2">about.ts</span>
              </div>
              <div className="flex flex-col gap-1.5 text-sm leading-relaxed">
                <span className="text-purple-400">const <span className="text-blue-400">developer</span> = {'{'}</span>
                <span className="text-gray-400 pl-4">name: <span className="text-amber-300">"Amal Dev"</span>,</span>
                <span className="text-gray-400 pl-4">location: <span className="text-amber-300">"Kerala, India 🇮🇳"</span>,</span>
                <span className="text-gray-400 pl-4">experience: <span className="text-emerald-400">4</span>,</span>
                <span className="text-gray-400 pl-4">available: <span className="text-emerald-400">true</span>,</span>
                <span className="text-gray-400 pl-4">specialties: [</span>
                <span className="text-amber-300 pl-8">"Mobile Apps"</span><span className="text-gray-400">,</span>
                <span className="text-amber-300 pl-8">"Web apps all major frameworks"</span><span className="text-gray-400">,</span>
                <span className="text-amber-300 pl-8">"Backend systems"</span><span className="text-gray-400">,</span>
                <span className="text-amber-300 pl-8">"E-commerces"</span><span className="text-gray-400">,</span>
                <span className="text-amber-300 pl-8">"Websites and more"</span>
                <span className="text-gray-400 pl-4">],</span>
                <span className="text-purple-400">{'}'}</span>
              </div>
            </div>

            {/* Focus area cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {focusAreas.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="glass-card rounded-xl p-4 flex gap-3 items-start hover:border-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold mb-0.5">{title}</p>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Story text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-5">
              <p className="text-gray-300 leading-relaxed text-base">
                Hi! I'm <span className="text-white font-semibold">Amal Dev</span> — a passionate Full Stack JavaScript developer from Kerala, India with over 6 years of experience building software that matters.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                My journey started with a deep curiosity for how things work on the web. Over the years, I've evolved from building simple websites to architecting{' '}
                <span className="text-indigo-300">enterprise-grade applications</span>, complex{' '}
                <span className="text-cyan-300">GIS mapping platforms</span>,and cross-platform{' '}
                <span className="text-emerald-300">mobile apps</span>.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                I specialize in <strong className="text-white">React</strong> and <strong className="text-white">Vue</strong> on the frontend, <strong className="text-white">Node.js</strong> on the backend, with expertise in <strong className="text-white">PostgreSQL</strong>, <strong className="text-white">Docker</strong>, and modern DevOps practices.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                Currently, I'm available for freelance projects and collaborations. Whether you need a full product built from scratch or want to bring technical expertise to your existing team — I'm here.
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-2">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                Let's Work Together
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                See My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
