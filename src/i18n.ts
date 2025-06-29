import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Define supported locales
const locales = ['en', 'fr'];

export default getRequestConfig(async ({ locale }) => {
  // Ensure the locale is valid and not undefined
  if (!locale || !locales.includes(locale)) {
    notFound(); // Handle invalid or undefined locale
  }

  // Dynamically import the messages for the current locale
  const messages = await import(`../messages/${locale}.json`).catch(() => {
    notFound(); // Handle case where messages file doesn't exist
  });

  return {
    messages: messages.default, // Return the loaded messages
    locale: locale // Add the locale property here
  };
});
