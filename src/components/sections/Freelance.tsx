import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { FiCheck, FiStar, FiTrendingUp, FiShield, FiClock, FiMessageCircle } from 'react-icons/fi';

const reasons = [
  {
    icon: FiStar,
    title: 'Senior-Level Quality',
    desc: '6+ years of real-world experience building complex, enterprise-grade systems.',
  },
  {
    icon: FiTrendingUp,
    title: 'End-to-End Delivery',
    desc: 'From architecture and design to deployment and maintenance — I handle it all.',
  },
  {
    icon: FiShield,
    title: 'Clean, Maintainable Code',
    desc: 'Well-documented, modular code that your team can maintain and extend.',
  },
  {
    icon: FiClock,
    title: 'On-Time Delivery',
    desc: 'Reliable project management with clear milestones and regular updates.',
  },
  {
    icon: FiMessageCircle,
    title: 'Clear Communication',
    desc: 'Proactive communication in English. No guessing games, no delays.',
  },
  {
    icon: FiCheck,
    title: 'Post-Launch Support',
    desc: 'I don\'t disappear after delivery. Ongoing support and improvements available.',
  },
];

const processSteps = [
  { number: '01', title: 'Discovery', desc: 'Understanding your goals, requirements, and technical needs.' },
  { number: '02', title: 'Planning', desc: 'Architecture design, tech stack selection, and project roadmap.' },
  { number: '03', title: 'Development', desc: 'Iterative building with regular demos and progress updates.' },
  { number: '04', title: 'Testing', desc: 'Thorough QA, performance testing, and code review.' },
  { number: '05', title: 'Deployment', desc: 'Smooth production deployment with monitoring setup.' },
  { number: '06', title: 'Support', desc: 'Ongoing maintenance, updates, and feature additions.' },
];

export const Freelance = () => {
  return (
    <section id="freelance" className="section-padding relative bg-[#080c18]">
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Hero glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Freelance"
          title="Why Hire"
          highlight="Me?"
          subtitle="I bring senior engineering expertise to your project, without the overhead of a full-time hire."
        />

        {/* Why hire me — Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-xl p-5 flex gap-4 items-start hover:border-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            My Process
          </span>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white mt-4">
            How We'll <span className="gradient-text">Work Together</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-4 text-center flex flex-col gap-3 hover:border-indigo-500/20 transition-all duration-200 group"
            >
              <div className="text-3xl font-black font-display gradient-text group-hover:scale-110 transition-transform duration-200">
                {step.number}
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">{step.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 glass-card" />
          <div className="absolute inset-0 border border-indigo-500/20 rounded-3xl" />
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                Ready to Build Something{' '}
                <span className="gradient-text">Amazing?</span>
              </h3>
              <p className="text-gray-400 max-w-md">
                Let's discuss your project and see how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap relative z-10"
              >
                Start a Project →
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
