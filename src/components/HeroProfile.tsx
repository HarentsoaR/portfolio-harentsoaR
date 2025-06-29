// src/components/HeroProfile.tsx

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useProfile } from '@/contexts/ProfileContext';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';
import { FiChevronDown, FiX } from 'react-icons/fi';
import React from 'react';

// --- DATA (pas de changement ici) ---
const personalInfoData = (t: Function) => [
  { icon: FaGraduationCap, text: t('ProfileSection.personalInfo.degreeLabel'), detail: t('ProfileSection.personalInfo.degree') },
  { icon: FaMapMarkerAlt, text: t('ProfileSection.personalInfo.locationLabel'), detail: t('ProfileSection.personalInfo.location') },
  { icon: FaBriefcase, text: t('ProfileSection.personalInfo.availabilityLabel'), detail: t('ProfileSection.personalInfo.availability') },
  { icon: FaEnvelope, text: t('ProfileSection.personalInfo.emailLabel'), detail: t('ProfileSection.personalInfo.email') },
];
const languages = [
  { name: 'Français', level: 'Courant (C1)', percentage: 90 },
  { name: 'Anglais', level: 'Professionnel (B2)', percentage: 75 },
];

// --- MAIN COMPONENT ---
export function HeroProfile() {
  const { showProfile, toggleProfile } = useProfile();
  const t = useTranslations();

  const handleToggle = () => {
    if (!showProfile) {
      document.getElementById('hero-profile-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toggleProfile();
  };

  return (
    // FIX: Suppression de `overflow-hidden` qui causait la disparition de l'image pendant l'animation `layout`.
    // UI ENHANCEMENT: Ajout d'un subtil dégradé pour plus de profondeur visuelle.
    <motion.section
      id="hero-profile-section"
      layout
      className="relative bg-gradient-to-b from-[#222831] to-[#2a3038] text-[#EEEEEE]"
      initial={{ borderRadius: "0rem" }}
      animate={{ borderRadius: showProfile ? "2rem" : "0rem" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className={`container mx-auto px-6 text-center transition-all duration-500 ${showProfile ? 'py-10 md:py-16' : 'py-20'}`}>
        <AnimatePresence mode="wait">
          {showProfile ? (
            <ExpandedProfile key="expanded" onToggle={handleToggle} t={t} />
          ) : (
            <CollapsedHero key="collapsed" onToggle={handleToggle} t={t} />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

// --- COLLAPSED HERO ---
const CollapsedHero: React.FC<{ onToggle: () => void; t: Function }> = ({ onToggle, t }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center"
  >
    <motion.div layoutId="profile-picture" className="relative w-32 h-32 mb-6">
      <Image src="/usages/pfp.jpg" alt="Harentsoa" layout="fill" objectFit="cover" className="rounded-full shadow-lg" priority />
    </motion.div>
    <motion.h1 layoutId="hero-title" className="text-4xl md:text-6xl font-bold text-[#EEEEEE] mb-4">
      {t('Hero.greeting')} <span className="text-[#76ABAE]">Harentsoa</span>.
    </motion.h1>
    <motion.div layoutId="hero-subtitle" className="text-xl md:text-2xl text-[#EEEEEE]/80 mb-8 h-8">
      <TypeAnimation sequence={[t('Hero.role1'), 2000, t('Hero.role2'), 2000, t('Hero.role3'), 2000]} wrapper="span" cursor={true} repeat={Infinity} />
    </motion.div>
    <motion.button layoutId="hero-button" onClick={onToggle} className="bg-[#76ABAE] text-[#222831] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#EEEEEE] transition-colors flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {t('Hero.learnMore')}
      <FiChevronDown />
    </motion.button>
  </motion.div>
);

// --- EXPANDED PROFILE ---
const ExpandedProfile: React.FC<{ onToggle: () => void; t: Function }> = ({ onToggle, t }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="relative p-6 lg:p-12 bg-[#31363F] rounded-2xl shadow-2xl"
  >
    <button onClick={onToggle} className="absolute top-4 right-4 text-[#76ABAE]/70 hover:text-[#EEEEEE] transition-colors z-10 p-2 rounded-full bg-[#222831]/50 hover:bg-[#222831] hover:scale-110">
      <FiX size={28} />
    </button>
    {/* UI ENHANCEMENT: Utilisation de `gap-x-16` pour un espacement clair et modification de la répartition du poids des colonnes. */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-10 lg:gap-x-16">
      
      {/* Colonne Gauche - Photo & Liens */}
      {/* UI ENHANCEMENT: `lg:w-5/12` et `flex-shrink-0` pour un meilleur équilibre. `space-y-4` pour un rythme vertical parfait. */}
      <div className="w-full lg:w-5/12 flex-shrink-0 flex flex-col items-center space-y-4">
        <motion.div layoutId="profile-picture" className="relative w-48 h-48">
          <Image src="/usages/pfp.jpg" alt="Harentsoa" layout="fill" objectFit="cover" className="rounded-full shadow-lg border-4 border-[#76ABAE]" />
        </motion.div>
        <div className="flex flex-col items-center text-center space-y-2">
          <motion.h2 layoutId="hero-title" className="text-3xl font-bold text-[#76ABAE]">
            Harentsoa RANDRIAMAHOLIMANANA
          </motion.h2>
          <motion.p layoutId="hero-subtitle" className="text-lg font-light text-[#EEEEEE]/80">
            {t('ProfileSection.status')}
          </motion.p>
        </div>
        <motion.div layoutId="hero-button" className="flex justify-center gap-8 pt-2">
          <a href="https://github.com/HarentsoaR" target="_blank" rel="noopener noreferrer" className="text-[#76ABAE] hover:text-[#EEEEEE] transition-colors transform hover:scale-110"><FaGithub size={36} /></a>
          <a href="https://linkedin.com/in/harentsoa-randriamaholimanana-a005902a4" target="_blank" rel="noopener noreferrer" className="text-[#76ABAE] hover:text-[#EEEEEE] transition-colors transform hover:scale-110"><FaLinkedin size={36} /></a>
        </motion.div>
      </div>
      
      {/* Colonne Droite - Détails */}
      {/* UI ENHANCEMENT: `border-t` pour une séparation claire sur mobile, `lg:border-l` pour le desktop. */}
      <motion.div
        className="w-full lg:w-7/12 text-left border-t lg:border-t-0 lg:border-l border-[#76ABAE]/20 pt-10 lg:pt-0 lg:pl-16"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl font-semibold mb-8 text-[#EEEEEE]">{t('ProfileSection.aboutMe')}</h3>
        <ul className="space-y-4 mb-12">
          {personalInfoData(t).map((item, index) => (
            <motion.li key={index} variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-4 group transition-all duration-300 hover:bg-[#39404a] p-2 rounded-lg">
              <div className="bg-[#222831] p-3 rounded-full text-[#76ABAE] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#EEEEEE]/70">{item.text}</p>
                <p className="text-md text-[#EEEEEE]">{item.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        
        <h3 className="text-3xl font-semibold mb-8 text-[#EEEEEE]">{t('ProfileSection.languageProficiency')}</h3>
        <div className="space-y-5">
          {languages.map((lang, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
              <div className="flex justify-between mb-2 font-medium text-lg">
                <span className="text-[#EEEEEE]">{lang.name}</span>
                <span className="text-[#76ABAE]">{lang.level}</span>
              </div>
              <div className="w-full bg-[#222831] rounded-full h-2.5">
                <motion.div className="bg-gradient-to-r from-[#76ABAE] to-[#a4d4d6] h-2.5 rounded-full" initial={{ width: 0 }} whileInView={{ width: `${lang.percentage}%` }} viewport={{ once: true }} transition={{ duration: 1.5, type: 'spring', delay: 0.5 + index * 0.2 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
);