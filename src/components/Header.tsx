import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { scrollToElement } from '@/utils/scrollUtils';
import LocalSwitcher from './local-switcher';
import { useTranslations } from 'next-intl';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === '/contact') {
      scrollToElement('contact');
    }
  }, [pathname]);

  const handleNavigation = (path: string) => {
    if (path === '/home') {
      router.push('/');
    } else if (path === '/contact') {
      scrollToElement('contact');
    } else {
      router.push(path);
    }
    setIsMenuOpen(false);
  };

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  };

  return (
    <header className="bg-[#222831] text-[#EEEEEE] font-[family-name:var(--font-geist-sans)] fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#76ABAE]">
            {t('portfolio')}
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="text-[#76ABAE] focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <ul className="hidden md:flex md:space-x-4 items-center">
            {['Home', 'Career', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className={`transition-colors font-medium ${
                    pathname === `/${item.toLowerCase()}` ? 'text-[#76ABAE]' : 'text-[#EEEEEE] hover:text-[#76ABAE]'
                  }`}
                >
                  {t(item.toLowerCase())}
                </button>
              </motion.li>
            ))}
            <li>
              <LocalSwitcher />
            </li>
          </ul>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 right-0 bg-[#222831] shadow-lg"
            >
              <ul className="flex flex-col items-center py-4 space-y-4">
                {['Home', 'Career', 'Contact'].map((item) => (
                  <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                      className={`transition-colors font-medium ${
                        pathname === `/${item.toLowerCase()}` ? 'text-[#76ABAE]' : 'text-[#EEEEEE] hover:text-[#76ABAE]'
                      }`}
                    >
                      {t(item.toLowerCase())}
                    </button>
                  </motion.li>
                ))}
                <li>
                  <LocalSwitcher />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
