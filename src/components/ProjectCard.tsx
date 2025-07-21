import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  demoUrl,
  codeUrl,
}) => {
  return (
    <motion.div
      className="glass glass-card h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/400x200?text=${encodeURIComponent(title)}`;
          }}
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-200 mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium glass-button text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass-button text-white text-sm font-medium rounded-md transition-all duration-300 hover:scale-105"
            >
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass-button text-white text-sm font-medium rounded-md transition-all duration-300 hover:scale-105"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;