'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './LoadingScreen';
import { ScrollToTopButton } from './ScrollToTopButton'; // Import the new component

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        {children}
      </div>
      <ScrollToTopButton /> {/* Render the ScrollToTopButton */}
    </>
  );
};