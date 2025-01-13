'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Loader } from '@/components/Loader';
import { useTranslations } from 'next-intl';

const educationData = [
  {
    degree: 'masterDegree',
    institution: 'eni',
    period: 'period2023',
  },
  {
    degree: 'bachelorDegree',
    institution: 'eni',
    period: 'period2020',
  },
  {
    degree: 'baccalaureate',
    institution: 'highSchool',
    period: 'completed2019',
  },
];

const experienceData = [
  {
    position: 'fullStackDeveloper',
    company: 'beysOutsourcing',
    period: 'position2023',
    description: 'fullStackDescription',
  },
  {
    position: 'codeIgniterDeveloper',
    company: 'oneEnvironment',
    period: 'position2022',
    description: 'codeIgniterDescription',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Career() {
  const t = useTranslations('Career');

  return (
    <div className="min-h-screen flex flex-col bg-[#222831] text-[#EEEEEE]">
      <Header />
        <main className="flex-grow container mx-auto px-4 py-20">
          <motion.h1 
            className="text-4xl font-bold text-[#76ABAE] mb-12 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('developmentExperience')}
          </motion.h1>

          <motion.section 
            className="mb-16"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-semibold text-[#76ABAE] mb-6">{t('education')}</h2>
            {educationData.map((edu, index) => (
              <motion.div 
                key={index} 
                className="mb-8 bg-[#31363F] p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-[#76ABAE]">{t(edu.degree)}</h3>
                <p className="text-[#EEEEEE] mt-2">{t(edu.institution)}</p>
                <p className="text-sm text-[#EEEEEE] mt-1">{t(edu.period)}</p>
              </motion.div>
            ))}
          </motion.section>

          <motion.section 
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-semibold text-[#76ABAE] mb-6">{t('professionalExperience')}</h2>
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index} 
                className="mb-8 bg-[#31363F] p-6 rounded-lg shadow-lg"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-[#76ABAE]">{t(exp.position)}</h3>
                <p className="text-[#EEEEEE] mt-2">{t(exp.company)}</p>
                <p className="text-sm text-[#EEEEEE] mt-1">{t(exp.period)}</p>
                <p className="text-[#EEEEEE] mt-3">{t(exp.description)}</p>
              </motion.div>
            ))}
          </motion.section>
        </main>
      <Footer />
    </div>
  );
}

