'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'products', href: `/${locale}/products` },
    { key: 'blog', href: `/${locale}/blog` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'subscribe', href: `/${locale}/subscribe` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">
            {t('brand')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-neutral-600 hover:text-primary transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-2 text-neutral-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}