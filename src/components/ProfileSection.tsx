import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function ProfileSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is in the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#31363F] text-[#EEEEEE] py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          className="w-64 h-64 relative rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/usages/pfp.jpg"
            alt="Harentsoa"
            width={256}
            height={256}
            className="rounded-full"
          />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h2
            className="text-3xl font-bold mb-4 text-[#76ABAE]"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Harentsoa RANDDRIAMAHOLIMANANA
          </motion.h2>
          <motion.p
            className="text-xl mb-6 text-[#EEEEEE] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a
              href="https://github.com/HarentsoaR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#76ABAE] hover:text-[#EEEEEE] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harentsoa-randriamaholimanana-a005902a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#76ABAE] hover:text-[#EEEEEE] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
