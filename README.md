# Media-Tech Website

Unified product showcase website for Media-Tech products.

## Products

- **[Collectra](https://collectra.media-tech.ca)** - Personal Collection Manager for Mac & Windows
- **[Fetchera](https://fetchera.media-tech.ca)** - iOS Barcode Scanner & Market Price Checker
- **[Rescontra](https://resontra.media-tech.ca)** - iOS Ritual Journal
- **[BAM Literature Assistant](https://bam.media-tech.ca)** - AI-Powered Literature Discovery Tool

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **UI Components**: Custom with Lucide React icons
- **Animations**: Framer Motion

## Features

- 🌍 Multi-language support (English, Français, 中文)
- 📱 Fully responsive design
- 🎨 Product-specific theming
- 📝 Blog system
- 📧 Newsletter subscription
- 🚀 Optimized for performance and SEO

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
src/
├── app/
│   ├── [locale]/              # Internationalized routes
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Homepage
│   │   ├── products/          # Products overview
│   │   ├── blog/              # Blog list and individual posts
│   │   ├── about/             # About page
│   │   ├── subscribe/         # Newsletter subscription
│   │   └── support/           # Support and FAQ
│   ├── layout.tsx             # Root layout (redirects to default locale)
│   ├── page.tsx               # Root page (redirects to default locale)
│   └── globals.css            # Global styles
├── components/
│   ├── layout/                # Header, Footer, LanguageSwitcher
│   ├── ui/                    # Reusable UI components
│   ├── product/               # Product-specific components
│   ├── blog/                  # Blog components
│   └── sections/              # Page sections
├── lib/
│   ├── i18n.ts                # Internationalization config
│   └── utils.ts               # Utility functions
├── locales/
│   ├── en.json                # English translations
│   ├── fr.json                # French translations
│   └── zh.json                # Chinese translations
└── types/
    └── index.ts               # TypeScript type definitions
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure custom domain `media-tech.ca`
4. Deploy!

### GitHub Pages

1. Build the project: `npm run build`
2. Configure GitHub Pages settings in repository
3. Add CNAME record for `media-tech.ca`

### Environment Variables

For production, you may need:

```
NEXT_PUBLIC_SITE_URL=https://media-tech.ca
```

## Adding Content

### Blog Posts

1. Create markdown files in `content/blog/`
2. Add frontmatter with title, date, tags, etc.
3. Files will be automatically processed

### Translations

Edit files in `src/locales/`:
- `en.json` - English
- `fr.json` - French
- `zh.json` - Chinese

## Customization

### Colors

Edit `tailwind.config.ts` to customize brand colors:

```typescript
colors: {
  primary: '#1E3A5F',
  secondary: '#3B82F6',
  collectra: '#C89B3C',
  fetchera: '#1668CC',
  bam: '#1a3a5c',
  resontra: '#6B3A2A',
}
```

### Products

Edit `src/lib/utils.ts` to add or modify products:

```typescript
export const products = [
  {
    id: 'your-product',
    name: 'Your Product',
    // ... other properties
  }
] as const;
```

## Support

For product-specific support, visit individual product websites:
- Collectra: https://collectra.media-tech.ca
- Fetchera: https://fetchera.media-tech.ca
- Rescontra: https://resontra.media-tech.ca
- BAM: https://bam.media-tech.ca

For general inquiries: hello@media-tech.ca

## License

© 2024 Media-Tech. All rights reserved.
