"use client"
import { Hero } from '@/components/Hero'
import { ProfileSection } from '@/components/ProfileSection'
import { ProjectCard } from '@/components/ProjectCard'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
// import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const projects = [
  {
    title: 'School Management',
    description: 'A full-stack platform built with React and Spring Boot.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['React', 'Spring Security', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Wine Management ',
    description: 'A Wine management application developed for the production and the selling of Wine using Spring Boot and Thymeleaf.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf','Hibernate', 'JPA', 'PostgreSql'],
  },
  {
    title: 'Portfolio',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Carsales Management',
    description: 'Developed  with PHP, this application is a full-stack platform for managing carsales.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['PHP', 'CSS', 'HTML', 'Fpdf'],
  },
  {
    title: 'Weather application',
    description: 'A real time android mobile application to visualize the actual weather with prediction',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['ReactNative', 'Javascript', 'Tailwind CSS', 'API'],
  },
  {
    title: 'Social Network for scientific',
    description: 'A social network plateform for scientific',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['NextJs', 'NestJs', 'PostgreSQL', 'JWT', 'OAuth'],
  },
  {
    title: 'Windows Admninistration',
    description: 'This project is for windows administration',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['VirtualBox', 'Windows', 'CMD', 'PowerShell', 'Windows Server', 'Failover cluster'],
  },
  {
    title: 'Parallel and distributed programming',
    description: 'A project to  implement parallel and distributed programming by divising the task in each core of the CPUs',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['VirtualBox', 'C', 'Linux', 'OpenMPI', 'OpenMP'],
  },
  {
    title: 'Dentist Management',
    description: 'A project for simplifying the work of dentists by automating the process of patient registration, appointment scheduling, and billing',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Figma', 'UX/UI'],
  },
]

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-[#222831] text-[#EEEEEE]">
      {/* <Header /> */}
      <Hero />
      <ProfileSection />
      <section className="py-20 bg-[#31363F]">
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
  )
}

