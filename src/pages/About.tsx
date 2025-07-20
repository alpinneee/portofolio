import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center mb-16">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate web developer with a focus on creating beautiful, functional, and user-centered digital experiences. With a background in design and development, I bring a unique perspective to every project I work on.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I believe that great design should not only look good but also solve problems and create intuitive, enjoyable experiences for users. This philosophy guides my approach to development, ensuring that the websites and applications I build are both visually appealing and highly functional.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </motion.div>
          
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/about-image.jpg"
                alt="About Me"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/600x400?text=About+Me`;
                }}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">My Journey</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2020 - Present</h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Working on various web applications using modern technologies like React, TypeScript, and Tailwind CSS.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="hidden md:block w-6 h-6 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none">
                  <div className="hidden md:block w-6 h-6 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2017 - 2020</h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">UI/UX Designer</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designed user interfaces and experiences for web and mobile applications, focusing on usability and accessibility.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2014 - 2017</h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Computer Science Degree</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Studied computer science with a focus on web development and user interface design.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="hidden md:block w-6 h-6 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in delivering high-quality work that exceeds expectations and stands the test of time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm always looking for new and better ways to solve problems and create exceptional user experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I thrive in collaborative environments and believe the best results come from working together.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 