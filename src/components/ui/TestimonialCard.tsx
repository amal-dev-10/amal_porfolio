import { motion } from 'framer-motion';
import type { Testimonial } from '../../types';
import { FiStar } from 'react-icons/fi';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const avatarColors = [
    'from-indigo-500 to-purple-600',
    'from-cyan-500 to-blue-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-pink-600',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/8"
    >
      {/* Quote icon */}
      <div className="text-indigo-500/30 text-6xl font-display leading-none select-none">"</div>

      {/* Content */}
      <p className="text-gray-300 leading-relaxed text-sm md:text-base -mt-6">
        {testimonial.content}
      </p>

      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FiStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};
