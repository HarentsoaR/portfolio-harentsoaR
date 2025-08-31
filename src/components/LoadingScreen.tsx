"use client";

import { motion } from 'framer-motion';
import { FlippingLoader } from './FlippingLoader'; // Import the new loader

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#222831]"
    >
      <FlippingLoader /> {/* Use the new loader here */}
    </motion.div>
  );
};