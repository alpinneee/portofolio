import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.',
    imageUrl: '/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com/demo1',
    codeUrl: 'https://github.com/yourusername/project1',
    category: 'web',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with user authentication and real-time updates.',
    imageUrl: '/project2.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://example.com/demo2',
    codeUrl: 'https://github.com/yourusername/project2',
    category: 'web',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts based on location.',
    imageUrl: '/project3.jpg',
    tags: ['JavaScript', 'API', 'CSS'],
    demoUrl: 'https://example.com/demo3',
    codeUrl: 'https://github.com/yourusername/project3',
    category: 'web',
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'A fitness tracking application for iOS and Android with workout plans and progress tracking.',
    imageUrl: '/project4.jpg',
    tags: ['React Native', 'Redux', 'Firebase'],
    demoUrl: 'https://example.com/demo4',
    codeUrl: 'https://github.com/yourusername/project4',
    category: 'mobile',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills.',
    imageUrl: '/project5.jpg',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com/demo5',
    codeUrl: 'https://github.com/yourusername/project5',
    category: 'web',
  },
  {
    id: 6,
    title: 'Recipe Sharing Platform',
    description: 'A platform for sharing and discovering recipes with user ratings and comments.',
    imageUrl: '/project6.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com/demo6',
    codeUrl: 'https://github.com/yourusername/project6',
    category: 'web',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4 glow-text">My Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore some of my recent work and personal projects.
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md glass">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md transition-all duration-300 ${
                filter === 'all'
                  ? 'glass-button text-white'
                  : 'text-white hover:glass-button'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === 'web'
                  ? 'glass-button text-white'
                  : 'text-white hover:glass-button'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md transition-all duration-300 ${
                filter === 'mobile'
                  ? 'glass-button text-white'
                  : 'text-white hover:glass-button'
              }`}
            >
              Mobile Apps
            </button>
          </div>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-200">
              No projects found in this category.
            </p>
          </div>
        )}
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 glow-text">Have a project in mind?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Let's collaborate to bring your ideas to life. I'm always open to new challenges.
          </p>
          <div className='flex justify-center'>
          <a
            href="mailto:m.alfin.z117@gmail.com"
            className="px-8 py-4 glass-button text-white text-lg font-medium rounded-md hover:scale-105 transition-all duration-300 btn-hover-effect"
          >
            Start a Project
          </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 