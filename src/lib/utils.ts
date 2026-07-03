import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const products = [
  {
    id: 'collectra',
    name: 'Collectra',
    tagline: 'Organize and preserve your collections',
    description: 'Personal Collection Manager for Mac & Windows. Catalog vinyl records, cameras, books, hi-fi equipment, CDs, cassettes, and computers.',
    url: 'https://collectra.media-tech.ca',
    icon: '/products/collectra-icon.svg',
    themeColor: '#C89B3C',
    features: [
      '7 dedicated collection categories',
      'Statistics dashboard',
      'Import/Export support',
      '100% local storage'
    ],
    platforms: ['macOS', 'Windows'],
    price: '$29.99',
    badge: 'One-time purchase',
    category: 'collector' as const
  },
  {
    id: 'fetchera',
    name: 'Fetchera',
    tagline: 'Discover hidden treasures with confidence',
    description: 'iOS barcode scanner and market price checker. Scan items in real-time, check market prices, and avoid duplicates.',
    url: 'https://fetchera.media-tech.ca',
    icon: '/products/fetchera-icon.svg',
    themeColor: '#1668CC',
    features: [
      'Instant barcode scanning',
      'Real-time price checking',
      'Duplicate detection',
      'Discogs, eBay integration'
    ],
    platforms: ['iOS'],
    price: 'Free',
    badge: 'No subscription',
    category: 'collector' as const
  },
  {
    id: 'resontra',
    name: 'Rescontra',
    tagline: 'Your media ritual journal',
    description: 'iOS ritual journal for books, records, and art. Capture notes, excerpts, and reflections with a beautiful paper-like experience.',
    url: 'https://resontra.media-tech.ca',
    icon: '/products/resontra-icon.svg',
    themeColor: '#6B3A2A',
    features: [
      'Ritual sessions with mood tracking',
      'Three-chapter structure',
      'Apple Pencil support',
      'Combination lock protection'
    ],
    platforms: ['iOS'],
    price: '$9.99',
    badge: '7-day free trial',
    category: 'collector' as const
  },
  {
    id: 'bam',
    name: 'BAM',
    tagline: 'AI-powered literature discovery',
    description: 'AI-powered bio-agri-med literature discovery tool for researchers in biology, agriculture, and medicine.',
    url: 'https://bam.media-tech.ca',
    icon: '/products/bam-icon.svg',
    themeColor: '#1a3a5c',
    features: [
      'Multi-database search',
      'AI review generation',
      'Full-text translation',
      'Export to Word/Excel'
    ],
    platforms: ['macOS', 'Windows'],
    price: 'From $12.99 CAD',
    badge: '14-day free trial',
    category: 'research' as const
  }
] as const;