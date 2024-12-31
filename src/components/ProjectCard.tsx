import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  git?: string[];
}

export function ProjectCard({ title, description, image, technologies, git }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#31363F] rounded-lg shadow-lg overflow-hidden relative"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-xl font-bold text-white text-center px-4">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <motion.p
          className="text-[#EEEEEE] mb-4 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className="bg-[#76ABAE] text-[#222831] px-2 py-1 rounded text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        {git && git.length > 0 && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h4 className="text-sm font-semibold mb-2 text-[#76ABAE]">GitHub Repositories:</h4>
            <div className="flex flex-wrap gap-2">
              {git.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#EEEEEE] hover:text-[#76ABAE] transition-colors text-sm"
                >
                  <FaGithub className="mr-1" />
                  Repo {index + 1}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

