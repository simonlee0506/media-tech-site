import { useTranslations } from 'next-intl';
import { products } from '@/lib/utils';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function ProductsGrid() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('productsTitle')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}