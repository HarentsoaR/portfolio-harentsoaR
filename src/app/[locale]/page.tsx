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
                    gitUrls={project.gitUrls}
                    liveUrl={project.liveUrl}
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