"use client";

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useProfile } from '@/contexts/ProfileContext';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';
import { FiChevronDown, FiX } from 'react-icons/fi';
import React from 'react';

type TranslationFunction = ReturnType<typeof useTranslations>;

// --- DATA (pas de changement ici) ---
const personalInfoData = (t: TranslationFunction) => [
  { icon: FaGraduationCap, text: t('ProfileSection.personalInfo.degreeLabel'), detail: t('ProfileSection.personalInfo.degree') },
  { icon: FaMapMarkerAlt, text: t('ProfileSection.personalInfo.locationLabel'), detail: t('ProfileSection.personalInfo.location') },
  { icon: FaBriefcase, text: t('ProfileSection.personalInfo.availabilityLabel'), detail: t('ProfileSection.personalInfo.availability') },
  { icon: FaEnvelope, text: t('ProfileSection.personalInfo.emailLabel'), detail: t('ProfileSection.personalInfo.email') },
];
const languages = [
  { name: 'Français', level: 'B2', percentage: 90 },
  { name: 'Anglais', level: 'Average', percentage: 75 },
];

// --- MAIN COMPONENT ---
export function HeroProfile() {
  const { showProfile, toggleProfile } = useProfile();
  const t = useTranslations();

  const handleToggle = () => {
    if (!showProfile) {
      // Scroll to the top of the hero section when expanding
      document.getElementById('hero-profile-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    toggleProfile();
  };

  return (
    <motion.section
      id="hero-profile-section"
      layout
      className={`relative text-[#EEEEEE] w-full ${showProfile ? 'bg-gradient-to-b from-[#222831] to-[#2a3038] min-h-screen flex items-center justify-center' : 'bg-transparent'}`}
      initial={{ borderRadius: "0rem" }}
      animate={{ borderRadius: showProfile ? "2rem" : "0rem" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className={`container mx-auto px-6 max-w-6xl text-center transition-all duration-500 ${showProfile ? 'py-10 md:py-16' : 'py-20'}`}> {/* Added max-w-6xl here */}
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
const CollapsedHero: React.FC<{ onToggle: () => void; t: TranslationFunction }> = ({ onToggle, t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center"
  >
    <motion.div layoutId="profile-picture" className="relative w-32 h-32 mb-6">
      <Image src="/usages/pfp.jpg" alt="Harentsoa" layout="fill" objectFit="cover" className="rounded-full shadow-lg border-2 border-[#76ABAE]" priority />
    </motion.div>
    <motion.h1 layoutId="hero-title" className="text-4xl md:text-6xl font-bold text-[#EEEEEE] mb-4">
      {t('Hero.greeting')} <span className="text-[#76ABAE]">Harentsoa</span>.
    </motion.h1>
    <motion.div layoutId="hero-subtitle" className="text-xl md:text-2xl text-[#EEEEEE]/80 mb-8 h-8">
      <TypeAnimation sequence={[t('Hero.role1'), 2000, t('Hero.role2'), 2000, t('Hero.role3'), 2000]} wrapper="span" cursor={true} repeat={Infinity} />
    </motion.div>
    <motion.button
      layoutId="hero-button"
      onClick={onToggle}
      className="relative overflow-hidden bg-gradient-to-r from-[#76ABAE] to-[#a4d4d6] text-[#222831] px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ease-out flex items-center gap-2 shadow-lg hover:shadow-xl hover:from-[#a4d4d6] hover:to-[#76ABAE] group"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{t('Hero.learnMore')}</span>
      <motion.span
        className="relative z-10 ml-1"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        whileHover={{ y: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <FiChevronDown />
      </motion.span>
      <motion.span
        className="absolute inset-0 bg-white opacity-0 rounded-full"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.5, opacity: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.button>
  </motion.div>
);

// --- EXPANDED PROFILE ---
const ExpandedProfile: React.FC<{ onToggle: () => void; t: TranslationFunction }> = ({ onToggle, t }) => (
  <div className="relative flex items-center justify-center min-h-[60vh] py-8">
    {/* Subtle animated gradient or SVG background for extra polish */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Removed animate-pulse-slow for minimal animations */}
      <div className="w-full h-full bg-gradient-to-tr from-[#76ABAE]/10 via-[#31363F]/20 to-[#222831]/30 rounded-3xl blur-2xl" />
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative z-10 p-8 lg:p-12 bg-[#222831]/80 backdrop-blur-xl border border-[#76ABAE]/30 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-10 lg:gap-x-12 max-w-6xl w-full"
      style={{ boxShadow: '0 12px 40px 0 rgba(34, 40, 49, 0.4)' }}
    >
      <button onClick={onToggle} className="absolute top-4 right-4 text-[#76ABAE]/70 hover:text-[#EEEEEE] transition-colors z-20 p-2 rounded-full bg-[#31363F]/70 hover:bg-[#31363F] hover:scale-110">
        <FiX size={28} />
      </button>
      {/* Colonne Gauche - Photo & Liens */}
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
      <motion.div
        className="w-full lg:w-7/12 text-left border-t lg:border-t-0 lg:border-l border-[#76ABAE]/20 pt-10 lg:pt-0 lg:pl-12"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
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
              <div className="w-full bg-[#31363F] rounded-full h-3">
                <motion.div className="bg-gradient-to-r from-[#76ABAE] to-[#a4d4d6] h-3 rounded-full" initial={{ width: 0 }} whileInView={{ width: `${lang.percentage}%` }} viewport={{ once: true }} transition={{ duration: 1.5, type: 'spring', delay: 0.5 + index * 0.2 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </div>
);