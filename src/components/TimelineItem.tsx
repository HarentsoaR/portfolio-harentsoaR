// src/components/TimelineItem.tsx

import { motion } from 'framer-motion';
import React from 'react';

interface TimelineItemProps {
  side: 'left' | 'right'; // This 'side' prop will primarily control desktop layout
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
      x: side === 'left' ? -100 : 100 // Desktop animation
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

  return (
    <motion.div
      className="relative flex flex-col lg:flex-row items-center w-full mb-12" // Added mb-12 for spacing between items
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Mobile Layout: Left-aligned icon and card */}
      <div className="flex items-start w-full lg:hidden">
        <motion.div
          variants={dotVariants}
          className="flex-shrink-0 bg-[#31363F] h-12 w-12 rounded-full border-4 border-[#76ABAE] flex items-center justify-center text-[#76ABAE] z-10 mr-4"
        >
          {icon}
        </motion.div>
        <motion.div variants={itemVariants} className="flex-grow bg-[#31363F] p-5 rounded-lg shadow-xl border border-white/10 text-left">
          <h3 className="text-lg font-bold text-[#76ABAE]">{title}</h3>
          <p className="text-[#EEEEEE] mt-1 font-semibold text-sm">{subtitle}</p>
          <p className="text-xs text-[#EEEEEE]/70 mt-2 mb-2">{period}</p>
          {description && <p className="text-[#EEEEEE] font-light leading-relaxed text-sm">{description}</p>}
        </motion.div>
      </div>

      {/* Desktop Layout: Alternating Card, Dot, Spacer */}
      <div className={`hidden lg:flex items-center w-full ${side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Card Content (Desktop) */}
        <div className="w-5/12">
          <motion.div variants={itemVariants} className={`bg-[#31363F] p-6 rounded-lg shadow-xl border border-white/10 ${side === 'left' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-bold text-[#76ABAE]">{title}</h3>
            <p className="text-[#EEEEEE] mt-1 font-semibold">{subtitle}</p>
            <p className="text-sm text-[#EEEEEE]/70 mt-2 mb-3">{period}</p>
            {description && <p className="text-[#EEEEEE] font-light leading-relaxed">{description}</p>}
          </motion.div>
        </div>

        {/* Desktop Timeline Dot and Icon */}
        <div className="w-2/12 flex justify-center">
          <motion.div
            variants={dotVariants}
            className="bg-[#31363F] h-16 w-16 rounded-full border-4 border-[#76ABAE] flex items-center justify-center text-[#76ABAE] z-10"
          >
            {icon}
          </motion.div>
        </div>
        
        {/* Spacer for the other side (Desktop) */}
        <div className="w-5/12" />
      </div>
    </motion.div>
  );
};