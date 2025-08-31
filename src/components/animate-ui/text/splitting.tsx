"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SplittingTextProps {
  text: string;
  className?: string;
  wordClassName?: (word: string, index: number) => string; // Function to apply custom classes to individual words
  delay?: number; // Initial delay for the entire animation in ms
  type?: 'words' | 'chars'; // How to split the text
  duration?: number; // Duration of each item's animation
  stagger?: number; // Delay between each item's animation
}

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay / 1000, // Convert ms to seconds for Framer Motion
        staggerChildren: stagger,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {type === 'words' ? (
            <motion.span
              variants={itemVariants}
              className={`inline-block mr-1 ${wordClassName ? wordClassName(word, wordIndex) : ''}`}
            >
              {word}
            </motion.span>
          ) : (
            // If type is 'chars', split each word into characters
            word.split('').map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={itemVariants}
                className={`inline-block ${wordClassName ? wordClassName(char, charIndex) : ''}`}
              >
                {char}
              </motion.span>
            ))
          )}
          {/* Add a space between words if not the last word */}
          {type === 'words' && wordIndex < words.length - 1 && ' '}
        </span>
      ))}
    </motion.div>
  );
};