"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LocalSwitcherProps {
  className?: string;
}

export default function LocalSwitcher({ className }: LocalSwitcherProps) {
  const [, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
      setIsOpen(false); // Close the dropdown after selection
    });
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
    exit: { opacity: 0, y: -10, scale: 0.95 }
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        className='bg-[#31363F] text-[#EEEEEE] flex items-center px-3 py-2 rounded-full hover:bg-[#76ABAE] hover:text-[#222831] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#76ABAE]/50'
        onClick={() => setIsOpen(prev => !prev)}
      >
        <Image
          src={localActive === 'fr' ? "/usages/france.png" : "/usages/united-kingdom.png"}
          alt="Language Flag"
          width={20}
          height={20}
          className="rounded-full mr-2 border border-white/20"
        />
        <span className="uppercase font-medium">{localActive}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2"
        >
          &#9660; {/* Down arrow */}
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className='absolute right-0 mt-2 bg-[#31363F] rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto w-full min-w-[120px] border border-[#76ABAE]/30'
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <li onClick={() => onSelectChange('en')} className='flex items-center p-3 cursor-pointer hover:bg-[#76ABAE] hover:text-[#222831] transition-colors duration-200 rounded-t-lg whitespace-nowrap'>
              <Image src="/usages/united-kingdom.png" alt="English Flag" width={20} height={20} className="rounded-full mr-2 border border-white/20" />
              <span className='text-[#EEEEEE] group-hover:text-[#222831]'>English</span>
            </li>
            <li onClick={() => onSelectChange('fr')} className='flex items-center p-3 cursor-pointer hover:bg-[#76ABAE] hover:text-[#222831] transition-colors duration-200 rounded-b-lg whitespace-nowrap'>
              <Image src="/usages/france.png" alt="French Flag" width={20} height={20} className="rounded-full mr-2 border border-white/20" />
              <span className='text-[#EEEEEE] group-hover:text-[#222831]'>Français</span>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}