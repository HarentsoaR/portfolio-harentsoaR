// src/data/skills.ts (ou où que vous mettiez vos données)

import React, { ReactNode } from 'react';
import {
  SiPhp, SiCodeigniter, SiJavascript, SiReact, SiNextdotjs, SiNestjs,
  SiSpringboot, SiPostgresql, SiMysql, SiGit, SiJsonwebtokens,
  SiAuth0, SiApollographql, SiTailwindcss, SiCss3, SiHtml5, SiMongodb, SiSqlite, SiFirebase, SiGo, SiNuxtdotjs, SiSwift,
  SiJira, SiKubernetes, SiKotlin, SiFigma // Ajout de Figma
} from 'react-icons/si';

// On définit un type pour les catégories pour éviter les fautes de frappe
export type SkillCategory = 'Backend' | 'Frontend' | 'Databases' | 'Tools & Concepts' | 'Mobile';

// On définit l'interface pour un seul objet "Skill"
export interface Skill {
  name: string;
  icon: ReactNode; // L'icône est un noeud React
  category: SkillCategory;
}

// On type notre tableau de données avec l'interface "Skill"
export const skillsData: Skill[] = [
  // Backend
  { name: 'PHP', icon: React.createElement(SiPhp, { className: 'h-8 w-8' }), category: 'Backend' },
  { name: 'CodeIgniter', icon: React.createElement(SiCodeigniter, { className: 'h-8 w-8' }), category: 'Backend' },
  { name: 'NestJS', icon: React.createElement(SiNestjs, { className: 'h-8 w-8' }), category: 'Backend' },
  { name: 'Java', icon: React.createElement(SiSpringboot, { className: 'h-8 w-8' }), category: 'Backend' }, // Springboot icon for Java is fine
  { name: 'Spring Boot', icon: React.createElement(SiSpringboot, { className: 'h-8 w-8' }), category: 'Backend' },
  { name: 'Go', icon: React.createElement(SiGo, { className: 'h-8 w-8' }), category: 'Backend' },
  
  // Frontend
  { name: 'JavaScript', icon: React.createElement(SiJavascript, { className: 'h-8 w-8' }), category: 'Frontend' },
  { name: 'React', icon: React.createElement(SiReact, { className: 'h-8 w-8' }), category: 'Frontend' },
  { name: 'Next.js', icon: React.createElement(SiNextdotjs, { className: 'h-8 w-8' }), category: 'Frontend' },
  { name: 'Nuxt.js', icon: React.createElement(SiNuxtdotjs, { className: 'h-8 w-8' }), category: 'Frontend' },
  { name: 'Tailwind CSS', icon: React.createElement(SiTailwindcss, { className: 'h-8 w-8' }), category: 'Frontend' },
  { name: 'CSS', icon: React.createElement(SiCss3, { className: 'h-8 w-8' }), category: 'Frontend' },
  { name: 'HTML', icon: React.createElement(SiHtml5, { className: 'h-8 w-8' }), category: 'Frontend' },

  // Databases
  { name: 'PostgreSQL', icon: React.createElement(SiPostgresql, { className: 'h-8 w-8' }), category: 'Databases' },
  { name: 'MySQL', icon: React.createElement(SiMysql, { className: 'h-8 w-8' }), category: 'Databases' },
  { name: 'MongoDB', icon: React.createElement(SiMongodb, { className: 'h-8 w-8' }), category: 'Databases' },
  { name: 'SQLite', icon: React.createElement(SiSqlite, { className: 'h-8 w-8' }), category: 'Databases' },
  { name: 'Firebase', icon: React.createElement(SiFirebase, { className: 'h-8 w-8' }), category: 'Databases' },
  
  // Mobile
  { name: 'SWIFT', icon: React.createElement(SiSwift, { className: 'h-8 w-8' }), category: 'Mobile' },
  { name: 'React Native', icon: React.createElement(SiReact, { className: 'h-8 w-8' }), category: 'Mobile' },
  { name: 'Kotlin', icon: React.createElement(SiKotlin, { className: 'h-8 w-8' }), category: 'Mobile' }, // Ajout de Kotlin
  
  // Tools & Concepts
  { name: 'Git', icon: React.createElement(SiGit, { className: 'h-8 w-8' }), category: 'Tools & Concepts' },
  { name: 'JWT', icon: React.createElement(SiJsonwebtokens, { className: 'h-8 w-8' }), category: 'Tools & Concepts' },
  { name: 'OAuth', icon: React.createElement(SiAuth0, { className: 'h-8 w-8' }), category: 'Tools & Concepts' },
  { name: 'API REST', icon: React.createElement(SiApollographql, { className: 'h-8 w-8' }), category: 'Tools & Concepts' },
  { name: 'JIRA', icon: React.createElement(SiJira, { className: 'h-8 w-8' }), category: 'Tools & Concepts' },
  { name: 'Kubernetes', icon: React.createElement(SiKubernetes, { className: 'h-8 w-8' }), category: 'Tools & Concepts' },
  { name: 'Figma', icon: React.createElement(SiFigma, { className: 'h-8 w-8' }), category: 'Tools & Concepts' } // Ajout de Figma
];

// On type l'objet final qui sera un Record (ou dictionnaire)
// Clé: une de nos catégories, Valeur: un tableau de Skills
export const categorizedSkills = skillsData.reduce((acc, skill) => {
  const { category } = skill;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(skill);
  return acc;
}, {} as Record<SkillCategory, Skill[]>); // On caste l'objet initial pour que TS comprenne sa forme finale