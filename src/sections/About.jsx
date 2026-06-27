import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useCounter } from '../hooks/useCounter';

function StatCard({ stat }) {
  const { count, ref } = useCounter(stat.value, 2000);
  return (
    <div ref={ref} className="glass glass-hover rounded-2xl p-5 text-center">
      <div className="text-3xl font-black gradient-text">{count}{stat.suffix}</div>
      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Get to Know Me</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start" ref={ref}>
          {/* Left — Photo + info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Avatar placeholder */}
            <div className="relative w-fit">
              <div
                className="w-64 h-64 rounded-3xl mx-auto lg:mx-0 flex items-center justify-center text-8xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(79,142,247,0.2), rgba(168,85,247,0.2))',
                  border: '1px solid rgba(79,142,247,0.3)',
                }}
              >
                👨‍💻
                {/* glow */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{ boxShadow: '0 0 60px rgba(79,142,247,0.2) inset' }}
                />
              </div>
              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2"
              >
                <div className="text-xs text-gray-400">Status</div>
                <div className="text-sm font-bold text-green-400">Available ✓</div>
              </motion.div>
            </div>

            {/* Quick info */}
            <div className="flex flex-col gap-3 mt-6">
              {[
                { icon: MapPin, label: portfolioData.location },
                { icon: Mail, label: portfolioData.email },
                { icon: Calendar, label: 'Available for full-time roles' },
                { icon: Award, label: 'Fresher — Ready to Ship' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-gray-400">
                  <Icon size={16} className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed">{portfolioData.longBio}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.stats.map(stat => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-xl font-bold text-white mb-5">Education</h3>
              <div className="flex flex-col gap-4 relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                {portfolioData.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="pl-10 relative"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-blue-500 bg-[#050510] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <div className="glass rounded-xl p-4 glass-hover">
                      <div className="flex justify-between items-start gap-2 flex-wrap">
                        <div>
                          <div className="font-semibold text-white text-sm">{edu.degree}</div>
                          <div className="text-blue-400 text-xs mt-0.5">{edu.institution}</div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-xs text-gray-500">{edu.year}</div>
                          <div className="text-xs text-green-400 font-semibold">{edu.grade}</div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
