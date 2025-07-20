import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  icon: string;
  level: number; // 1-5
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, level, color }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
          style={{ backgroundColor: `${color}20` }}
        >
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full" 
          style={{ 
            width: `${level * 20}%`,
            backgroundColor: color
          }}
        ></div>
      </div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {level === 1 && 'Beginner'}
        {level === 2 && 'Elementary'}
        {level === 3 && 'Intermediate'}
        {level === 4 && 'Advanced'}
        {level === 5 && 'Expert'}
      </div>
    </motion.div>
  );
};

export default SkillCard; 