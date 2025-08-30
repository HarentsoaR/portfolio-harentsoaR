"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // Import useEffect
import { useTranslations } from 'next-intl';
import { useScroll } from '@/hooks/useScroll';
import { AnimatedHamburgerIcon } from './AnimatedHamburgerIcon';
import LocalSwitcher from './local-switcher';

const navItems = [
  { name: 'Home', path: '/#hero-profile-section' }, // Mis à jour pour correspondre à l'ID de la section
  { name: 'Career', path: '/#career' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
];

export function Header() {
  const pathname = usePathname();
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();
  const [activeHash, setActiveHash] = useState(''); // État pour stocker le hash actuel

  useEffect(() => {
    // Fonction pour mettre à jour activeHash basée sur window.location.hash
    const updateActiveHash = () => {
      setActiveHash(window.location.hash);
    };

    // Définir le hash initial
    updateActiveHash();

    // Écouter les changements de hash (par exemple, lors du défilement vers une ancre)
    window.addEventListener('hashchange', updateActiveHash);

    // Nettoyer l'écouteur d'événements
    return () => {
      window.removeEventListener('hashchange', updateActiveHash);
    };
  }, []); // Le tableau de dépendances vide signifie que cela s'exécute une fois au montage

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { when: "afterChildren" }
    }
  };

  const mobileLinkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-[#222831]/90 backdrop-blur-lg shadow-md' : 'py-4 bg-[#222831]'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#76ABAE] hover:opacity-80 transition-opacity">
            {t('portfolio')}
          </Link>
          
          {/* Menu Desktop */}
          <ul className="hidden md:flex md:space-x-2 items-center">
            {navItems.map((item) => {
              const itemHash = item.path.includes('#') ? '#' + item.path.split('#')[1] : '';
              let isActive = (activeHash === itemHash);

              // Cas spécial pour le lien 'Home' lorsque la page est chargée sans hash spécifique
              // et que le chemin correspond à la racine de la locale (ex: /en)
              const currentPathWithoutLocale = pathname.replace(/^\/(en|fr)/, '');
              if (item.name === 'Home' && activeHash === '' && currentPathWithoutLocale === '/') {
                isActive = true;
              }

              return (
                <li key={item.name} className="relative">
                  <Link href={item.path}
                    onClick={() => setIsMenuOpen(false)} // Ferme le menu mobile au clic
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-[#EEEEEE]' : 'text-[#EEEEEE]/70 hover:text-[#EEEEEE]'
                    }`}
                  >
                    {t(item.name.toLowerCase())}
                  </Link>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#76ABAE] rounded-full"
                      layoutId="active-pill"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
            <li className="ml-4">
              <LocalSwitcher />
            </li>
          </ul>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden flex items-center">
            <LocalSwitcher className="mr-4" /> {/* Déplacer le sélecteur ici pour le mobile */}
            <AnimatedHamburgerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="absolute left-0 top-0 w-full h-screen bg-[#222831] flex flex-col items-center justify-center md:hidden"
            >
              <ul className="flex flex-col items-center space-y-8">
                {navItems.map((item) => (
                  <motion.li key={item.name} variants={mobileLinkVariants}>
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-semibold text-[#EEEEEE] hover:text-[#76ABAE] transition-colors"
                    >
                      {t(item.name.toLowerCase())}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}