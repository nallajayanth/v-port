import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoadmapNav from '../components/RoadmapNav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative bg-slate-950">
      {/* Desktop Roadmap Navigation */}
      <RoadmapNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 md:hidden p-3 bg-slate-900 border border-slate-800 rounded-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-cyan-400" />
        ) : (
          <Menu className="w-6 h-6 text-cyan-400" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-center h-full">
              <nav className="space-y-6">
                {portfolioData.journey.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`block text-2xl font-bold transition-colors duration-300 ${
                      activeSection === item.id ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
                    }`}
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2025 {portfolioData.personal.name}. Built with React & Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
