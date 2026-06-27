import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Articles', 'Resume', 'Contact'];
const socialLinks = [
  { icon: FaGithub, key: 'github' },
  { icon: FaLinkedin, key: 'linkedin' },
  { icon: FaTwitter, key: 'twitter' },
  { icon: FaInstagram, key: 'instagram' },
  { icon: FaYoutube, key: 'youtube' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-white/5">
      {/* Gradient divider */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #4f8ef7, #a855f7, transparent)' }} />

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-3">
              <span className="gradient-text">{portfolioData.name}</span>
              <span className="text-blue-400">.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{portfolioData.bio}</p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Navigation</div>
            <ul className="flex flex-col gap-2">
              {navLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Connect</div>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, key }) => (
                <motion.a
                  key={key}
                  href={portfolioData.social[key]}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <div className="mt-5 text-sm text-gray-500">
              <span className="text-green-400">●</span> {portfolioData.availability}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {portfolioData.fullName}. Built with React + Framer Motion.
          </p>

          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-white glass px-4 py-2 rounded-full transition-colors"
          >
            <ArrowUp size={14} /> Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
