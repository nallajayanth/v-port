import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Shield, Database } from 'lucide-react';
import { portfolioData } from '../../data/mock';

const About = () => {
  const { description, highlights } = portfolioData.about;

  const icons = [Code2, Zap, Shield, Database];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-12 text-center"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.div
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0,217,255,0.5)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-400/10 rounded-lg">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-slate-300 font-medium flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {highlight}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
