import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, X, Star, Tag } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const allCategories = ['All', ...new Set(portfolioData.projects.flatMap(p => p.category))];

const statusColors = {
  'Completed': 'text-green-400 bg-green-400/10',
  'Deployed': 'text-blue-400 bg-blue-400/10',
  'Live': 'text-purple-400 bg-purple-400/10',
};

function ProjectCard({ project, onClick }) {
  const techColors = ['#4f8ef7', '#a855f7', '#22d3ee', '#ec4899', '#10b981'];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6, scale: 1.01 }}
      onClick={() => onClick(project)}
      className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer group relative"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 glass rounded-full px-2 py-1">
          <Star size={10} className="text-yellow-400 fill-yellow-400" />
          <span className="text-xs text-yellow-400 font-semibold">Featured</span>
        </div>
      )}

      {/* Image / placeholder */}
      <div
        className="h-48 flex items-center justify-center text-6xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(79,142,247,0.1), rgba(168,85,247,0.1))',
        }}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span>{'</>'}</span>
            <span className="text-sm text-gray-500 font-mono">{project.title}</span>
          </div>
        )}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(5,5,16,0.9), transparent)' }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-bold text-white text-lg leading-tight">{project.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full font-semibold flex-shrink-0 ${statusColors[project.status] || 'text-gray-400'}`}>
            {project.status}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((t, i) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                color: techColors[i % techColors.length],
                background: `${techColors[i % techColors.length]}18`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <GitBranch size={14} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        onClick={e => e.stopPropagation()}
        className="glass rounded-3xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center hover:text-white text-gray-400">
          <X size={16} />
        </button>

        <h2 className="text-2xl font-black text-white mb-2">{project.title}</h2>
        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${statusColors[project.status] || ''}`}>
          {project.status}
        </span>

        <p className="text-gray-400 text-sm leading-relaxed mt-4 mb-6">{project.description}</p>

        <div className="mb-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
            <Tag size={14} className="text-blue-400" /> Features
          </div>
          <ul className="flex flex-col gap-1.5">
            {project.features?.map(f => (
              <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />{f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div className="text-sm font-semibold text-white mb-3">Tech Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full text-blue-400 bg-blue-400/10">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-semibold text-white hover:border-blue-500/50 transition-all border border-white/10">
              <GitBranch size={16} /> View Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #4f8ef7, #a855f7)' }}>
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(null);

  const filtered = portfolioData.projects.filter(p => {
    const matchCat = filter === 'All' || p.category.includes(filter);
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 glass rounded-full px-5 py-3 text-sm text-white placeholder-gray-500 outline-none border border-white/10 focus:border-blue-500/50 transition-colors"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat ? 'text-white' : 'glass text-gray-400 hover:text-white'
              }`}
              style={filter === cat ? { background: 'linear-gradient(135deg, #4f8ef7, #a855f7)', boxShadow: '0 0 20px rgba(79,142,247,0.3)' } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setModal} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">No projects found for "{search}"</div>
        )}
      </div>

      <AnimatePresence>
        {modal && <Modal project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  );
}
