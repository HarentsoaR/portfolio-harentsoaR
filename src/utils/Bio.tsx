import { motion } from 'framer-motion';

const Bio = () => {
  const text = "I am currently pursuing a Master’s degree in Information Technology, motivated by a longstanding passion for technology that originated in my teenage years. My innate curiosity has led me to delve into the complexities of the tech landscape, and I derive immense satisfaction from observing the swift advancements and innovations that continuously reshape our world.";

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
