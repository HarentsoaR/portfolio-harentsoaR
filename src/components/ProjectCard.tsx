// src/components/ProjectCard.tsx

import { motion } from 'framer-motion';
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
  rest: { scale: 1.0 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeOut' } },
};

// Panneau qui contient tout le texte (titre + description)
const panelVariants = {
  rest: { y: "calc(100% - 4.5rem)" }, // Hauteur du titre visible au repos (ajuster si besoin)
  hover: { y: "0%", transition: { type: 'spring', stiffness: 150, damping: 25 } },
};

const contentVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  rest: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0 },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, liveUrl, gitUrls }) => {
  return (
    <motion.div
      className="relative rounded-lg shadow-xl overflow-hidden aspect-[4/3]"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
      animate="rest"
    >
      {/* --- BACKGROUND IMAGE --- */}
      <motion.div variants={imageVariants} className="absolute inset-0">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </motion.div>
      
      {/* --- PANNEAU GLISSANT (Titre + Contenu) --- */}
      {/* FIX: Ce panneau unique contient tout. Il est positionné pour que seule la partie titre soit visible au repos. */}
      <motion.div
        variants={panelVariants}
        className="absolute inset-0 pt-4 md:pt-5 bg-gradient-to-t from-[#222831] via-[#222831]/80 to-transparent backdrop-blur-[2px] hover:backdrop-blur-[4px] transition-all duration-300"
      >
        <div className="h-full flex flex-col p-4 md:p-5">
          {/* --- TITRE (toujours visible en haut du panneau) --- */}
          {/* UI ENHANCEMENT: Police plus petite et plus élégante. */}
          <div className="flex-shrink-0 flex justify-between items-center">
            <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
            {/* Les liens sont maintenant à côté du titre, pour un accès rapide */}
            <motion.div className="flex items-center gap-3" variants={contentVariants}>
                {liveUrl && (
                  <motion.a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE]/80 hover:text-[#76ABAE] transition-colors" variants={itemVariants}>
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                )}
                {gitUrls && gitUrls.map(git => (
                   <motion.a key={git.label} href={git.url} target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE]/80 hover:text-[#76ABAE] transition-colors" variants={itemVariants}>
                    <FaGithub size={20} />
                   </motion.a>
                ))}
            </motion.div>
          </div>

          {/* --- CONTENU (s'affiche dans l'espace restant) --- */}
          <motion.div
            className="flex-grow flex flex-col justify-end space-y-3 pt-3 overflow-hidden"
            variants={contentVariants}
          >
            <motion.p variants={itemVariants} className="text-sm font-light text-[#EEEEEE]/90 leading-snug">
              {description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="bg-[#76ABAE] text-[#222831] px-3 py-1 rounded-full text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};