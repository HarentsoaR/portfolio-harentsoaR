'use client';

import { NextIntlClientProvider } from 'next-intl';
import { AppWrapper } from '@/components/AppWrapper';
import React from 'react';
import { AbstractIntlMessages } from 'next-intl'; // Import AbstractIntlMessages

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages; // Changed from any to AbstractIntlMessages
  timeZone: string;
}

export const ClientLayoutWrapper: React.FC<ClientLayoutWrapperProps> = ({
  children,
  locale,
  messages,
  timeZone,
}) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <AppWrapper>{children}</AppWrapper>
    </NextIntlClientProvider>
  );
};