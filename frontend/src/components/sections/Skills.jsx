import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/mock';

const Skills = () => {
  const { technical, soft } = portfolioData.skills;

  const categories = [...new Set(technical.map(skill => skill.category))];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-16 text-center"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>

          {/* Technical Skills */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.h3
              className="text-2xl font-bold text-cyan-400 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Technical Skills
            </motion.h3>

            {categories.map((category, catIndex) => (
              <div key={category} className="mb-8">
                <motion.h4
                  className="text-lg font-semibold text-emerald-400 mb-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
                >
                  {category}
                </motion.h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technical
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-200 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {skill.name}
                          </span>
                          <span className="text-cyan-400 text-sm font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 + index * 0.05, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="max-w-6xl mx-auto">
            <motion.h3
              className="text-2xl font-bold text-cyan-400 mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Soft Skills
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-5 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full text-slate-300 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
