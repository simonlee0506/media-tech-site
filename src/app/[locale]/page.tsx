import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import ProductsGrid from '@/components/product/ProductsGrid';
import Ecosystem from '@/components/sections/Ecosystem';
import BlogPreview from '@/components/blog/BlogPreview';
import SubscribeSection from '@/components/sections/SubscribeSection';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductsGrid />
      <Ecosystem />
      <BlogPreview />
      <SubscribeSection />
    </div>
  );
}