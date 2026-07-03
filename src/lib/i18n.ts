import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
export const locales = ['en', 'fr', 'zh'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ locale }: { locale?: string }) => {
  // Ensure locale is defined
  const currentLocale = locale || defaultLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(currentLocale as any)) notFound();

  return {
    messages: (await import(`../locales/${currentLocale}.json`)).default,
    locale: currentLocale,
  };
});