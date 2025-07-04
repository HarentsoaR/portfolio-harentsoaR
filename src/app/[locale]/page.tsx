"use client";

import { Contact } from '@/components/Contact';
import { ProfileProvider } from '@/contexts/ProfileContext';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Career } from '@/components/Career';

const HeroProfile = dynamic(() => import('@/components/HeroProfile').then(module => ({ default: module.HeroProfile })), { ssr: false });
const ProjectCard = dynamic(() => import('@/components/ProjectCard').then(module => ({ default: module.ProjectCard })), { ssr: false });
const Skills = dynamic(() => import('@/components/Skills').then(module => ({ default: module.Skills })), { ssr: false });
const Header = dynamic(() => import('@/components/Header').then(module => ({ default: module.Header })), { ssr: false });

const projects = [
  {
    key: 'schoolManagementSystem',
    descriptionKey: 'schoolManagementSystemDescription',
    image: '/school.png',
    technologies: ['React', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker'],
    gitUrls: [{ label: 'School-Management', url: 'https://github.com/HarentsoaR/School-Management' }, { label: 'School-ManagementAPI', url: 'https://github.com/HarentsoaR/School-ManagementAPI' }],
  },
  {
    key: 'wineManagementApplication',
    descriptionKey: 'wineManagementApplicationDescription',
    image: '/vineyard.png',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'Hibernate', 'JPA', 'PostgreSQL'],
    gitUrls: [{ label: 'Wine-Management', url: 'https://github.com/HarentsoaR/Wine-Management' }],
  },
  {
    key: 'personalPortfolioWebsite',
    descriptionKey: 'personalPortfolioWebsiteDescription',
    image: '/portfolio.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Next-intl'],
    liveUrl: 'https://www.harentsoa.com',
  },
  {
    key: 'carSalesManagementPlatform',
    descriptionKey: 'carSalesManagementPlatformDescription',
    image: '/carsales.jpeg',
    technologies: ['PHP', 'CSS', 'HTML', 'FPDF', 'Java'],
    gitUrls: [{ label: 'Car Sales Desktop', url: 'https://github.com/HarentsoaR/car-sales-desktop' }, { label: 'Car Sales Management', url: 'https://github.com/HarentsoaR/car-sales-management' }],
  },
  {
    key: 'realTimeWeatherApplication',
    descriptionKey: 'realTimeWeatherApplicationDescription',
    image: '/weather.png',
    technologies: ['React Native', 'JavaScript', 'Tailwind CSS', 'API'],
    gitUrls: [{ label: 'Weather App', url: 'https://github.com/HarentsoaR/weatheractu' }],
  },
  {
    key: 'scientificSocialNetwork',
    descriptionKey: 'scientificSocialNetworkDescription',
    image: '/socialNetwork.png',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'JWT', 'OAuth'],
    gitUrls: [{ label: 'Frontend', url: 'https://github.com/HarentsoaR/scimlgFrontend' }, { label: 'Backend', url: 'https://github.com/HarentsoaR/scimlgBackend' }],
  },
  {
    key: 'aiTrainingGeneration',
    descriptionKey: 'aiTrainingGenerationDescription',
    image: '/ai-training.png',
    technologies: ['Python', 'PyTorch', 'Machine Learning', 'Data Augmentation'],
    gitUrls: [{ label: 'AI Training', url: 'https://github.com/HarentsoaR/ai-training-generation' }],
  },
  {
    key: 'carMusicParty',
    descriptionKey: 'carMusicPartyDescription',
    image: '/car-music-party.png',
    technologies: ['React Native', 'NextJs', 'Firebase', 'Socket.IO', 'API', 'Tailwind CSS'],
    gitUrls: [{ label: 'CarMusicParty', url: 'https://github.com/HarentsoaR/car-music-party' }],
  },
  {
    key: 'dentalPracticeManagementSystem',
    descriptionKey: 'dentalPracticeManagementSystemDescription',
    image: '/dentalcare.jpg',
    technologies: ['Figma', 'UX/UI Design', 'Swift', 'NuxtJs', 'MongoDB', 'Golang'],
    gitUrls: [{ label: 'Dentist Nuxt', url: 'https://github.com/HarentsoaR/dentistNuxt' }, { label: 'Dentist API', url: 'https://github.com/HarentsoaR/dentistApi' }, { label: 'Dentist Swift', url: 'https://github.com/HarentsoaR/dentistSwift' }],
  },
];

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <ProfileProvider>
      <div className="font-[family-name:var(--font-geist-sans)] bg-[#222831] text-[#EEEEEE] scroll-smooth">
        <Header />
        <main className="pt-16">
          {/* HERO SECTION */}
          <motion.section
            id="hero"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#222831] to-[#31363F] relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroProfile />
            {/* Optionally, add a subtle animated background here */}
          </motion.section>

          {/* CAREER SECTION */}
          <motion.section
            id="career"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Career />
          </motion.section>

          {/* SKILLS SECTION */}
          <motion.section
            id="skills"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Skills />
          </motion.section>

          {/* PROJECTS SECTION */}
          <motion.section
            id="projects"
            className="py-20 bg-[#31363F]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#76ABAE]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t('featuredProjects')}
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
              >
                {projects.map((project, idx) => (
                  <motion.div
                    key={project.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <ProjectCard
                      title={t(project.key)}
                      description={t(project.descriptionKey)}
                      image={project.image}
                      technologies={project.technologies}
                      gitUrls={project.gitUrls}
                      liveUrl={project.liveUrl}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* CONTACT SECTION */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.section>
        </main>
        <Footer />
      </div>
    </ProfileProvider>
  );
}