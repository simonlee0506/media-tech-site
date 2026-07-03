import { redirect } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n';

export default function RootLayout() {
  redirect(`/${defaultLocale}`);
}