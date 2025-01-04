import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Bio = () => {
  const t = useTranslations('Bio');
  const text = t('description');

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
