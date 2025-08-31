"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaLightbulb } from 'react-icons/fa';
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-[#31363F] p-8 rounded-lg shadow-xl border border-white/10 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#76ABAE] hover:text-[#222831] hover:shadow-2xl hover:-translate-y-2"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="text-[#76ABAE] group-hover:text-[#222831] mb-6 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#EEEEEE] group-hover:text-[#222831] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#EEEEEE]/80 group-hover:text-[#222831]/90 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  const t = useTranslations('ServicesSection');

  const services = [
    {
      icon: <FaLaptopCode size={48} />,
      titleKey: 'webDevelopmentTitle',
      descriptionKey: 'webDevelopmentDescription',
    },
    {
      icon: <FaMobileAlt size={48} />,
      titleKey: 'mobileDevelopmentTitle',
      descriptionKey: 'mobileDevelopmentDescription',
    },
    {
      icon: <FaCloud size={48} />,
      titleKey: 'backendApiDevelopmentTitle',
      descriptionKey: 'backendApiDevelopmentDescription',
    },
    {
      icon: <FaLightbulb size={48} />,
      titleKey: 'technicalConsultingTitle',
      descriptionKey: 'technicalConsultingDescription',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#222831] text-[#EEEEEE]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            {t('titlePart1')} <span className="text-[#76ABAE]">{t('titlePart2')}</span>
          </h2>
          <p className="text-lg text-center text-white/80 max-w-3xl mx-auto mb-16">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};