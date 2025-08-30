import { useState, useEffect, useCallback } from 'react';

export const useActiveSection = (sectionIds: string[], offset: number = 0) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const getActiveSection = useCallback(() => {
    let currentActive = '';
    const scrollY = window.scrollY + offset;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const sectionId = sectionIds[i];
      const element = document.getElementById(sectionId); // sectionIds should already be clean IDs
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentActive = sectionId;
          break;
        }
      }
    }
    setActiveSection(currentActive);
  }, [sectionIds, offset]);

  useEffect(() => {
    getActiveSection(); // Set initial active section on mount

    let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(getActiveSection, 100); // Throttle scroll events
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [getActiveSection]);

  return activeSection;
};