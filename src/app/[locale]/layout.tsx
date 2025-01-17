import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import enMessages from '../../../messages/en.json';
import frMessages from '../../../messages/fr.json';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harentsoa RANDRIA',
  description: 'Generated by create next app',
};

// Define the messages type
type Messages = {
  en: typeof enMessages;
  fr: typeof frMessages;
};

const messages: Messages = {
  en: enMessages,
  fr: frMessages,
};

// Update the RootLayout function to match expected types
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Adjusting to expect a Promise
}) {
  const resolvedParams = await params; // Await the params

  // Validate the locale
  if (!['en', 'fr'].includes(resolvedParams.locale)) notFound();

  return (
    <html lang={resolvedParams.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={resolvedParams.locale} messages={messages[resolvedParams.locale as keyof Messages]}>
            <div className='flex-grow'>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
