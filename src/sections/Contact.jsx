import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, XCircle, MapPin, Mail, Phone, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');

    try {
      await emailjs.send(
        portfolioData.emailjs.serviceId,
        portfolioData.emailjs.templateId,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        portfolioData.emailjs.publicKey
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const Field = ({ label, name, type = 'text', multiline = false }) => {
    const Comp = multiline ? 'textarea' : 'input';
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">{label}</label>
        <Comp
          type={type}
          value={form[name]}
          onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
          rows={multiline ? 5 : undefined}
          className={`w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border transition-colors resize-none ${
            errors[name] ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
          }`}
          placeholder={`Your ${label.toLowerCase()}`}
        />
        {errors[name] && <p className="text-xs text-red-400 mt-1">{errors[name]}</p>}
      </div>
    );
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's Talk</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm">
            I'm currently open to new opportunities. Whether it's a project, a job, or just a hello — my inbox is open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: MapPin, label: 'Location', value: portfolioData.location, color: '#4f8ef7' },
              { icon: Mail, label: 'Email', value: portfolioData.email, color: '#a855f7' },
              { icon: Phone, label: 'Phone', value: portfolioData.phone, color: '#22d3ee' },
            ].map(({ icon: Icon, label, value, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="glass glass-hover rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{label}</div>
                  <div className="text-sm font-semibold text-white">{value}</div>
                </div>
              </motion.div>
            ))}

            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow" />
                <span className="text-sm font-semibold text-white">Available for work</span>
              </div>
              <p className="text-xs text-gray-400">Typically respond within 24 hours</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Subject" name="subject" />
              <Field label="Message" name="message" multiline />

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(79,142,247,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-white disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #4f8ef7, #a855f7)' }}
              >
                {status === 'loading' ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-green-400 justify-center"
                  >
                    <CheckCircle size={16} /> Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400 justify-center"
                  >
                    <XCircle size={16} /> Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
