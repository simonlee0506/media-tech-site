export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: string;
  themeColor: string;
  features: string[];
  platforms: string[];
  price?: string;
  badge?: string;
  category: 'collector' | 'research';
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  description: string;
  readTime: string;
  thumbnail?: string;
  content: string;
}

export type Locale = 'en' | 'fr' | 'zh';

export interface Translations {
  common: {
    [key: string]: string;
  };
  home: {
    [key: string]: string;
  };
  products: {
    [key: string]: string;
  };
  blog: {
    [key: string]: string;
  };
  about: {
    [key: string]: string;
  };
}