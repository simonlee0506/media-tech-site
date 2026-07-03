import { useTranslations } from 'next-intl';
import { products } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';

export default function ProductsPage() {
  const t = useTranslations('products');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-dark via-primary to-secondary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                {/* Header */}
                <div
                  className="p-8"
                  style={{ backgroundColor: `${product.themeColor}15` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                      <p className="text-lg text-neutral-600">{product.tagline}</p>
                    </div>
                    {product.badge && (
                      <span
                        className="px-4 py-2 rounded-full text-sm font-medium"
                        style={{ backgroundColor: product.themeColor, color: 'white' }}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-neutral-700 mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                      {t('features')}
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: product.themeColor }}
                          />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms & Price */}
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <span className="font-semibold">{t('platforms')}:</span>
                        <span>{product.platforms.join(', ')}</span>
                      </div>
                      {product.price && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{t('price')}:</span>
                          <span
                            className="text-2xl font-bold"
                            style={{ color: product.themeColor }}
                          >
                            {product.price}
                          </span>
                        </div>
                      )}
                    </div>

                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
                      style={{ backgroundColor: product.themeColor, color: 'white' }}
                    >
                      {t('visitSite')}
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}