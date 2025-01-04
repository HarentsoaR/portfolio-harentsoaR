import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { scrollToElement } from '@/utils/scrollUtils';
import LocalSwitcher from './local-switcher';
import { useTranslations } from 'next-intl';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Header'); // Use the appropriate namespace for translations

  useEffect(() => {
    if (pathname === '/contact') {
      scrollToElement('contact');
    }
  }, [pathname]);

  const handleNavigation = (path: string) => {
    if (path === '/home') {
      router.push('/'); // Redirect to main route
    } else if (path === '/contact') {
      if (pathname === '/') {
        scrollToElement('contact');
      }
    } else {
      router.push(path);
    }
  };

  return (
    <header className="bg-[#222831] text-[#EEEEEE] font-[family-name:var(--font-geist-sans)]">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-[#76ABAE]">
              {t('portfolio')} {/* Use translation for Portfolio */}
            </Link>
          </li>
          <motion.li className="flex space-x-4">
            {['Home', 'Career', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className={`transition-colors font-medium ${
                    pathname === `/${item.toLowerCase()}` ? 'text-[#76ABAE]' : 'text-[#EEEEEE] hover:text-[#76ABAE]'
                  }`}
                >
                  {t(item.toLowerCase())} {/* Use translations for each item */}
                </button>
              </motion.div>
            ))}
            <LocalSwitcher />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
