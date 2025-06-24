import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';


import portfolioData from '../../data/portfolioData';

emailjs.init("Cfy_aPKTK6dnvuNCt"); //emailjs public key


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setSubmitStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sasin Ransara',
        to_email: 'sasinransara@gmail.com'
      };

      const response = await emailjs.send(
        'service_e2k553o', //emailjs service id
        'template_isl11j7', //emailjs my template id
        templateParams
      );

      console.log('Email sent successfully:', response);

      setSubmitStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
      });

      setFormData({ name: '', email: '', message: ''});

      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, isSuccess: false, message: '' }));
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);

      setSubmitStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Oops! Something went wrong. Please try again later.'
      });

      setTimeout(() => {
        setSubmitStatus(prev =>  ({ ...prev, isError: false, message: ''}))
      }, 5000);
    }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Heart className="text-red-400 mr-3" size={28} />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={20} />
                  <span className="text-gray-300">{portfolioData.email}</span>
                </div>
                
                <div className="flex items-center">
                  <Github className="text-purple-400 mr-4" size={20} />
                  <span className="text-gray-300">@RansaraNS</span>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="text-blue-400 mr-4" size={20} />
                  <span className="text-gray-300">Sasin Ransara</span>
                </div>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="text-yellow-400 mr-3" size={24} />
                Quick Response
              </h4>
              <p className="text-gray-300">
                I typically respond to emails within 24 hours. For urgent inquiries, 
                feel free to reach out on LinkedIn for faster communication.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl space-y-6">

              <AnimatePresence>
                {(submitStatus.isSuccess || submitStatus.isError) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg flex items-center ${
                      submitStatus.isSuccess 
                      ? 'bg-green-500/20 border border-green-500/30'
                      : 'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    {submitStatus.isSuccess ? (
                      <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    ) : (
                      <AlertCircle className="text-red-400 mr-3 flex-shrink-0" size={20} />
                    )}
                    <span className={`text-sm ${
                      submitStatus.isSuccess ? 'text-green-300' : 'text-red-300'
                    }`}>
                      {submitStatus.message}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={submitStatus.isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={submitStatus.isSubmitting}
                whileHover={!submitStatus.isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!submitStatus.isSubmitting ? { scale: 0.95 } : {}}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white neon-glow transition-all"
              >
                {submitStatus.isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Contact;