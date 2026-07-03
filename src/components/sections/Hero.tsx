import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-secondary-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-balance">
            {t('heroSubtitle')}
          </p>
          <Link href={`/${locale}/products`}>
            <Button size="lg" className="bg-white text-primary hover:bg-neutral-50">
              {t('heroCTA')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}