import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-slate-900 to-slate-950">
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
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent hidden md:block" />
                )}

                <motion.div
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:pl-20 hover:border-cyan-400/50 transition-all duration-300 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon */}
                  <div className="absolute left-6 top-6 hidden md:block">
                    <div className="w-12 h-12 bg-slate-900 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                      {edu.status === 'current' ? (
                        <GraduationCap className="w-6 h-6 text-cyan-400" />
                      ) : (
                        <Award className="w-6 h-6 text-emerald-400" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {edu.institution}
                      </h3>
                      {edu.status === 'current' && (
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-400/50">
                          Ongoing
                        </span>
                      )}
                    </div>

                    <p className="text-lg text-cyan-400 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {edu.degree || edu.program}
                    </p>

                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>
                        {edu.duration || `Completed: ${edu.completionYear || edu.completionDate}`}
                      </span>
                    </div>

                    {(edu.percentage || edu.cgpa) && (
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg border border-emerald-400/30">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {edu.percentage ? `${edu.percentage}` : `CGPA: ${edu.cgpa}`}
                          </span>
                        </span>
                      </div>
                    )}

                    {edu.expectedGraduation && (
                      <p className="text-sm text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Expected Graduation: {edu.expectedGraduation}
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
