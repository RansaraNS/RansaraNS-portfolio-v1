import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Download,
  ChevronDown,
  Star,
  Coffee,
  Zap,
  Heart,
  Award,
  Book,
  Target
} from 'lucide-react';

import Hero from './components/home/Hero';
import About from './components/home/About';
import Skills from './components/home/Skills';
import Projects from './components/home/Projects';
import Contact from './components/home/Contact';
import Navigation from './components/home/Navigation';

import AboutPage from './components/pages/AboutPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';

import Footer from './components/common/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <Hero setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage prop */}
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        );
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <div>
            <Hero setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage prop */}
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;