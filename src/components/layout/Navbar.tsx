import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useScrollProgress } from '../../hooks/useScrollAnimation';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0a0f1e]/80 border-b border-white/5 shadow-2xl shadow-black/20'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-9 h-9 md:w-10 md:h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center font-bold text-white font-mono text-sm">
                  AD
                </div>
              </div>
              <span className="hidden sm:block text-white font-display font-bold text-lg">
                Amal<span className="gradient-text">Dev</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-indigo-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
                      transition={{ type: 'spring', bounce: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5 relative z-10"
              >
                Hire Me
              </motion.a>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden backdrop-blur-xl bg-[#0a0f1e]/95 border-t border-white/5"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary text-center text-sm py-3 mt-2"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};
