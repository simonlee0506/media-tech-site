import { Product } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { useTranslations } from 'next-intl';
import { ExternalLink, Download, Smartphone, Monitor } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations('common');
  const locale = useLocale();

  const getPlatformIcon = (platform: string) => {
    if (platform.includes('iOS') || platform.includes('macOS')) {
      return <Monitor className="w-4 h-4" />;
    }
    return <Monitor className="w-4 h-4" />;
  };

  return (
    <Card className="group hover:border-primary/50 transition-all hover:scale-105">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${product.themeColor}15` }}
          >
            <span className="text-2xl" style={{ color: product.themeColor }}>
              {product.name[0]}
            </span>
          </div>
          {product.badge && (
            <Badge variant={product.id as any}>{product.badge}</Badge>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-600 mb-4">{product.tagline}</p>

        {/* Platforms */}
        <div className="flex items-center gap-2 mb-4">
          {product.platforms.map((platform) => (
            <div key={platform} className="flex items-center gap-1 text-xs text-neutral-500">
              {getPlatformIcon(platform)}
              <span>{platform}</span>
            </div>
          ))}
        </div>

        {/* Features Preview */}
        <ul className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
              <span className="mt-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.themeColor }} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
          {product.price && (
            <span className="text-lg font-bold" style={{ color: product.themeColor }}>
              {product.price}
            </span>
          )}
          <Link
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
          >
            {t('visitWebsite')}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}