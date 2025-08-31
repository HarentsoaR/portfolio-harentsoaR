"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  text: string[];
  className?: string;
  duration?: number; // Duration for each text to display
}

export const RotatingText: React.FC<RotatingTextProps> = ({ text, className, duration = 2500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration]);

  const currentText = text[index];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          className="inline-block whitespace-nowrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden" // Exit animation for the whole span
        >
          {currentText.split(" ").map((word, i) => (
            <motion.span key={word + i} variants={itemVariants} className="inline-block mr-1">
              {word}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};