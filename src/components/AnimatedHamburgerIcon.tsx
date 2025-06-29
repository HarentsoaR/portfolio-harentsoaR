// src/components/AnimatedHamburgerIcon.tsx

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
}

const lineVariants: Variants = {
  closed: { d: "M 2 2.5 L 20 2.5" },
  open: { d: "M 3 16.5 L 17 2.5" },
};

const middleLineVariants: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottomLineVariants: Variants = {
  closed: { d: "M 2 16.346 L 20 16.346" },
  open: { d: "M 3 2.5 L 17 16.346" },
};

export const AnimatedHamburgerIcon: React.FC<Props> = ({ isOpen, onClick, color = "#76ABAE" }) => {
  return (
    <motion.button
      onClick={onClick}
      className="focus:outline-none z-50 relative h-6 w-6"
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          variants={lineVariants}
        />
        <motion.path
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={middleLineVariants}
        />
        <motion.path
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          variants={bottomLineVariants}
        />
      </svg>
    </motion.button>
  );
};