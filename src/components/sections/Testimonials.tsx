import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { TestimonialCard } from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1428] to-[#0a0f1e]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-indigo-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-cyan-600/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Clients"
          highlight="Say"
          subtitle="Real feedback from real clients I've worked with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass-card rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { value: '30+', label: 'Happy Clients' },
            { value: '100%', label: 'Satisfaction Rate' },
            { value: '50+', label: 'Projects Delivered' },
            { value: '5★', label: 'Average Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black font-display gradient-text">{value}</p>
              <p className="text-gray-500 text-xs mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
