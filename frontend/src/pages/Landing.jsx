import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    navigate('/portfolio');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8 cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleEnter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-emerald-400 p-1"
              animate={{
                boxShadow: isHovered
                  ? ['0 0 20px rgba(0,217,255,0.5)', '0 0 40px rgba(0,217,255,0.8)', '0 0 20px rgba(0,217,255,0.5)']
                  : ['0 0 20px rgba(0,217,255,0.3)', '0 0 30px rgba(0,217,255,0.5)', '0 0 20px rgba(0,217,255,0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <motion.span
                  className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                  animate={{
                    scale: isHovered ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  VS
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400">
              <Sparkles className="w-5 h-5" />
              <p className="text-lg font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tap to Begin Your Journey
              </p>
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore the portfolio of Vasavi Sama
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
