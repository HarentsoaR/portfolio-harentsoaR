'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const educationData = [
  {
    degree: 'Master in Computer Science',
    institution: 'ENI (National School of Computer Science)',
    period: '2023 - 2025',
  },
  {
    degree: 'Bachelor in Computer Science',
    institution: 'ENI (National School of Computer Science at Fianarantsoa)',
    period: '2020 - 2023',
  },
  {
    degree: 'Baccalaureate Series D',
    institution: 'High School',
    period: 'Completed in 2019',
  },
]

const experienceData = [
  {
    position: 'Full Stack Developer',
    company: 'Beys Outsourcing Service',
    period: '2023',
    description: 'Developed full-stack applications using ReactJS, NodeJS, and PHP.',
  },
  {
    position: 'CodeIgniter 4 Developer',
    company: 'ONE (National Office for the Environment)',
    period: '2022',
    description: 'Worked on environmental management systems using CodeIgniter 4 framework.',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Career() {
  return (
    <div className="min-h-screen flex flex-col bg-[#222831] text-[#EEEEEE]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold text-[#76ABAE] mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         Development experience
        </motion.h1>

        <motion.section 
          className="mb-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-semibold text-[#76ABAE] mb-6">Education</h2>
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              className="mb-8 bg-[#31363F] p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-[#76ABAE]">{edu.degree}</h3>
              <p className="text-[#EEEEEE] mt-2">{edu.institution}</p>
              <p className="text-sm text-[#EEEEEE] mt-1">{edu.period}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-semibold text-[#76ABAE] mb-6">Professional Experience</h2>
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index} 
              className="mb-8 bg-[#31363F] p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-[#76ABAE]">{exp.position}</h3>
              <p className="text-[#EEEEEE] mt-2">{exp.company}</p>
              <p className="text-sm text-[#EEEEEE] mt-1">{exp.period}</p>
              <p className="text-[#EEEEEE] mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

