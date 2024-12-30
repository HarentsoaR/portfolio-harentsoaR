import { motion } from 'framer-motion';

const Bio = () => {
  const text = "I am currently pursuing my Master’s degree in Information Technology, driven by a lifelong passion for technology that began in my teenage years. My fascination with IT has evolved over time, leading me to explore the intricacies of how technology works. Being immersed in this field is truly exciting, especially as I witness the rapid advancements and innovations shaping our world today.";

  return (
    <motion.p className="text-xl mb-8 text-[#EEEEEE] font-extralight">
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.1 }} // Adjust delay for each word
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default Bio;
