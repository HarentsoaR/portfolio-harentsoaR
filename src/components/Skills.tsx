import { motion } from 'framer-motion';
import React from 'react'; // Indispensable en TSX
import { categorizedSkills, SkillCategory } from '../data/skills'; // Adaptez le chemin
import { useTranslations } from 'next-intl'; // Import useTranslations

// Définition des animations pour Framer Motion (pas de changement ici)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Skills: React.FC = () => {
  const t = useTranslations('SkillsPage'); // Initialize useTranslations with a namespace
  // TypeScript sait que "categorizedSkills" est de type Record<SkillCategory, Skill[]>
  // Mais Object.keys retourne un string[]. On le caste pour plus de sûreté.
  const categories = Object.keys(categorizedSkills) as SkillCategory[];

  return (
    <section id="skills" className="py-20 bg-[#222831] text-[#EEEEEE]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-[#EEEEEE]">
            {t('titlePart1')} {' '}
            <span className="text-[#76ABAE]">{t('titlePart2')}</span>
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-[#EEEEEE]/80">
            {t('description')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#76ABAE] border-b-2 border-[#76ABAE]/30 pb-2">
                {t(category)}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {categorizedSkills[category].map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group bg-[#31363F] rounded-lg p-4 flex flex-col items-center justify-center gap-4 shadow-lg transition-all duration-300 hover:bg-[#76ABAE] hover:shadow-xl hover:-translate-y-2"
                    variants={itemVariants}
                  >
                    <div className="text-[#76ABAE] group-hover:text-[#222831] transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-md font-medium text-center text-[#EEEEEE] group-hover:text-[#222831] transition-colors duration-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
