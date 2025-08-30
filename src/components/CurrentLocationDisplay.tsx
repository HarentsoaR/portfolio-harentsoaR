"use client";

import React from 'react';
import { useGeolocation } from '@/hooks/useGeolocation';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface CurrentLocationDisplayProps {
  variants: any; // Framer Motion variants for animation
}

export const CurrentLocationDisplay: React.FC<CurrentLocationDisplayProps> = ({ variants }) => {
  const { latitude, longitude, error, isLoading } = useGeolocation();
  const t = useTranslations('Contact');

  let content;
  if (isLoading) {
    content = t('loadingLocation');
  } else if (error) {
    content = t('locationError') + `: ${error}`;
  } else if (latitude !== null && longitude !== null) {
    content = `${t('currentLocation')}: Lat ${latitude.toFixed(4)}, Lng ${longitude.toFixed(4)}`;
  } else {
    content = t('locationNotAvailable');
  }

  return (
    <motion.div
      className="flex items-center gap-4 text-white/80"
      variants={variants}
    >
      <div className="bg-white/10 p-3 rounded-full border border-white/20 text-[#76ABAE]">
        <FaMapMarkerAlt />
      </div>
      <span>{content}</span>
    </motion.div>
  );
};