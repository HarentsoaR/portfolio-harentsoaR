"use client"
import { Hero } from '@/components/Hero'
import { ProfileSection } from '@/components/ProfileSection'
import { ProjectCard } from '@/components/ProjectCard'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { ProfileProvider } from '@/contexts/ProfileContext'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const projects = [
  {
    title: 'School Management System',
    description: 'An all-in-one platform designed for managing school operations, built with React for the frontend and Spring Boot for the backend.',
    image: '/school.png',
    technologies: ['React', 'Spring Security', 'PostgreSQL', 'Docker'],
    git: ['https://github.com/HarentsoaR/School-Management', 'https://github.com/HarentsoaR/School-ManagementAPI'],
  },
  {
    title: 'Wine Management Application',
    description: 'A comprehensive solution for wine production and sales, developed using Spring Boot and Thymeleaf for a seamless user experience.',
    image: '/vineyard.png',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'Hibernate', 'JPA', 'PostgreSQL'],
    git: ['https://github.com/HarentsoaR/Wine-Management'],
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive and visually appealing portfolio website created with Next.js and Tailwind CSS to showcase projects and skills.',
    image: '/portfolio.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Car Sales Management Platform',
    description: 'A full-stack application developed in PHP for managing car sales, featuring user-friendly interfaces and robust functionality.',
    image: '/carsales.jpeg',
    technologies: ['PHP', 'CSS', 'HTML', 'FPDF'],
    git: ['https://github.com/HarentsoaR/car-sales-desktop', 'https://github.com/HarentsoaR/car-sales-management'],
  },
  {
    title: 'Real-Time Weather Application',
    description: 'An Android mobile application that provides real-time weather updates and forecasts, developed with React Native.',
    image: '/weather.png',
    technologies: ['React Native', 'JavaScript', 'Tailwind CSS', 'API'],
    git: ['https://github.com/HarentsoaR/weatheractu'],
  },
  {
    title: 'Scientific Social Network',
    description: 'A dedicated social networking platform for scientists to connect, share, and collaborate, built with Next.js and NestJS.',
    image: '/socialNetwork.png',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'JWT', 'OAuth'],
    git: ['https://github.com/HarentsoaR/scimlgFrontend', 'https://github.com/HarentsoaR/scimlgBackend'],
  },
  {
    title: 'Windows Administration Toolkit',
    description: 'A project focused on tools and techniques for Windows system administration, including VirtualBox and PowerShell.',
    image: '/windowsAdmin.jpeg',
    technologies: ['VirtualBox', 'Windows', 'CMD', 'PowerShell', 'Windows Server', 'Failover Clustering'],
  },
  {
    title: 'Parallel and Distributed Programming',
    description: 'An implementation project that explores parallel and distributed programming by efficiently utilizing CPU cores.',
    image: '/progpall.png',
    technologies: ['VirtualBox', 'C', 'Linux', 'OpenMPI', 'OpenMP'],
  },
  {
    title: 'Dental Practice Management System',
    description: 'A project aimed at streamlining dental practice operations through automation of patient registration, appointment scheduling, and billing processes.',
    image: '/dentalcare.jpg',
    technologies: ['Figma', 'UX/UI Design'],
    // git: ['https://www.figma.com/design/SiAWjOn2OHhFpsSkiaWbEx/IHM-Dentist?node-id=0-1&t=MBixHZxVxuxZRBev-1']
  },
];

export default function Home() {
  return (
    <ProfileProvider>
      <Header />
      <div className="font-[family-name:var(--font-geist-sans)] bg-[#222831] text-[#EEEEEE]">
        <Hero />
        <ProfileSection />
        <section className="py-10 bg-[#31363F]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#76ABAE]">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ProfileProvider>
  )
}

