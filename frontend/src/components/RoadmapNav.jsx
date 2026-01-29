import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/mock';

const RoadmapNav = ({ activeSection, onNavigate }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4">
        {portfolioData.journey.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group relative flex items-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Line connector */}
              {index < portfolioData.journey.length - 1 && (
                <div className="absolute top-6 left-1.5 w-0.5 h-4 bg-slate-700" />
              )}
              
              {/* Dot */}
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50'
                    : 'bg-slate-900 border-slate-600 group-hover:border-cyan-400'
                }`}
                animate={{
                  scale: isActive ? [1, 1.2, 1] : 1
                }}
                transition={{
                  duration: 1,
                  repeat: isActive ? Infinity : 0
                }}
              />
              
              {/* Label */}
              <motion.span
                className={`absolute right-6 whitespace-nowrap px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  isActive ? 'bg-cyan-400 text-slate-900' : 'bg-slate-800 text-slate-300'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapNav;
