"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SplittingTextProps {
  text: string;
  className?: string;
  wordClassName?: (word: string, index: number) => string; // Function to apply custom classes to individual words
  delay?: number; // Initial delay for the entire animation in ms
  type?: 'words' | 'chars'; // How to split the text
  duration?: number; // Duration of each item's animation
  stagger?: number; // Delay between each item's animation
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (customProps: { delay: number; stagger: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: customProps.delay / 1000, // Convert ms to seconds for Framer Motion
      staggerChildren: customProps.stagger,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { y: "100%", opacity: 0 }, // Start from below, fully transparent
  visible: (duration: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
      duration: duration,
    },
  }),
};

export const SplittingText: React.FC<SplittingTextProps> = ({
  text,
  className,
  wordClassName,
  delay = 0,
  type = 'words',
  duration = 0.6,
  stagger = 0.05,
}) => {
  const words = text.split(' ');

  return (
    <motion.div
      className={`inline-block overflow-hidden ${className}`} // Added overflow-hidden to clip initial y:"100%"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={{ delay, stagger }} // Pass delay and stagger as custom prop to containerVariants
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-1"> {/* Added mr-1 here */}
          {type === 'words' ? (
            <motion.span
              variants={itemVariants}
              custom={duration} // Pass duration as custom prop to itemVariants
              className={`inline-block ${wordClassName ? wordClassName(word, wordIndex) : ''}`}
            >
              {word}
            </motion.span>
          ) : (
            word.split('').map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={itemVariants}
                custom={duration} // Pass duration as custom prop to itemVariants
                className={`inline-block ${wordClassName ? wordClassName(char, charIndex) : ''}`}
              >
                {char}
              </motion.span>
            ))
          )}
        </span>
      ))}
    </motion.div>
  );
};