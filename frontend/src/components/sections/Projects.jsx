import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../../data/mock';
import { Button } from '../ui/button';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-slate-900">
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
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>

          <div className="max-w-7xl mx-auto space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-2 h-2 rounded-full mt-3"
                          style={{ backgroundColor: project.color }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                            {project.title}
                          </h3>
                          <p className="text-slate-400 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {project.technology}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-slate-300 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-3 text-slate-400"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                            >
                              <span className="text-emerald-400 mt-1">▹</span>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, idx) => (
                          <motion.span
                            key={idx}
                            className="px-4 py-1.5 text-sm rounded-full border border-slate-700 text-slate-300"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                            whileHover={{ borderColor: project.color, color: project.color }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
