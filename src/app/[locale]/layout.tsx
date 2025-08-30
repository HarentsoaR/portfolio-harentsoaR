import { notFound } from 'next/navigation';
import { ClientLayoutWrapper } from './ClientLayoutWrapper';
import { getMessages, getTimeZone } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!['en', 'fr'].includes(locale)) notFound();

  const messages = await getMessages({ locale });
  const timeZone = await getTimeZone();

  return (
    <ClientLayoutWrapper locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </ClientLayoutWrapper>
  );
}