// import { motion } from 'framer-motion'

// const skills = [
//   { name: 'PHP', level: 90 },
//   { name: 'CodeIgniter', level: 85 },
//   { name: 'JavaScript', level: 70 },
//   { name: 'React', level: 90 },
//   { name: 'Next.js', level: 85 },
//   { name: 'NestJS', level: 80 },
//   { name: 'Java', level: 85 },
//   { name: 'Spring Boot', level: 80 },
//   { name: 'PostgreSQL', level: 95 },
//   { name: 'MySQL', level: 90 },
//   { name: 'Git', level: 95 },
//   { name: 'JWT', level: 90 },
//   { name: 'OAuth', level: 75 },
//   { name: 'API', level: 95 },
//   { name: 'REST', level: 95 },
//   { name: 'Tailwind', level: 70 },
//   { name: 'CSS', level: 80 },
//   { name: 'HTML', level: 95 },
// ]

// export function Skills() {
//   return (
//     <section className="py-20 bg-[#222831] text-[#EEEEEE]">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#76ABAE]">Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skills.map((skill) => (
//             <motion.div
//               key={skill.name}
//               className="bg-[#31363F] rounded-lg p-4 shadow"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-lg font-semibold mb-2 text-[#76ABAE]">{skill.name}</h3>
//               <div className="w-full bg-[#EEEEEE] rounded-full h-2.5">
//                 <motion.div
//                   className="bg-[#76ABAE] h-2.5 rounded-full"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1, delay: 0.2 }}
//                   viewport={{ once: true }}
//                 ></motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
// src/components/Skills.tsx

import { motion } from 'framer-motion';
import React from 'react'; // Indispensable en TSX
import { categorizedSkills, SkillCategory } from '../data/skills'; // Adaptez le chemin

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
            Mes <span className="text-[#76ABAE]">Compétences</span>
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-[#EEEEEE]/80">
            Voici les technologies avec lesquelles j'aime travailler et sur lesquelles j'ai acquis une solide expérience au fil de mes projets.
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
                {category}
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
