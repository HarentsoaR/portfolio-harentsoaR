import Link from 'next/link';
import { motion } from 'framer-motion';
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
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className="bg-[#222831] text-[#EEEEEE] font-[family-name:var(--font-geist-sans)]">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#76ABAE]">
          {t('portfolio')}
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            className="text-[#76ABAE] focus:outline-none"
          >
            {/* Hamburger Icon */}
            {isMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
        <ul className={`md:flex md:space-x-4 space-y-2 md:space-y-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <LocalSwitcher />
          </li>
          {['Home', 'Career', 'Contact'].map((item) => (
            <motion.li key={item} className="flex">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className={`transition-colors font-medium ${
                    pathname === `/${item.toLowerCase()}` ? 'text-[#76ABAE]' : 'text-[#EEEEEE] hover:text-[#76ABAE]'
                  }`}
                >
                  {t(item.toLowerCase())}
                </button>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
