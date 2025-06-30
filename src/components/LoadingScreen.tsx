import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#222831]"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeOut" }}
        className="text-[#76ABAE] text-6xl font-bold"
        style={{ filter: "drop-shadow(0 0 10px rgba(118, 171, 174, 0.7))" }}
      >
        HR
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-1/3 h-1 bg-[#76ABAE] rounded-full"
      />
    </motion.div>
  );
}; 