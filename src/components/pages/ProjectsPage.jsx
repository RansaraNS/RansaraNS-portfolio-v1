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

import portfolioData from '../../data/portfolioData';

const ProjectsPage = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">My Projects</h1>
          <p className="text-xl text-gray-300">A comprehensive look at my work and contributions</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 transition-all"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                  
                  {/* <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg neon-glow"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;