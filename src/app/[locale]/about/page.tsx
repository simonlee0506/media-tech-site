import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-dark via-primary to-secondary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-primary">{t('mission')}</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t('missionDescription')}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('values')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('privacy')}</h3>
              <p className="text-neutral-600">{t('privacyDescription')}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('simplicity')}</h3>
              <p className="text-neutral-600">{t('simplicityDescription')}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t('quality')}</h3>
              <p className="text-neutral-600">{t('qualityDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary">{t('contact')}</h2>

          <div className="space-y-4">
            <div>
              <span className="font-semibold">{t('email')}:</span>{' '}
              <a href="mailto:hello@media-tech.ca" className="text-primary hover:underline">
                hello@media-tech.ca
              </a>
            </div>
            <div>
              <span className="font-semibold">{t('social')}:</span>{' '}
              <a href="https://github.com/simonlee0506" className="text-primary hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}