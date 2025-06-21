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

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate undergraduate software engineer with a love for creating innovative 
            digital experiences. My journey in tech started with curiosity and has evolved into 
            a dedication to building solutions that make a difference.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Coffee className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">What I Do</h3>
              </div>
              <p className="text-gray-300">
                I specialize in full-stack development, creating web applications that are both 
                beautiful and functional. I love working with modern technologies and learning 
                new frameworks.
              </p>
            </div>
            
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Target className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">My Goal</h3>
              </div>
              <p className="text-gray-300">
                To become a well software engineer who contributes to open-source projects 
                and mentors the next generation of developers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;