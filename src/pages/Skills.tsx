import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';

// Sample skills data
const frontendSkills = [
  { title: 'React', icon: '/icons/react.svg', level: 5, color: '#61DAFB' },
  { title: 'TypeScript', icon: '/icons/typescript.svg', level: 4, color: '#3178C6' },
  { title: 'JavaScript', icon: '/icons/javascript.svg', level: 5, color: '#F7DF1E' },
  { title: 'HTML5', icon: '/icons/html5.svg', level: 5, color: '#E34F26' },
  { title: 'CSS3', icon: '/icons/css3.svg', level: 4, color: '#1572B6' },
  { title: 'Tailwind CSS', icon: '/icons/tailwind.svg', level: 4, color: '#38B2AC' },
];

const backendSkills = [
  { title: 'Node.js', icon: '/icons/nodejs.svg', level: 4, color: '#339933' },
  { title: 'Express.js', icon: '/icons/express.svg', level: 4, color: '#000000' },
  { title: 'MongoDB', icon: '/icons/mongodb.svg', level: 3, color: '#47A248' },
  { title: 'PostgreSQL', icon: '/icons/postgresql.svg', level: 3, color: '#336791' },
  { title: 'GraphQL', icon: '/icons/graphql.svg', level: 3, color: '#E10098' },
  { title: 'RESTful APIs', icon: '/icons/api.svg', level: 4, color: '#FF5733' },
];

const toolsSkills = [
  { title: 'Git', icon: '/icons/git.svg', level: 4, color: '#F05032' },
  { title: 'Docker', icon: '/icons/docker.svg', level: 3, color: '#2496ED' },
  { title: 'VS Code', icon: '/icons/vscode.svg', level: 5, color: '#007ACC' },
  { title: 'Figma', icon: '/icons/figma.svg', level: 4, color: '#F24E1E' },
  { title: 'Webpack', icon: '/icons/webpack.svg', level: 3, color: '#8DD6F9' },
  { title: 'Jest', icon: '/icons/jest.svg', level: 3, color: '#C21325' },
];

const Skills: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {/* Frontend Skills */}
          <section>
            <motion.h2
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Frontend Development
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <SkillCard
                    title={skill.title}
                    icon={skill.icon}
                    level={skill.level}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
          
          {/* Backend Skills */}
          <section>
            <motion.h2
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Backend Development
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <SkillCard
                    title={skill.title}
                    icon={skill.icon}
                    level={skill.level}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
          
          {/* Tools and Technologies */}
          <section>
            <motion.h2
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Tools & Technologies
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {toolsSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <SkillCard
                    title={skill.title}
                    icon={skill.icon}
                    level={skill.level}
                    color={skill.color}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
        
        <motion.div
          className="mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My Learning Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm passionate about continuous learning and staying up-to-date with the latest technologies and best practices in web development. Here are some of the areas I'm currently exploring:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Currently Learning</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Next.js and Server-Side Rendering
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  AWS Cloud Services
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Testing with Cypress
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Future Interests</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Machine Learning for Web Applications
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Blockchain Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Progressive Web Apps (PWAs)
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            With my skills and your ideas, we can create exceptional digital experiences that stand out.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 