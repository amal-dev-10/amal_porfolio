import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTypingEffect } from '../../hooks/useScrollAnimation';

const roles = [
  'Full Stack Developer',
  'Front-End Specialist',
  'Mobile App Developer',
  'React & Vue Expert',
  'API Architect',
];

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Tech Domains' },
];


export const Hero = () => {
  const typedRole = useTypingEffect(roles, 75, 2500);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for Freelance Work
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight">
                <span className="text-white">Amal </span>
                <span className="gradient-text">Dev</span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-10 flex items-center"
            >
              <span className="text-xl sm:text-2xl font-display font-semibold text-gray-300">
                {typedRole}
                <span className="text-indigo-400 ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              Passionate software developer crafting{' '}
              <span className="text-indigo-300 font-medium">enterprise apps</span>,{' '}
              <span className="text-cyan-300 font-medium">AI-powered systems</span>, and{' '}
              <span className="text-purple-300 font-medium">mobile experiences</span>{' '}
              that make a real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary inline-flex items-center gap-2 relative z-10"
              >
                View My Work
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-600 text-sm">Follow me:</span>
              {[
                { icon: FiGithub, href: 'https://github.com/', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
                { icon: FaWhatsapp, href: 'https://wa.me/', label: 'WhatsApp', color: 'hover:text-green-400' },
              ].map(({ icon: Icon, href, label, color = 'hover:text-indigo-400' }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-gray-500 ${color} transition-colors duration-200`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-4 gap-4 pt-4 border-t border-white/5 mt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl font-black font-display gradient-text">{stat.value}</span>
                  <span className="text-gray-500 text-xs leading-tight">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Central avatar / code visual */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/15 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500" />
              </div>
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-cyan-500/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Center card */}
              <div className="relative w-52 h-52 glass-card rounded-3xl flex flex-col items-center justify-center gap-4 glow-blue float-animation">
                <div className="text-7xl">👨‍💻</div>
                <div className="text-center">
                  <p className="text-white font-bold font-display text-sm">Amal Dev</p>
                  <p className="text-gray-500 text-xs font-mono mt-1">Full Stack Dev</p>
                </div>
                {/* Status indicator */}
                <div className="absolute -top-2 -right-2 flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[10px] font-semibold font-mono">Available</span>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'React', emoji: '⚛️', pos: 'top-0 left-0' },
                { label: 'Vue.js', emoji: '💚', pos: 'top-0 right-0' },
                { label: 'Node.js', emoji: '🟢', pos: 'bottom-0 left-0' },
                { label: 'Docker', emoji: '🐳', pos: 'bottom-0 right-0' },
              ].map(({ label, emoji, pos }, i) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} glass-card rounded-xl px-3 py-2 flex items-center gap-2`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.7 }}
                >
                  <span className="text-lg">{emoji}</span>
                  <span className="text-xs font-semibold text-gray-300 font-mono">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <FiArrowDown className="w-4 h-4 scroll-bounce" />
      </motion.button>
    </section>
  );
};
