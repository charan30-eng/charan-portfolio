import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHackerrank, FaStackOverflow } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

const profiles = [
  { name: 'GitHub', icon: FaGithub, key: 'github', color: '#f0f6fc', stat: '48+ Stars', desc: 'Open source contributions & projects' },
  { name: 'LinkedIn', icon: FaLinkedin, key: 'linkedin', color: '#0a66c2', stat: '200+ Connections', desc: 'Professional network & experience' },
  { name: 'LeetCode', icon: SiLeetcode, key: 'leetcode', color: '#ffa116', stat: '50+ Problems', desc: 'Algorithms & data structures practice' },
  { name: 'HackerRank', icon: FaHackerrank, key: 'hackerrank', color: '#00ea64', stat: '5★ SQL', desc: 'Certifications & skill badges' },
  { name: 'CodeChef', icon: SiCodechef, key: 'codechef', color: '#5b4638', stat: '2★ Rated', desc: 'Competitive programming contests' },
  { name: 'Codeforces', icon: SiCodeforces, key: 'codeforces', color: '#3b5998', stat: 'Pupil', desc: 'CF rounds & problem solving' },
  { name: 'GeeksForGeeks', icon: SiGeeksforgeeks, key: 'github', color: '#2f8d46', stat: '30+ Articles', desc: 'DSA practice & coding articles' },
  { name: 'Stack Overflow', icon: FaStackOverflow, key: 'github', color: '#f48024', stat: '120 Rep', desc: 'Community Q&A contributions' },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section-padding relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Find Me Online</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            const href = portfolioData.social[profile.key] || '#';
            return (
              <motion.a
                key={profile.name}
                href={href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass glass-hover rounded-2xl p-5 flex flex-col gap-3 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${profile.color}18`, border: `1px solid ${profile.color}30` }}
                >
                  <Icon size={22} style={{ color: profile.color }} />
                </div>
                <div>
                  <div className="font-bold text-white">{profile.name}</div>
                  <div className="text-xs font-semibold mt-0.5" style={{ color: profile.color }}>{profile.stat}</div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{profile.desc}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
