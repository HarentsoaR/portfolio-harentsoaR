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

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, technologies, liveUrl, gitUrls }) => {
  return (
    <motion.div
      className="relative rounded-xl shadow-2xl border border-[#222831]/40 overflow-hidden aspect-[4/3] bg-[#222831] group"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      style={{ boxShadow: '0 8px 32px 0 rgba(34, 40, 49, 0.25)' }}
    >
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} className="brightness-[0.5]" />
        {/* Stronger gradient overlay for better contrast and text readability */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#222831]/95 via-[#222831]/70 to-transparent pointer-events-none" />
      </div>

      {/* --- ALL CONTENT OVERLAY (ALWAYS VISIBLE) --- */}
      <div className="absolute inset-0 z-10 flex flex-col p-4 md:p-5 text-white">
        {/* Description - takes available space, scrolls if needed */}
        <div className="flex-grow overflow-y-auto mb-3">
          <p className="text-sm md:text-base font-medium leading-snug drop-shadow-md">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gradient-to-r from-[#76ABAE] to-[#4FC3F7] text-[#222831] px-3 py-1 rounded-full text-xs font-bold shadow-md border border-[#76ABAE]/40">
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-extrabold text-white drop-shadow-lg tracking-tight mb-2">
          {title}
        </h3>

        {/* Links */}
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