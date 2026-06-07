import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { services } from '../../data/services';
import { FiGlobe, FiSmartphone, FiCode, FiCpu, FiMessageSquare } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  web: FiGlobe,
  mobile: FiSmartphone,
  api: FiCode,
  ai: FiCpu,
  consulting: FiMessageSquare,
};

const serviceColors = [
  { bg: 'bg-indigo-500/10', icon: 'text-indigo-400', border: 'hover:border-indigo-500/30', glow: 'hover:shadow-indigo-500/10' },
  { bg: 'bg-cyan-500/10', icon: 'text-cyan-400', border: 'hover:border-cyan-500/30', glow: 'hover:shadow-cyan-500/10' },
  { bg: 'bg-emerald-500/10', icon: 'text-emerald-400', border: 'hover:border-emerald-500/30', glow: 'hover:shadow-emerald-500/10' },
  { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'hover:border-amber-500/30', glow: 'hover:shadow-amber-500/10' },
  { bg: 'bg-purple-500/10', icon: 'text-purple-400', border: 'hover:border-purple-500/30', glow: 'hover:shadow-purple-500/10' },
  { bg: 'bg-pink-500/10', icon: 'text-pink-400', border: 'hover:border-pink-500/30', glow: 'hover:shadow-pink-500/10' },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c18] to-[#0a0f1e]" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What I Do"
          title="Services I"
          highlight="Offer"
          subtitle="End-to-end development services tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FiCode;
            const colors = serviceColors[index % serviceColors.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 ${colors.border} hover:-translate-y-2 hover:shadow-2xl ${colors.glow} flex flex-col gap-5`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-bold font-display text-lg">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Features list */}
                <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-gray-400 text-sm">
                      <FiCheck className={`w-3.5 h-3.5 ${colors.icon} flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
