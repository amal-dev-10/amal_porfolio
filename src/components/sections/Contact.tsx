import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import {
  FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin,
  FiMessageCircle, FiCheckCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'devamal7902@gmail.com',
    href: 'mailto:devamal7902@gmail.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+91 79029 92447',
    href: 'https://wa.me/7902992447',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amal-dev-b50a04292/',
    href: 'https://linkedin.com/in/amal-dev-b50a04292/',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/amald-dev-10',
    href: 'https://github.com/amal-dev-10',
    color: 'text-gray-300',
    bg: 'bg-white/5',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Trivandrum, Kerala, India',
    href: '#',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    icon: FiMessageCircle,
    label: 'Availability',
    value: 'Open to freelance work',
    href: '#contact',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      setSubmitError("Please configure your VITE_WEB3FORMS_ACCESS_KEY in your environment/code.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-[#080c18]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-indigo-600/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-600/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Let's Work"
          highlight="Together"
          subtitle="Have a project in mind? I'd love to hear about it. Let's build something great together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info — left */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-white font-bold font-display text-xl mb-2">Get In Touch</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a project, a question, or just want to connect — my inbox is always open.
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-white/10 transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono uppercase tracking-wide">{label}</p>
                    <p className={`text-sm font-medium ${color}`}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability notice */}
            <div className="glass-card rounded-xl p-4 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold font-mono uppercase tracking-wide">Currently Available</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                I'm open to new freelance projects, part-time contracts, and full-time opportunities. Let's talk!
              </p>
            </div>
          </div>

          {/* Contact form — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <FiCheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold font-display text-xl">Message Sent!</h3>
                  <p className="text-gray-400 max-w-xs">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-secondary text-sm px-6 py-2.5 mt-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-gray-400 text-sm font-medium">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-gray-400 text-sm font-medium">
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-subject" className="text-gray-400 text-sm font-medium">
                      Subject <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="Project inquiry, collaboration..."
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-gray-400 text-sm font-medium">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project, goals, budget, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 py-3 px-4 rounded-xl text-center">
                      {submitError}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center justify-center gap-3 w-full disabled:opacity-70 disabled:cursor-not-allowed relative z-10"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-gray-600 text-xs text-center">
                    By submitting, you agree that I may contact you regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
