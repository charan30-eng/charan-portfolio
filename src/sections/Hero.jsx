import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { useTypingEffect } from '../hooks/useTypingEffect';

const HeroCanvas = lazy(() => import('../components/HeroCanvas'));

const socialIcons = [
  { icon: FaGithub, key: 'github', label: 'GitHub' },
  { icon: FaLinkedin, key: 'linkedin', label: 'LinkedIn' },
  { icon: FaTwitter, key: 'twitter', label: 'Twitter' },
  { icon: FaCode, key: 'leetcode', label: 'LeetCode' },
];

export default function Hero() {
  const typedText = useTypingEffect(portfolioData.titles, 80, 45, 2200);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container-custom w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-28">

          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 w-fit"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full pulse-glow" />
              <span className="text-sm text-gray-300">{portfolioData.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tight leading-none"
            >
              Hi, I'm{' '}
              <span className="gradient-text block mt-1">{portfolioData.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-gray-300 h-8 flex items-center gap-1"
            >
              <span style={{ color: '#4f8ef7' }}>{typedText}</span>
              <span className="w-0.5 h-6 bg-blue-400 animate-pulse ml-0.5" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              {portfolioData.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={portfolioData.resumePath}
                download
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79,142,247,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #4f8ef7, #a855f7)' }}
              >
                <Download size={18} /> Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white glass glass-hover border border-white/10"
              >
                <Mail size={18} /> Hire Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-2"
            >
              {socialIcons.map(({ icon: Icon, key, label }) => (
                <motion.a
                  key={label}
                  href={portfolioData.social[key]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block h-[520px] relative"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
              </div>
            }>
              <HeroCanvas />
            </Suspense>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 -left-6 glass rounded-2xl px-4 py-3"
            >
              <div className="text-xs text-gray-400">Coding Since</div>
              <div className="text-lg font-bold text-white">2022</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-20 -right-4 glass rounded-2xl px-4 py-3"
            >
              <div className="text-xs text-gray-400">Projects Built</div>
              <div className="text-lg font-bold gradient-text">12+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors z-10"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
