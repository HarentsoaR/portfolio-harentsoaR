// src/components/TimelineItem.tsx

import { motion } from 'framer-motion';
import React from 'react';

interface TimelineItemProps {
  side: 'left' | 'right';
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ side, icon, title, subtitle, period, description }) => {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: side === 'left' ? -100 : 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const sideClass = side === 'left' ? 'text-left' : 'lg:text-right';
  const flexDirectionClass = side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse';
  
  return (
    <motion.div
      className={`flex items-center w-full ${flexDirectionClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Card Content */}
      <div className="w-full lg:w-5/12">
        <motion.div variants={itemVariants} className={`bg-[#31363F] p-6 rounded-lg shadow-xl border border-white/10 ${sideClass}`}>
          <h3 className="text-xl font-bold text-[#76ABAE]">{title}</h3>
          <p className="text-[#EEEEEE] mt-1 font-semibold">{subtitle}</p>
          <p className="text-sm text-[#EEEEEE]/70 mt-2 mb-3">{period}</p>
          {description && <p className="text-[#EEEEEE] font-light leading-relaxed">{description}</p>}
        </motion.div>
      </div>

      {/* Timeline Dot and Icon */}
      <div className="w-2/12 hidden lg:flex justify-center">
        <motion.div
          variants={dotVariants}
          className="bg-[#31363F] h-16 w-16 rounded-full border-4 border-[#76ABAE] flex items-center justify-center text-[#76ABAE] z-10"
        >
          {icon}
        </motion.div>
      </div>
      
      {/* Spacer for the other side */}
      <div className="w-5/12 hidden lg:block" />
    </motion.div>
  );
};