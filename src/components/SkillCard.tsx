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
      className="glass glass-card p-6"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4 glass"
          style={{ borderColor: color, borderWidth: '2px' }}
        >
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="w-full bg-white bg-opacity-10 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full" 
          style={{ 
            width: `${level * 20}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}80`
          }}
        ></div>
      </div>
      <div className="mt-2 text-sm text-gray-200">
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