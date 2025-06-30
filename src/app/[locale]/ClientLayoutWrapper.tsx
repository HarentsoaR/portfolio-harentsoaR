'use client';

import { NextIntlClientProvider } from 'next-intl';
import { AppWrapper } from '@/components/AppWrapper';
import React from 'react';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  locale: string;
  messages: any; // Use a more specific type if possible, e.g., Record<string, string>
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