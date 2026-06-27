import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const catColors = {
  Backend: '#4f8ef7',
  'Node.js': '#10b981',
  Frontend: '#a855f7',
  AI: '#22d3ee',
};

export default function Articles() {
  return (
    <section id="articles" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">My Writing</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Featured <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            I write about things I learn — backend patterns, deployment lessons, and frontend tricks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.articles.map((article, i) => {
            const accentColor = catColors[article.category] || '#4f8ef7';
            return (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="glass glass-hover rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Image placeholder */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}18, transparent)`,
                    borderBottom: `1px solid ${accentColor}22`,
                  }}
                >
                  <BookOpen size={48} style={{ color: accentColor, opacity: 0.4 }} />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(to top, ${accentColor}22, transparent)` }}
                  />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ color: accentColor, background: `${accentColor}18` }}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={11} /> {article.readTime} read
                    </span>
                    <span className="text-xs text-gray-600 ml-auto">{article.date}</span>
                  </div>

                  <h3 className="font-bold text-white leading-snug">{article.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{article.excerpt}</p>

                  <div className="flex items-center gap-1 text-sm font-semibold mt-2" style={{ color: accentColor }}>
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
