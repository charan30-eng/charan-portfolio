import { motion } from 'framer-motion';
import { Download, Eye, Award, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">My Background</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Resume & <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left — resume card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 glass rounded-3xl p-8 text-center flex flex-col gap-5"
          >
            <div
              className="w-24 h-32 mx-auto rounded-2xl flex items-center justify-center text-4xl"
              style={{ background: 'linear-gradient(135deg, rgba(79,142,247,0.2), rgba(168,85,247,0.2))', border: '1px solid rgba(79,142,247,0.2)' }}
            >
              📄
            </div>
            <div>
              <div className="font-bold text-white text-lg">{portfolioData.fullName}</div>
              <div className="text-gray-400 text-sm mt-1">{portfolioData.title}</div>
            </div>
            <div className="flex flex-col gap-3">
              <motion.a
                href={portfolioData.resumePath}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #4f8ef7, #a855f7)' }}
              >
                <Download size={16} /> Download PDF
              </motion.a>
              <motion.a
                href={portfolioData.resumePath}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                className="flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-white glass border border-white/10"
              >
                <Eye size={16} /> View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right — timelines */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={18} className="text-blue-400" />
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>
              <div className="flex flex-col gap-4 relative pl-8">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                {portfolioData.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 top-3 w-6 h-6 rounded-full border-2 border-blue-500 bg-[#050510] flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                    <div className="glass rounded-xl p-5 glass-hover">
                      <div className="flex justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <div className="font-bold text-white">{exp.role}</div>
                          <div className="text-blue-400 text-sm">{exp.company}</div>
                        </div>
                        <span className="text-xs text-gray-500 glass px-3 py-1 rounded-full h-fit">{exp.year}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tech.map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full text-blue-400 bg-blue-400/10">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Award size={18} className="text-purple-400" />
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {portfolioData.certificates.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass glass-hover rounded-xl p-4 flex gap-3 items-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Award size={14} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{cert.name}</div>
                      <div className="text-xs text-purple-400 mt-0.5">{cert.issuer} · {cert.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
