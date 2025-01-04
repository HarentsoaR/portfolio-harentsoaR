'use client';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer'); // Use the appropriate namespace for translations

  return (
    <footer className="bg-[#222831] text-[#EEEEEE] py-6 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-6 text-center">
        <p className="font-light">&copy; {new Date().getFullYear()} {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
}
