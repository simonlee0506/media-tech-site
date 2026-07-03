import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t('brand')}</h3>
            <p className="text-neutral-400 mb-4">
              Thoughtful software for collectors, creators, and researchers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-neutral-400 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-neutral-400 hover:text-white transition-colors">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-neutral-400 hover:text-white transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-neutral-400 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <Link href={`/${locale}/support`} className="text-neutral-400 hover:text-white transition-colors">
                  {t('support')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}