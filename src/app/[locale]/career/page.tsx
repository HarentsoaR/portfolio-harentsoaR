// Your page.tsx for the career route

'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { TimelineItem } from '@/components/TimelineItem'; // Import the new component
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Import icons

const educationData = [
  { degree: 'masterDegree', institution: 'eni', period: 'period2023' },
  { degree: 'bachelorDegree', institution: 'eni', period: 'period2020' },
  { degree: 'baccalaureate', institution: 'highSchool', period: 'completed2019' },
];

const experienceData = [
  { position: 'fullStackDeveloper', company: 'beysOutsourcing', period: 'position2023', description: 'fullStackDescription' },
  { position: 'codeIgniterDeveloper', company: 'oneEnvironment', period: 'position2022', description: 'codeIgniterDescription' },
];

export default function Career() {
  const t = useTranslations('Career');

  return (
    <div className="min-h-screen flex flex-col bg-[#222831] text-[#EEEEEE]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-center text-white/80 max-w-3xl mx-auto mb-20">
            {t('pageSubtitle')}
          </p>
        </motion.div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative space-y-16">
          {/* The vertical line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-[#31363F] rounded-full" />
          
          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-semibold text-[#76ABAE] mb-12 text-center lg:text-left lg:pl-[calc(50%+4rem)]">
              {t('education')}
            </h2>
            {educationData.map((edu, index) => (
              <TimelineItem
                key={`edu-${index}`}
                side={index % 2 === 0 ? 'left' : 'right'}
                icon={<FaGraduationCap size={28} />}
                title={t(edu.degree)}
                subtitle={t(edu.institution)}
                period={t(edu.period)}
              />
            ))}
          </section>

          {/* Experience Section */}
          <section>
             <h2 className="text-3xl font-semibold text-[#76ABAE] mb-12 text-center lg:text-right lg:pr-[calc(50%+4rem)]">
              {t('professionalExperience')}
            </h2>
            {experienceData.map((exp, index) => (
              <TimelineItem
                key={`exp-${index}`}
                // Invert the starting side for visual variety
                side={(index + educationData.length) % 2 === 0 ? 'left' : 'right'}
                icon={<FaBriefcase size={28} />}
                title={t(exp.position)}
                subtitle={t(exp.company)}
                period={t(exp.period)}
                description={t(exp.description)}
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}