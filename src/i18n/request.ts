import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Define the allowed locales type based on the routing configuration
type AllowedLocale = typeof routing.locales[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale as AllowedLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});

