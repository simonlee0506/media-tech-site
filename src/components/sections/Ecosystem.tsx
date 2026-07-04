import { useTranslations } from 'next-intl';
import { ArrowRight, Link2, Zap, BookOpen } from 'lucide-react';

export default function Ecosystem() {
  const t = useTranslations('home');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('ecosystemTitle')}</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('ecosystemDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Collector Ecosystem */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">
              {t('ecosystem.title')}
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-collectra/10 rounded-xl p-6 border-2 border-collectra/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-collectra flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <span className="font-bold">{t('ecosystem.collectra')}</span>
                </div>
                <p className="text-sm text-neutral-600">Desktop archive</p>
              </div>
              <ArrowRight className="w-6 h-6 text-neutral-400" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-fetchera/10 rounded-xl p-6 border-2 border-fetchera/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-fetchera flex items-center justify-center text-white font-bold">
                    F
                  </div>
                  <span className="font-bold">{t('ecosystem.fetchera')}</span>
                </div>
                <p className="text-sm text-neutral-600">Field scanner</p>
              </div>
              <ArrowRight className="w-6 h-6 text-neutral-400" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 bg-resontra/10 rounded-xl p-6 border-2 border-resontra/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-resontra flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <span className="font-bold">{t('ecosystem.resontra')}</span>
                </div>
                <p className="text-sm text-neutral-600">Reflection journal</p>
              </div>
            </div>
          </div>

          {/* Research Ecosystem */}
          <div className="flex items-center justify-center">
            <div className="bg-bam/10 rounded-2xl p-8 border-2 border-bam/20 text-center max-w-sm">
              <div className="w-16 h-16 rounded-xl bg-bam flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                B
              </div>
              <h4 className="text-xl font-bold mb-2">{t('bam.title')}</h4>
              <p className="text-neutral-600">{t('bam.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}