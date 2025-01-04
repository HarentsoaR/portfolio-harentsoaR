'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function LocalSwitcher() {
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

  return (
    <div className='relative inline-block'>
      <button
        className='border rounded bg-gray-800 text-white flex items-center'
        onClick={() => setIsOpen(prev => !prev)}
      >
        <Image
          src={localActive === 'fr' ? "/usages/france.png" : "/usages/united-kingdom.png"}
          alt="Language Flag"
          width={20}
          height={20}
          className="rounded-full mr-2"
        />
        <span>{localActive === 'fr' ? 'fr' : 'en'}</span>
      </button>
      {isOpen && (
        <ul className='absolute left-0 mt-1 bg-gray-800 rounded shadow-lg z-10'>
          <li onClick={() => onSelectChange('en')} className='flex items-center p-2 cursor-pointer hover:bg-gray-700 transition'>
            <Image
              src="/usages/united-kingdom.png"
              alt="English"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <span className='text-white'>en</span>
          </li>
          <li onClick={() => onSelectChange('fr')} className='flex items-center p-2 cursor-pointer hover:bg-gray-700 transition'>
            <Image
              src="/usages/france.png"
              alt="French"
              width={20}
              height={20}
              className="rounded-full mr-2"
            />
            <span className='text-white'>fr</span>
          </li>
        </ul>
      )}
    </div>
  );
}
