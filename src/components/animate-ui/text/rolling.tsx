"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RollingTextProps {
  text: string[]; // Changed to array to cycle
  className?: string;
  duration?: number; // Duration for each text to display
}

export const RollingText: React.FC<RollingTextProps> = ({ text, className, duration = 3000 }) => {
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
        staggerChildren: 0.03, // Faster stagger for characters
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 }, // Start from below
    visible: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 }, // Exit upwards
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
          {currentText.split("").map((char, i) => (
            <motion.span key={char + i} variants={itemVariants} className="inline-block">
              {char === " " ? "\u00A0" : char} {/* Handle spaces */}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};