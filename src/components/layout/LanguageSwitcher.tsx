'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe, Check } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const currentLang = languages.find(lang => lang.code === locale);

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-primary transition-colors"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  switchLocale(lang.code);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
                {locale === lang.code && <Check size={16} className="ml-auto text-primary" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}