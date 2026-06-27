import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#050510' }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-black mb-8 gradient-text"
          >
            {portfolioData.name}
            <span className="text-blue-400">.</span>
          </motion.div>

          {/* Spinner */}
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent"
            />
          </div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #4f8ef7, #a855f7)', width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-3">{Math.min(100, Math.round(progress))}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
