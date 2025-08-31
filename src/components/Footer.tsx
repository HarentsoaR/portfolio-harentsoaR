'use client';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-[#222831] text-[#EEEEEE] py-6">
      <div className="container mx-auto px-6 max-w-6xl"> {/* Added max-w-6xl here */}
        <p className="font-light">&copy; {new Date().getFullYear()} {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
}