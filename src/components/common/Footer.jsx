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


const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold gradient-text">Sasin Ransara</h3>
            <p className="text-gray-400">Undergraduate Software Engineer</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {[
              { icon: Github, href: portfolioData.social.github },
              { icon: Linkedin, href: portfolioData.social.linkedin },
              { icon: Twitter, href: portfolioData.social.twitter }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 glass-effect rounded-full hover:bg-white/20 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>&copy; 2025 Sasin Ransara.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;