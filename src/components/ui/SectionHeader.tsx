import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({
  badge,
  title,
  highlight,
  subtitle,
  className = '',
  align = 'center',
}: SectionHeaderProps) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 mb-16 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
        {title}{' '}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({ children, className = '', hover = false, onClick }: GlassCardProps) => (
  <div
    onClick={onClick}
    className={`glass-card rounded-2xl p-6 ${hover ? 'transition-all duration-300 hover:border-indigo-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);
