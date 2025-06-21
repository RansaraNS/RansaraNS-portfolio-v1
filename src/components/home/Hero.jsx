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
  Target,
  FileText,
  Maximize2,
  Minimize2
} from 'lucide-react';

import useScrollAnimation from '../../hooks/useScrollAnimation';
import portfolioData from '../../data/portfolioData';



// PDF Viewer Component
const PDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/150qyTiaGdmnoGq2ZSZahgbz1is3rHQzk/view?usp=drive_link";
    link.download = 'Sasin_Ransara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl ${
            isFullscreen ? 'w-full h-full' : 'w-11/12 h-5/6 max-w-4xl'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <FileText className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold text-white">CV Preview</h3>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleFullscreen}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Download size={16} />
                <span>Download</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>
          </div>

          {/* PDF Content */}
          <div className="relative w-full h-full overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading PDF...</p>
                </div>
              </div>
            )}
            
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title="PDF Viewer"
              onLoad={() => setIsLoading(false)}
              style={{ height: 'calc(100% - 80px)' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Hero = () => {
  const scrollY = useScrollAnimation();
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);
  
  // Sample PDF URL - replace with your actual PDF URL
  const pdfUrl = "https://sr-cv.tiiny.site/";

  const handleDownloadCV = () => {
    setIsPDFViewerOpen(true);
  };
  
  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="text-center z-10 px-4">
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-glow"></div>
              <img
                src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t39.30808-6/364802282_2065161483825592_725251577288906574_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExOQ4kvAqtDz1_flffrjkDLY_pXXCtTYstj-ldcK1Ni8Sd56od_4qiTBxlZo4hKSiGtr2IMo1cPHRnZqrkmqGG&_nc_ohc=JA7WpYbRi7QQ7kNvwGJotgh&_nc_oc=AdmcpeJtNn60oTFhrHk3dV8bzVwd3KsoE8r6kOI57V2EVAMA8tnPFQA_RJgFmBvwk-o&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=zNIAqA1JkoEYaMTO_-sOqQ&oh=00_AfP4G3ZmW2LlqjK6O3bWb8LO1rpeh-9VKr8AQwmYbq806w&oe=685CA3D1"
                alt="Profile"
                className="relative w-full h-full rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </motion.div>
          
          {/* Name and Role */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          >
            {portfolioData.name}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            {portfolioData.role}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {portfolioData.bio}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold flex items-center space-x-2 neon-glow"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(portfolioData.social.linkedin, '_blank')}
              className="px-8 py-4 glass-effect rounded-full font-semibold flex items-center space-x-2 hover:bg-white/20"
            >
              <Mail size={20} />
              <span>Connect with Me</span>
            </motion.button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center space-x-6 mt-12"
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
                className="p-3 glass-effect rounded-full hover:bg-white/20 transition-all"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* PDF Viewer Popup */}
      <PDFViewer
        isOpen={isPDFViewerOpen}
        onClose={() => setIsPDFViewerOpen(false)}
        pdfUrl={pdfUrl}
      />
    </>
  );
};

export default Hero;