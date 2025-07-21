import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1 mb-10 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 glow-text">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Muhammad Alfin Zubair</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 h-16">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'Problem Solver',
                  1000,
                  'AI Enthusiast',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 glass-button text-white font-medium rounded-md transition-all duration-300 hover:scale-105 btn-hover-effect"
              >
                Contact Me
              </Link>
              <Link
                to="/projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 glass-button text-white font-medium rounded-md transition-all duration-300 hover:scale-105 btn-hover-effect"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative p-1.5 floating">
              {/* Liquid border animation */}
              <div className="absolute inset-0 rounded-full liquid-border"></div>
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full glass flex items-center justify-center overflow-hidden shadow-lg relative z-10">
                {/* Profile image */}
                <img 
                  src="/profile-placeholder.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;