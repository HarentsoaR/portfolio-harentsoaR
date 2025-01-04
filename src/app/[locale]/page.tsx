"use client";

import { Hero } from '@/components/Hero';
import { ProfileSection } from '@/components/ProfileSection';
import { ProjectCard } from '@/components/ProjectCard';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { ProfileProvider } from '@/contexts/ProfileContext';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useTranslations } from 'next-intl';

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
    key: 'windowsAdministrationToolkit',
    descriptionKey: 'windowsAdministrationToolkitDescription',
    image: '/windowsAdmin.jpeg',
    technologies: ['VirtualBox', 'Windows', 'CMD', 'PowerShell', 'Windows Server', 'Failover Clustering'],
  },
  {
    key: 'parallelAndDistributedProgramming',
    descriptionKey: 'parallelAndDistributedProgrammingDescription',
    image: '/progpall.png',
    technologies: ['VirtualBox', 'C', 'Linux', 'OpenMPI', 'OpenMP'],
  },
  {
    key: 'dentalPracticeManagementSystem',
    descriptionKey: 'dentalPracticeManagementSystemDescription',
    image: '/dentalcare.jpg',
    technologies: ['Figma', 'UX/UI Design'],
  },
];

export default function Home() {
  const t = useTranslations('IndexPage'); // Move this inside the component

  return (
    <ProfileProvider>
      <Header />
      <div className="font-[family-name:var(--font-geist-sans)] bg-[#222831] text-[#EEEEEE]">
        <Hero />
        <ProfileSection />
        <section className="py-10 bg-[#31363F]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#76ABAE]">
              {t('featuredProjects')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <Contact />
        <Footer />
      </div>
    </ProfileProvider>
  );
}