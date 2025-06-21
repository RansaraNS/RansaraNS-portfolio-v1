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


const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-gray-300">My journey, passions, and what drives me</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-12"
        >
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Book className="text-blue-400 mr-4" size={32} />
              My Story
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My journey into software engineering began during my freshman year when I wrote my first 
                "Hello World" program. What started as curiosity quickly became a passion that has shaped 
                my academic and professional aspirations.
              </p>
              <p>
                Throughout my undergraduate studies, I've had the opportunity to work on diverse projects, 
                from building web applications to exploring machine learning algorithms. Each project has 
                taught me something new and reinforced my love for problem-solving through code.
              </p>
              <p>
                I believe in the power of technology to create positive change, and I'm committed to 
                building solutions that not only work well but also make a meaningful impact on users' lives.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">BSc (Hons) in Information Technology Specializing in Software Engineering </h4>
                  <p className="text-gray-400">Sri Lanka Institute of Information Technology (SLIIT)  • 2022-Present</p>
                  <p className="text-sm text-gray-500">GPA: 2.97/4.0</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Interests</h3>
              <div className="space-y-2">
                {[
                  "Full-Stack Development",
                  "Project Leadership",
                  "Collaborative Development",
                  "DevOps & Deployment",
                ].map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <Star className="text-yellow-400 mr-2" size={16} />
                    <span className="text-gray-300">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;