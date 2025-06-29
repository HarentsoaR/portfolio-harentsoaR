"use client";

import { Contact } from '@/components/Contact';
import { ProfileProvider } from '@/contexts/ProfileContext';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

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
    git: ['https://github.com/HarentsoaR/School-Management', 'https://github.com/HarentsoaR/School-ManagementAPI'],
  },
  {
    key: 'wineManagementApplication',
    descriptionKey: 'wineManagementApplicationDescription',
    image: '/vineyard.png',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'Hibernate', 'JPA', 'PostgreSQL'],
    git: ['https://github.com/HarentsoaR/Wine-Management'],
  },
  {
    key: 'personalPortfolioWebsite',
    descriptionKey: 'personalPortfolioWebsiteDescription',
    image: '/portfolio.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Next-intl'],
  },
  {
    key: 'carSalesManagementPlatform',
    descriptionKey: 'carSalesManagementPlatformDescription',
    image: '/carsales.jpeg',
    technologies: ['PHP', 'CSS', 'HTML', 'FPDF', 'Java'],
    git: ['https://github.com/HarentsoaR/car-sales-desktop', 'https://github.com/HarentsoaR/car-sales-management'],
  },
  {
    key: 'realTimeWeatherApplication',
    descriptionKey: 'realTimeWeatherApplicationDescription',
    image: '/weather.png',
    technologies: ['React Native', 'JavaScript', 'Tailwind CSS', 'API'],
    git: ['https://github.com/HarentsoaR/weatheractu'],
  },
  {
    key: 'scientificSocialNetwork',
    descriptionKey: 'scientificSocialNetworkDescription',
    image: '/socialNetwork.png',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'JWT', 'OAuth'],
    git: ['https://github.com/HarentsoaR/scimlgFrontend', 'https://github.com/HarentsoaR/scimlgBackend'],
  },
  {
    key: 'aiTrainingGeneration',
    descriptionKey: 'aiTrainingGenerationDescription',
    image: '/ai-training.png',
    technologies: ['Python', 'PyTorch', 'Machine Learning', 'Data Augmentation'],
    git: ['https://github.com/HarentsoaR/ai-training-generation'],
  },
  {
    key: 'carMusicParty',
    descriptionKey: 'carMusicPartyDescription',
    image: '/car-music-party.png',
    technologies: ['React Native', 'NextJs', 'Firebase', 'Socket.IO', 'API', 'Tailwind CSS'],
    git: ['https://github.com/HarentsoaR/car-music-party'],
  },
  {
    key: 'dentalPracticeManagementSystem',
    descriptionKey: 'dentalPracticeManagementSystemDescription',
    image: '/dentalcare.jpg',
    technologies: ['Figma', 'UX/UI Design', 'Swift', 'NuxtJs', 'MongoDB', 'Golang'],
    git: ['https://github.com/HarentsoaR/dentistNuxt', 'https://github.com/HarentsoaR/dentistApi', 'https://github.com/HarentsoaR/dentistSwift'],
  },
];

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <ProfileProvider>
      <div className="font-[family-name:var(--font-geist-sans)] bg-[#222831] text-[#EEEEEE]">
        <Header />
        <main className="pt-16">
          <HeroProfile />
          <section className="py-10 bg-[#31363F]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#76ABAE]">
                {t('featuredProjects')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.key}
                    title={t(project.key)}
                    description={t(project.descriptionKey)}
                    image={project.image}
                    technologies={project.technologies}
                    git={project.git}
                  />
                ))}
              </div>
            </div>
          </section>
          <Skills />
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ProfileProvider>
  );
}