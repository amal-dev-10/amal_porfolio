import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/amald-dev-10/', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/amal-dev-b50a04292/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:devamal7902@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/7902992447', label: 'WhatsApp' },
  ];

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#080c18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white font-mono text-sm">
                AD
              </div>
              <span className="text-white font-display font-bold text-xl">
                Amal <span className="gradient-text">Dev</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack JavaScript Developer building enterprise apps, mobile solutions, and AI-powered systems.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-gray-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide">Get In Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:devamal7902@gmail.com"
                className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                <FiMail className="w-4 h-4" />
                devamal7902@gmail.com
              </a>
              <a
                href="https://wa.me/7902992447"
                className="flex items-center gap-2 text-gray-500 hover:text-green-400 text-sm transition-colors duration-200"
              >
                <FaWhatsapp className="w-4 h-4" />
                Available on WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/amal-dev-b50a04292/"
                className="flex items-center gap-2 text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                <FiLinkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Amal Dev. Crafted with ❤️ using React & TypeScript.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-600 text-xs">Available for freelance projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
