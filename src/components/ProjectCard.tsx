// src/components/ProjectCard.tsx

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  gitUrls?: { label: string; url: string }[];
}

// --- Animation Variants ---
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const imageVariants = {
  rest: { scale: 1.0, y: "0%" },
  hover: { scale: 1.05, y: "-2%", transition: { duration: 0.5, ease: 'easeOut' } },
};

const contentOverlayVariants = {
  rest: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  rest: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0 },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, liveUrl, gitUrls }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative rounded-xl shadow-2xl border border-[#222831]/40 overflow-hidden aspect-[4/3] bg-[#222831] group"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ boxShadow: '0 8px 32px 0 rgba(34, 40, 49, 0.25)' }}
    >
      {/* --- BACKGROUND IMAGE --- */}
      <motion.div
        variants={imageVariants}
        animate={isHovered ? "hover" : "rest"}
        className="absolute inset-0 w-full h-full"
      >
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} className="brightness-[0.7]" />
        {/* Gradient overlay for better contrast and text readability */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#222831]/90 via-[#222831]/50 to-transparent pointer-events-none" />
      </motion.div>

      {/* --- CONTENT OVERLAY (DESCRIPTION & TECHNOLOGIES) - HIDDEN ON MOBILE/TABLET, SHOW ON HOVER ON DESKTOP --- */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-0 left-0 right-0 z-10 hidden lg:flex flex-col justify-end p-4 md:p-5 text-white bg-[#222831]/90 rounded-b-xl overflow-y-auto"
            initial="rest"
            animate="hover"
            exit="rest"
            variants={contentOverlayVariants}
            style={{ bottom: '80px' }} // Fixed bottom to ensure space for title/links
          >
            <motion.p variants={itemVariants} className="text-sm md:text-base font-medium mb-3 leading-snug drop-shadow-md">
              {description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="bg-gradient-to-r from-[#76ABAE] to-[#4FC3F7] text-[#222831] px-3 py-1 rounded-full text-xs font-bold shadow-md border border-[#76ABAE]/40">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- TITLE AND LINKS (ALWAYS VISIBLE AT BOTTOM) --- */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-5 pt-6 pb-4"
        style={{
          background: 'linear-gradient(to top, rgba(34,40,49,0.95) 60%, rgba(34,40,49,0.0))',
          backdropFilter: 'blur(2px)',
        }}
      >
        <h3 className="text-lg md:text-xl font-extrabold text-white drop-shadow-lg tracking-tight mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#EEEEEE]/90 hover:text-[#76ABAE] transition-colors text-sm font-semibold"
            >
              <FaExternalLinkAlt size={20} /> Live
            </a>
          )}
          {gitUrls && gitUrls.map(git => (
            <a
              key={git.label}
              href={git.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#EEEEEE]/90 hover:text-[#76ABAE] transition-colors text-sm font-semibold"
            >
              <FaGithub size={20} /> {git.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};