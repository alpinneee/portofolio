import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 glow-text">Featured Projects</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Check out some of my recent work that showcases my skills and expertise.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="glass glass-card overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-white bg-opacity-10"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Project One</h3>
                <p className="text-gray-200 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <Link
                  to="/projects"
                  className="text-blue-400 font-medium hover:text-blue-300 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
            
            {/* Project 2 */}
            <motion.div
              className="glass glass-card overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-white bg-opacity-10"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Project Two</h3>
                <p className="text-gray-200 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <Link
                  to="/projects"
                  className="text-blue-400 font-medium hover:text-blue-300 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div
              className="glass glass-card overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-white bg-opacity-10"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Project Three</h3>
                <p className="text-gray-200 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <Link
                  to="/projects"
                  className="text-blue-400 font-medium hover:text-blue-300 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12 flex justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 glass-button text-white font-medium rounded-md hover:scale-105 transition-all duration-300 btn-hover-effect"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 glow-text">My Skills</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Here are some of the technologies and tools I work with.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Skill Icons */}
            {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Git'].map((skill, index) => (
              <motion.div
                key={index}
                className="glass glass-card p-4 flex flex-col items-center justify-center"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mb-3">
                  {/* Icon placeholder */}
                </div>
                <p className="text-white font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 flex justify-center">
            <Link
              to="/skills"
              className="px-5 py-2.5 sm:px-6 sm:py-3 glass-button text-white font-medium rounded-md transition-all duration-300 hover:scale-105 btn-hover-effect"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4 glow-text">Let's Work Together</h2>
              <p className="text-xl text-gray-200 mb-6">
                I'm currently available for freelance work and open to new opportunities.
                If you have a project that needs some creative touch, let's discuss it.
              </p>
            <div className='flex justify'>
              <Link
                to="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 glass-button text-white font-medium rounded-md transition-all duration-300 hover:scale-105 btn-hover-effect"
              >
                Get in Touch
              </Link>
            </div>
            </motion.div>
            
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full max-w-md glass glass-card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-200">m.alfin.z117@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-200">+62 838 7223 0135</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 